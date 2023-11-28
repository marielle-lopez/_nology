# Git

- Ensure that the main branch name is `main`, not `master`
    - `main` is the standard after 2014

## What is Git?
- It is a version control system that makes collaboration one the same code base easy
- Multiple people can work on the same code base without interrupting each other
- We can access the history of writing the code
- If we break something, we can 'go back in time'


### 3 Areas Related to Git
- Working directory
    - The folder in which I will write code on my local machine
- Staging area
    - Intermediate area
- Local repository
    - `.git` folder that gets added after running `git init`

#### Remote Repository
- The remote repository is what's hosted on GitHub

## Linking the Local Repository to the Remote Repository
### Step 1
`git add .` or `git add <filename>`
- Saves changes made in working directory into the staging area

### Step 2
`git commit -m "Meaningful message describing change(s)"`
- Adds a message to commit
- Means saving the changes in your local repository, moving the changes to the local repository

### Step 3
`git remote add origin git@github.com:marielle-lopez/_nology.git`
- This is done only when you first create your repository
- Make sure you use your SSH key, not the HTTPS url
- If the SSH key is not used, run `git remote set-url origin git@github.com:marielle-lopez/_nology.git`

### Step 4
`git push -u origin main`
- Pushes our committed changes in the local repository to the remote repository

## Other Commands

`git pull origin <branch>`
- Pulls changes from the remote repository to the local repository

`git pull` is a short version of 2 commands:
- `git fetch`
    - Only updates our local repository
- `git merge`
    - Merges changes in local repository with the working directory

`git diff`
- Compares working directory and staging area; checks what's in the working directory that's not in the staging area

`git diff --staged`
- Shows what's in the staging area and not in the local repository

## Creating a Repository via Command Line
```
echo `# wales-test` >> README.md
    git init
    git add README.md
    git commit
    git branch -M main
    git remote add origin git@github.com
    git push -u origin main
```
- You can use `-u` flag to link local repo branch to main branch of remote repo, so subsequent pushes automatically push to main branch

## Creating a Repository by Cloning
```
git clone <SSH link>
```