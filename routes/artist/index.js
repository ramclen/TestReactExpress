var express = require('express');
var router = express.Router();

router.get('/:idArtist/info', function (req, res) {
    var artists = new ArtistController();
    res.json(artists.getArtist(req.param("idArtist")));
});

class ArtistController {
    getGroups(userID) {
        return [new Artist()];
    }

    getArtist(idArtist) {
        let result = ARTISTS.filter(artist => artist.id == idArtist);
        if(result.length===0)
            throw Error("Artist not found", 404);
        return result[0];
    }

    getFavourites(){
        return ARTISTS.map(artist =>{
            return {name: artist.name, image: artist.image, id: artist.id};
        })
    }
}

class Artist {
    constructor(name, id, image, albums) {
        this.name = "Artist name";
        this.id = 1;
        this.image = "url";
        this.albums = [];
    }
}
const ARTISTS = [
    {id: 1, name: "Iron Maiden",     albums: ["World Slavery Tour", "The Final Frontier World Tour", "The Beast on the Road"], image: "http://ironmaiden.com/media/news/thumbnail/893826.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec luctus metus. Etiam nulla tellus, fermentum sit amet risus at, tristique volutpat augue. Donec lacinia leo quis nunc venenatis, sit amet viverra velit mattis. Maecenas at venenatis mauris. In placerat sem sagittis ipsum sagittis, vitae ultrices nisl faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque aliquam velit sit amet ante maximus, quis placerat sem convallis. Vivamus cursus nec ligula nec cursus. Maecenas pellentesque venenatis sollicitudin. Morbi a elementum orci, dapibus tincidunt felis."},
    {id: 2, name: "Guns N' Rose",    albums: ["Appetite for Destruction", "G N' R Lies", "Chinese Democracy"], image: "http://cdn.gunsnroses.com/site/chamber-logo.png", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec luctus metus. Etiam nulla tellus, fermentum sit amet risus at, tristique volutpat augue. Donec lacinia leo quis nunc venenatis, sit amet viverra velit mattis. Maecenas at venenatis mauris. In placerat sem sagittis ipsum sagittis, vitae ultrices nisl faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque aliquam velit sit amet ante maximus, quis placerat sem convallis. Vivamus cursus nec ligula nec cursus. Maecenas pellentesque venenatis sollicitudin. Morbi a elementum orci, dapibus tincidunt felis."},
    {id: 3, name: "Michael Jackson", albums: ["Forever, Michael", "Thriller", "Invincible"], image: "http://img.wennermedia.com/article-leads-horizontal/rs-15894-20140624-mj-x1800-1403632735.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec luctus metus. Etiam nulla tellus, fermentum sit amet risus at, tristique volutpat augue. Donec lacinia leo quis nunc venenatis, sit amet viverra velit mattis. Maecenas at venenatis mauris. In placerat sem sagittis ipsum sagittis, vitae ultrices nisl faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque aliquam velit sit amet ante maximus, quis placerat sem convallis. Vivamus cursus nec ligula nec cursus. Maecenas pellentesque venenatis sollicitudin. Morbi a elementum orci, dapibus tincidunt felis."},
    {id: 4, name: "Metallica",       albums: ["Metallica", "Load", "Master of Puppets"], image: "http://surlybrewing.com/content/uploads//2016/11/metallica2.jpg", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec luctus metus. Etiam nulla tellus, fermentum sit amet risus at, tristique volutpat augue. Donec lacinia leo quis nunc venenatis, sit amet viverra velit mattis. Maecenas at venenatis mauris. In placerat sem sagittis ipsum sagittis, vitae ultrices nisl faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque aliquam velit sit amet ante maximus, quis placerat sem convallis. Vivamus cursus nec ligula nec cursus. Maecenas pellentesque venenatis sollicitudin. Morbi a elementum orci, dapibus tincidunt felis."}
];

export default router;
export {ArtistController, Artist};