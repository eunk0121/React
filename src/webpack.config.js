//webpack  불러오기 (require사용) 
var webpack = require('webpack');


//객체를 모듈로 내보내겠다는 의미, module.export
module.exports = {
    entry: './src/index.js', //불러오는 파일의 시작점, 여러파일도 가능(배열 이용)

    output:{
        path: __dirname + '/public', //파일 저장경로... bundle 파일로 저장
        filename: 'bundle.js'
    },

    devServer: { //개발서버 설정
        hot: true, //수정시 리로딩 한다는 의미
        inline: true, //인라인 으로 번들파일에 포함
        host: '0.0.0.0',
        port: 4000, //개발서버 포트
        contentBase: __dirname + '/public', //인덱스 파일의 위치
    },

    module: {  //웹팩의 또다른 핵심 기능
        loaders: [
            {   //컴파일 하는 부분
                test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015'] //변환시키는 파일, less 나 c 언어도 가능
                },
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};






/* PREVIOUS STATE

module: {
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
        }
    ]
},

*/