var express = require('express');
import {ArtistController} from "../artist/index";
var router = express.Router();

router.get('/', function (req, res, next) {
    var users = new UserController();
    let username = req.param("username");
    if(users.isValidUser(username))
        res.json({id: users.isValidUser(username)})
});

router.get('/:username/favourites', function(req, res) {
    var artists = new ArtistController();
    res.json(artists.getFavourites());
})

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