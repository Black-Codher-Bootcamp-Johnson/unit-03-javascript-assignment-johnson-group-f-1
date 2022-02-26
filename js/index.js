//need to import data.js file.

import * as dataset from './data.js';


// A `div` with the class name `timeline-item`. This `div` is your container for your summary card and everything for the summary card must be inside of it.
var newDiv = document.createElement("div");
newDiv.className = "timeline-item";
document.body.appendChild(newDiv);

// inside of the summary card...

var tag = document.createElement("h2"); // <h2></h2>
tag.className = "timeline-item-title";
  var text = document.createTextNode("The title of each timeline item needs to be here"); 
  tag.appendChild(text); // <h2>The title of each timeline item needs to be here</h2>
  var element = document.getElementsByTagName("body")[0];
  element.appendChild(tag); // <body> <p>TEST TEXT</p> </body>

  var span = document.createElement("span");
  span.className = "timeline-item-date";
    var text = document.createTextNode("This should have the date of each timeline item"); 
    span.appendChild(text); 
    var element = document.getElementsByTagName("body")[0];
    element.appendChild(span);

    var summary = document.createElement("p");
  summary.className = "timeline-item-summary";
    var text = document.createTextNode("This should have the summary of each timeline item"); 
    summary.appendChild(text); 
    var element = document.getElementsByTagName("body")[0];
    element.appendChild(summary); 

    var button = document.createElement("button");
  button.className = "timeline-item-more-info";
    var text = document.createTextNode("This modal should have more info of each timeline item"); 
    button.appendChild(text); 
    var element = document.getElementsByTagName("body")[0];
    element.appendChild(button); 

