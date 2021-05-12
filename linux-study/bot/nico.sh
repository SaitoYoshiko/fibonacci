#!/bin/bash
dirname="/linux-study/bot/nico-ranking-rss"
mkdir -p $dirname
filename="${dirname}/hourly-ranking-`date +'%Y%m%d%H%M'`.xml"
echo "保存しました：$filename"
