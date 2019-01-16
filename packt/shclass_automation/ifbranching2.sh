#!/bin/bash

if [ $1 -ge 18 ]
then
	echo "You may go to the party"
elif [ $2 == "yes" ]
then
	echo "You may be happy"
else 
	echo "you may be agnostique"
fi
