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
	
15) to pull one branch into another branch
	git pull <remote-name> <branch-name>
	git pull origin main (pull the chnges of main branch into your current branch) 

16) what is git config?
	config command is used to set configurations in git in local or remote projects
	it has different levels
	--local (by default level is set to local so dont need to explicitly mention it)
	--global (set configurations for a OS user)
	--system (set configurations for all the users of the machine)
	
17) How to set name and email in git config?
	git config --global user.email "your email"
	git config --global user.name "your name"
	
18) What is a commit and how should we format it?
	commit is used to save changings to local repository.
	Inline-->  git commit -m "Subject" -m "detailed description"
	using editor-->  git commit
		type: subject

		body

		footer

	type can be one of the following:
		* feat
		* fix
		* test
		* style
		* chore
		* perf
		* refactor
		* docs
		* revert
	subject must be in present tense like change, update not like changed or changes
	also subject should not end with punctuation same is for body and footer.
	body contains the detailed description of the change like what change has occur why you are making the change
	Example: 
	feat: add signup module on server side
	
	add a new module in backend to validate and signup the users and save data to database for future use

19) git branch naming conventions:
	* avoid using numbers only 
	* if branch name contains two or more words use - or / between words instead of space like main-branch or bug-user-validation
	* branch name should imply the purpose of the branch. like it should start with group words like bug, wip(work in progress), refactor, style etc
	* can also use author name as branch name like zain-feat-add-new-product
	* some companies uses Jira to fix issues or implement new feature. A ticket number is assigned to that issue. We can use that ticket number in branch name like feat-192-add-new-category

20) what is mergining conflicts?
	merging conflicts occur when we merge two branches and there are different changings on the same line or when one dev has made changes to a file and other dev deleted the file then while merging the branches git confuses which change is to keep and which to discard.

21) how to resolve merge conflicts in VScode and github?

	
