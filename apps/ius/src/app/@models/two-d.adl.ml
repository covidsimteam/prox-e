module covdb.twod
{
  struct Position
  {
      Double xLat;
      Double yLng;
  };

  union Picture
  {
      Circle circle;
      Rectangle rectangle;
      Vector<Picture> composed;
      Translated<Picture> translated;
  };

  struct Circle
  {
      Double radius;
  };

  struct Rectangle
  {
      Double width;
      Double height;
  };

  struct Translated<T>
  {
      Double xoffset = 0;
      Double yoffset = 0;
      T object;
  };
};
