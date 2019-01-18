#!/bin/bash
while read f
do
	case $f in
		hello)	echo English	 ;;
		howdy)	echo American	 ;;
		gday)	echo Australian	 ;;
		*)	echo Unknown Language: $f ;;
	esac
done < myfile


