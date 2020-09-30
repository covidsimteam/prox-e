{-# LANGUAGE OverloadedStrings, ScopedTypeVariables #-}
module ADL.Generated.Covhub.Twod(
    Circle(..),
    Picture(..),
    Position(..),
    Rectangle(..),
    Translated(..),
    mkCircle,
    mkPosition,
    mkRectangle,
    mkTranslated,
) where

import ADL.Core
import Control.Applicative( (<$>), (<*>), (<|>) )
import Prelude( ($) )
import qualified Data.Aeson as JS
import qualified Data.HashMap.Strict as HM
import qualified Data.Proxy
import qualified Data.Text as T
import qualified Prelude

data Circle = Circle
    { circle_radius :: Prelude.Double
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkCircle :: Prelude.Double -> Circle
mkCircle radius = Circle radius

instance AdlValue Circle where
    atype _ = "covhub.twod.Circle"
    
    jsonGen = genObject
        [ genField "radius" circle_radius
        ]
    
    jsonParser = Circle
        <$> parseField "radius"

data Picture
    = Picture_circle Circle
    | Picture_rectangle Rectangle
    | Picture_composed [Picture]
    | Picture_translated (Translated Picture)
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

instance AdlValue Picture where
    atype _ = "covhub.twod.Picture"
    
    jsonGen = genUnion (\jv -> case jv of
        Picture_circle v -> genUnionValue "circle" v
        Picture_rectangle v -> genUnionValue "rectangle" v
        Picture_composed v -> genUnionValue "composed" v
        Picture_translated v -> genUnionValue "translated" v
        )
    
    jsonParser = parseUnion $ \disc -> case disc of
        "circle" ->  parseUnionValue Picture_circle
        "rectangle" ->  parseUnionValue Picture_rectangle
        "composed" ->  parseUnionValue Picture_composed
        "translated" ->  parseUnionValue Picture_translated
        _ -> parseFail "expected a discriminator for Picture (circle,rectangle,composed,translated)" 

data Position = Position
    { position_xLat :: Prelude.Double
    , position_yLng :: Prelude.Double
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkPosition :: Prelude.Double -> Prelude.Double -> Position
mkPosition xLat yLng = Position xLat yLng

instance AdlValue Position where
    atype _ = "covhub.twod.Position"
    
    jsonGen = genObject
        [ genField "xLat" position_xLat
        , genField "yLng" position_yLng
        ]
    
    jsonParser = Position
        <$> parseField "xLat"
        <*> parseField "yLng"

data Rectangle = Rectangle
    { rectangle_width :: Prelude.Double
    , rectangle_height :: Prelude.Double
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkRectangle :: Prelude.Double -> Prelude.Double -> Rectangle
mkRectangle width height = Rectangle width height

instance AdlValue Rectangle where
    atype _ = "covhub.twod.Rectangle"
    
    jsonGen = genObject
        [ genField "width" rectangle_width
        , genField "height" rectangle_height
        ]
    
    jsonParser = Rectangle
        <$> parseField "width"
        <*> parseField "height"

data Translated t = Translated
    { translated_xoffset :: Prelude.Double
    , translated_yoffset :: Prelude.Double
    , translated_object :: t
    }
    deriving (Prelude.Eq,Prelude.Ord,Prelude.Show)

mkTranslated :: t -> Translated t
mkTranslated object = Translated 0 0 object

instance (AdlValue t) => AdlValue (Translated t) where
    atype _ = T.concat
        [ "covhub.twod.Translated"
        , "<", atype (Data.Proxy.Proxy :: Data.Proxy.Proxy t)
        , ">" ]
    
    jsonGen = genObject
        [ genField "xoffset" translated_xoffset
        , genField "yoffset" translated_yoffset
        , genField "object" translated_object
        ]
    
    jsonParser = Translated
        <$> parseFieldDef "xoffset" 0
        <*> parseFieldDef "yoffset" 0
        <*> parseField "object"