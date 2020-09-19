

<p align="center"> 
  <img width="30%" src="https://miro.medium.com/max/1200/1*15CYVZdpsxir8KLdxEZytg.png">
</p>

 <h1 align="center">Front-end Coding Challenge</h1>


<p align="center">
<a href="https://portfolio.hnadamohamed.com/"><img src="https://camo.githubusercontent.com/13c4e50d88df7178ae1882a203ed57b641674f94/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652f643733303566333864323966656437386661383536353265336136336531353464643865383832392f6d656469612f62616467652e737667" alt="Awesome" data-canonical-src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" style="max-width:100%;"></a>
</p>


<blockquote>
<h3><a id="user-content-angular-codebase-containing-real-world-examples-crud-auth-advanced-patterns-etc-that-adheres-to-the-realworld-spec-and-api" class="anchor" aria-hidden="true" href="#angular-codebase-containing-real-world-examples-crud-auth-advanced-patterns-etc-that-adheres-to-the-realworld-spec-and-api"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>A small webapp that list the most starred Github repos that were created in the last 30 days .  <br/>  
This project was build with Angular version 9.1.4.
  
  </h3>
  
</blockquote>




# Demo

Link : https://portfolio.hnadamohamed.com/


## Getting started 

Make sure you have the Angular CLI installed globally. Im using use NPM to manage the dependencies, then run npm install to resolve all dependencies (might take a minute).

Run ng serve for a dev server. Navigate to http://localhost:4200/. 


## Building the project

Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.


## Functionality overview

<ul>
  <li>Liste of the most starred Github repos that were created in the last 30 days.</li>
  <li>The results should be as a list, one repository per row .</li>
  <li>New results should appear when we hit the bottom of the page (pagination) .</li>
  <li>Search by repository name .</li>
  <li>Display a loading effect while waiting for data</li>
  <li>Responsive design for mobiles and tablets</li>
</ul>


### Large Screens Design 
<img  width="90%" height="100%" src="https://user-images.githubusercontent.com/46169333/93689033-f6d95f00-faca-11ea-9b72-dafa1c6b8984.png">

### Meduim Screens Design 
<img  width="60%" height="50%" src="https://user-images.githubusercontent.com/46169333/93689034-f9d44f80-faca-11ea-9764-f3679db3873c.png">

### Small Screens Design 
<img  width="30%" height="50%" src="https://user-images.githubusercontent.com/46169333/93689039-fe990380-faca-11ea-8028-165bab6a10aa.png">

### Search by repos name 

<img  width="50%" height="100%" src="https://user-images.githubusercontent.com/46169333/93689324-cc3cd580-facd-11ea-816a-529d6a74b842.png">

### Circle loader
<img  width="50%" height="100%" src="https://user-images.githubusercontent.com/46169333/93689289-5a648c00-facd-11ea-9405-3ca335c08426.png">





## Used libraries 

### Angular Infinite Scroll

<p><a href="https://travis-ci.org/orizens/ngx-infinite-scroll" rel="nofollow"><img src="https://travis-ci.org/orizens/ngx-infinite-scroll.svg?branch=master" alt="Build Status"></a> <a href="#backers" rel="nofollow"><img src="https://opencollective.com/ngx-infinite-scroll/backers/badge.svg" alt="Backers on Open Collective"></a> <a href="#sponsors" rel="nofollow"><img src="https://opencollective.com/ngx-infinite-scroll/sponsors/badge.svg" alt="Sponsors on Open Collective"></a>
<a href="https://badge.fury.io/js/ngx-infinite-scroll" rel="nofollow"><img src="https://badge.fury.io/js/ngx-infinite-scroll.svg" alt="npm version"></a>
<a href="https://badge.fury.io/js/ngx-infinite-scroll" rel="nofollow"><img src="https://badge.fury.io/js/ngx-infinite-scroll.svg" alt="npm version"></a>
<a href="https://img.shields.io/npm/dm/ngx-infinite-scroll.svg" rel="nofollow"><img src="https://img.shields.io/npm/dm/ngx-infinite-scroll.svg" alt="npm downloads a month"></a>
<a href="https://img.shields.io/npm/dt/ngx-infinite-scroll.svg" rel="nofollow"><img src="https://img.shields.io/npm/dt/ngx-infinite-scroll.svg" alt="npm downloads a week"></a></p>

#### Installation

<pre><code>npm install ngx-infinite-scroll --save
</code></pre>


### Moment Js 

<p><a href="https://npmjs.org/package/moment" rel="nofollow"><img src="http://img.shields.io/npm/v/moment.svg?style=flat" alt="NPM version"></a> <a href="https://npmcharts.com/compare/moment?minimal=true" rel="nofollow"><img src="http://img.shields.io/npm/dm/moment.svg?style=flat" alt="NPM downloads"></a> <a href="https://github.com/moment/moment/blob/HEAD/LICENSE" rel="nofollow"><img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat" alt="MIT License"></a> <a href="http://travis-ci.org/moment/moment" rel="nofollow"><img src="http://img.shields.io/travis/moment/moment/develop.svg?style=flat" alt="Build Status"></a>
<a href="https://coveralls.io/r/moment/moment?branch=develop" rel="nofollow"><img src="https://coveralls.io/repos/moment/moment/badge.svg?branch=develop" alt="Coverage Status"></a>
<a href="https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmoment%2Fmoment?ref=badge_shield" rel="nofollow"><img src="https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fmoment%2Fmoment.svg?type=shield" alt="FOSSA Status"></a>
<a href="https://dependabot.com/compatibility-score.html?dependency-name=moment&amp;package-manager=npm_and_yarn&amp;version-scheme=semver" rel="nofollow"><img src="https://api.dependabot.com/badges/compatibility_score?dependency-name=moment&amp;package-manager=npm_and_yarn&amp;version-scheme=semver" alt="SemVer compatibility"></a></p>

A JavaScript date library for parsing, validating, manipulating, and formatting dates.

#### Installation

<pre><code>npm install moment --save
</code></pre>



