const express = require('express');

const laptops = require('./handlers/laptops');

const api = express();

api.use(express.json());

api.get('/api/laptops', laptops.getAll);
api.get('/api/laptops/:id', laptops.getOne);
api.post('/api/laptops', laptops.create);
api.put('/api/laptops/:id', laptops.update);
api.patch('/api/laptops/:id', laptops.updatePartial);
api.delete('/api/laptops/:id', laptops.remove);

api.listen(config.get('service').port, err => {
    if(err) return console.log(err);
    return console.log(`Server started on port ${config.get('service').port}`);
});