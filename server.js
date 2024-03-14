const path = require('path')
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const hbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// app.use(
//     session({
//         secret: process.env.SECRET,
//         store: new SequelizeStore({ db: sequelize }),
//         resave: false,
//         saveUninitialized: false,
//     })
// );

app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
});