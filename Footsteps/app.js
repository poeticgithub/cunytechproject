
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const exphbs = require('express-handlebars');
const expressSession = require('express-session');
const flash = require('connect-flash');
const models = require('./models/');
const passport = require('./middlewares/authentication');
const methodOverride = require('method-override');

const app = express();

app.use(methodOverride('_method'));
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

models.sequelize.sync().then(() => {
  app.listen(3000);
});
