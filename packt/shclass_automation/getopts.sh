#!/bin/bash
set -e
set -u
set -o pipefail
while getopts 'mbc:' OPTION; 
do
	case "$OPTION" in 
		m)
			echo "shellscripting"
			;;
		b)
			echo "b stand for b"
			;;
		c)
			avalue="$OPTARG"
			echo "our value provided is $OPTARG"
			;;
		?)
			echo "script usage: $(basename $0) [-l] [-h] [-a somebvalue]" >&2
			exit 1
			;;
	esac
done

