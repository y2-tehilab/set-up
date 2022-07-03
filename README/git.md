## Git

- Go to [github](https://github.com/new), insert `Repository name` and `Owner`, press `Create repository`

- Push the repository from the command line (the commands from github after create new repo)
    ```bash
    git remote add origin git@github.com:[Owner]/[Repository name].git
    git branch -M main
    git push -u origin main
    git add .
    git commit -m "initial commit"
    git push
    ```
