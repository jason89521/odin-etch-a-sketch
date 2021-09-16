# Etch-A-Sketch

## The main idea
Since the script would be too complex if I write everything to a file, I divided them into three file.
One is **main.js**, which contains all html element I need.
Second is **canvas.js**, this file contains all method about how to render girds, how to change drawing mode, and so on.
Finally, **eventHandler.js** contains the event callbacks which are related to button events and the display of the number of squares.

## **main.js**
This file import `canvas.js` and `eventHandler.js` to use their method, and it only contains one method `init()` which is called to register callbacks to the event listeners.

## **canvas.js**
### variables
- `mode`
: I use this variable to determine what render mode I currently use.

### methods
- `generateSquares(canvas, colorPalette, n)` : 
  This method generate n*n squares in `canvas`. The `colorPalette` is passed to every square's onmouseover event listener.
- `removeSquares(canvas)` : 
  This method remove all squares in the `canvas`.
- `renderSquare(square, colorPalette)` : 
  This is the callback when the square is on mouse over. It read the `colorPalette`'s value and `mode` to render the `square`.
- `clearCanvas(canvas)` : 
  This method set the color of all squares in `canvas` to be white.
- `resetCanvas(canvas, colorPalette, mode, n)` : 
  This method call `removeSquares` and `generateSquares` to regenerate new n*n squares.
- `setMode(newMode)` : 
  This method set `mode` to `newMode`

## **eventHandler.js**
### methods
- `changeSquresNum(squares_nums, value)` : 
  This method set the display of the number of squares to `value`.
- `changeActiveBtn(originBtn, newBtn)` : 
  This method change the active btn from `originBtn` to `newBtn`. 