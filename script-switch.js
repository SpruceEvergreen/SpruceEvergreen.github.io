const styleSheets = document.styleSheets;
const listButton = document.getElementById("light");
const gridButton = document.getElementById("dark");

const styleSheetsArray = Array.from(styleSheets);
const targetSheet = styleSheetsArray.find((styleSheet) => {
  if (styleSheet?.href) {
    const pathName = new URL(styleSheet.href).pathname.split("/").pop();
    if (pathName === "switch.css") {
      return styleSheet;
    }
  }
});

targetSheet.disabled = true;
listButton.classList.add("current");

const highlightSelected = (targetID) => {
  if (targetID === "dark") {
    listButton.classList.remove("current");
    gridButton.classList.add("current");
  } else {
    gridButton.classList.remove("current");
    listButton.classList.add("current");
  }
};

listButton.addEventListener("click", (e) => {
  highlightSelected(e.target.id);
  targetSheet.disabled = true;
});

gridButton.addEventListener("click", (e) => {
  highlightSelected(e.target.id);
  targetSheet.disabled = false;
});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
