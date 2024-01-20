class NewsController {
  // [GET] /news
  index(req, res) {
    res.render('news')
  }
  show() {
    res.send('NEWS DETAIL')
  }
}

module.exports = new NewsController()
