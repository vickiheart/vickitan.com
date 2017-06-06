# www.vickitan.com

Source code for [vickitan.com](//www.vickitan.com)

## Getting started

### Requirements

You'll need to have the following installed:
* [Homebrew](https://brew.sh) - useful to install the following. (See Homebrew link to see installation instructions)
* [git](https://git-scm.com/book/en/v1/Getting-Started-Installing-Git) – Recommended installation via  [Homebrew](https://brew.sh) on macOS  
(paste `brew install git` in your terminal and press enter, once you have Homebrew installed)
* [node](https://nodejs.org/en/) -Recommended installation via [Homebrew](https://brew.sh) on macOS.  
(paste `brew install node` in your terminal and press enter, once you have Homebrew installed)

Clone the git repository to get started. You can use a GUI git client such as [SourceTree](https://www.sourcetreeapp.com) (would recommend) or [Github Desktop](https://desktop.github.com).

Or, you may use the git command line tool, using the following command in your terminal will make a copy of the git repository as a folder in your current directory.
```
git clone https://github.com/vickiheart/vickitan.com.git
```

### Development setup & making changes

All these steps will be in your terminal, assuming you've opened a new terminal window. Paste the following commands in succession.

1. Navigate to your repo in your terminal: `cd path/to/your/repo`  
(e.g. `cd development/websites/vickitan.com`)
2. Install dependencies (this will take a while to run): `npm install`
3. Run your website in development mode: `npm run start`

If you open http://localhost:8080 in your browser, you should see a local, development version of your website.

#### Making changes
1. Open the folder in which the git repository containing your website code lives in a text editor.
2. Navigate to the page you want to make changes in
3. Make the changes and save.

Go back to your browser to the page where you have http://localhost:8080 open. You should see the changes that you've made. Once satisfied

### Making changes live
To make your changes live, you need to do two things:

#### Generate a build
In your terminal, while you're in the same directory as your website code, run the following command:
```
npm run build
```

This will generate a folder called 'public' in the folder that your website code lives. 

#### Copying over contents of build to AWS
This is a static site with resources living in an Amazon S3 bucket.

Head over to AWS to your S3 bucket, remove the old files, and add the new ones from the build folder.

**Warning**: Currently the 'media' folder isn't part of the 'build' folder, so don't remove that since that's where the videos/image assets live.

Once you've updated the S3 bucket, you should see your changes live on `http://vickitan.com`.

Congrats, your changes are now live 😁 🙌 

### Saving changes back to Github
This is to ensure that the github repo stays up to date with the latest copy of your code.

You can use the GUI git client to follow the 'add, commit and push' workflow, or use the following commands for git on the command line in your terminal

1. Add your changes: `git add .`
2. Add a message for the changes: `git commit -m '<your update message>'` (e.g. `git commit -m 'updated the about section'`)
3. Update the repository: `git push origin master`
