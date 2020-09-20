module covdb.model
{

struct DbTable
{
  String tableName;
  Vector<String> primaryKey;
};

type DbField = String;

struct User
{
   String email;

   String fullName;
};

struct Address
{
   Int32 id;
   Vector<String> details;
};

annotation Address DbTable {
  "tableName" : "covhub.address",
  "primaryKey" : ["id"]
};

};
