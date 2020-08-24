#!/usr/bin/env bash

echo couchdb restore start

bash couchdb-dump.sh -r -H 127.0.0.1 -d _replicator -f ./db/_replicator.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d _users -f ./db/_users.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d covidsimteam -f ./db/covidsimteam.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d districts -f ./db/districts.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d foreign_returnees -f ./db/foreign_returnees.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d matrix -f ./db/matrix.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d nepal_spatial -f ./db/nepal_spatial.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d patients -f ./db/patients.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d pcr_tests -f ./db/pcr_tests.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d rdt_tests -f ./db/rdt_tests.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d roles -f ./db/dumpedDB.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d schedule -f ./db/schedule.json -u admin -p password -c -t 4
bash couchdb-dump.sh -r -H 127.0.0.1 -d usage_audit -f ./db/usage_audit.json -u admin -p password -c -t 4

echo couchdb restore finish