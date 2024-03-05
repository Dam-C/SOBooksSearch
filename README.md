# OVALE ROOM BOOK FINDER (SALLE OVALE)

## **Video Demo:**  <URL HERE>

## **Description:**

Ovale Room Book Finder (abreviated ORBF in this readme) is a single-page app that allows you to know the availability and location of a book inside the Ovale Room.

You can as a user enter the Title of a book and the ORBF will display a list of possible matchs. When checking the desired result, a map will be shown with an area highlighted, that is the book's dedicated shelves where you will find the book (provided that no one took it or that the book has not been taken out by the librarians for specific purposes)

## **Table of Content**

1. Project background
    - Introduction
    - Challenge with current system
    - Why ?
    - Reception

2. The project
    - Technical choices
        - Front end
        - Back end
        - Database
3. Files
    - Front
    - Back
    - other
4. Futur of the project
    - Roadmap
5. How to use
## **1. Project background:**

### Introduction
I work at a public library named Salle Ovale, or Oval Room, that have a very (very) large catalog.

Nothing unusual for the National Library of France (henceforth shortened to BNF). We have an existing online search tool, very powerfull, very thorough, but it is mainly directed at scholars, researchers and students (from master to PhD) who would need books or reference in the BNF collections.

These users are knowledgeable where it comes to doing bibliographical researches and can get all they need with the BNF search site.
### Challenge with current system

However, the Ovale Room recieves people that do not necessarily know the book organization of the Salle Ovale or sometimes have no prior knowledge regarding the indexing method of libraries. When we give informations about books to the public, they often have a hard time locating the books because the search tool do not give the "geographical" location but its index.

Everyday visitors often struggle to locate books as the search tool provides index information instead of physical locations. They must traverse the room, scanning for tiny index stickers.

Also, fellow workers from the BNF are not necessarily acquainted with the organisatio of the Ovale Room's collections since they are not posted here regularily. Hence they end up having the same issues has everyday visitors.
### Why ?

To sum it up I wanted to contribute, ever so slightly, and be of help for my colleagues and visitors. So I thought I could use my recent knowledge regarding web-developpement to do that and use this project as a final project for the CS50x course.

### Reception

Once deployed, the web-app is mainly used by BNF agents. My main goal was firstly to have it working to gather feedbacks so I could identify potential problems.
As of today (2024/03/04) the reception has been positive and the app is used mainly by colleagues from the BNF. I can also say there is no real competition since the ORBF is very straightforward and needs few datas to work. Therefore it does not compete with the BNF catalog but instead complements it. The BNF catalog encompass more than 14 millions public references, where the ORBF uses about 33000 of them, so 0.24% of the catalog.

## **2. The project**
### Technical choices

**Front end**

_HTML - CSS - SCSS - React - Javascript_

I used my existing knowledge of React to build the project since its capabilities allowed me to create the web-app based on reusable components. For the CSS part SCSS was used in the same fashion to facilitate the use of shorter modular CSS files. Javascript is also my main coding language so I naturally used it.

**Back end**

_Python - Flask_

Since the back-end part is fairly minimal in this project I used Python with the micro-framework Flask to ensure connection betwen the front and the database.

**Database**

_PostgresSQL_

Initialy I thought of a simple SQL database but the search capabilities of standard SQL did not satisfy so I turned to postgresSQL allowing more versatile search such as "ILIKE". 

### Hurdles

**Database**

At the start of the project I wanted to connect to the database from the BNF. Unfortunately the Ovale Room catalog is not yet present in the dataset. Therefore I had to download it and then process it. 
The exported file contains a lot of information and part of it is not usefull for the ORBF app (mainly redundant informations about authors, years...).
Once that was done i 

**Back end**



## **3. Files**

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

    This file is necessary to aggregate the SCSS files to the App.css where the final CSS will be.

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
        - psycopg2 for credentials security
        - flask for handling front-end connections
        - sqlAlchemy to handle sql queries
        - flask_cors to avoid "cross origin ressource sharing"

    The file creates an "engine" that will connect to the database everytime a query needs to be made.
    It also handles queries from the front, process them, then connect to the postgresSQL database. it then retrieve the data and format them to send them to the front.

- `requirement.txt`

    Files used for python be properly configured with the required depedency for the project to work.

- `vercel.json`

    Vercel requires a configuration file to properly start. This files indicate to vercel which path to follow and wich files to use.

## **4. Futur of the project**

This project, as of now, is in its first part
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
## User Stories:

0. When the user land on the site, he can see a language change (from French to English).
1. When the user land on the site, he can see an explaination of how the site works.
2. When the user land on the site, he can see a searchbar with a placeholder "Quel oouvrage cherchez-vous ?".
3. When the user land on the site, he can see a link to the institutionnal site of the BNF.
4. When the user land on the site, he can see a link to the institutionnal site of the Catalogue General".

5. When the user types a search, he can see his search appearing.
6. When the user validates a search, a message appear indicating the search is procceceding.
7. When the user validates a search, if the searh doess not find anything, a message indicates it and reorients him to the staff of the Salle ovale or catalogue General site.

8. When a search retrieves results, if it only gives one result, it displays the informations of the book (title, index(cote), author).
9. When a search retrieves results, if it only gives one result, it displays a map of the Salle Ovale with a path to the bookshelfs area connected to the book.
10. When a search retrieves results, if it gives back more than 1 result, it displays a list of the results.
11. When a search retrieves a list of results, 1 page of results contains 10 results maximum, as many pages as needed are created.
12. When a search retrieves a list of results, 1 page of results contains 10 results maximum, as many pages as needed are created.
13. When a search retrieves a list of results, the user can enter a new search to load new results.

14. When a user is inside a result from a list, he can see a "back to results' button.
15. When a user is inside a result from a list, clicking on "back to results' button send the user back to the results list page the result is from.

<!-- Personnes à contacter côté BNF pour en savoir un peu plus.
Marie Carlin
Louise-Anne Charle
Géraldine Camile (CLA correspondante logisitque (spécialiste informatique) -->