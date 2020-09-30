{-# LANGUAGE OverloadedStrings #-}
module ADL.Generated.Covhub.User(
    Address(..),
    Coordinates(..),
    User(..),
    mkAddress,
    mkCoordinates,
    mkUser,
) where

import ADL.Core
import Control.Applicative( (<$>), (<*>), (<|>) )
import Prelude( ($) )
import qualified Data.Aeson as JS
import qualified Data.HashMap.Strict as HM
import qualified Data.Int
import qualified Data.Map as M
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
    atype _ = "covhub.user.Address"
    
    jsonGen = genObject
        [ genField "id" address_id
        , genField "details" address_details
        ]
    
    jsonParser = Address
        <$> parseField "id"
        <*> parseField "details"

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
    atype _ = "covhub.user.Coordinates"
    
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

data User = User
    { user_email :: T.Text
    , user_fullName :: T.Text
    , user_locations :: StringMap (Coordinates)
    , user_addresses :: StringMap (Address)
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkUser :: T.Text -> T.Text -> StringMap (Coordinates) -> StringMap (Address) -> User
mkUser email fullName locations addresses = User email fullName locations addresses

instance AdlValue User where
    atype _ = "covhub.user.User"
    
    jsonGen = genObject
        [ genField "email" user_email
        , genField "fullName" user_fullName
        , genField "locations" user_locations
        , genField "addresses" user_addresses
        ]
    
    jsonParser = User
        <$> parseField "email"
        <*> parseField "fullName"
        <*> parseField "locations"
        <*> parseField "addresses"