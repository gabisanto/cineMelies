const path = require('path');
const fs = require('fs');
const model = {
    file: path.resolve(__dirname,'../data','listProducts.json'),
    read: () => fs.readFileSync(model.file),
    all: () => JSON.parse(model.read()),
    write: data => fs.writeFileSync(model.file, JSON.stringify(data,null,2)),
    search: (field,value) => model.all().find(element => element[field] == value),
    delete: id =>{
        let deleted = model.all().filter(e => e.id != id)
        model.write(deleted)
        return true
    }
}

module.exports = model