const express = require('express');
const router = express.Router();
const connection = require('../../modules/dbconect');


router.post('/', async (req, res) => {
    const { users_id, consultation_date, blood_type, known_diseases, allergies, treatment } = req.body;

    try {
        if (!users_id || !consultation_date) {
            return res.status(400).json({ error: "User ID and consultation date are required" });
        }

        var query = 'INSERT INTO medical_history (users_id, consultation_date, blood_type, known_diseases, allergies, treatment) VALUES (?, ?, ?, ?, ?, ?)';
        connection.query(query, [users_id, consultation_date, blood_type, known_diseases, allergies, treatment], (err, results) => {
            if (err) {
                console.log("ERROR " + err.message);
                return res.status(500).json({ error: err.message });
            }
            if (results.affectedRows > 0) {
                res.status(201).json('Medical history record successfully created');
            } else {
                res.status(404).json('Medical history record could not be created');
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
