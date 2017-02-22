/**
 * Created by admin on 17-2-22.
 */
module.exports = {
    output: {
        path: '/dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue-loader'}
        ]
    },
    //其他解决方案，    root从这里开始查找，extensions自动扩展后缀名
    resolve: {
        alias: {//别名
            'vue$': 'vue/dist/vue.js'
        }
    }
}