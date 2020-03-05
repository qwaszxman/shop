--USEFULL
git status 		***give you all the current git state i.e. which branch, changes, staged etc.
git stage . 	***STAGEs all changed files in current branch
got commit -m "MESSAGE"  	***COMMITs all staged changes with (MESSAGE) MUST provide message
git push 	***PUSHes changes from local branch to server
git stash -u 	***STASHes files (saves locally so you can pull) including untracked files (-u) 


--CHECKOUT
 
git checkout --track -b origin/name/subName/subSubName



--NORMAL WORKFLOW
git checkout master  	***checkout branch
git pull 				***PULL all changes onto your local
*** now make your changes 
git checkout --track -b username/featureName	***CHECKOUT new branch (TRACKed) => {server knows whats going on)
git stage .				***STAGE all the changes
got commit -m "MESSAGE"  	***COMMITs all staged changes with (MESSAGE) MUST provide message
git push 				***PUSHes all local commits to the server

***at this point you have just pushed a new branch with all of your staged changes to the server.
***you can now go and raise a PR and get it merged into the main branch	