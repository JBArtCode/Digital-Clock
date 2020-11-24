// What this is actually doing is finding an HTML element on the web page with the class of "clock".
// Have a look inside of you HTML file and see if you can locate which element this querySelector is selecting.
const clock = document.querySelector(".clock");

// What this is basically saying is:
// "When the document loads, call the function 'time'".
// 'time' is the function you are defining below this.
window.addEventListener("load", time);

// Here you are defining a function called time.
// This is the same function that you are passing into the addEventListener() above.
function time() {

  // This creates a variable called 'd' and you are setting it equal to a Date object.
  // Read here for more on the Date class: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  // You are calling the function 'check' which you have defined underneath the function  we are currently in.
  // Check returns a two digit number. So 3 -> 03.
  // m is minutes and s is seconds.
  m = check(m);
  s = check(s);

  // The back-ticks that you are using here:  --> ` <-- allow you to use JavaScript that ends up as a string.
  // This is called string interpolation. Read more on that here: https://dmitripavlutin.com/string-interpolation-in-javascript/
  // Remember that clock is defined above on line 3. You are simply setting the 'textContent' property of clock equal to "h:m:s".
  // If you recall, clock is the HTML element that you selected via the querySelector. And textContent is literally the text 
  // content of that HTML element. So you are actually going into the HTML document and setting the string via JavaScript.
  clock.textContent = `${h}:${m}:${s}`

  // setTimeout is a function built into the browser that takes a function and runs it every 'n' milliseconds.
  // In your case here, you are calling the function 'time' (Which we are already inside of. This is called recursion.)
  // You passed in 1000 as the value for milliseconds, so it will run 'time' every second.
  // Read more on recursion here: https://www.geeksforgeeks.org/recursion/
  setTimeout(time, 1000);
}

// You were correct about this function, it simply makes sure that a two digit number is returned.
// The number is actually in string format.
function check(t) {
  if (t < 10) return '0' + t;
  return t;
}
