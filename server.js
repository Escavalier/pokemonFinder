//_____      _                                ______    _                _   ______ _           _
//|  __ \    | |                              |  ____|  (_)              | | |  ____(_)         | |
//| |__) |__ | | _____ _ __ ___   ___  _ __   | |__ _ __ _  ___ _ __   __| | | |__   _ _ __   __| | ___ _ __
//|  ___/ _ \| |/ / _ \ '_ ` _ \ / _ \| '_ \  |  __| '__| |/ _ \ '_ \ / _` | |  __| | | '_ \ / _` |/ _ \ '__|
//| |  | (_) |   <  __/ | | | | | (_) | | | | | |  | |  | |  __/ | | | (_| | | |    | | | | | (_| |  __/ |
//|_|   \___/|_|\_\___|_| |_| |_|\___/|_| |_| |_|  |_|  |_|\___|_| |_|\__,_| |_|    |_|_| |_|\__,_|\___|_|
//

// server.js

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 4000, function(){
  console.log('Your node js server is running');
});