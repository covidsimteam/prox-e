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
	branches=(develop feature/forms feature/i18n feature/scheduler feature/wizard)
	for d in "${branches[@]}"
	do
		checkouter "$d"
	done
}

pusher
syncer

wait
echo "All feature branches are synced with develop ~~!"
