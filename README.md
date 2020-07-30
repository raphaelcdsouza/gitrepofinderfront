# GitHub Finder

## Setting up environment
Clone this repository into your computer:
```sh
# Using SSH
git clone git@github.com:raphaelcdsouza/gitrepofinderfront.git

# OR

# Using HTTPS
git clone https://github.com/raphaelcdsouza/gitrepofinderfront.git
```
Navigate inside ```gitrepofinder``` directory:
```sh
cd gitrepofinderfront
```
Then install all dependencies using Yarn:
```sh
yarn
```
## Github Credentials
Make a copy of ```.env.example``` named as ```.env``` and fill out yout Github App credentials:
```
REACT_APP_CLIENT_ID=<your_github_app_CLIENT_ID>
```
### Running server
Now that you have everything set just run the server with the following command:
```sh
yarn start
```
Now you will be able to check the application in your browser on ```http://localhost:3000```
That's it so far. If you want to contribute with the project feel free to open an issue or create a pull request by forking the repository and making your own feature!

made with :purple_heart: by Raphael
