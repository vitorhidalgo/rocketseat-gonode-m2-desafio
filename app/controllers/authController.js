const bcryptjs = require('bcryptjs');
const { User } = require('../models');

module.exports = {
  signin(req, res) {
    return res.render('auth/signin');
  },

  signup(req, res) {
    return res.render('auth/signup');
  },

  async register(req, res, next) {
    try {
      const { email } = req.body;

      if (await User.findOne({ where: { email } })) {
        return res.redirect('back');
      }

      const password = await bcryptjs.hash(req.body.password, 5);

      await User.create({ ...req.body, password });

      return res.redirect('/');
    } catch (err) {
      return next(err);
    }
  },
};
