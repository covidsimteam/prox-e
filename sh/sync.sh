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
	branches=(develop master feature/wizard feature/scheduler feature/forms feature/i18n feat/global)
	for d in "${branches[@]}"
	do
		checkouter "$d"
	done
}

pusher
syncer

wait
echo "All branches are synced with develop ~~!"
