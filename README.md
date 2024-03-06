# OVALE ROOM BOOK FINDER

## **Video Demo:**  <URL HERE>

## **Live site:**  <https://so-books-search.vercel.app/>

## **Description:**

Ovale Room Book Finder (abreviated ORBF in this readme) is a single-page app that enables visitors to know the availability and location of a book inside the Ovale Room.

By entering the title of a book, ORBF will display a list of possible matchs. When checking the desired result, a map will be shown with an area highlighted, that is the book's dedicated bookshelves (provided that no other visitor took it or that the book has not been taken out by the librarians for specific purposes)

## **Table of Content**


1. How to use
    - Requirements
    - Installation

2. Project background
    - Introduction
    - Challenge with current system
    - Why ?
    - Reception

3. The project
    - Technical choices
        - Front end
        - Back end
        - Database
4. Files
    - Front
    - Back
    - other
5. Futur of the project
    - Roadmap

## **1. How to use:**

### Requirements

Node 
> https://nodejs.org/en

Sass 
> https://sass-lang.com/install/

Yarn (or another packet manager)
> https://yarnpkg.com/

Python 
> https://www.python.org/

Python dépendencies (cli inside the back-flask directory)
> pip install -r requirements.txt


### Installation

Download the project and extract it.
Use your IDE to go into the 

## **2. Project background:**

### Introduction

The Oval Room is a public reading room of the Frenche National Library (BNF) it has an extensive catalog of about 33000 books.

An online search tool exists, the catalogue general:

> https://catalogue.bnf.fr/index.do

It is very potent, very thorough, but it is mainly directed at scholars, researchers and students who would need books or reference in the BNF collections.

These users are knowledgeable where it comes to doing bibliographical researches and can get all they need with the BNF search site.
### Challenge with current system

However, the Oval Room receives people that do not necessarily know the book organization of the Salle Ovale or sometimes have no prior knowledge regarding the indexing method of libraries. When we give informations about books to the public, they often have a hard time locating the books because the search tool do not give the "geographical" location but its index.

Everyday visitors often struggle to locate books as the search tool provides index information instead of physical locations. They must traverse the room, scanning for small bookmarks.

Also, fellow workers from the BNF are not necessarily acquainted with the organisatio of the Ovale Room's collections since they are not posted here regularily. Hence they end up having the same issues has everyday visitors.
### Why this project?

This project serves 2 purposes.

Helping visitors and cowerkers at the BNF.

Be the final project for the CS50x introduction to computer science course.

### Reception

Once deployed, the web-app is mainly used by BNF agents. It helps gather feedbacks to identify potential problems.
As of today (2024/03/04) the reception has been positive and the app is used mainly by colleagues from the BNF.

## **3. The project**
### Technical choices

**Front end**

_HTML - CSS - SCSS - React - Javascript_

React is the main tool used to build the project since its capabilities allowed creation of reusable components. For the CSS part SCSS was used in the same fashion to facilitate the use of shorter modular CSS files. Javascript also fot the programming part.

**Back end**

_Python - Flask_

Since the back-end part is fairly minimal, this project uses Python with the micro-framework Flask to ensure connection betwen the front and the database.

**Database**

_PostgresSQL_

Standard SQL search capabilities were not enough so postgresSQL is them main databse language since it allows more versatile search such as "ILIKE" 

### Hurdles

**Database**

The data from the BNF is freely accessible but does not contain the Oval Room catalog in its apis responses. It was necessary to extract it directly from the "catalogue general" and process it to upload it to the PostGreSQL database with only the necessary informations.

Crucial information is missing from the extract regarding the comic books that represent the majority of the Oval Room collections. It is not segmented by country. An index had to be created, it would represent the geographical situation of a specific part of the collection.

## **4. Files**

### Front

- `index.html`

    The main entry for displaying the webb-app and to wich the eact files will root to. It also serves as connection to other services such as google fonts for the main font (roboto) and awesome fonts that provides icons.

    > https://fonts.google.com/specimen/Roboto?query=roboto

    > https://fontawesome.com/

