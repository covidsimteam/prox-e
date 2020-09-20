module covhub.user
{

  struct Coordinates
  {
      Double xLat;
      Double yLng;
      Double zAlt;
      Double time;
  };

  struct Address
  {
    Int32 id;
    Vector<String> details;
  };

  struct User
  {
    String email;
    String fullName;
    StringMap<Coordinates> locations;
    StringMap<Address> addresses;
  };

};
