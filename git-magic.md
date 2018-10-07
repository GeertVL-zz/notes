# git magic


## How to remove a commit that is already pushed and sits deep in the commit list

$> git rebase -i [COMMIT_HASH]^ or HEAD~2 to get for example the last two commits.

vi opens and you need to remove the commit line. Save the file and it will recommit all the commits without the deleted one.

$> git push -f


## How to get a clean version of the remote branch on your local machine

$> git reset --hard origin/[BRANCH_NAME]


## What does Source and Target means in Visual Studio Team Explorer

Source => The incoming change also called Theirs
Destination => Your local version also called Yours

## Undo last commit 

$> git reset --hard HEAD~

## What does caret ^ and tilde ~ mean

ref~ is shorthand for ref~1 and means the commit's first parent. ref~2 means the commit's first parent's first parent. ref~3 means the commit's first parent's first parent's first parent. And so on.

ref^ is shorthand for ref^1 and means the commit's first parent. But where the two differ is that ref^2 means the commit's second parent (remember, commits can have two parents when they are a merge).


## change message of last commit

$> git commit --amend


## merge in next

next> git merge <branch_to_merge> --no-ff
next> git push
