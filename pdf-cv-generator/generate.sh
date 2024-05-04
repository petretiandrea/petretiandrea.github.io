#!/bin/bash

# start hugo temporary server and get pid
echo "Starting hugo server..."
cd hugo-cv
hugo server -D &
HUGO_PID=$!

# sleep to allow hugo to start
sleep 5

echo "Genering PDFs..."
# generate pdf
cd ../pdf-cv-generator
node generate.js http://localhost:1313 ../hugo-cv/static/assets/cvs/

kill $HUGO_PID
echo "Done."c