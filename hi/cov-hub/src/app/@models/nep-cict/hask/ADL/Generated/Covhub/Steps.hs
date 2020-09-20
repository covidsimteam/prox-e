{-# LANGUAGE OverloadedStrings #-}
module ADL.Generated.Covhub.Steps(
    Step1(..),
    Step2(..),
    Step3(..),
    Step4(..),
    Step5(..),
    Step6(..),
    StepStats(..),
    mkStep1,
    mkStep2,
    mkStep3,
    mkStep4,
    mkStep5,
    mkStep6,
    mkStepStats,
) where

import ADL.Core
import Control.Applicative( (<$>), (<*>), (<|>) )
import Prelude( ($) )
import qualified Data.Aeson as JS
import qualified Data.HashMap.Strict as HM
import qualified Data.Int
import qualified Data.Proxy
import qualified Data.Text as T
import qualified Prelude

data Step1 = Step1
    { step1_coordinatorInitiated :: Prelude.Bool
    , step1_coordinatorSubmitted :: Prelude.Bool
    , step1_yellowCellsInititated :: Prelude.Bool
    , step1_yellowCellsUpdated :: [Prelude.Bool]
    , step1_yellowCellsFilled :: [Prelude.Bool]
    , step1_caseInvestigatorAssigned :: Prelude.Bool
    , step1_oneDayReached :: Prelude.Bool
    , step1_twoDaysReached :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep1 :: Prelude.Bool -> Prelude.Bool -> Prelude.Bool -> [Prelude.Bool] -> [Prelude.Bool] -> Prelude.Bool -> Prelude.Bool -> Prelude.Bool -> Step1
mkStep1 coordinatorInitiated coordinatorSubmitted yellowCellsInititated yellowCellsUpdated yellowCellsFilled caseInvestigatorAssigned oneDayReached twoDaysReached = Step1 coordinatorInitiated coordinatorSubmitted yellowCellsInititated yellowCellsUpdated yellowCellsFilled caseInvestigatorAssigned oneDayReached twoDaysReached

instance AdlValue Step1 where
    atype _ = "covhub.steps.Step1"
    
    jsonGen = genObject
        [ genField "coordinatorInitiated" step1_coordinatorInitiated
        , genField "coordinatorSubmitted" step1_coordinatorSubmitted
        , genField "yellowCellsInititated" step1_yellowCellsInititated
        , genField "yellowCellsUpdated" step1_yellowCellsUpdated
        , genField "yellowCellsFilled" step1_yellowCellsFilled
        , genField "caseInvestigatorAssigned" step1_caseInvestigatorAssigned
        , genField "oneDayReached" step1_oneDayReached
        , genField "twoDaysReached" step1_twoDaysReached
        ]
    
    jsonParser = Step1
        <$> parseField "coordinatorInitiated"
        <*> parseField "coordinatorSubmitted"
        <*> parseField "yellowCellsInititated"
        <*> parseField "yellowCellsUpdated"
        <*> parseField "yellowCellsFilled"
        <*> parseField "caseInvestigatorAssigned"
        <*> parseField "oneDayReached"
        <*> parseField "twoDaysReached"

data Step2 = Step2
    { step2_caseName :: T.Text
    , step2_caseSelected :: Prelude.Bool
    , step2_aFormInitiated :: Prelude.Bool
    , step2_aFormFilled :: Prelude.Bool
    , step2_yellowUpdateStarted :: Prelude.Bool
    , step2_stepStats :: StepStats
    , step2_yellowUpdateFinished :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep2 :: T.Text -> Prelude.Bool -> Prelude.Bool -> Prelude.Bool -> Prelude.Bool -> StepStats -> Prelude.Bool -> Step2
mkStep2 caseName caseSelected aFormInitiated aFormFilled yellowUpdateStarted stepStats yellowUpdateFinished = Step2 caseName caseSelected aFormInitiated aFormFilled yellowUpdateStarted stepStats yellowUpdateFinished

instance AdlValue Step2 where
    atype _ = "covhub.steps.Step2"
    
    jsonGen = genObject
        [ genField "caseName" step2_caseName
        , genField "caseSelected" step2_caseSelected
        , genField "aFormInitiated" step2_aFormInitiated
        , genField "aFormFilled" step2_aFormFilled
        , genField "yellowUpdateStarted" step2_yellowUpdateStarted
        , genField "stepStats" step2_stepStats
        , genField "yellowUpdateFinished" step2_yellowUpdateFinished
        ]
    
    jsonParser = Step2
        <$> parseField "caseName"
        <*> parseField "caseSelected"
        <*> parseField "aFormInitiated"
        <*> parseField "aFormFilled"
        <*> parseField "yellowUpdateStarted"
        <*> parseField "stepStats"
        <*> parseField "yellowUpdateFinished"

data Step3 = Step3
    { step3_contactTracer :: T.Text
    , step3_numberOfB1Forms :: Data.Int.Int16
    , step3_numberOfContacts :: Data.Int.Int16
    , step3_caseName :: T.Text
    , step3_caseSelected :: Prelude.Bool
    , step3_b1FormsInitiated :: [T.Text]
    , step3_b1FormsFilled :: [T.Text]
    , step3_yellowUpdateStarted :: Prelude.Bool
    , step3_stepStats :: StepStats
    , step3_yellowUpdateFinished :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep3 :: T.Text -> Data.Int.Int16 -> Data.Int.Int16 -> T.Text -> Prelude.Bool -> [T.Text] -> [T.Text] -> Prelude.Bool -> StepStats -> Prelude.Bool -> Step3
mkStep3 contactTracer numberOfB1Forms numberOfContacts caseName caseSelected b1FormsInitiated b1FormsFilled yellowUpdateStarted stepStats yellowUpdateFinished = Step3 contactTracer numberOfB1Forms numberOfContacts caseName caseSelected b1FormsInitiated b1FormsFilled yellowUpdateStarted stepStats yellowUpdateFinished

instance AdlValue Step3 where
    atype _ = "covhub.steps.Step3"
    
    jsonGen = genObject
        [ genField "contactTracer" step3_contactTracer
        , genField "numberOfB1Forms" step3_numberOfB1Forms
        , genField "numberOfContacts" step3_numberOfContacts
        , genField "caseName" step3_caseName
        , genField "caseSelected" step3_caseSelected
        , genField "b1FormsInitiated" step3_b1FormsInitiated
        , genField "b1FormsFilled" step3_b1FormsFilled
        , genField "yellowUpdateStarted" step3_yellowUpdateStarted
        , genField "stepStats" step3_stepStats
        , genField "yellowUpdateFinished" step3_yellowUpdateFinished
        ]
    
    jsonParser = Step3
        <$> parseField "contactTracer"
        <*> parseField "numberOfB1Forms"
        <*> parseField "numberOfContacts"
        <*> parseField "caseName"
        <*> parseField "caseSelected"
        <*> parseField "b1FormsInitiated"
        <*> parseField "b1FormsFilled"
        <*> parseField "yellowUpdateStarted"
        <*> parseField "stepStats"
        <*> parseField "yellowUpdateFinished"

data Step4 = Step4
    { step4_contactFollower :: T.Text
    , step4_fourteenDayCounter :: Data.Int.Int16
    , step4_numberOfB2Forms :: Data.Int.Int16
    , step4_numberOfContacts :: Data.Int.Int16
    , step4_caseName :: T.Text
    , step4_caseSelected :: Prelude.Bool
    , step4_b2FormsInitiated :: [T.Text]
    , step4_b2FormsFilled :: [T.Text]
    , step4_yellowUpdateStarted :: Prelude.Bool
    , step4_stepStats :: StepStats
    , step4_yellowUpdateFinished :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep4 :: T.Text -> Data.Int.Int16 -> Data.Int.Int16 -> Data.Int.Int16 -> T.Text -> Prelude.Bool -> [T.Text] -> [T.Text] -> Prelude.Bool -> StepStats -> Prelude.Bool -> Step4
mkStep4 contactFollower fourteenDayCounter numberOfB2Forms numberOfContacts caseName caseSelected b2FormsInitiated b2FormsFilled yellowUpdateStarted stepStats yellowUpdateFinished = Step4 contactFollower fourteenDayCounter numberOfB2Forms numberOfContacts caseName caseSelected b2FormsInitiated b2FormsFilled yellowUpdateStarted stepStats yellowUpdateFinished

instance AdlValue Step4 where
    atype _ = "covhub.steps.Step4"
    
    jsonGen = genObject
        [ genField "contactFollower" step4_contactFollower
        , genField "fourteenDayCounter" step4_fourteenDayCounter
        , genField "numberOfB2Forms" step4_numberOfB2Forms
        , genField "numberOfContacts" step4_numberOfContacts
        , genField "caseName" step4_caseName
        , genField "caseSelected" step4_caseSelected
        , genField "b2FormsInitiated" step4_b2FormsInitiated
        , genField "b2FormsFilled" step4_b2FormsFilled
        , genField "yellowUpdateStarted" step4_yellowUpdateStarted
        , genField "stepStats" step4_stepStats
        , genField "yellowUpdateFinished" step4_yellowUpdateFinished
        ]
    
    jsonParser = Step4
        <$> parseField "contactFollower"
        <*> parseField "fourteenDayCounter"
        <*> parseField "numberOfB2Forms"
        <*> parseField "numberOfContacts"
        <*> parseField "caseName"
        <*> parseField "caseSelected"
        <*> parseField "b2FormsInitiated"
        <*> parseField "b2FormsFilled"
        <*> parseField "yellowUpdateStarted"
        <*> parseField "stepStats"
        <*> parseField "yellowUpdateFinished"

data Step5 = Step5
    { step5_labPersonnel :: T.Text
    , step5_sixDayCounter :: Data.Int.Int16
    , step5_labFormFilled :: Prelude.Bool
    , step5_sampleCollected :: Prelude.Bool
    , step5_printed :: Prelude.Bool
    , step5_sentToLab :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep5 :: T.Text -> Data.Int.Int16 -> Prelude.Bool -> Prelude.Bool -> Prelude.Bool -> Prelude.Bool -> Step5
mkStep5 labPersonnel sixDayCounter labFormFilled sampleCollected printed sentToLab = Step5 labPersonnel sixDayCounter labFormFilled sampleCollected printed sentToLab

instance AdlValue Step5 where
    atype _ = "covhub.steps.Step5"
    
    jsonGen = genObject
        [ genField "labPersonnel" step5_labPersonnel
        , genField "sixDayCounter" step5_sixDayCounter
        , genField "labFormFilled" step5_labFormFilled
        , genField "sampleCollected" step5_sampleCollected
        , genField "printed" step5_printed
        , genField "sentToLab" step5_sentToLab
        ]
    
    jsonParser = Step5
        <$> parseField "labPersonnel"
        <*> parseField "sixDayCounter"
        <*> parseField "labFormFilled"
        <*> parseField "sampleCollected"
        <*> parseField "printed"
        <*> parseField "sentToLab"

data Step6 = Step6
    { step6_positive :: Prelude.Bool
    , step6_sevenDayCounter :: Data.Int.Int16
    , step6_contacts :: [T.Text]
    , step6_allNotified :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep6 :: Prelude.Bool -> Data.Int.Int16 -> [T.Text] -> Prelude.Bool -> Step6
mkStep6 positive sevenDayCounter contacts allNotified = Step6 positive sevenDayCounter contacts allNotified

instance AdlValue Step6 where
    atype _ = "covhub.steps.Step6"
    
    jsonGen = genObject
        [ genField "positive" step6_positive
        , genField "sevenDayCounter" step6_sevenDayCounter
        , genField "contacts" step6_contacts
        , genField "allNotified" step6_allNotified
        ]
    
    jsonParser = Step6
        <$> parseField "positive"
        <*> parseField "sevenDayCounter"
        <*> parseField "contacts"
        <*> parseField "allNotified"

data StepStats = StepStats
    { stepStats_sourcesOfInfection :: [T.Text]
    , stepStats_placesOfInfection :: [T.Text]
    , stepStats_numberOfContacts :: Data.Int.Int16
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStepStats :: [T.Text] -> [T.Text] -> Data.Int.Int16 -> StepStats
mkStepStats sourcesOfInfection placesOfInfection numberOfContacts = StepStats sourcesOfInfection placesOfInfection numberOfContacts

instance AdlValue StepStats where
    atype _ = "covhub.steps.StepStats"
    
    jsonGen = genObject
        [ genField "sourcesOfInfection" stepStats_sourcesOfInfection
        , genField "placesOfInfection" stepStats_placesOfInfection
        , genField "numberOfContacts" stepStats_numberOfContacts
        ]
    
    jsonParser = StepStats
        <$> parseField "sourcesOfInfection"
        <*> parseField "placesOfInfection"
        <*> parseField "numberOfContacts"