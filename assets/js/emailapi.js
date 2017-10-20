// This Function is called when you submit the contact form
function submitContact() {
  //Hey Again,
  // This is our email API for our company
  // You need to be registered to use it,
  // and i registered you so you can now receive emails
  var yuki_URL = "http://redcarpet-thegate.herokuapp.com/emails";
  //This is the email i registered you with, you have to notify me before you change it
  var yuki_target_email = "oussama.hamidi@esprit.tn";
  // this is the content of the email you will receive,
  // Change this if you're not using JQuery :p
  var yuki_email = {
    to: yuki_target_email,
    'from': document.getElementById('email').value,
    'subject': document.getElementById('nom').value,
    'content': document.getElementById('message').value
  };
  // your username is the username i registered you with
  // the target is a special variable for security reasons
  // Don't forget to ask me for your username
  var yuki_data = {
    'to': yuki_email.to,
    'from': yuki_email.from,
    'subject': yuki_email.subject,
    'content': yuki_email.content,
    'target': 'app',
    'username': 'sirrouss'
  }
  //This function will execute as soon as the email is sent
  // Status 200 is the API response for success
  // anything else will be printed in the console so you can see the error
  function yuki_callback(res) {
    if (res.status == 200) {
      alert("Email Sent, Thank you");
    } else {
      alert("An Error has occured please retry");
      console.log(res);
    }
  }
  $.post(yuki_URL, yuki_data, yuki_callback);
}

// the API goes to sleep after 30 minutes of inactivity
// this is a trick to wake it up
$.get('http://redcarpet-thegate.herokuapp.com/emails', function () {
});
