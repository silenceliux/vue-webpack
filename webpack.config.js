/**
 * Created by admin on 17-2-22.
 */
var path = require('path');
module.exports = {
    watch:true,
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue-loader'},
            { test: /\.js$/, loader: 'babel-loader'}
        ]
    },
    babel: {
        presets: ['es2015']
    },
    //其他解决方案，    root从这里开始查找，extensions自动扩展后缀名
    resolve: {
        root:[path.join(__dirname)],
        alias: {//别名
            'vue': 'vue/dist/vue.js'
        }
    }
}