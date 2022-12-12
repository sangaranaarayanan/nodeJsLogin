const cors = require('cors');

const { authenticate } = require('../controllers/authController');
const { authorizeUser } = require('../controllers/authorizeController');


module.exports = (app) => {

    app.route('/home').post(authenticate,cors());
    app.route('/register').post(authenticate,authorizeUser,cors());

}