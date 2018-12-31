#!/bin/bash

argcal() {
	echo Hello $1
	return 5
}

argcal Users
argcal EndUsers
echo "the previous function has a return" $?
