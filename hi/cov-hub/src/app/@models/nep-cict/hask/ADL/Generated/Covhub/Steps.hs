{-# LANGUAGE OverloadedStrings #-}
module ADL.Generated.Covhub.Steps(
    Step1(..),
    Step2(..),
    Step2Stats(..),
    Step3(..),
    Step4(..),
    mkStep1,
    mkStep2,
    mkStep2Stats,
    mkStep3,
    mkStep4,
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
    , step2_step2Stats :: Step2Stats
    , step2_yellowUpdateFinished :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep2 :: T.Text -> Prelude.Bool -> Prelude.Bool -> Prelude.Bool -> Prelude.Bool -> Step2Stats -> Prelude.Bool -> Step2
mkStep2 caseName caseSelected aFormInitiated aFormFilled yellowUpdateStarted step2Stats yellowUpdateFinished = Step2 caseName caseSelected aFormInitiated aFormFilled yellowUpdateStarted step2Stats yellowUpdateFinished

instance AdlValue Step2 where
    atype _ = "covhub.steps.Step2"
    
    jsonGen = genObject
        [ genField "caseName" step2_caseName
        , genField "caseSelected" step2_caseSelected
        , genField "aFormInitiated" step2_aFormInitiated
        , genField "aFormFilled" step2_aFormFilled
        , genField "yellowUpdateStarted" step2_yellowUpdateStarted
        , genField "step2Stats" step2_step2Stats
        , genField "yellowUpdateFinished" step2_yellowUpdateFinished
        ]
    
    jsonParser = Step2
        <$> parseField "caseName"
        <*> parseField "caseSelected"
        <*> parseField "aFormInitiated"
        <*> parseField "aFormFilled"
        <*> parseField "yellowUpdateStarted"
        <*> parseField "step2Stats"
        <*> parseField "yellowUpdateFinished"

data Step2Stats = Step2Stats
    { step2Stats_sourcesOfInfection :: [T.Text]
    , step2Stats_placesOfInfection :: [T.Text]
    , step2Stats_numberOfContacts :: Data.Int.Int16
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep2Stats :: [T.Text] -> [T.Text] -> Data.Int.Int16 -> Step2Stats
mkStep2Stats sourcesOfInfection placesOfInfection numberOfContacts = Step2Stats sourcesOfInfection placesOfInfection numberOfContacts

instance AdlValue Step2Stats where
    atype _ = "covhub.steps.Step2Stats"
    
    jsonGen = genObject
        [ genField "sourcesOfInfection" step2Stats_sourcesOfInfection
        , genField "placesOfInfection" step2Stats_placesOfInfection
        , genField "numberOfContacts" step2Stats_numberOfContacts
        ]
    
    jsonParser = Step2Stats
        <$> parseField "sourcesOfInfection"
        <*> parseField "placesOfInfection"
        <*> parseField "numberOfContacts"

data Step3 = Step3
    { step3_contactTracer :: T.Text
    , step3_numberOfB1Forms :: Data.Int.Int16
    , step3_numberOfContacts :: Data.Int.Int16
    , step3_caseName :: T.Text
    , step3_caseSelected :: Prelude.Bool
    , step3_b1FormsInitiated :: [T.Text]
    , step3_b1FormsFilled :: [T.Text]
    , step3_yellowUpdateStarted :: Prelude.Bool
    , step3_step2Stats :: Step2Stats
    , step3_yellowUpdateFinished :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep3 :: T.Text -> Data.Int.Int16 -> Data.Int.Int16 -> T.Text -> Prelude.Bool -> [T.Text] -> [T.Text] -> Prelude.Bool -> Step2Stats -> Prelude.Bool -> Step3
mkStep3 contactTracer numberOfB1Forms numberOfContacts caseName caseSelected b1FormsInitiated b1FormsFilled yellowUpdateStarted step2Stats yellowUpdateFinished = Step3 contactTracer numberOfB1Forms numberOfContacts caseName caseSelected b1FormsInitiated b1FormsFilled yellowUpdateStarted step2Stats yellowUpdateFinished

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
        , genField "step2Stats" step3_step2Stats
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
        <*> parseField "step2Stats"
        <*> parseField "yellowUpdateFinished"

data Step4 = Step4
    { step4_contactFollower :: T.Text
    , step4_numberOfB2Forms :: Data.Int.Int16
    , step4_numberOfContacts :: Data.Int.Int16
    , step4_caseName :: T.Text
    , step4_caseSelected :: Prelude.Bool
    , step4_b1FormsInitiated :: [T.Text]
    , step4_b1FormsFilled :: [T.Text]
    , step4_yellowUpdateStarted :: Prelude.Bool
    , step4_step2Stats :: Step2Stats
    , step4_yellowUpdateFinished :: Prelude.Bool
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkStep4 :: T.Text -> Data.Int.Int16 -> Data.Int.Int16 -> T.Text -> Prelude.Bool -> [T.Text] -> [T.Text] -> Prelude.Bool -> Step2Stats -> Prelude.Bool -> Step4
mkStep4 contactFollower numberOfB2Forms numberOfContacts caseName caseSelected b1FormsInitiated b1FormsFilled yellowUpdateStarted step2Stats yellowUpdateFinished = Step4 contactFollower numberOfB2Forms numberOfContacts caseName caseSelected b1FormsInitiated b1FormsFilled yellowUpdateStarted step2Stats yellowUpdateFinished

instance AdlValue Step4 where
    atype _ = "covhub.steps.Step4"
    
    jsonGen = genObject
        [ genField "contactFollower" step4_contactFollower
        , genField "numberOfB2Forms" step4_numberOfB2Forms
        , genField "numberOfContacts" step4_numberOfContacts
        , genField "caseName" step4_caseName
        , genField "caseSelected" step4_caseSelected
        , genField "b1FormsInitiated" step4_b1FormsInitiated
        , genField "b1FormsFilled" step4_b1FormsFilled
        , genField "yellowUpdateStarted" step4_yellowUpdateStarted
        , genField "step2Stats" step4_step2Stats
        , genField "yellowUpdateFinished" step4_yellowUpdateFinished
        ]
    
    jsonParser = Step4
        <$> parseField "contactFollower"
        <*> parseField "numberOfB2Forms"
        <*> parseField "numberOfContacts"
        <*> parseField "caseName"
        <*> parseField "caseSelected"
        <*> parseField "b1FormsInitiated"
        <*> parseField "b1FormsFilled"
        <*> parseField "yellowUpdateStarted"
        <*> parseField "step2Stats"
        <*> parseField "yellowUpdateFinished"