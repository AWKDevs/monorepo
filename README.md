## Requirements
- Node.js
- Lorem ...
- Ipsum ... 

## Installation

```
$ git clone git@github.com:AWKDevs/monorepo.git
$ npm install 
```
The sentence will install all dependencies inside of each SPA as well as the ones needed for the monorepository. 	*** (If it fails go inside each SPA folder and install the dependencies 😅) ***
## Launch all apps in parallel

```
$ npm run dev
```
This sentence will launch all apps in this monorepository creating a specific path for each one.

## Launch specific SPA 
``` 
$ npm run dev -- --filter=./apps/{APP_NAME}
```
This sentence will launch only one app if exists in this monorepository creating a specific path for it.

## Configuration files that you should know
Most important settings for the project are stored in:

```
./package.json
    👉🏽 Script orquestation and general monorepo settings as well as workspaces.

./turbo.json
    👉🏽 Scripts for detect workspaces and dependencies for all apps in ./apps/ 
```
## How to build & deploy? 
Lorem ipsum ...

## How to add new a SPA?
By using git submodules!
```
$ git submodule add git@github.com:AWKDevs/{REPOSITORY_NAME}.git apps/{REPOSITORY_NAME}
```

## Rules for apps folder structure 
Lorem ipsum ...