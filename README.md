# SCAD Flux Website

Github repo for the SCAD Flux 2020/2021 Website

For inqueries, email scadflux@gmail.com

Backend: http://scadflux.sanity.studio


Created by: Andrew Goodridge, Eric Flatt, and Varun Kharti

## Instructions for developers

### Requirements:
* npm
* git
* sanity-cli (`npm i -g sanity-cli`)
* **Make sure your repo is update to date before every making changes!!

### Inital install:
* `git clone https://github.com/ndrewgood/scad-flux-site.git`
* `npm install` in root folder
* `npm run dev` to start the Studio and frontend locally
  * Your Studio(`/studio`) should be running on http://localhost:3333
  * Your frontend(`/web`) should be running on http://localhost:8000

### After making changes to frontend(`/web`)
* `git add .` from root folder
* `git commit -m "your commit message"`
* `git push`
  * or use any interface to push your commit, as long as its from the root folder.
  * Pushing to github will automatically update deployed site on Netlify
    * Once the site is ready to be published, we can start running `npm run build` to optimize
    * in the future we can make a `dev` branch to hold updates
    
### After making changes to Studio(`/studio`)
*this is for when you update the schema OR add content to the site via `localhost:3000`*

* `cd studio/`
* `sanity deploy`
  * this will update your `localhost:3000` to match `scadflux.sanity.studio`
* `sanity graphql deploy`
  * **IMPORTANT:** do this to update the graphql, your new schema additions wont be shown in `localhost:8000/__graphql` unless you run this command
    
