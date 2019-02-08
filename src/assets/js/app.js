import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// import 'tablesaw/dist/tablesaw.jquery';
import libs from './lib/dependancies';
window.libs = libs;

$(document).foundation();

function replaceContentInContainer(matchClass, content) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                > -1) {
            elems[i].innerHTML = content;
        }
    }
}

(function greetingTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var greeting = "morning";
  if (hours >= 12 && hours <= 16) {
      greeting = "afternoon";
      hours = hours - 12;
  }
  if (hours > 16 && hours <= 24) {
      greeting = "evening";
      hours = hours - 12;
  }
  if (hours == 0) {
      hours = 12;
      greeting = "afternoon";
  }
  replaceContentInContainer('js-update-greeting', greeting)
})();
