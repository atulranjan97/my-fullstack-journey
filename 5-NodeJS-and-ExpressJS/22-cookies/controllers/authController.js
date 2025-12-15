exports.getLogin = (req, res, next) => {
    res.render('auth/login', {pageTitle: 'Login', isLoggedIn: false});
}

// set the cookie on successful login. See it in storage and also on the next request.
exports.postLogin = (req, res, next) => {
    // console.log(req.body);
    res.cookie('isLoggedIn', true);
    res.redirect('/');
}

exports.postLogout = (req, res, next) => {
    // console.log(req.body);
    res.cookie('isLoggedIn', false);
    res.redirect('/');
}



// suppose koi request server par aa gayi, ab server par bahut middleware hai jo ek ke baad ek chal rahien hai, toh hum kisi bhi point par agar koi information aisi hai jo hum dalna chah rahien hai jo aage chalke jitne bhi middleware hai unke kaam aa jaye toh hum req object me directly daal sakte hai and baki middleware usko access kar sakte hai.
// kisi bhi request object me hum kuch bhi variable save kar sakte hai jo hum aage kitni baar bhi usko use kar sakta hai between other middlewares.