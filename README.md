# Tic Tac Toe

## How to use

To start up the app first run:

```
npm install
```

to install all the packages.
<br />
To run the application:

```
npm start
```

## My approach

first, to ensure I could get something to render to the screen, I built out the app component in a TDD manner that would be rendered in index.js.

I then diagrammed out the first screen of the app, and split it into components so that i could narrow my focus and take it component by component.

![First diagram of first screen](./public/tic-tac-toe-mockup1.png)

I decided to start with the Header, as I had already written a h1 within my already built App component, and could simply extract that out into its own component.

Once this was done, I built a 'Smart' Wrapper container, which would hold the applications state.

from here, I began TDD'ing the remaining components that the wrapper would hold, and the pieces of state that would affect them.

Once the basic components were built out (without much state or functionality), I started focus on the following rules one by one and work on implementing them.

### Feature list:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

in order to make the turn switch, a piece of state called `playerOneTurn` is originally set to true, and switches to false when the player interacts with the board.

In order to visually see the effect of player interaction, I decided to hold 9 elements (representing the 9 squares on the tic-tac-toe board) in a piece of state in an array. This array was mapped over in Arena and rendered on the screen. Because the array is held in state, whenever the array was updated, the component was re-rendered. Knowing this, I would simply replace the clicked area with a nought or cross on a player interaction and it would instantly re-render the component and update the UI.

### Struggles

My main struggle was how and where to hold the business logic - that being the game over logic. Holding it all in the wrapper component was making the component way to large, so I decided to extract the functions into separate files and import them in when needed.
