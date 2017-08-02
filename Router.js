import users from './routes/users/index';
import artist from './routes/artist/index';
import index from './routes/index';

const routes = {
    '': index,
    users: users,
    artist: artist,
};

const errors ={
    notFound: NotFoundHandler,
    errorHandler: ErrorHandler
}

export default class Router {
    static run(app) {
        this.addRoutes(app);
        this.addErrors(app);
    }

    static addRoutes(app) {
        Object.keys(routes).forEach(key => {
            app.use('/api/' + key, routes[key])
        });
    }

    static addErrors(app) {
        Object.keys(errors).forEach(key => {
            app.use(errors[key]);
        });
    }
}

//  --------------------
//  Basic Error handlers
//  --------------------
function NotFoundHandler(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
};

function ErrorHandler(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
};