{-# LANGUAGE OverloadedStrings #-}
module ADL.Generated.Covhub.Cases(
    CaseState(..),
    Coordinates(..),
    Information(..),
    mkCaseState,
    mkCoordinates,
    mkInformation,
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

data CaseState = CaseState
    { caseState_aFormFilled :: Prelude.Bool
    , caseState_numberOfContacts :: Data.Int.Int16
    , caseState_numberOfB1Forms :: Data.Int.Int16
    , caseState_numberOfB2Forms :: Data.Int.Int16
    , caseState_numberOfSwabs :: Data.Int.Int16
    , caseState_numberOfPositiveContacts :: Data.Int.Int16
    , caseState_sourceOfInfection :: T.Text
    , caseState_placeOfInfection :: Coordinates
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkCaseState :: Prelude.Bool -> Data.Int.Int16 -> Data.Int.Int16 -> Data.Int.Int16 -> Data.Int.Int16 -> Data.Int.Int16 -> T.Text -> Coordinates -> CaseState
mkCaseState aFormFilled numberOfContacts numberOfB1Forms numberOfB2Forms numberOfSwabs numberOfPositiveContacts sourceOfInfection placeOfInfection = CaseState aFormFilled numberOfContacts numberOfB1Forms numberOfB2Forms numberOfSwabs numberOfPositiveContacts sourceOfInfection placeOfInfection

instance AdlValue CaseState where
    atype _ = "covhub.cases.CaseState"
    
    jsonGen = genObject
        [ genField "aFormFilled" caseState_aFormFilled
        , genField "numberOfContacts" caseState_numberOfContacts
        , genField "numberOfB1Forms" caseState_numberOfB1Forms
        , genField "numberOfB2Forms" caseState_numberOfB2Forms
        , genField "numberOfSwabs" caseState_numberOfSwabs
        , genField "numberOfPositiveContacts" caseState_numberOfPositiveContacts
        , genField "sourceOfInfection" caseState_sourceOfInfection
        , genField "placeOfInfection" caseState_placeOfInfection
        ]
    
    jsonParser = CaseState
        <$> parseField "aFormFilled"
        <*> parseField "numberOfContacts"
        <*> parseField "numberOfB1Forms"
        <*> parseField "numberOfB2Forms"
        <*> parseField "numberOfSwabs"
        <*> parseField "numberOfPositiveContacts"
        <*> parseField "sourceOfInfection"
        <*> parseField "placeOfInfection"

data Coordinates = Coordinates
    { coordinates_xLat :: Prelude.Double
    , coordinates_yLng :: Prelude.Double
    , coordinates_zAlt :: Prelude.Double
    , coordinates_time :: Prelude.Double
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkCoordinates :: Prelude.Double -> Prelude.Double -> Prelude.Double -> Prelude.Double -> Coordinates
mkCoordinates xLat yLng zAlt time = Coordinates xLat yLng zAlt time

instance AdlValue Coordinates where
    atype _ = "covhub.cases.Coordinates"
    
    jsonGen = genObject
        [ genField "xLat" coordinates_xLat
        , genField "yLng" coordinates_yLng
        , genField "zAlt" coordinates_zAlt
        , genField "time" coordinates_time
        ]
    
    jsonParser = Coordinates
        <$> parseField "xLat"
        <*> parseField "yLng"
        <*> parseField "zAlt"
        <*> parseField "time"

data Information = Information
    { information_caseCoordinates :: Coordinates
    , information_reportingInstitution :: T.Text
    , information_nameOfCase :: T.Text
    , information_phoneNumber :: T.Text
    , information_province :: T.Text
    , information_district :: T.Text
    , information_municipality :: T.Text
    , information_wardNumber :: T.Text
    , information_tole :: T.Text
    , information_caseInvestigator :: T.Text
    , information_caseState :: CaseState
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkInformation :: Coordinates -> T.Text -> T.Text -> T.Text -> T.Text -> T.Text -> T.Text -> T.Text -> T.Text -> T.Text -> CaseState -> Information
mkInformation caseCoordinates reportingInstitution nameOfCase phoneNumber province district municipality wardNumber tole caseInvestigator caseState = Information caseCoordinates reportingInstitution nameOfCase phoneNumber province district municipality wardNumber tole caseInvestigator caseState

instance AdlValue Information where
    atype _ = "covhub.cases.Information"
    
    jsonGen = genObject
        [ genField "caseCoordinates" information_caseCoordinates
        , genField "reportingInstitution" information_reportingInstitution
        , genField "nameOfCase" information_nameOfCase
        , genField "phoneNumber" information_phoneNumber
        , genField "province" information_province
        , genField "district" information_district
        , genField "municipality" information_municipality
        , genField "wardNumber" information_wardNumber
        , genField "tole" information_tole
        , genField "caseInvestigator" information_caseInvestigator
        , genField "caseState" information_caseState
        ]
    
    jsonParser = Information
        <$> parseField "caseCoordinates"
        <*> parseField "reportingInstitution"
        <*> parseField "nameOfCase"
        <*> parseField "phoneNumber"
        <*> parseField "province"
        <*> parseField "district"
        <*> parseField "municipality"
        <*> parseField "wardNumber"
        <*> parseField "tole"
        <*> parseField "caseInvestigator"
        <*> parseField "caseState"