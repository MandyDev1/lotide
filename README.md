# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @codebymandy/lotide`

**Require it:**

`const _ = require('@codebymandy/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `assertArraysEqual`: Checks if two arrays are equal.
* `assertEqual`: Checks if two values are equal.
* `assertObjectsEqual`: Checks if two objects are equal.
* `countLetters`: Takes in a sentence (as a string) and returns a count of each of the letters in that sentence.
* `countOnly`: Counts how many times a name appears in an array.
* `eqArrays`: Takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects`: Takes in two objects and returns true or false, based on a perfect match.
* `findKeys`: Scans an object and returns the first key for which the provided callback function returns a truthy value.
* `findKeyByValue`: Helps us search for a key on an object where its value matches a given value.
* `flatten`: Unrolls an array that contains one level nested arrays, producing a flat array.
* `head`: Retrieve the first element from the array.
* `index`: This file exports a collection of all Lotide functions.
* `letterPositions`: Returns all the indexes in the string where each character is found.
* `map`: Takes in two arguments, an array to map and a callback function, and will return a new array based on the results of the callback function.
* `middle`: Return the middle-most element(s) of the given array.
* `tail`: Returns all elements of an array except for the first one.
* `takeUntil`: Keeps collecting items from a provided array until the callback provided returns a truthy value.
* `without`: Returns a subset of a given array, removing unwanted elements.
