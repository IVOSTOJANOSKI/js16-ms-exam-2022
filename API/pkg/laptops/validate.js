const {Validator} = require('node-input-validator');

const Laptop = {
    brand: 'required|string',
    model: 'required|string',
    cpu_cores: 'required|integer',
    disk: 'required|string',
    price: 'required|string',
    stores: 'required|[string]',
    num_ports: 'required|integer',
    created: 'required|date'
};

const LaptopPartial = {
    brand: 'string',
    model: 'string',
    cpu_cores: 'integer',
    disk: 'string',
    price: 'string',
    stores: '[string]',
    num_ports: 'integer',
    created: 'date'

};

const validate = async (data, schema) =>{
    let v = new Validator(data, schema);
    let e = await v.check();
    if(!e) {
        throw v.errors;
    }
};

module.exports ={
    Laptop,
    LaptopPartial,
    validate
};