Dumping:

```Bash
./dump.sh
```

Restoring:

```Bash
./restore.sh
```

All files from db folder must be restored to the couchdb instance, preferably using `./restore.sh` with the correct credentials.

All files in db prefixed with `ns_` are to be imported into the `nepal_spatial` database. 