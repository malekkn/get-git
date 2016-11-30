var userName;

var data;



function getAll(){
$.ajax({
 method: "GET",
 url: "https://api.github.com/users/" + userName,
})
 .done(function( response) {
  	data = response;
  	console.log(data.avatar_url);
  	var image = "<img src='" + data.avatar_url + "'" + "width=" + "250px" + "height=" + "250px" + "img>";
	var link = "<a target='_blank' class='result-link' href='" + data.html_url + "'" + ">GitHub</a>";
  $("#profile-image").append(image,link);
 });
}
function getUserName() {
  userName = document.getElementById("userInput").value;
 //console.log(userName);
 getAll();
 
}

