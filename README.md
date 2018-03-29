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
