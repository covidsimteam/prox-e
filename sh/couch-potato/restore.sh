#!/usr/bin/env bash

echo couchdb restore start

bash couchdb-dump.sh -r -H localhost:5984 -d _replicator -f ./db/_replicator.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d _users -f ./db/_users.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d covidsimteam -f ./db/covidsimteam.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d districts -f ./db/districts.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d foreign_returnees -f ./db/foreign_returnees.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d matrix -f ./db/matrix.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d patients -f ./db/patients.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d pcr_tests -f ./db/pcr_tests.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d rdt_tests -f ./db/rdt_tests.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d roles -f ./db/roles.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d schedule -f ./db/schedule.json -u admin -p COVIDiot20 -c -t 4
bash couchdb-dump.sh -r -H localhost:5984 -d usage_audit -f ./db/usage_audit.json -u admin -p COVIDiot20 -c -t 4

echo couchdb restore finish