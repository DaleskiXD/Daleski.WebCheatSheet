/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("Sidebar").style.width = "250px";
    document.getElementsByClassName("sidebar-button").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("Sidebar").style.width = "0";
    document.getElementsByClassName("sidebar-button").style.marginLeft = "0";
  }