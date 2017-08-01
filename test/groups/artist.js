import assert from 'assert';
import {ArtistController, Artist} from "../../routes/artist/index"

describe('Artist Groups', function () {
    it('should return array with a user-id', function () {
        var groups = new ArtistController().getGroups(1);
        assert.ok(Array.isArray(groups));
    });

    it('should return a valid artist json with a user-id', function () {
        var groups = new ArtistController().getGroups(1);
        console.log(groups[0]);
        assert.ok(groups[0] instanceof Artist);
    });
});