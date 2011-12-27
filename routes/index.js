
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'What does your name mean?' })
};
