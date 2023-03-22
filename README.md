# Galak-Pizza-Forever
STARTHACK 2023 project code repository


## For developers

---

### Setup

To set up the project go through the following steps in your terminal:

1. Clone the repository <br>
`git clone https://github.com/AleksanderWWW/Galak-Pizza-Forever.git`
2. Navigate to the root directory <br>
`cd Galak-Pizza-Forever`
3. Create and activate a virtual environment <br>
`python -m venv starthack`

   - On windows: `starthack\Scripts\activate`

   -  On Linux: `source starthack/scripts/activate`

4. Install requirements <br>
`pip install -r requirements.txt`
5. Install pre-commit <br>
`pre-commit install`
6. Verify the steps <br>
`pre-commit --version  # out: pre-commit 3.2.0` <br>
`pytest --version  # out: pytest 7.2.2` <br>

### VC workflow

Please follow these steps if you want to make any changes to the code base.

1. Pull the changes from the main branch
   - `git switch main`
   - `git pull`
2. Create new branch (and switch to it)
<br> `git checkout -b {your initials}/{short_name}`
<br> example branch name: `aw/update_readme`
<br> **Attention**: `checkout -b` automatically switches you to the newly created branch
3. Implement the change
<br> Nothing to add here really
4. Add changes to the staging area
<br> `git add <name(s) of the file(s) you've changed>`
<br> You can also use wildcard symbol `*` to add all changed files
5. Commit changes - make sure that `pre-commit` checks all pass
<br> `git commit -m <short commit message>`
<br> `pre-commit` will be triggered automatically (may take a while the first time)
If the formatters complain, just perform the steps no. 3 and 4 again.
If it's the linter that fails - fix what it tells you to fix and perform
steps no. 3 and 4 again.
6. Push the changes
   - if the pull request hasn't been created yet:
   <br> `git push -u origin <branch name>`
   <br> then click the link you'll see in the terminal and move to step no. 6
   - if the pull request is already open:
   <br> `git push` - and that's all
7. Create a pull request (PR)
<br> Use web UI to create a new Pull Request (see step no. 5). Would be
nice to also leave a short comment explaining what you're doing with this
PR.

---
<br> Hint: `git status` is your best friend
