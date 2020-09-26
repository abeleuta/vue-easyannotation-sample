var path = require('path')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    resolve: {
//	symlinks: false,
        extensions: ['.js', '.vue'],
	modules: [__dirname, path.resolve('node_modules')]
//[path.resolve(__dirname, '..', "node_modules"), 'node_modules']//
		//[__dirname, 'node_modules']
  	    //alias: { vue: 'vue/dist/vue.js' }
        /*alias: {
            //components: path.join(__dirname, './src/components')
        } */
    },
/*    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },*/

    module: {
        rules: [{
            test: /\.vue$/,
      use: {
        loader: 'vue-loader'
      }
//            loader: 'vue'
        }, {
            test: /\.js$/,
      use: {
        loader: 'babel-loader'
      },
            //loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
	use: [
	    {loader: 'vue-style-loader'},
	    {loader: 'css-loader'}	
	]
            //loader: 'vue-style-loader!css-loader'
        }, {
            test: /\.less$/,
      use: [
	    {loader: 'vue-style-loader'},
	    {loader: 'css-loader'},
	    {loader: 'less-loader'}
      ],
//            loader: 'vue-style-loader!css-loader!less-loader'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
    // webpack-dev-server
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
/*  externals: {
      "easyannotation": "easyannotation"
  },*/
    devtool: '#eval-source-map'
}

// npm run build
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ])
}