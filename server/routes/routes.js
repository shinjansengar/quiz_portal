const express = require("express");
const User = require("../models/user");
const Question = require("../models/question");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    });

    if(existingUser){
        res.status(400).json({ message: "User already exist, please try login" });
    }else{
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });
        await user.save();
        res.status(201);
        res.json({
          token: "loggedIn",
          username: user.username,
        });
    }
  } catch (err) {
    res.status(400);
    res.send(err);
  }
});

router.post("/auth", async (req, res) => {
  try {
    const user = await User.findOne({
      $or: [{ username: req.body.id }, { email: req.body.id }],
    });
    if (user) {
      if (user.password === req.body.password) {
        res.status(200).json({
          message: "Authentication successful",
          token: "loggedIn",
          username: user.username,
        });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } catch (e) {
    res.status(400);
    res.send(e);
  }
});

router.post("/createquestion", async (req, res) => {
    try {
        const {questionId, questionText, optionA, optionB, optionC, optionD, correctOption } = req.body;
        const question = new Question({
            questionId,
            questionText,
            optionA,
            optionB,
            optionC,
            optionD,
            correctOption,
          });
        await question.save();
        res.status(201).json({ message: 'Question created successfully' });
    }catch(e){
        res.status(400);
        res.send(e);
    }
});

router.get('/quiz', async (req,res)=>{
    try{   
        const questions = await Question.find({}).limit(5);
        res.status(200).json(questions);
    }catch(e){
        res.status(400);
        res.send(e); 
    }
});

module.exports = router;
