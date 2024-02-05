# Sample Markdown

## Second Heading

### Second Heading

- Unordered lists, and:

1. One
1. Two
1. Three

- More

> Blockquote

And **bold**, _italics_, and even \*italics and later **bold\***. Even ~~strikethrough~~. [A link](https://markdowntohtml.com) to somewhere.

And code highlighting:

```js
var foo = "bar";

function baz(s) {
  return foo + ":" + s;
}
```

Or inline code like `var foo = 'bar';`.

Or an image of bears

![bears](http://placebear.com/200/200)

The end ...

This will serve as a first draft
(maybe it will drastically change later)

FINAL PROJECT

suggestions:

- investigation game for getting into
- website for looking books in a public library (winner)
- tic tac toe

Ovale Room fast find

the site will work like this :
The user can input title or author of thee book he's looking for
(maybe include a smart search feature)
the site will either output the information about the book if it is present in the db or return a message about the absence of the book in the Ovale Room

I will need to connect to the OPEN DB of the BNF

2 choices

either retrieve the data in a daily fashion so the i do not have to make X API calls

or simply do 1 api call each time

...
yeah, 1 API versus dl the entire DB....

So that will be 1 API

Also to do, indicate the location of the book in the library

So first, i'll need the whole CSV db, concatenate it, clean it (if at all possible), reorganize it.
Then i'll need to use that as a base (SQL)

Principle:
a simple search bar
if data is not in the db return a message
else if more than 1 result
return the potential results in a list
else return the result in page and location in the library

## Technologies

React for the front
HTML
CSS
Javascript
jinja for the back
Flask
Python
SQL

Marie Carlin
Louise-Anne Charle
Géraldine Camile (CLA correspondante logisitque (spéicaliste informatique))

## Project bakground:

I work at a Public library named Salle Ovale, or Oval Room, that have a very (very) large catalog.
Nothing unusual for the National Library of France (henceforth shortened to BNF). We have an existing online search tool, very powerfull, very thourough, but it is mainly directed at scholars, searchers and students (from master to PhD) who would need books or reference in the BNF collections. These users are knowledgable where it comes to doing bibliographical reasearch and can get all they need with the BNF search site.
However, the room i work at recieves public that do not necessarily know the book organization of the Salle Ovale. When we give informations about books to the public, they often have a hard time locating the books beccause the search tool do not give the geographical location but its index.
For someone with no prior knowledge of the organization of the Salle Ovale, they'll have to walk all around the room looking for this specific index printed on a sticker that is the size of a thumb (at maximum).

That's the genesis of this project, a simple search applicatiion that will tell the visitor if the book he's looking for is present and where he can find it with a clear map of the Salle Ovale. Also it will conform the the acessibility standards for disabled and/or imparaired.

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
