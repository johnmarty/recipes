exports.login = function(req, res){
  // get draws the form
  res.render('login.ejs', {
    title: "Login",
    subtitle: "please enter your username and password"
  });
}
exports.loginAuthenticate = function(req, res){
  // get draws the form
  res.render('login-authenticate.ejs');
}


