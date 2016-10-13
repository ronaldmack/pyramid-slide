
/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
 function drawPyramid(height) {

     // TODO 4
     // before drawing, clear the old content
     document.getElementById('pyramid').innerHTML = '';

     // for each row....
     for (var row = 0; row < height; row++) {

         // figure out number of bricks and spaces
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

         // build up a string for this row
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             var spaceChar = "\u00A0";
             rowStr += spaceChar;
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }


        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
        document.getElementById('slider').innerHTML=height;
    }
}
