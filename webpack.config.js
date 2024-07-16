const path = require('path')
const htmlWebpackPlugin =require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack')



module.exports={
    mode:'production',
    entry:{
        filename:path.resolve(__dirname, 'src/index.js') //откуда берется js файл

    },
    output:{
        path: path.resolve(__dirname, 'dist'), //куда импортируется Js файл
        filename:'[name].js', //имя импортируемого js файла
        
        assetModuleFilename:'[name][ext]', //имя выходных файлов
        clean:true //очистка при повторном билде проекта 
    },
    devServer:{
        port:9000,//порт сервера
        compress:true,//сжатие файлов при запуске сервера
        hot:true,
        static:{
            directory:path.join(__dirname, 'dist')//файлы для статической обработки
        },
    },
    performance: {
      maxEntrypointSize: 5129999999999999,//максимальный размер файлов
      maxAssetSize: 512999999999999999,//максимальный размер ассетов 
    },
    module:{
         rules:[
            {
                test:/\.css$/,//обрабатываемое разрешение файла
                use: //в данном случае способ обработки файлов с разрешением в test
                [{
                    loader:MiniCssExtractPlugin.loader, //используемый загрузчик
                },
                {
                 
                  loader: "css-loader",
                  options: {
                    // Add this option
                    url: false,//отключение изменения url в css и в следствии клонирования изображений из новосгенерированных url
                  },},
                
                {
                    loader:'postcss-loader',
                    options:{
                        postcssOptions:{
                            plugins:[require('postcss-preset-env')],
                        } 
                    }
                },
               
            ],
                
            },
            
           
          
        ]
        },
        
          
        
        plugins:[
        new htmlWebpackPlugin({
            title:'My web page',
            filename:'index.html',
            template: 'src/index.html'

        }),
        new htmlWebpackPlugin({
            title:'my web page 2',
            filename:'brends.html',
            template:'src/brends.html'
        }),
        new htmlWebpackPlugin({
            title:'my web page 2',
            filename:'one_brend.html',
            template:'src/one_brend.html'
        }),
        new MiniCssExtractPlugin({
            filename: (__dirname, '[name].css'),
            
            

        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, 'src/images'), //откуда берем файлы для копирования
                to: path.resolve(__dirname, 'dist/images')//куда закидываем обработанные файлы
              }
            ]
          })
       
        ]
    
    }
