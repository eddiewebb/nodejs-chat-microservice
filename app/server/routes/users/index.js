const express = require('express');

const router = express.Router();

module.exports = (params, redirectIfLoggedIn) => {
  router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  router.get('/signup', redirectIfLoggedIn, (req, res) =>
    res.render('pages/signup', {
      success: req.query.success,
      error: req.query.error,
    })
  );

  router.post('/signup', async (req, res, next) => {
    const { user } = params;
    console.log(user)
    try {
      const savedUser = await user.signup(req.body.username, req.body.password);
      console.log("User saved")
      if (savedUser && savedUser.singup) return res.redirect('/?success=true');
      return res.redirect('/users/signup?error=true');
    } catch (err) {
      console.log("Error")
      console.log(err)
      return next(err);
    }
  });

  return router;
};
