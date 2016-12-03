var userName;

var data;

function getAll(){
$.ajax({
 method: "GET",
 url: "https://api.github.com/users/" + userName,
})
 .done(function(response) {
  	data = response;
  	console.log(data.avatar_url);
  	
  	var image = "<p>hello " + data.name + "!!</p><a target='_blank' href='" + data.html_url + "'" + "><img src='" + data.avatar_url + "'" + "width=" + "250px" + "height=" + "250px" + "img></a>";
	var folowers = "<p>you follow " + data.following +" users and you have "+data.followers+" users interested in your "+ data.public_repos + " repositories</p><p>you'r located in " + data.location +"</p>"
  $("#profile").empty().append(name,image,folowers);
  	console.log(data);
 });
}
function getUserName() {
  userName = document.getElementById("userInput").value;
   getAll();
}

