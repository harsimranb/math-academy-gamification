# Math Academy Gamification

Hi!  This is a project I created for fun and also to demonstrate my skills and experience.  I thought it would be cool to build a gamificartion website with NodeJs and React, and build some cool functionality like sounds and animations which make it all the more interesting.

I hope you like it!

## Work In Progress

This is still a work in progress.  Here is what the progress is like:
- [x] Basic Setup of AltJs Stores, React, MondoDB, and ExpressJs routes.
- [x] Simple login support (without password)
- [x] UI to view all missions
- [ ] UI to view and complete excercises
- [ ] UI to synchronize mission progress with back-end and add persistence support
- [ ] Add sound and animation for excercise and mission completed.

## The Sample

In this sample, I have tried to demonstrate a gamification website follows the Khan Academy model.

Once you are on the dashboard, you have a list of missions you can master. Once you click on a mission, you are taken to a page where you have to complete five excercises. When you complete an excercise, you earn extra points. Once all excercises have been completed, you earn mastery in that mission and it is marked as completed in the dashboard.

## Installation

### MongoDB

1. Install (https://www.docker.com/)[Docker]
2. > `docker pull docker pull mongo`
3. > `docker run -d -p 27017:27017 --name mongodb mongo`

*Note: MongoDB instance must be running on port 27017. For this sample, the port has been hardcoded in the code.*

### Application

1. Install NodeJs
2. > `cd <source_root_dir>`
3. > `npm i`
4. > `npm run setup` (only first time use)
5. > `npm run webpack-release`
6. In another terminal window: > `npm run server`

## Application Design

### The Dashboard
The following componnets are added:
1. Top Menu: This has your name, your score/level, and name of the program.
2. The Main Screen: All the missions are listed. Completed missions are marked with a checkmark, incomplete are still available.

### Excersices Page

1. Each excercise is shown with a n-second timer to complete that excercise.
2. If completed correctly, "cha-ching!" - you get points in top bar. And the next excercise slides in.
3. If not, you get to attempt again.
4. Once all excercises are completed, you return.

### Things to Think about

Animations and rewards are a big part of this application, as they engage the user. I have not covered all the cases of that here, but something I would think more about.

## Technologies
I have used the following technologies to build this sample:
1. JavaScript
2. React
3. AltJs Flux
4. ExpressJS
5. NodeJs
6. MongoDB
7. NPM

## Improvements
Because, this is a sample, there are a few things I have not done here that I would otherwise examine:

1. TypeScript - The power and simplisity of TypeScript makes development robust and powerful.
2. Investigate and debate architecture decisions.
