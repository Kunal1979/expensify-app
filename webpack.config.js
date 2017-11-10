const path= require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(path.join(__dirname,'public'));
console.log(__dirname);

module.exports=(env)=>{
  const isProduction = env ==='production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  console.log("env:" + env);
    return (
        {
            entry :'./src/app.js',
            output:{
             path:path.join(__dirname,'public'),
             filename:'bundle.js'
           
            },
            module:{
               rules:[{
                   loader:'babel-loader',
                   test:/\.js$/,
                   exclude:/node_modules/
               },
              /*  {
                   test:/\.scss$/,
                   use:CSSExtract.extract({
                    use:['style-loader','css-loader','sass-loader']  
                  })
           
                },*/
                {
                   test:/\.s?css$/,
                   use:CSSExtract.extract({
                     use:['css-loader','sass-loader']  
                   })
                   
           
                }
               ]
           
            },
            plugins:[CSSExtract],
            devtool:isProduction ? 'source-map' :'cheap-module-eval-source-map',
            devServer:{
                contentBase:path.join(__dirname,'public'),
                historyApiFallback:true
            }
           
           
           
           }
    )

};


