/*
** GET requests
 */

module.exports.index = function (req, res) {
    console.log('Pulling main layout: layout.jade');
    res.render('layout');
};

module.exports.partials = function (req, res) {
    var name = req.params.name;
    console.log('Pulling partial: partials/' + name);
    res.render('partials/' + name);
};