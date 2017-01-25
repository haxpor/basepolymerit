#!/bin/bash
#
# Grabbed and modified based on https://github.com/ebidel/polymer-experiments
# Copyright 2015 Eric Bidelman <ericbidelman@chromium.org>

# Example
# ./build.sh stock-ticker-es6.html

# TODO: Change element name here to match your need...
element="test-component"

inFolder="./src/"
outFolder="./dist/"

html_out_file=$element.v.html
js_out_file=$element.v.js
js_out_file_browserified=$element.v.b.js

BABEL=node_modules/babel/bin/babel.js

# Check if $outFolder exists or not, if not then create one
if [ -d $outFolder ];
	then echo $outFolder "exists";
	else 
		echo $outFolder "doesn't exist, create it now.";
		mkdir $outFolder;
fi

# vulcanize and crisper input file
echo "building..."
node_modules/vulcanize/bin/vulcanize $inFolder$element.html \
    --inline-script --inline-css --strip-comments | \
    node_modules/crisper/bin/crisper -h $outFolder$html_out_file -j $outFolder$js_out_file

# babel
echo "converting from ES6 to ES2015..."
$BABEL --compact false --presets=es2015 $outFolder$js_out_file -o $outFolder$js_out_file

# browserify
echo "browerify..."
node_modules/browserify/bin/cmd.js $outFolder$js_out_file > $outFolder$js_out_file_browserified

# clean up
echo "clean up..."
rm -rf ./dist/$js_out_file
mv $outFolder$js_out_file_browserified $outFolder$js_out_file

# done
echo "build successfully"
