document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchBar = document.getElementById('searchBar');
    const searchBarInput = document.getElementById('searchBarInput');
    const navbar = document.querySelector('.navbar');

    searchIcon.addEventListener('click', function() {
      searchBar.classList.toggle('visible');
      navbar.classList.toggle('navbar-blur');
      if (searchBar.classList.contains('visible')) {
        searchBarInput.focus();
      }
    });

    searchBarInput.addEventListener('blur', function() {
      searchBar.classList.remove('visible');
      navbar.classList.remove('navbar-blur');
    });
  });


                          // footer


    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
      scrollFunction()
  };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("movetop").style.display = "block";
      } else {
          document.getElementById("movetop").style.display = "none";
      }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }