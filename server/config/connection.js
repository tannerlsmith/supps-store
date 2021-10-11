const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSEDB_URI || 'mongodb://localhost/mernshopping', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;