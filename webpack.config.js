const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//module.exports 는 내가만든 것을 다른 곳에서 쓸 수 있도록 만드는 거
module.exports = {
	entry: "./src/index.js", //시작점
	output: {
		filename: "main.js", //결과 파일명
		path: path.resolve(__dirname,'build') //결과 폴더명 __dirname이란 node에서 예약된 예약어인데 현재 파일(webpack.config.js)이 있는 폴더를 의미
	},
	module: {
		rules: [
			{
				test: /\.css$/, //현재 파일이 .css인지 판별해 true이면 밑의 use를 실행
				use: ['style-loader', 'css-loader'] //css-loader먼저 실행되고 style-loader가 실행됨 여러 css를 하나의 파일로 뭉치고 style입혀주는 모듈,
			},
			{
				test: /\.scss$/, //css의 전처리기
				use: ['style-loader', 'css-loader', 'sass-loader'] //scss이면 css로 변경하주는 sass 모듈 추가
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
};