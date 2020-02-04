const db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(docs => res.json(docs));
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(docs => res.json(docs));
  });

  app.post("/api/workouts", (req, res) => {
    const workout = { exercises: [] };
    db.Workout.create(workout)
      .then(doc => res.json(doc))
      .catch(err => res.json(err));
  });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.updateOne(
      { _id: req.params.id },
      {
        $push: { exercises: req.body }
      }
    )
      .then(doc => res.json(doc))
      .catch(err => res.json(err));
  });
};
