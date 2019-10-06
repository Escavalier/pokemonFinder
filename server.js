//_____      _                                ______    _                _   ______ _           _
//|  __ \    | |                              |  ____|  (_)              | | |  ____(_)         | |
//| |__) |__ | | _____ _ __ ___   ___  _ __   | |__ _ __ _  ___ _ __   __| | | |__   _ _ __   __| | ___ _ __
//|  ___/ _ \| |/ / _ \ '_ ` _ \ / _ \| '_ \  |  __| '__| |/ _ \ '_ \ / _` | |  __| | | '_ \ / _` |/ _ \ '__|
//| |  | (_) |   <  __/ | | | | | (_) | | | | | |  | |  | |  __/ | | | (_| | | |    | | | | | (_| |  __/ |
//|_|   \___/|_|\_\___|_| |_| |_|\___/|_| |_| |_|  |_|  |_|\___|_| |_|\__,_| |_|    |_|_| |_|\__,_|\___|_|
//



// npm install express - https://www.npmjs.com/package/express
// npm install body-parser - https://www.npmjs.com/package/body-parser
// npm install path - https://www.npmjs.com/package/path






let pokemon = require("./data/pokemon");


module.exports = function(app) {
  // Return all pokemon found in pokemon.js as JSON
  app.get("/api/pokemon", function(req, res) {
    res.json(pokemon);

    console.log(__dirname);

  });

  app.post("/api/pokemon", function(req, res) {
    console.log(req.body.scores);

    // Receive user details (name, photo, scores)
    let user = req.body;

    // parseInt for scores
    for(let i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    let bestFriendIndex = 0;
    let minimumDifference = 40;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(let i = 0; i < pokemon.length; i++) {
      let totalDifference = 0;
      for(let j = 0; j < pokemon[i].scores.length; j++) {
        let difference = Math.abs(user.scores[j] - pokemon[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    pokemon.push(user);

    // send back to browser the best friend match
    res.json(pokemon[bestFriendIndex]);
  });
};