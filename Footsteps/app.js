const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const expressSession = require('express-session');
const flash = require('connect-flash');
const models = require('./models/');
const passport = require('./middlewares/authentication');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession(({ cookie: { maxAge: 60000 }, secret: 'keyboard', resave: false, saveUninitialized: true })));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('./public'));



app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);


app.use(require('./controllers'))


module.exports = app;

models.sequelize.sync().then(() => {
  app.listen(3000);
});
