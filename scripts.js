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
  	var altImage = "<p>If u find your profile picture a bit boring<br> check this unique adorable one out!!</p><a target='_blank' href='https://api.adorable.io/avatars/200/" + userName + ".png'" + "><img src='https://api.adorable.io/avatars/200/" + userName + ".png' img></a>"
  	var image = "<p>hello " + data.name + "!!</p><a target='_blank' href='" + data.html_url + "'" + "><img src='" + data.avatar_url + "' img></a>";
	var folowers = "<p>you follow " + data.following +" users and you have "+data.followers+" users interested in your "+ data.public_repos + " repositories</p><p>you'r located in " + data.location +"</p>"
  $("#profile").empty().append(image,folowers,altImage);
  	console.log(data);
 });
}
function getUserName() {
  userName = document.getElementById("userInput").value;
   getAll();
}

