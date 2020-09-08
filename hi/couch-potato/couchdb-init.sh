
DBS=(
  # CouchDB standard databases
  "_users"
  "_replicator"
  "_global_changes"
  # cov-hub coplanetary app databases
  "covidsimteam"
  "districts"
  "foreign_returnees"
  "matrix"
  "nepal_spatial"
  "patients"
  "pcr_tests"
  "rdt_tests"
  "roles"
  "schedule"
  "usage_audit"
  # future databases
  "meetups"
  "resources"
  "courses"
  "certifications"
  "exams"
  "nations"
  "registrationrequests"
  "feedback"
  "activities"
  "configurations"
  "login"
  "notifications"
  "ratings"
  "shelf"
  "submissions"
  "progress"
  "attachments"
  "send"
  "teams"
  "tablet"
  "child"
  "replicator_users"
  "admin_activities"
  "child_statistics"
  "tags"
  "apk_logs"
  "hubs"
  "achievements"
  "myplanet_activities"
  "news"
  "parent_users"
  "team_activities"
  "tasks"
  "health"
  "messages"
  "course_activities"
  "search_activities"
)


set_couch_per_user() {
  CONFIGURATION=$(curl "$COUCHURL/configurations/_all_docs?include_docs=true" $PROXYHEADER)
  CODE=$(echo $CONFIGURATION | jq -rj '.["rows"][0]["doc"]["code"] // empty')
  HEXCODE=$(echo $CODE | tr -d \\n | hexdump -v -e '/1 "%02x"')
  upsert_doc _node/nonode@nohost/_config couch_peruser/database_prefix '"userdb-'$HEXCODE'-"'
  upsert_doc _node/nonode@nohost/_config couch_peruser/delete_dbs '"true"'
  upsert_doc _node/nonode@nohost/_config couch_peruser/enable '"true"'
}

insert_dbs() {
  DBS=$1
  for DB in "${DBS[@]}"
  do
    curl -X PUT $COUCHURL/$DB $PROXYHEADER
  done
}

# Options are -u for username -w for passWord and -p for port number
while getopts "u:w:p:h:ix" option; do
  case $option in
    u) COUCHUSER=${OPTARG};;
    w) COUCHPASSWORD=${OPTARG};;
    p) PORT=${OPTARG};;
    h) HOST=${OPTARG};;
    i) INSTALLFLAG=1;;
    x) PROXYHEADER="-H X-Auth-CouchDB-Roles:_admin -H X-Auth-CouchDB-UserName:username";;
  esac
done

ISINSTALL=${INSTALLFLAG:-0}

if [ -z "$HOST" ]
then
  HOST=127.0.0.1
fi

# Default port for CouchDB accessed from host machine is 2200
PORT=${PORT:-2200}
if [ -z "$COUCHUSER" ]
then
  COUCHURL=http://$HOST:$PORT
else
  COUCHURL=http://$COUCHUSER:$COUCHPASSWORD@$HOST:$PORT
fi

insert_dbs
set_couch_per_user