const getDb = require("../db/index").getDb;
const { response } = require("express");
const { ObjectId } = require("mongodb");

const getAll = async (req, res) => {
  const db = getDb();
  db.collection("contact")
    .find()
    .toArray()
    .then((contacts) => {
      res.status(200).json(contacts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred" });
    });
};

const getSingle = async (req, res) => {
  const { id } = req.params;
  const db = getDb();
  db.collection("contact")
    .findOne({ _id: new ObjectId(id) })
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({ message: "Contact not found" });
      }
      res.status(200).json(contact);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "An error occurred" });
    });
};

const createContact = async (req, res) => {
  const db = await getDb();
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  const response = await db.collection("contact").insertOne(contact);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res
      .status(500)
      .json(
        response.error || "Some error occurred while creating the contact."
      );
  }
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const db = getDb();
  const contact={
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
}
  // use updateOne method and $set operator
  const response = await db.collection("contact")
    .updateOne({ _id: new ObjectId(id) }, { $set:contact });
  console.log(response);
  if (response.matchedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error ||"Some error occurred while updating the contact."
      );
  }
};


//req.params.id +req.body.firstName+req.body.lastName+req.body.email+req.body.favoriteColor+req.body.birthday

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const db = getDb();
  //const userId = new ObjectId(req.params.id);
  db.collection("contact")
    .deleteOne({ _id: new ObjectId(id) }, true)
    .then((response) => {
      console.log(response);
      if (response.deletedCount > 0) {
        res.status(200).send();
      } else {
        res
          .status(500)
          .json(
            response.error || "Some error occurred while deleting the contact."
          );
      }
    });
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};
