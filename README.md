## Tic Tac Toe

Tic Tac Toe is a very famous two players game, where both the players alternatively give a move either "X" or "O". If all the cells in a row or in a column or any of diagonal are same the symbol present there will be treated as winner. If there is no winner then it is a Tie.

# Tech Stacks used

- HTML
- CSS
- JavaScripts
- React

# Overview

<img src="https://arunshaw.vercel.app/static/media/tic_tac_toe_1.7de643cdd1a9aa3a1d84.png"/>

<img src="https://arunshaw.vercel.app/static/media/tic_tac_toe_3.5d3cb3d885197311dbfc.png"/>

<img src="https://arunshaw.vercel.app/static/media/tic_tac_toe_4.d72c799fd2ad137b3a58.png"/>

# To get started

```bash
- use git clone <repo_link>
- npm start(on terminal)
```

# Description of code

**Managing states and props (Board.jsx and Cell.jsx)**

Taken two states using useState function and the the initilal value of first state is an Empty Array that states Board is Empty and 2nd one is a boolean value True that states current turn is of X, first one used to store the current status of board and second one is for changing the turn.

Cell.jsx component that meant to be each cell. On clicking each cell i'm sending the value of the cell[index] and a handleMove(can be found in Board.jsx) function as props and within that function i'm checking the turn status, if it is true that means the turn is of "X and i'm updating board state in that index with "X" and changing the turn to false so the next turn will be "O"

For the solving part, function check(can be in found Board.jsx) that is checking the board status and finding a winner and status of the game.

## Arun Shaw
- Github : Arun-ez
- Visit Github : https://github.com/Arun-ez
- Check out Linkedin : https://www.linkedin.com/mwlite/in/arun-shaw-60ba64240
