const Product = require('./model/product');

class FakeDb {
  constructor() {
    this.products = [
      {
        cover: './assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'Phone XL',
        heading2: 'Phone XL2',
        heading3: 'Phone XL3',
        headingTxt1: 'サンプルテキスト1サンプルテキスト1サンプルテキスト1サンプルテキスト1サンプルテキスト1',
        headingTxt2: 'サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2',
        headingTxt3: 'サンプルテキスト3サンプルテキスト3サンプルテキスト3サンプルテキスト3サンプルテキスト3',
      },
      {
        cover: './assets/img/phone-cover.jpg',
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'Phone Mini',
        heading2: 'Phone Mini2',
        heading3: 'Phone Mini3',
        headingTxt1: 'サンプルテキスト1サンプルテキスト1サンプルテキスト1サンプルテキスト1サンプルテキスト1',
        headingTxt2: 'サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2',
        headingTxt3: 'サンプルテキスト3サンプルテキスト3サンプルテキスト3サンプルテキスト3サンプルテキスト3',
      },
      {
        cover: './assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'Phone Standard',
        heading2: 'Phone Standard2',
        heading3: 'Phone Standard3',
        headingTxt1: 'サンプルテキスト1サンプルテキスト1サンプルテキスト1サンプルテキスト1サンプルテキスト1',
        headingTxt2: 'サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2',
        headingTxt3: 'サンプルテキスト3サンプルテキスト3サンプルテキスト3サンプルテキスト3サンプルテキスト3',
      },
      {
        cover: './assets/img/phone-cover.jpg',
        name: 'Phone X',
        price: 299,
        description: '',
        heading1: 'Phone X',
        heading2: 'Phone X2',
        heading3: 'Phone X3',
        headingTxt1: 'サンプルテキスト1サンプルテキスト1サンプルテキスト1サンプルテキスト1サンプルテキスト1',
        headingTxt2: 'サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2サンプルテキスト2',
        headingTxt3: 'サンプルテキスト3サンプルテキスト3サンプルテキスト3サンプルテキスト3サンプルテキスト3',
      }
    ]
  }

  pushProductsToDb() {
    //console.log('pushProductsToDb');
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    })
  }

  async initDb() {
    //console.log('initDb');
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    //console.log('cleanDb')
    await Product.deleteMany({});
  }

  seeDb() {
    this.pushProductsToDb();
  }

}
module.exports = FakeDb;
