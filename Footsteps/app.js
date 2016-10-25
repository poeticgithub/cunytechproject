const express = require('express');
const app = express();
const footsteps = require('./controllers/footsteps');
const exphbs = require('express-handlebars');
var bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);


app.use('/', footsteps);
app.use('/walkers', footsteps);
app.use('/walker',footsteps);

module.exports = app;
app.listen(3000);
