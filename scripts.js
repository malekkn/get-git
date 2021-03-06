
var data;
// ----------------------------request functions----------------------------
function getAll(){
	$.ajax({
	 method: "GET",
	 url: "https://api.github.com/users/" + userName,
	})
	.done(function(response) {
	  	data = response;
	  	setTimeout(function() { populatingDOM(); }, 2000);
	  	
	});
	$(document).ajaxError(function(event, request, settings) {
		console.log(request);
		var errorMessage = `
		<h1>${request.status}  ${request.statusText} sorry </h1>
		<a target='_blank' href='${request.responseJSON.documentation_url}'>
		for more info click here</a>`;
		$("#profile").empty().append(errorMessage);
		hideElement("loader","wrapper");
	});	
}

function getRepos(){
	$.ajax({
	 method: "GET",
	 url: data.repos_url,
	})
	.done(function(repositories) {
		data.namesOfRrpositories = repositories;
	});
}
// --------------------------populating functions------------------------------
function populatingDOM () {

  	var image = `
  		<p>hello ${data.name} !!</p>
		<a target='_blank' href='${data.html_url}'>
		<img src='${data.avatar_url}' img></a>`;
	var info = `
		<p>you'r located in ${data.location} </p>
		<p>you follow ${data.following} users and you have ${data.followers} users interested in your ${data.public_repos}  
		<a href="#" onclick="writeNames()" title="list of the repositories.">repositories</p></a>
		<ul id="list"></ul>`;
	var altImage = `
		<p>If u find your profile picture a bit boring<br>check this unique adorable one out!!</p>
		<a target='_blank' href='https://api.adorable.io/avatars/200/${userName}.png'>
		<img src='https://api.adorable.io/avatars/200/${userName}.png' img>
		</a>`;
	hideElement("loader","wrapper");
	$("#profile").empty().append(image,info,altImage);
  	getRepos();
  	console.log(data);
}

function writeNames(){
	$("#list").empty().append("<p>wich are :</p>");
	for (var i = 0; i < data.public_repos; i++) {
		var listEl = `<li>${data.namesOfRrpositories[i].name}</li>`
		$("#list").append(listEl);
		console.log(data.namesOfRrpositories[i].name);
	}
}
//------------------------------gets the user input ------------------------------
function getUserName() {
	userName = document.getElementById("userInput").value;
	$("#profile").empty();
	showElement("loader","wrapper");
	getAll();
	
}
//----------------------------loader functions----------------------------
function hideElement (x,y) {
	document.getElementById(x).style.display = "none";
	document.getElementById(y).style.height = "auto";
}

function showElement (x,y) {
	document.getElementById(x).style.display = "block";
	document.getElementById(y).style.height = "210px";
}