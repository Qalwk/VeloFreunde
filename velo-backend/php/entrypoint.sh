#!/bin/bash
/usr/local/bin/wait-for-it.sh db:3306 -t 60 -- /usr/local/sbin/php-fpm -F "$@" 