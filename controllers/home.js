/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: res.__('Coronavirus Test'),
    testMessage: res.__('This is a test message')
  });
};
