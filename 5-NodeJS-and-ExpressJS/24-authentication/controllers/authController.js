exports.getLogin = (req, res, next) => {
    res.render('auth/login', {pageTitle: 'Login', isLoggedIn: false});
}

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {pageTitle: 'Signup', isLoggedIn: false});
}

// set the cookie on successful login. See it in storage and also on the next request.
exports.postLogin = (req, res, next) => {
    // console.log(req.body);
    req.session.isLoggedIn = true;
    res.redirect('/');
}
// abhi hum session mein store kar rahien hai toh ab aage har request mein jo humne ye add kiya hai app.use(session(...)) app.js mein, ye middleware ke paas jo bhi cookie me session id aayegi us session id ke related jo bhi session hai usko nikal kar ye req.session ke ander save kar raha hoga. Toh ab jaha-jaha bhi humein isko access karna hai hum directly `req.session.isLoggen` in mein check kar sakte hai.


exports.postSignup = (req, res, next) => {
    console.log('User came for signup: ', req.body);
    res.redirect('/login');
}

exports.postLogout = (req, res, next) => {
    // console.log(req.body);
    req.session.destroy();      // delete the current session from whereever it is stored(in our cases we have stored session in mongodb)
    res.redirect('/');
}



// suppose koi request server par aa gayi, ab server par bahut middleware hai jo ek ke baad ek chal rahien hai, toh hum kisi bhi point par agar koi information aisi hai jo hum dalna chah rahien hai jo aage chalke jitne bhi middleware hai unke kaam aa jaye toh hum req object me directly daal sakte hai and baki middleware usko access kar sakte hai.
// kisi bhi request object me hum kuch bhi variable save kar sakte hai jo hum aage kitni baar bhi usko use kar sakta hai between other middlewares.

// 01:07:17