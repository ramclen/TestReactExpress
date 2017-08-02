import assert from 'assert';
import {UserController} from '../../routes/users/index';

describe('Users', function () {
    describe('Login', function () {
        it('should return true if it is a correct username', function () {
            assert.ok(new UserController().isValidUser('juan'));
        });

        it('should return id if it is a correct username', function () {
            assert.equal(1, new UserController().getID('juan'));
        });
    });
});