#!/bin/bash
for f in banana grape orange berries apple
do
	echo $f
done

echo

for f in "banana grape orange berries apple"
do
	echo $f
done
exit 0 
