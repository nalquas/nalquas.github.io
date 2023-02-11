#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# HACK: Duplicate index.html as '404.html' so vue-router paths work on GitHub Pages
cp index.html 404.html

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io, but using gh-pages branch
git push -f git@github.com:nalquas/nalquas.github.io.git main:gh-pages

cd -
