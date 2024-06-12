function showDropdown() {
    var drop = document.getElementById("dropdownContent");
    if(drop.style.display === "block"){
        drop.style.display = "none";
    } else {
        drop.style.display = "block";   
    }
    // document.getElementById("dropdownContent").style.display = "block";
}



// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
let slideIndex = 1;
// Check if slideIndex is not set (null or undefined), then set it to 1
if (slideIndex === null || slideIndex === undefined) {
  slideIndex = 1;
}

showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//PROFILE
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFun() {
  var dropdown = document.getElementById("myForm");
  if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
  } else {
      dropdown.style.display = "block";
      dropdown.style.position = "fixed"; // Position the card relative to the viewport
      dropdown.style.top = "50%"; // Place the top edge of the card at the vertical center of the viewport
      dropdown.style.left = "50%"; // Place the left edge of the card at the horizontal center of the viewport
      dropdown.style.transform = "translate(-50%, -50%)"; // Translate the card back by half its width and height to center it
      dropdown.style.zIndex = "1000"; // Set a high z-index value
      document.body.appendChild(dropdown);
  }
}

function booking() {
  var dropdown = document.getElementById("bookForm");
  if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
  } else {
      dropdown.style.display = "block";
      dropdown.style.position = "fixed"; // Position the card relative to the viewport
      dropdown.style.top = "50%"; // Place the top edge of the card at the vertical center of the viewport
      dropdown.style.left = "50%"; // Place the left edge of the card at the horizontal center of the viewport
      dropdown.style.transform = "translate(-50%, -50%)"; // Translate the card back by half its width and height to center it
      dropdown.style.zIndex = "1000"; // Set a high z-index value
      document.body.appendChild(dropdown);
  }
}

function closeBooking() {
  var popup = document.getElementById('bookForm');
  popup.style.display = 'none';
}



// Pop-up
function toggleTabs(event, tab) {
  event.preventDefault();

  // Remove 'active' class from all tab links
  var tabLinks = document.querySelectorAll('.tabs h3 a');
  tabLinks.forEach(function(link) {
      link.classList.remove('active');
  });

  // Add 'active' class to the clicked tab link
  tab.classList.add('active');

  // Get the content ID from the href attribute of the clicked tab link
  var tabContentId = tab.getAttribute('href');

  // Remove 'active' class from all tab content elements
  var tabContents = document.querySelectorAll('div[id$="tab-content"]');
  tabContents.forEach(function(content) {
      content.classList.remove('active');
  });

  // Add 'active' class to the content corresponding to the clicked tab link
  document.querySelector(tabContentId).classList.add('active');
}

function closePopup() {
  var popup = document.getElementById('myForm');
  popup.style.display = 'none';
}


// Initially show the sign-up tab



// SEARCH
function searchProducts() {
  console.log("Search function called");
  // Get the user's input
  var searchText = document.getElementById("searchInput").value.toLowerCase();
  console.log("Search text:", searchText);
  
  // Get all product elements
  var products = document.getElementsByClassName("pdts")[0].getElementsByClassName("img-container");

  // Loop through all product elements and hide/show based on search text
  for (var i = 0; i < products.length; i++) {
      var productName = products[i].getElementsByClassName("plant-name")[0].getElementsByTagName("h3")[0].innerText.toLowerCase();
      console.log("Product name:", productName);
      
      // Check if product name contains the search text
      if (productName.includes(searchText)) {
          products[i].style.display = "block";
          var rating = products[i].getElementsByClassName("rating")[0];
          var plantimg = products[i].getElementsByClassName("bsimg")[0];
          var plantName = products[i].getElementsByClassName("plant-name")[0];
          var viewPlantLink = plantName.getElementsByTagName("a")[0];
          var sales = products[i].getElementsByTagName("h4")[0];
    
    // Change relative positioning, top, and left of elements
          rating.style.position = "relative"; // Set position to relative
          rating.style.left = "-140px"; // Change left position
    
          plantName.style.position = "relative"; // Set position to relative
          plantName.style.left = "5px"; // Change left position
    
          viewPlantLink.style.position = "relative"; // Set position to relative
          viewPlantLink.style.left = "150px"; // Change left position

          plantimg.style.position = "relative";
          plantimg.style.left = "90px";

          sales.style.position = "relative";
          sales.style.top = "-340px";
          sales.style.left = "100px";
          
      } else {
          products[i].style.display = "none";
      }
  }
}

function openProductPopup(url) {
  window.open(url, "_blank"); // Opens the URL in a new window
}

