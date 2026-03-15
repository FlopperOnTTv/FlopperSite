// Array containing different titles to cycle through
var titles = [
  "f",
  "fl",
  "flp",
  "flpp",
  "flppr",
  "flppr.",
  "flppr.x",
  "flppr.xy",
  "flppr.xyz",
];

// thing that changes the title 
function changeTitle() {
  var index = 0; // start from the first title

  // changes it every 1s
  setInterval(function() {
      // yk what this does
      document.title = titles[index];
      // 
      index = (index + 1) % titles.length;
  }, 400); // set to 1s (1000ms)
}

changeTitle();
