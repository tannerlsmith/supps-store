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
        },
        {
            name: 'Vitamin C',
            description: 
                '1000 mg of vitamin c',
            // image: '',
            category: categories[0]._id,
            price: 14.99,
            quantity: 40
        },
        {
            name: 'Magnesium',
            description: 
                '300mg of magnesium',
            // image: '',
            category: categories[1]._id,
            price: 17.99,
            quantity: 40
        },
        {
            name: 'Iodine',
            description: 
                '300mg of iodine',
            // image: '',
            category: categories[1]._id,
            price: 17.99,
            quantity: 40
        },
        {
            name: 'Beef Liver',
            description: 
                '300mg of dessicated beef liver',
            // image: '',
            category: categories[2]._id,
            price: 29.99,
            quantity: 40
        }
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Tamela',
        lastName: 'Smitta',
        email: 'tsmitta@testmail.com',
        password: 'password123',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elijah', 
        lastName: 'Holbrook',
        email: 'eholbrook@testmail.com',
        password: 'password123'
    });

    console.log('users seeded');

    process.exit();
})