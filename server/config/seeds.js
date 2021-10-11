const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Vitamins' },
        { name: 'Minerals' },
        { name: 'Dietary' }
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Vitamin D3 and K2',
            description: 
                '5000 Units of Vitamin D3, and 200 Units of K2',
            // image: '',
            category: categories[0]._id,
            price: 14.99,
            quantity: 40
        }
    ])
})