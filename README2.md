1. clone git repo branch to local
2. create branch: "git checkout -b react-gh-pages"
3. create setup cmd: "create-react-app react-gh-pages"  //https://github.com/gitname/react-gh-pages
4. favcon genrator: "https://favicon.io/"
5. adding bootstrap: "npm install --save bootstrap"
6. enable sass, will need to install node-sass: "npm install --save node-sass"
7. Install the gh-pages package as a: "dev-dependency" of the app "npm install gh-pages --save-dev"
8. Add some properties to the app's package.json file At the top level, add a homepage property: " "homepage": "http://gitname.github.io/react-gh-pages" "
9. In the existing scripts property, add a predeploy property and a deploy property, each having the values shown below: 
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
10. now git add files, commit files and push all files on git.
11. Generate a production build of your app, and deploy it to GitHub Pages: "npm run deploy"