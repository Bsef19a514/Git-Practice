# Git-Practice

1) to create a git repository with specific default branch name:
	git config --global init.defaultBranch <name>
2) The just-created branch can be renamed via this command
	 
3) to clone a remote ropsitory:
	git clone <URL>
4) to create a new empty repository:
	git init
5) to commit changes on local repository:
	git add .
	git commit -m "message"
6) to check status of git repository:
	git status
7) to push changings of local repository to remote repository
	git push //This will push to the default remote "origin" and default branch "master"
   if you want to explicitle mention the remote-name and branch-name then use:
	git push <origin-name> <branch-name>
	git push origin master
8) to get list of all remote-names:
	git remote
9) to get url associated with remote names:
	git remote -v
10) to add a new remote to local repository:
	git remote add <remote-name> <url>
	git remote add orgin https://github.com/Bsef19a514/Git-Practice
11) to change remote urls:
	git remote set-url <existing remote name> <new url>
	git remote set-url origin git@github.com:Bsef19a514/Git-Practice.git
12) list all the branches:
	git branch
13) to create a new branch locally:
	git branch <branch-name>	
14) to switch to a specific branch:
	git checkout <branch-name>

