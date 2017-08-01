var express = require('express');
var router = express.Router();

router.get('/:username/artists', function(req, res) {
    res.json(req.param("username"));
});

router.get('/', function (req, res, next) {
    var users = new UserController();
    let username = req.param("username");
    if(users.isValidUser(username))
        res.json({id: users.isValidUser(username)})
});

class UserController {
    constructor() {
    }

    getID(username) {
        return 1;
    }

    isValidUser(username) {
        return true;
    }
}
;

export default router;
export {UserController};