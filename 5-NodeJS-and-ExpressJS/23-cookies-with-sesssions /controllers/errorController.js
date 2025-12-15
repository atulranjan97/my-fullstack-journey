exports.get404 = (req, res, next) => {
    res.statusCode = 404;
    // res.sendFile(path.join(rootDir, 'views', '404.html'));

    res.render('404', {pageTitle: 'Page Not Found', isLoggedIn: req.session.isLoggedIn});
}