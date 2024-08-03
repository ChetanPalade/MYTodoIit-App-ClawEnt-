const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//Create

router.post("/todos", async (req,res) => {
  try {
    const {title, body, id} = req.body;
    const existingUser = await User.findById({ id });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser});
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list)
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

// getTodos

router.get("/todos/:id", async (req, res) => {
  const list = await List.find({ user: req.params.id}).sort({ createdAt: -1});
  if (list.length !== 0) {
    res.status(200).json({ list: list});
  } 
  else {
    res.status(200).json({ message: "NO TASK"});
  }
})


//update

router.put("/updatetodos/:id", async (req,res) => {
    try {
      const { title, body,} = req.body;
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      list.save().then(() => res.status(200).json({ message:"TASK UPDATED"}));
    } catch (error) {
      console.log(error);
    } 
});

//delete

router.delete("/deletetodos/:id", async (req, res) => {
  try {
    const { email_id} = req.body;
    const existingUser = await User.findByIdAndUpdate(
        id, { $pull: { lit: req.params.id }}
    );
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() => 
        res.status(200).json({ message: "Task Deleted"})
      );
    } 
  } catch (error) {
    console.log(error)
  }

});

module.exports = router;
