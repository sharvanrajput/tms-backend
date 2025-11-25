import { Task } from "../models/task.model.js";

export const AddTask = async (req, res) => {
  try {
    const { title, description, priority, assignee, status } = req.body

    if ([title, description, priority, assignee, status].some(field => !field || field.trim() === "")) {
      return res.status(400).send({ success: false, message: `All fields are requried` });
    }

    const newtask = await Task.create({ title, description, priority, assignee, status })

    return res.status(201).send({ success: true, message: `Task Add successfully`, task: newtask });

  } catch (error) {
    return res.status(500).send({ success: false, message: `Internal Server Error: ${error.message}` });
  }
};

export const UpdateTask = async (req, res) => {
  try {

    const { id } = req.params
    const { title, description, priority, assignee, status } = req.body

    const updatedata = {}

    if (title) updatedata.title = title;
    if (description) updatedata.description = description;
    if (priority) updatedata.priority = priority;
    if (assignee) updatedata.assignee = assignee;
    if (status) updatedata.status = status;

    const updatedData = await Task.findByIdAndUpdate(id, updatedata)


    return res.status(200).send({ success: true, message: `Task Updated successfully`, task: updatedData });


  } catch (error) {
    return res.status(500).send({ success: false, message: `Internal Server Error: ${error.message}` });
  }
};


export const AllTask = async (req, res) => {
  try {

    const alldata = await Task.find()
    return res.status(200).send({ success: true, message: `Task Updated successfully`, tasks: alldata });

  } catch (error) {
    return res.status(500).send({ success: false, message: `Internal Server Error: ${error.message}` });
  }
};

export const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params
    const deleteData = await Task.findByIdAndDelete(id)
    return res.status(200).send({ success: true, message: `Task Updated successfully`, tasks: deleteData });

  } catch (error) {
    return res.status(500).send({ success: false, message: `Internal Server Error: ${error.message}` });
  }
};