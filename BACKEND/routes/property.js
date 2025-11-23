const express = require('express');
const {
    createProperty,
    getProperties,
    getProperty,
    deleteProperty,
    updateProperty
} = require('../controllers/propertyController');

const router = express.Router();

// GET all properties
router.get('/', getProperties);

// GET a single property
router.get('/:id', getProperty);

// POST a new property
router.post('/', createProperty);

// DELETE a property
router.delete('/:id', deleteProperty);

// UPDATE a property
router.patch('/:id', updateProperty);

module.exports = router;
