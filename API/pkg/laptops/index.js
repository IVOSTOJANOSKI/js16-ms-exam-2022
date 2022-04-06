const mongoose = require('mongoose');

const Laptop = mongoose.model(
    'laptops',
    {
        brand: String,
        model: String,
        cpu_cores: Number,
        disk: String,
        price: Number
        stores: Array,
        num_ports: Number,
        created: Date
    }
    'laptops'
);

const addLaptop = async (laptop) => {
    let la =new Laptop(laptop);
    return await la.save();
};

const removeLaptop = async (id) => {
    return await Laptop.deleteOne({_id: id});
};

const updateLaptop = async( id, laptop) =>{
    return await Laptop.updateOne({_id: id}, laptop);
};

const getAllLaptops = async () => {
    return await Laptop.find({});
};

const getOne = async (id) => {
    return await Laptop.findOne({_id: id});
};

module.exports = {
    addLaptop,
    removeLaptop,
    updateLaptop,
    getAllLaptops,
    getOne
};