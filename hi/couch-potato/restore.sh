#!/usr/bin/env bash

echo couchdb restore start

bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d _replicator -f ./db/_replicator.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d _users -f ./db/_users.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d covidsimteam -f ./db/covidsimteam.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d districts -f ./db/districts.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d foreign_returnees -f ./db/foreign_returnees.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d matrix -f ./db/matrix.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d patients -f ./db/patients.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d pcr_tests -f ./db/pcr_tests.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d rdt_tests -f ./db/rdt_tests.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d roles -f ./db/roles.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d schedule -f ./db/schedule.json -u public@nep.work -p public -c -t 4
bash couchdb-dump.sh -r -H 20.195.40.175:5984 -d usage_audit -f ./db/usage_audit.json -u public@nep.work -p public -c -t 4

echo couchdb restore finish