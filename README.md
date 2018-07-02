# README

## Set Up

- Clone this repository into your IdeaProjects folder (DO NOT CLONE INTO ANOTHER PROJECT FOLDER).
- Create a branch called yourFirstName-yourLastName (using your actual first and last name).
- Create an html file called function-warmup.html
	- include script tags with JS to solve the function problem
	- remember to use an IIFE and strict mode 
- Add and commit your work on your branch
- Push up your branch to this repository (DO NOT PUSH TO MASTER!)

## Function Warm Up

Write a function sortedNameGenerator() that takes in two array arguments as input and returns an array of name objects with properties for firstName and lastName. 
The first and last names should be matched by ascending alphabetical order. Assume both array inputs are of equal length and consisting only of valid string name elements.

Example:

```
var firstNames = ['Billy', 'Karen', 'Cindy', 'Omar'];
var lastNames = ['Sanders', 'Smith', 'Barnes', 'Conner'];

nameGenerator(firstNames, lastNames); // will return the following...

/*

  [
    {
      firstName: Billy,
      lastName: Barnes
    },
    {
      firstName: Cindy,
      lastName: Conner
    },
    {
      firstName:  Karen,
      lastName: Sanders
    },
    {
      firstName: Omar,
      lastName: Smith
    }
  ]

*/

```

You should test your function by console logging the output of calling your function with the example input variables.