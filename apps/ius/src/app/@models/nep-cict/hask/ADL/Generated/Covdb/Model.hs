{-# LANGUAGE OverloadedStrings #-}
module ADL.Generated.Covdb.Model(
    Address(..),
    DbField,
    DbTable(..),
    User(..),
    mkAddress,
    mkDbTable,
    mkUser,
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

data Address = Address
    { address_id :: Data.Int.Int32
    , address_details :: [T.Text]
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkAddress :: Data.Int.Int32 -> [T.Text] -> Address
mkAddress id details = Address id details

instance AdlValue Address where
    atype _ = "covdb.model.Address"
    
    jsonGen = genObject
        [ genField "id" address_id
        , genField "details" address_details
        ]
    
    jsonParser = Address
        <$> parseField "id"
        <*> parseField "details"

type DbField = T.Text

data DbTable = DbTable
    { dbTable_tableName :: T.Text
    , dbTable_primaryKey :: [T.Text]
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkDbTable :: T.Text -> [T.Text] -> DbTable
mkDbTable tableName primaryKey = DbTable tableName primaryKey

instance AdlValue DbTable where
    atype _ = "covdb.model.DbTable"
    
    jsonGen = genObject
        [ genField "tableName" dbTable_tableName
        , genField "primaryKey" dbTable_primaryKey
        ]
    
    jsonParser = DbTable
        <$> parseField "tableName"
        <*> parseField "primaryKey"

data User = User
    { user_email :: T.Text
    , user_fullName :: T.Text
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkUser :: T.Text -> T.Text -> User
mkUser email fullName = User email fullName

instance AdlValue User where
    atype _ = "covdb.model.User"
    
    jsonGen = genObject
        [ genField "email" user_email
        , genField "fullName" user_fullName
        ]
    
    jsonParser = User
        <$> parseField "email"
        <*> parseField "fullName"