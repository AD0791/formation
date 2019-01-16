#!/bin/bash

N="thomas jude josh kenya"
ps4="Select character"

select n in $N
do
	if [ $n=="Quit" ]
	then
		break
	fi
	echo Hello $n
done

echo GoodLuck
