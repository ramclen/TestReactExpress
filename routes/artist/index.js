var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/:idArtist/info', function(req, res) {
  res.json(new Artist("", "", "", ""));
});

class ArtistController{

    getGroups(userID) {
      return [new Artist()];
    }
}

class Artist{
  constructor(name, id, image, albums){
      this.name= "Artist name";
      this.id= 1;
      this.image= "url";
      this.albums= [];
  }
}

export default router;
export {ArtistController, Artist};