- `main.jsx`

    The entry component for react, it is the "tunnel" wich will direct the react files to the index html file

- `App.jsx`

    The file that gather most of the react logic. It displays the different react components according to certain conditions, has a search been queried ? is there results to display ? if so how many and in wich components will theses results been displayed into and so on.

- `App.css.map`

    Necessary file to aggregate the SCSS files to the App.css where the final CSS will be.

- assets folder

    - `indexation.js`
        
        After the user inputs a query, if the reponse is positive, a specific index code associated with the books will be given, this file associates the code to the corresponding map of the library with the bookshelves containing the book.

- utils folder

    - `Context.js`

        The global "State" of the app and its reducers. It tells other components what the actual state of the app is (was there a search, what are the results, has a specific book location been displayed) and use reducers to modify the the informations of the state. 

    - `soFunctions.js`
        
        Contains functions that are used in other components. It saves space in other component files.


- components folder

    - `compIndex.jsx`

        Serves as a global hook for all of the components. In the App.jsx file, importing it like so:

        ```
        import * as comp from './components/compIndex';
        ```
        Allows to call any compoenent like this 
        ```
        <comp.component/>
        ```


    - `searchBar.jsx`

        The core component, it will get input from the user then will will send it to the back-end part that will process it. The result of this query will be stored in the global state.

        Note: the query retrieve only 10 results to display, if there are more than 10 results, threst will be re queried with the pagination component.

    - `noResult.jsx`

        Contains a message indicating that the Title entered as input by the user has no match in the database (but with Lenny faces so the user does not feels to discouraged).

    - `searchResults.jsx`

        Will contain the results from the user's query and the pagination component if the number of results exceeds 10.

    - `pagination.jsx`

        Calculate the number of pages needed to display the results. Also serves to query the up-to-10 results associated with a specific page.

    - `resultsList.jsx`

        Lists the results from the user's query (up to 10).

    - `resultsListItem.jsx`

        Small component to display individual information for each result of the query (Title, author and call number).

    - `bookLocation.jsx`

        Displays all the info retrieved by the query and the map to get to the book.
        It also uses the indexation file to get the corresponding map.

- SCSS folder

    Where all the scss files are located. the _inputs.scss is linked to the App.css files with SCSS. It contains the CSS for the "main page" and is linked to all the other SCSS files via the @import declarations at the top of it.

### Back

- `server.py`

    Python main file that will handle all the back-end.
    It uses various libraries:
        - psycopg2 for security
        - flask for handling front-end connections
        - sqlAlchemy to handle sql queries
        - flask_cors to avoid "cross origin ressource sharing"

    The file creates an "engine" that will connect to the database everytime a query needs to be made.
    It also handles queries from the front, process them, then connect to the postgresSQL database. it then retrieve the data and format them to send them to the front.
    
    The user and password used are not hidden because this account is only allowed to use the SELECT command.
    
- `requirement.txt`

    Files used for python be properly configured with the required depedency for the project to work.

- `vercel.json`

    Vercel requires a configuration file to properly start. This files indicate to vercel which path to follow and wich files to use.

## **5. Futur of the project**

This project, as of now, is in its first part and serves it's main purpose. More features will be added in the future, mainly to allow librarians to update the catalog.
Metrics will also be usefull to keep track of the traffic.

### Roadmap

**Main project for CS50x**

- Classifying the books categories inside the library ✅
- Structuring the App ✅
- Retrieving the data from the BNF database ✅
- Cleaning the data ✅
- Matching the data to the book categories ✅
- Deploygin the database ✅
- Deploying the back-end ✅ 05/02/2024
- Deploying the Front-end ✅ 11/02/2024

**Afterwards**

- Setting metrics features ☑️
- Implementing update fonctionnalities ☑️
- Implementing routing ☑️
- features to allow changes in the books locations ☑️