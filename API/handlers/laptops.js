const laptops = require('../pkg/laptops');
const laptopsMongo = require('../pkg/laptops/mongo');

const getAll = async (req, res) => {
    try {
        let ls = await laptopsMongo.getAllLaptops();
        return res.status(200).send(cs);  
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
};

const create = async (req, res) => {
    try {
        let l = await laptopsMongo.addLaptop(req.body);
        return res.status(201).send(c);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal Server Error');
    }
};

const update = async (req, res) => {
    try {
        await laptopsMongo.updateLaptop(req.params.id, req.body);
        return res.status(204).send("");
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal Server Error');      
    }
};

const updatePartial = async (req, res) =>{
    try {
        await laptopsMongo.updateLaptop(req.params.id, req.body);
        return res.status(204).send("");
    } catch (error) {
        console.log(err)
        return res.status(500).send('Internal Server Error');   
    }
};