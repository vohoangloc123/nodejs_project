class SignUpController {
  // [GET] /news
  signUp(req, res) {
    res.render('form/signup');
  }
}

module.exports = new SignUpController();
