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


## Creating a Repository
### Creating a Repository via Command Line
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

### Creating a Repository by Cloning
Make sure to not clone a repository into another existing repository. This isn't good practise.

The main branch is what will be cloned.

`git clone <SSH link>`

#### Getting Other Branches
If you want to get a different branch other than main, you need to create the branch and then pull from it by using the same branch name as the branch of interest.


## Creating Branches
We create branches to make changes that are not reflected in the `main` branch.

Naming branches follows the convention `feature/<whatever you're working on>`.
- `main`
    - The code that is deployed
- Develop branch
    - Code we don't want to be deployed yet
    - Where everything gets tested
    - Where we want to group added features, and this group of changes is added to `main` when a pull request is fulfilled
    - Typically have branches itself, and these sub-branches adds pull requests to the develop branch
        - `feature/302/change-bg-colour`
        - `feature/303/add-searchbar`
        - `feature/304/add-better-error-handling`
    - `hotfix/some-bug-fix` is another branch you'll typically see in develop branches as well, which fixes a bug

Pull requests typically have tests running as well to ensure everything is still working.

We create branches so that code created can be reviewed by others.
- To check if code is up to quality
- To check if added features are what is asked of
- Allows others to give feedback or review the code

Once you have finished your work on the branch, a pull request will be created on GitHub.
- Pull requests can be reviewed for others to look at the code

Merging a pull request merges the base branch and the branch of interest.

`base` is the branch you want code to be merged into, `compare` is the branch you want code to take into the `base` branch.

If the main branch changes while you are working on another branch, you want to be up-to-date with the main branch still. You need to execute `git pull origin main` to grab changes from the main branch.

### Related Commands

`git branch`
- Shows existing branches
- `*` indicates branch we're committing to

`git branch <branch-name>`
- For example, `git branch feature/styling`
- Creates a branch

`git checkout <branch-name>`
- Switches to branch of `branch-name`
- Branch name is shown in VSCode in bottom left corner

`git push origin <branch-name>`
- Creates a branch if `branch-name` does not exist, and pushes the changes

`git checkout -b <new-branch>`
- Creating a branch and checking out to it

`git pull origin main`
- Ensure you pull the changes on the main branch when pull requests are fulfilled on GitHub


## `.gitignore` file
Add anything in this file you don't want to push to the remote repository, e.g. (`.vscode` files).