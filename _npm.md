NPM CheatSheet


npm i 

[1] 
[1] There might be a problem with the project dependency tree.
[1] It is likely not a bug in Create React App, but something you need to fix locally.
[1] 
[1] The react-scripts package provided by Create React App requires a dependency:
[1] 
[1]   "babel-loader": "8.0.4"
[1] 
[1] Don't try to install it manually: your package manager does it automatically.
[1] However, a different version of babel-loader was detected higher up in the tree:
[1] 
[1]   C:\_\shop\node_modules\babel-loader (version: 8.0.5) 
[1] 
[1] Manually installing incompatible versions is known to cause hard-to-debug issues.
[1] 
[1] If you would prefer to ignore this check, add SKIP_PREFLIGHT_CHECK=true to an .env file in you
r project.
[1] That will permanently disable this message but you might encounter other issues.
[1] 
[1] To fix the dependency tree, try following the steps below in the exact order:
[1] 
[1]   1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
[1]   2. Delete node_modules in your project folder.
[1]   3. Remove "babel-loader" from dependencies and/or devDependencies in the package.json file i
n your project folder.
[1]   4. Run npm install or yarn, depending on the package manager you use.
[1] 
[1] In most cases, this should be enough to fix the problem.
[1] If this has not helped, there are a few other things you can try:
[1] 
[1]   5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it in
stead.
[1]      This may help because npm has known issues with package hoisting which may get resolved i
n future versions.
[1] 
[1]   6. Check if C:\_\shop\node_modules\babel-loader is outside your project directory.
[1]      For example, you might have accidentally installed something in your home folder.
[1] 
[1]   7. Try running npm ls babel-loader in your project folder.
[1]      This will tell you which other package (apart from the expected react-scripts) installed 
babel-loader.
[1] 
[1] If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
[1] That would permanently disable this preflight check in case you want to proceed anyway.
[1] 
[1] P.S. We know this message is long but please read the steps above :-) We hope you find them he
lpful!
[1] 
[1] react-scripts start exited with code 1
[0] 
[0] > react-shopping-cart@0.1.0 server C:\_\shop\zzSample2
[0] > nodemon server/app
[0] 
[0] [33m[nodemon] 1.18.9[39m
[0] [33m[nodemon] to restart at any time, enter `rs`[39m
[0] [33m[nodemon] watching: *.*[39m
[0] [32m[nodemon] starting `node server/app.js`[39m
[0] [products] API listening on port 8001.
