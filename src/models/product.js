const path = require('path');
const fs = require('fs');
const model = {
    file: path.resolve(__dirname,'../data','listProducts.json'),
    read: () => fs.readFileSync(model.file),
    all: () => JSON.parse(model.read()),
    search: (field,value) => model.all().find(element => element[field] == value)
}

module.exports = model