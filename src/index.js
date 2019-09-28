/*
* Entry point
* */
var _ = require('lodash'); //node_modules에 있는 라이브러리를 사용할 때 require를 사용
import './style.css'; //css를 모듈로 가져와 모듈처럼 취급하겠다는 의미
import './hello.scss';
import {area} from './js/circle'; //개별 모듈화 불러오는 규칙 named import : 반드시 {} 안에 동일한 이름을 사용
import aaa from './js/cube';//전체 모듈화 불러오는 규칙 default import : {}없이 사용하되, 이름을 임의로 바꿀 수 있다.

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');

	return element;
}
console.log(area(10));

console.log(aaa.bulk(10));

document.body.appendChild(component());
