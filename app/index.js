require('./main.css');

var component = require('./components'),
    app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component())
