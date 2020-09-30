{-# LANGUAGE OverloadedStrings #-}
module ADL.Generated.Covhub.Roles(
    Admin(..),
    CaseInvestigator(..),
    ContactFollowup(..),
    ContactTracer(..),
    Coordinator(..),
    mkAdmin,
    mkCaseInvestigator,
    mkContactFollowup,
    mkContactTracer,
    mkCoordinator,
) where

import ADL.Core
import Control.Applicative( (<$>), (<*>), (<|>) )
import Prelude( ($) )
import qualified Data.Aeson as JS
import qualified Data.HashMap.Strict as HM
import qualified Data.Proxy
import qualified Data.Text as T
import qualified Prelude

data Admin = Admin
    { admin_domain :: T.Text
    , admin_id :: T.Text
    , admin_key :: T.Text
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkAdmin :: T.Text -> T.Text -> T.Text -> Admin
mkAdmin domain id key = Admin domain id key

instance AdlValue Admin where
    atype _ = "covhub.roles.Admin"
    
    jsonGen = genObject
        [ genField "domain" admin_domain
        , genField "id" admin_id
        , genField "key" admin_key
        ]
    
    jsonParser = Admin
        <$> parseField "domain"
        <*> parseField "id"
        <*> parseField "key"

data CaseInvestigator = CaseInvestigator
    { caseInvestigator_id :: T.Text
    , caseInvestigator_aForms :: [T.Text]
    , caseInvestigator_aFormsStarted :: [T.Text]
    , caseInvestigator_aFormsFinished :: [T.Text]
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkCaseInvestigator :: T.Text -> [T.Text] -> [T.Text] -> [T.Text] -> CaseInvestigator
mkCaseInvestigator id aForms aFormsStarted aFormsFinished = CaseInvestigator id aForms aFormsStarted aFormsFinished

instance AdlValue CaseInvestigator where
    atype _ = "covhub.roles.CaseInvestigator"
    
    jsonGen = genObject
        [ genField "id" caseInvestigator_id
        , genField "aForms" caseInvestigator_aForms
        , genField "aFormsStarted" caseInvestigator_aFormsStarted
        , genField "aFormsFinished" caseInvestigator_aFormsFinished
        ]
    
    jsonParser = CaseInvestigator
        <$> parseField "id"
        <*> parseField "aForms"
        <*> parseField "aFormsStarted"
        <*> parseField "aFormsFinished"

data ContactFollowup = ContactFollowup
    { contactFollowup_id :: T.Text
    , contactFollowup_b2Forms :: [T.Text]
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkContactFollowup :: T.Text -> [T.Text] -> ContactFollowup
mkContactFollowup id b2Forms = ContactFollowup id b2Forms

instance AdlValue ContactFollowup where
    atype _ = "covhub.roles.ContactFollowup"
    
    jsonGen = genObject
        [ genField "id" contactFollowup_id
        , genField "b2Forms" contactFollowup_b2Forms
        ]
    
    jsonParser = ContactFollowup
        <$> parseField "id"
        <*> parseField "b2Forms"

data ContactTracer = ContactTracer
    { contactTracer_id :: T.Text
    , contactTracer_b1Forms :: [T.Text]
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkContactTracer :: T.Text -> [T.Text] -> ContactTracer
mkContactTracer id b1Forms = ContactTracer id b1Forms

instance AdlValue ContactTracer where
    atype _ = "covhub.roles.ContactTracer"
    
    jsonGen = genObject
        [ genField "id" contactTracer_id
        , genField "b1Forms" contactTracer_b1Forms
        ]
    
    jsonParser = ContactTracer
        <$> parseField "id"
        <*> parseField "b1Forms"

data Coordinator = Coordinator
    { coordinator_id :: T.Text
    , coordinator_cases :: [T.Text]
    , coordinator_investigators :: [CaseInvestigator]
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkCoordinator :: T.Text -> [T.Text] -> [CaseInvestigator] -> Coordinator
mkCoordinator id cases investigators = Coordinator id cases investigators

instance AdlValue Coordinator where
    atype _ = "covhub.roles.Coordinator"
    
    jsonGen = genObject
        [ genField "id" coordinator_id
        , genField "cases" coordinator_cases
        , genField "investigators" coordinator_investigators
        ]
    
    jsonParser = Coordinator
        <$> parseField "id"
        <*> parseField "cases"
        <*> parseField "investigators"