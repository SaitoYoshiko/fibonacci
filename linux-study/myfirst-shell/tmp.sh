!#/bin/bash

read -p "テンプレートディレクトリのディレクトリ名を入力してください" tmpName
mkdir $tmpName
touch $tmpName/1
touch $tmpName/2
touch $tmpName/3
find

