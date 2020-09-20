{-# LANGUAGE OverloadedStrings #-}
module ADL.Generated.Covhub.Person(
    EntityId(..),
    Gender(..),
    Person(..),
    Persons,
    UserId(..),
    mkGender,
    mkPerson,
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

newtype EntityId = EntityId { unEntityId :: Prelude.Double }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue EntityId where
    atype _ = "covhub.person.EntityId"
    
    jsonGen = JsonGen (\(EntityId v) -> adlToJson v)
    
    jsonParser = EntityId <$> jsonParser

data Gender = Gender
    { gender_individual :: T.Text
    , gender_biological :: T.Text
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkGender :: T.Text -> T.Text -> Gender
mkGender individual biological = Gender individual biological

instance AdlValue Gender where
    atype _ = "covhub.person.Gender"
    
    jsonGen = genObject
        [ genField "individual" gender_individual
        , genField "biological" gender_biological
        ]
    
    jsonParser = Gender
        <$> parseField "individual"
        <*> parseField "biological"

data Person = Person
    { person_firstName :: T.Text
    , person_lastName :: T.Text
    , person_age :: Data.Int.Int16
    , person_gender :: Gender
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkPerson :: T.Text -> T.Text -> Data.Int.Int16 -> Gender -> Person
mkPerson firstName lastName age gender = Person firstName lastName age gender

instance AdlValue Person where
    atype _ = "covhub.person.Person"
    
    jsonGen = genObject
        [ genField "firstName" person_firstName
        , genField "lastName" person_lastName
        , genField "age" person_age
        , genField "gender" person_gender
        ]
    
    jsonParser = Person
        <$> parseField "firstName"
        <*> parseField "lastName"
        <*> parseField "age"
        <*> parseField "gender"

type Persons = [Person]

newtype UserId = UserId { unUserId :: T.Text }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue UserId where
    atype _ = "covhub.person.UserId"
    
    jsonGen = JsonGen (\(UserId v) -> adlToJson v)
    
    jsonParser = UserId <$> jsonParser