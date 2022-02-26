//need to import data.js file.

import * as dataset from './data.js';

// console.log(dataset.title);
// console.log ("dataset.title");
// console.log(dataset.date);
// console.log(dataset.fullDescription);
// console.log(dataset.image);
// console.log(dataset.summary);



// loop through and print 

// dates.forEach(date => {
//     for (let key in date) {
//         console.log(`${key}: ${date[key]}`);
//     }
//   });


// A `div` with the class name `timeline-item`. This `div` is your container for your summary card and everything for the summary card must be inside of it.
var newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// inside of the summary card...

var tag = document.createElement("p"); // <p></p>
  var text = document.createTextNode("TEST TEXT"); 
  tag.appendChild(text); // <p>TEST TEXT</p>
  var element = document.getElementsByTagName("body")[0];
  element.appendChild(tag); // <body> <p>TEST TEXT</p> </body>