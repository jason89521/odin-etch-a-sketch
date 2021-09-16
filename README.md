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
- `generateSquares(canvas, n)` : 
  This method generate n*n squares in `canvas`.
- `removeSquares(canvas)` : 
  This method remove all squares in the `canvas`.
- `renderSquare(square, colorPalette)` : 
  The callback of `canvas` will call this method to render a square.
- `clearCanvas(canvas)` : 
  This method set the color of all squares in `canvas` to be white.
- `resetCanvas(canvas, n)` : 
  This method call `removeSquares` and `generateSquares` to regenerate new n*n squares.
- `setMode(newMode)` : 
  This method set `mode` to `newMode`

## **eventHandler.js**
### methods
- `changeSquresNum(squares_nums, value)` : 
  This method set the display of the number of squares to `value`.
- `changeActiveBtn(oldBtnSelectoer, newBtnSelector)` : 
  This method use `oldBtnSelectoer` and `newBtnSelector` to select the old active button and the new button which is going to be active. Then remove the old btn's `active-btn` class, and add it to the new btn.