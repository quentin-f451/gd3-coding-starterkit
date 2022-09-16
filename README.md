# Tutorials #1

You will find on this repo the resources to use for the first tutorial lesson. Next to this `README.md` file, you will find an `index.html` file and an `assets/` folder, where the `CSS` and `Javascript` are located, alongside font files and images.

## Table of contents

- [Prerequisites](#prerequisites)
- [Exercice](#exercice)

## Prerequisites

Before starting our tutorials, we need to install a few things and make sure everything is set up on your computers. This is a guide for MacOS, if you are on Windows, please reach out to me so we can have a look at it together.

1. Install [Visual Studio Code](https://code.visualstudio.com/) (if not already installed) and open it.
2. Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension (if not already installed). If the plugin is installed, you should be able to see it in the Extensions sidebar of VS Code (open it with `cmd`+`shift`+`X`). You should also see the `Go Live` button in the bottom bar of VS Code.
3. Open the VS Code Terminal (`Terminal` > `New Terminal`).
4. Check if `Node.js` is already installed by typing:

```
node -v
```

5. If not installed, or if your `node.js` version is below `v16`, install the **LTS** version from [here](https://nodejs.org/en/). Run `node -v` once again after installing to check that the installation worked.
6. Check if `git` is already installed by typing:

```
git --version
```

7. If not installed, an installation program should automatically be launched. Follow it and run `git --version` once again after installing to check that the installation worked.
8. Signup on [Github](https://github.com/) or sign in if you already have an account.
9. Add your name and email to Git by typing this in the terminal (replace with your own name and email)

```
git config --global user.name "Your Name"
git config --global user.email youremail@gmail.com
```

10. Signup on [Netlify](https://www.netlify.com/) with your Github account.

Now each of you will get its own version of this repository.

1. Fork this repository. This will create a copy of the repository on your own account. For that, click on the `Fork` button on the upper right side of the screen. You can keep the default options and click on `Create fork`.
2. Clone your repository on your Desktop (or wherever you want on your computer). The easiest way is to use VS Code for that. Open VS Code and go to the Source Control sidebar (open it with `cmd`+`shift`+`G`). Then click the `Clone repository` button, then `Clone from Github`. You will be asked to link the Github application to your Github account, follow the process. Then you should find the newly cloned repository in the list. Click it and then select the location where you want it to appear on your computer.
3. Go to the newly created folder on your computer and drag-and-drop it on the VS Code icon on your Dock.

Now you can browse through the code repository! If you click on `Go Live` in the bottom bar, it should open a window on your browser with the website in it!

## Exercice

Modify the **CSS and JS files** in this repo in order to:

1. Add a hover effect of your choice on all the `.list__item__header` elements.
2. Add a click event on each `.list__item__header` element that toggles the `.list__item__body` element right next to it and closes all other `.list__item__body` element.
3. Replace the content of each `.list__item__artist` element by only the date of birth of the artist.

You can find a correction of the exercice on the `correction` branch [here](https://github.com/quentin-f451/gd3-coding-tutorials-1/tree/correction) and the final result online [here](https://gd3-coding-tutorials-1.netlify.app/).
