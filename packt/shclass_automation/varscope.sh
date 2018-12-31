#!/bin/bash

varscope() {
	local v3="local3"
	echo "nan fonction an: " v3 is $v3 : v4 is $v4
	v3="li changer"
	v4="4 la changer"
}

v3='global3'
v4='global4'

echo 'before call: ' v3 is $v3 : v4 is $v4

varscope
echo 'after call: ' v3 is $v3: v4 is $v4
