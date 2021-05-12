#!/bin/bash
dirname="/linux-study/bot/itunes-top10-rss"
mkdir -p $dirname
filename="${dirname}/hourly-ranking-`date +'%Y%m%d%H%M'`.xml"
echo "保存しました：$filename"
curl -s -H "User-Agent: CrawlBot; yo.saito3759@icloud.com" -o $filename https://itunes.apple.com/jp/rss/topsongs/limit=10/xml
