/**
 * Created by admin on 17-2-22.
 */
var path = require('path');
module.exports = {
    output: {
        path: '/dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue-loader'},
            { test: /\.js$/, loader: 'babel-loader'}
        ]
    },
    //其他解决方案，    root从这里开始查找，extensions自动扩展后缀名
    resolve: {
        root:[path.join(__dirname,'src')],
        alias: {//别名
            'vue$': 'vue/dist/vue.js'
        }
    }
}