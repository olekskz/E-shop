const session = require('express-session');
const express = require('express');
const addProductController = require('./controllers/addProductController');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const productsController = require('./controllers/productsController');
const registerLoginController = require('./controllers/authController');
const { ExtractJwt } = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy;
const passport = require('passport');
const {User} = require('./models');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: 'lax',
            httpOnly: true,
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findOne({ where: { id: jwt_payload.id } });
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}));


app.use('/addProduct', addProductController);
app.use('/products', productsController);
app.use('/auth', registerLoginController);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});