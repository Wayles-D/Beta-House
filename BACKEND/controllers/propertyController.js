const Property = require('../models/Property');
const mongoose = require('mongoose');

// get all properties
const getProperties = async (req, res) => {
    const properties = await Property.find({}).sort({ createdAt: -1 });

    res.status(200).json(properties);
}

// get a single property
const getProperty = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such property' });
    }

    const property = await Property.findById(id);

    if (!property) {
        return res.status(404).json({ error: 'No such property' });
    }

    res.status(200).json(property);
}

// create a new property
const createProperty = async (req, res) => {
    const { image, title, location, price, bedrooms, bathrooms, tag, featured } = req.body;

    let emptyFields = [];

    if (!image) {
        emptyFields.push('image')
    }
    if (!title) {
        emptyFields.push('title')
    }
    if (!location) {
        emptyFields.push('location')
    }
    if (!price) {
        emptyFields.push('price')
    }
    if (!bedrooms) {
        emptyFields.push('bedrooms')
    }
    if (!bathrooms) {
        emptyFields.push('bathrooms')
    }
    if (!tag) {
        emptyFields.push('tag')
    }
    if (featured === undefined) {
        emptyFields.push('featured')
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    // add doc to db
    try {
        const property = await Property.create({ image, title, location, price, bedrooms, bathrooms, tag, featured });
        res.status(200).json(property);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete a property
const deleteProperty = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such property' });
    }

    const property = await Property.findOneAndDelete({ _id: id });

    if (!property) {
        return res.status(404).json({ error: 'No such property' });
    }

    res.status(200).json(property);
}

// update a property
const updateProperty = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such property' });
    }

    const property = await Property.findOneAndUpdate({ _id: id }, {
        ...req.body
    });

    if (!property) {
        return res.status(404).json({ error: 'No such property' });
    }

    res.status(200).json(property);
}

module.exports = {
    getProperties,
    getProperty,
    createProperty,
    deleteProperty,
    updateProperty
}
