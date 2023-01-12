const express = require('express');
const router = express.Router();
const getDb = require('../db/index').getDb;
const { ObjectId } = require('mongodb');

router.get('/', (req, res) => {
    const db = getDb();
    db.collection("contact")
        .find()
        .toArray()
        .then(contacts => {
            res.status(200).json(contacts);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "An error occurred" });
        });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;
    const db = getDb();
    db.collection("contact")
        .findOne({ _id: new ObjectId(id) })
        .then(contact => {
            if (!contact) {
                return res.status(404).json({ message: 'Contact not found' });
            }
            res.status(200).json(contact);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "An error occurred" });
        });
});


module.exports = router;
