const path = require('path');
const fs = require('fs');
const { create } = require('domain');
const model = {
    file: path.resolve(__dirname,'../data','listProducts.json'),
    read: () => fs.readFileSync(model.file),
    //write:data => fs.writeFileSync(model.file,JSON.stringify(data,null,2)),
    all: () => JSON.parse(model.read()),
    generate: data => Object({
        id: model.all().lenght == 0 ? 1 : model.all().pop().id + 1,
        productType: data.productType,
        productName: data.productName ,
        productLink: data.productLink,
        productDescription: data.productDescription,
        filmCategory: data.filmCategory,
        filmGenre: data.filmGenre,
        salasCine: data.salasCine,
        diasCartel: data.diasCartel,
        timeScheduled: data.timeScheduled,
        filmFormat: data.filmFormat,
        filmAudio: data.filmAudio,
        priceInput: data.priceInput, 
        ageRestriction:data.ageRestriction,
        createImage:data.createImage,
    }),
   
    create:data => {
        let newProduct = model.generate(data);
        let all = model.all();
        all.push(newProduct);
        model.write(all)
        return newProduct
    }
     
}


module.exports = model