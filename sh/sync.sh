#!/bin/bash

pusher() {
	git fetch
	git pull
	git push
}

checkouter() {
	git checkout "$1"
	pusher
}

syncer() {
	branches=(develop feature/wizard feature/scheduler feature/i18n feature/forms feat/global master)
	for d in "${branches[@]}"
	do
		checkouter "$d"
	done
}

pusher
syncer

wait
echo "All feature branches are synced with develop ~~!"
