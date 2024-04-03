const Joi = require('joi');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  description: {
    type: String,
    minLength: 5,
    maxLenght: 255,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

const Task = new mongoose.model('Task', taskSchema);

function validateTask(task) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    description: Joi.string().min(5).max(255),
    completed: Joi.boolean(),
  });
  return schema.validate(task);
}

exports.Task = Task;
exports.validate = validateTask;
