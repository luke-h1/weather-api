#!/bin/bash
heroku login 
git add * 
git commit -am "feat/deploy-to-production"
git push heroku master
