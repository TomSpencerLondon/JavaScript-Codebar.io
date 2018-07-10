// github user finder example

$(document).ready(function() {
  $(document).on('keypress', '#username', function() {
    if (event.which === 13) { // check the key was <enter>
      // do something
      var input = $(this);
      var username = input.val();

      console.log('Information for the username is: ', getGithubInfo(username));
    }
  });
});

function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  var data = xmlhttp.responseText;

  console.log(data);
  showUser(xmlhttp);
}

function showUser(xmlhttp) {
  if(xmlhttp.status === 200) {
    // show the user details
    var json = xmlhttp.responseText;
    var user = JSON.parse(json);
    console.log(user.login);
    $('#profile h2').append(user.login + ' is GitHub user #' + user.id);
    $('#profile .information').append('<a class="profile" href="' + user.html_url + '"></a>')
    $('#profile .avatar').append('<img src="' + user.avatar_url + '"/>')
  } else {
    // show an error
    console.log("Error");
  }
}