#!/bin/bash
ips=hello
while [ "$ips" != "goodday" ]
do
	echo "Please say something here (goodday to quit)"
	read ips
	echo "you typed: $ips"
done
