const { Task, validate } = require('../models/task');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await Task.find().sort('title');
  res.send(tasks);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let task = new Task({
    title: req.body.title,
    description: req.body.description,
  });
  res.send(task);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const task = await Task.finbdByIdAndUpdate(
    req.params.id,
    { title: req.body.title, description: req.body.description },
    { new: true }
  );
  if (!task)
    return res.status(400).send('The task with the given ID was not found.');
  res.send(task);
});

router.delete('/:id', async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task)
    return res.status(404).send('The task with the given ID was not found.');
  res.send(task);
});

router.get('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task)
    return res.status(404).send('The task with the given ID was not found.');
  res.send(task);
});
module.exports = router;
