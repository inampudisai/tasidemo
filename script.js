/*const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
*/
var showPage = function(nPage) {
	// Hide all the pages
  $("#pageLogin").hide();
	$("#pageMembers").hide();
	$("#pageBlog").hide();
  $("#pageContact").hide();
	//$("#pageSummary").hide();
	// Show the desired page
	switch(nPage) {
	case 1:
		$("#pageHome").show();
		break;
	case 2:
    //var modal = document.getElementById('pageLogin');
    $("#pageLogin").show();
		break;
  case 3:
		$("#pageMembers").show();
    $("#pageBlog").hide();
    $("#pageLogin").hide();
    $("#pageContact").hide();
		break;
	case 4:
		alert("showPage called with outofbounds value for npage")
		break;
  case 5:
    $("#pageContact").show();
    $("#pageBlog").hide();
    $("#pageMembers").hide();
    $("#pageLogin").hide();
    break;
}
}



$(document).ready(function(){
	//Logic called when the HTML has been loaded and is ready for work
	$("#menuHome").click(function(){
		// Code run when there is a click event on #menuSummary
		//showPage(1);
    alert("Need to implement Home Page!")
	});
	
	$("#menuLogin").click(function(){
		// Code run when there is a click event on #menuRelationship
		showPage(2);
	});
	$("#menuMembers").click(function(){
		// Code run when there is a click event on #menuChat
		showPage(3);
	});
  $("#menuBlog").click(function(){
		// Code run when there is a click event on #menuChat
		alert("Need to implement Online Chat!")
	});
  $("#menuContact").click(function(){
		// Code run when there is a click event on #menuChat
    showPage(5);
	});
});
