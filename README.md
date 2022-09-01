# How to use gulp v3 and v4 on your sass files - Underscores the starter theme folder - Mohamed Sagou

This tutorial will show you how to install gulp on your project and how to use it in the right way. If you are usint underscores starter theme folder, in this folder you will find the right methode to use gulp in your project.

## Table of contents

- [How to install gulp?](#How-to-install-gulp?)
  - [Install node.js](#Install-node.js)
  - [Create the project directory](#Create-the-project-directory)
  - [Install gulp globally](#Install-gulp-globally)
  - [Create package.json file](#Create-package.json-file)
  - [Install gulp locally](#Install-gulp-locally)
- [what is my the version of gulp?](#what-is-my-the-version-of-gulp?)
- [For Gulp v3](For-Gulp-v3)
  - [Copy the gulpfile.js for gulp v3](#Copy-the-gulpfile.js-for-gulp-v3)
  - [Modify gulpfile.js for gulp v3 on your purpose](#Modify-gulpfile.js-for-gulp-v3)
  - [Run gulp v3](#Run-gulp-v3)
- [For Gulp v4](#For-Gulp-v4)
  - [Copy the gulpfile.js for gulp v4](#Copy-the-gulpfile.js-for-gulp-v4)
  - [Modify gulpfile.js for gulp v4 on your purpose](#Modify-gulpfile.js-for-gulp-v4)
  - [Run gulp v4](#Run-gulp-v4)
- [Author](#author)


## How to install gulp?

### Install node.js

To see if <kbd>Node js</kbd> is installed, open the Windows Command Prompt, Powershell, Terminale or a similar command line tool(Note that you can use Powershell in visual studio code <kbd>ctrl</kbd>+<kbd>`</kbd>), and type
```powershell
node -v
```
This should print a version number, so you'll see something like this
```powershell
v16.17.0
```
If not, don't panic. Go to [nodejs.org](https://nodejs.org/) and download the LST Recommended For Most Users.

If you have  <kbd>Node js</kbd> install check for <kbd>npm</kbd> by typing and the command line
```powershell
npm -v
```
You'll see something like this
```powershell
8.15.0
```

If you have <kbd>Node js</kbd> and <kbd>npm</kbd> install, now we are ready to install gulp on our project directory.


### Create the project directory

Before we install gulp, I recommend first to create our project directory
```
.
└── Project-Folder-Name
    ├── project-name
    │   ├── css-folder
    │   └── sass-folder
    │ 
    └── gulp-dev (Here we are going to store all required gulp file)
```

However, if you are using <kbd>gulp</kbd> for underscores, or in general for building a wordpress theme project, you should create 'gulp-dev' folder in the themes directory, would be something like this

```
.
└── wordpress
    └── wp-content
        └── themes
            └── gulp-dev (Here we are going to store all required gulp file)
```

### Install gulp globally

Gulp comes in two parts: the Gulp CLI (command line utility) that is installed globally on your computer, and then local Gulp packages installed in each individual project you might have. we will install gulp locally in the next part.
If you’re running an old version of Gulp where you’ve installed the gulp package globally, you’ll have to uninstall it before installing the Gulp CLI. To do this in the command line

```powershell
npm uninstall -g gulp
```
To install the Gulp CLI globally, on your command line, run 

```powershell
npm install gulp-cli -g
```


### Create package.json file

First navigate to the gulp-dev folder in Windows Explorer, highlight the complete then copy it. Go to your command line, and type

```powershell
cd you\path\here
```

Make sure that you don't have in error in the output. After you navigate to the gulp-dev folder, we need to create our package.json file using the command

```powershell
npm init
```

This will guide you through giving your project a name, version, description, etc.

### Install gulp locally

After installing gulp globally and setting up the package.json file, we are ready to install gulp locally in our project directory and save gulp packages in our devDependencies. make sure that you are navigating in the gulp-dev folder, then in your commande line run

```powershell
npm install --save-dev gulp gulp-sass browser-sync autoprefixer gulp-jshint gulp-newer gulp-postcss gulp-sourcemaps jshint gulp-image
```

Note: this might take a while so just chill out until it's done. after the installation is finished make sure that you don't have any error in the command line output.

## what is my the version of gulp?

Verify your gulp versions in your command line tool

```powershell
gulp --version
```

Ensure the output matches the output below or you might need to restart the steps in this guide.

```powershell
[14:25:01] CLI version 2.0.1
[14:25:01] Local version 4.0.0
```

Note: if you are using <kbd>gulp v3</kbd> the output above in the Local version my be something like this

```powershell
[14:25:01] CLI version - older version -
[14:25:01] Local version 3.9.1
```

## For Gulp v3

### Copy the gulpfile.js for gulp v3

Copy the <kbd>gulpfile.js</kbd> file from 'gulpv3' folder in the repository and paste it to the gulp-dev folder in your directory.

### Modify gulpfile.js for gulp v3 on your purpose
- Modify the themename variable, if you are in a regular project, insert the 'Project-Folder-name' in the themename variable.

```js
var themename = 'theme-name';
```

- Modify the proxy in the watch task. For example, if you are using WAMP server, your proxy should be something like this 'localhost/wordpress'.

```js
gulp.task('watch', function() {
	browserSync.init({ 
		open: 'external',
		proxy: 'proxy.here'
	});
	gulp.watch([root + '**/*.css', root + '**/*.scss' ], ['css']);
	gulp.watch(js + '**/*.js', ['javascript']);
	gulp.watch(img + 'RAW/**/*.{jpg,JPG,png}', ['images']);
	gulp.watch(root + '**/*').on('change', browserSync.reload);
});
```

### Run gulp v3

To run gulp on your project directory is the easiest step. To do it just run

```powershell
gulp watch
```


## For Gulp v4

### Copy the gulpfile.js for gulp v4

Copy the <kbd>gulpfile.js</kbd> file from 'gulpv4' folder in the repository and paste it to the gulp-dev folder in your directory.

### Modify gulpfile.js for gulp v4 on your purpose
- Modify the themename variable, if you are in a regular project, insert the Project-Folder-name in the themename variable.

```js
const themename = 'theme-name';
```

- Modify the proxy in the watch task. For example, if you are using WAMP server, your proxy should be something like this 'localhost/wordpress'.

```js
function watch() {
    browserSync.init({ 
		open: 'external',
		proxy: 'proxy/here'
	});
	
	gulp.watch([root + '**/*.css', root + '**/*.scss' ] , css);
	gulp.watch(js + '**/*.js', javascript);
	gulp.watch(img + 'RAW/**/*.{jpg,JPG,png}', images);
	gulp.watch(root + '**/*').on('change', browserSync.reload);
	// gulp.watch('**/*.css').on('change', browserSync.reload); //optional
}
```

### Run gulp v3

To run gulp on your project directory is the easiest step. To do it just run

```powershell
gulp watch
```

The output should be something like this

```powershell
[14:04:16] Using gulpfile ~\path\gulp-dev\gulpfile.js
[14:04:20] Starting 'watch'...
[Browsersync] Access URLs:
 --------------------------------------
       Local: http://localhost:3000
    External: http://192.000.1.000:3000
 --------------------------------------
          UI: http://localhost:3001
 UI External: http://localhost:3001
 --------------------------------------
[Browsersync] Serving files from: ./
```

## Author

- Website - [@medsagou](https://github.com/medsagou)
- Frontend Mentor - [@medsagou](https://www.frontendmentor.io/profile/medsagou)
- Twitter - [@sagoumohamed](https://www.twitter.com/sagoumohamed)
- stackoverflow - [@medsagou](https://stackoverflow.com/users/19887099/mohamed-sagou)

