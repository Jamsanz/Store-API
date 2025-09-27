const productModel = require('./model');

class ProductService { 
  constructor(productModel) { 
    this.ProductModel = productModel;
  }

  async createProduct(product) { 
    const newProduct = await this.ProductModel.create(product);
    return newProduct;
  }
  
  async getAllProducts() { 
    return await this.ProductModel.find();
  }

  async getProductById(id) { 
    return await this.ProductModel.findById(id);
  }

  async updateProduct(id, data) { 
    return await this.ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProduct(id) { 
    return await this.ProductModel.findByIdAndDelete(id);
  }
}


module.exports = new ProductService(productModel);
