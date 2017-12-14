const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'frostedadmin.js',
        path: path.resolve(__dirname, 'dist/js')
    }
};