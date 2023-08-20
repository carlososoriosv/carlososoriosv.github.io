$(function() {
  new Typed('#typed', {
		strings: ["FRONT-END DEVELOPER","BACK-END DEVELOPER","UX/UI DEVELOPER","PROGRAMMER", "SOFTWARE DEVELOPER","DATA ANALYST"],
		typeSpeed: 100,
    backDelay: 1500,
    loop: true,
    callback: function(){}
	});
});

$(function() {
  new Typed('#newtyped', {
		strings: [" into impactful digital realities!"],
		typeSpeed: 100,
    backDelay: 1500,
    loop: true,
    callback: function(){}
	});
});



const handleMousePos = (e) => {
  const CURSOR = document.querySelector('#mouse-cursor');
  const HOVER = document.querySelectorAll('.cursor-hover');
  const { pageX: posX, pageY: posY } = e;

  const runMouseOver = () => {
    CURSOR.style.transform = 'scale(4)';
    CURSOR.style.background = 'green';
  };
  HOVER.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));

  const runMouseLeave = () => {
    CURSOR.style.transform = '';
    CURSOR.style.background = '';
  };
  HOVER.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
  
  return (
    CURSOR.style.left = `${posX - 10}px`,
    CURSOR.style.top = `${posY - 10}px`  
  );
};
document.addEventListener('mousemove', handleMousePos);// JavaScript Document




// Here I create a JS function ("nav_animation") which determines which CSS classes to show and hide, based on what has been clicked.

// In turn, elements on our page will be either prominent or nearly hidden.

// Behind the scenes, that click adds and removes CSS classes using JavaScript, giving us a lovely navigation with animated transitions, which could be used in all sorts of real-world projects.

// And it scales horizontally.

// So, let's get started and create the "nav_animation" function:

function nav_animation() {
  // remember: we start the function with the "{", above.

  // now we create a variable named "panels" which holds a collection of the elements with the class "panel".

  const windows = document.querySelectorAll(".window");

  // Now we iterate through the items collected in that variable ("panels") by using a forEach statement.

  // Note that when the forEach loop is running, each item in the loop has a generic function being run on it, listening for a click.

  // For this example I named this generic function "mySlideName" but you can name it according to proper naming guideines as needed.

  // Sometimes you see this generic function named "e", as in "event".

  // Specifically, this generic function is listening for a click on any of the slides. When it finds one, it runs one more generic function.

  // That function runs yet another function called "removeActiveClasses()", which is defined below.

  // "removeActiveClasses()" checks to see which if any of the elements has the CSS class "active". If so, ite removes that class name from the element in the DOM. It's gone.

  // By default the first panel has been given the class name "active" - see the HTML. This is what gets changed when this function runs - whichever panel has been clicked now gets the class name "active" AFTER the previous panel with that class name ("active") has it removed from the DOM by this function.

  // It is therefore no longer active, so its appearance changes per the CSS.

  windows.forEach(function (mySlideName) {
    mySlideName.addEventListener("click", function () {
      removeActiveClasses(); // this function is defined below. As I mentioned, it removes the class "active" from anything in the loop which had it, such as the first slide.
      
      // Then, as we are still on the item which has been clicked, we give this item the new class name "active", and it gets a new appearance via CSS
      mySlideName.classList.add("opened");
    }); // ends mySlideName.addEventListener
  }); // ends forEach loop

  // The JS method used here, "classList", lets us manipulate the CSS classes on the elements in the loop (in this case, each item in our variable named "panels".)

  // We are telling it to run a forEach loop on the individual items in the variable "panels". As mentioned above, I named each item in "panels" with a generic : "mySlideName".

  // To be clear, this name ("mySlideName") is used as a temporary name representing each of the items in the loop as it is iterated.

  function removeActiveClasses() {
    windows.forEach(function (mySlideName) {
      mySlideName.classList.remove("opened");
    });
  } // ends the "removeActiveClasses" function creation
} // ends the "nav_animation" function creation


nav_animation(); // runs the "nav_animation" function



