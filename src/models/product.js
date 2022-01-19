const path = require('path');
const fs = require('fs');
const { create } = require('domain');
const model = {
    file: path.resolve(__dirname,'../data','listProducts.json'),
    read: () => fs.readFileSync(model.file),
    all: () => JSON.parse(model.read()),
    write: data => fs.writeFileSync(model.file, JSON.stringify(data,null,2)),
    
    delete: id =>{
        let deleted = model.all().filter(e => e.id != id)
        model.write(deleted)
        return true},
    search: (field,value) => model.all().find(element => element[field] == value),
    write: (data) => fs.writeFileSync(model.file, JSON.stringify(data,null,2)),

    update: (id,data) => {
        let all = model.all();
        let updated = all.map(e => {
            if(e.id == id) {
                
                e.productName = data.productName
                e.producLink = data.producLink
                e.productDescription = data.productDescription
                e.filmCategory = data.filmCategory
                e.filmGenre = data.filmGenre
                e.salasCine = data.salasCine
                e.diasCartel = data.diasCartel
                e.timesScheduled = data.timesScheduled
                e.filmFormat = data.filmFormat
                e.filmAudio = data.filmAudio
                e.priceInput = data.priceInput
                e.ageRestriction = data.ageRestriction
                
                return e
            }
            return e ; 

        })
        model.write(updated) 
        let producto = model.search("id", id)
        return producto

    }
}

module.exports = model