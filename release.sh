#!/bin/bash
# releases current master to heroku with assets precompiled
# assumes remotes heroku-[environment] pointing to heroku
# envirnoments and origin as upstream repo

die() { echo "$@" 1>&2; exit 1; }

environment=$1

[ "$environment" = "" ] && die "Usage: $0 [environment]"
remote="heroku-$environment"

echo "This will release current master to $remote"
echo "Proceed? [N/y] "
read -n 1 response
echo
    if [ "$response" = "y" -o "$response" = "Y" ]; then
        : # proceed
    else
        echo "Aborting"
        exit 1
    fi

# remove app/bower_components and dist from gitignore
sed -i ".tmp" -E '/app\/bower_components|dist/d' .gitignore
rm .gitignore.tmp

# run bower install && grunt build
bower install
grunt build

# commit
git add "app/bower_components"
git add "dist"
git commit -am "Temp commit for dist"

# push master to heroku-[environment]
echo "Pushing to $remote"
git push $remote master

# reset master to origin/master
echo "Reseting to previous state."
git reset --hard origin/master

