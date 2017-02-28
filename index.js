// // // ori
// // // function validateSsn(ssn) {
// // // 	if (/^\d{3}-\d{2}-\d{4}$/.exec(ssn)) {
// // // 		console.log('Valid ssn');
// // // 	} else {
// // // 		console.log('invalid ssn');
// // // 	}
// // // }

// // // function validatePhone(phone) {
// // // 	if (/^(\d{3})\d{3}-\d{4}$/.exec(phone)) {
// // // 		console.log('valid phone');
// // // 	} else {
// // // 		console.log('invalid phone');
// // // 	}
// // // }

// // function validateValue(value, regx, type) {
// // 	if (regx.exec(value)) {
// // 		console.log('valid ' + type);
// // 	} else {
// // 		console.log('invalid ' + type);
// // 	}
// // }

// // //ori
// // function validateAddress(address) {
// // 	if (parseAddress(address)) {
// // 		console.log(true);
// // 	} else {
// // 		console.log(false);
// // 	}
// // }

// // function validateName(name) {
// // 	return parseName(name);
// // }

// // 本质上就是返回一个闭包
// function validateValueWithFunc(value, parseFunc, type) {
// 	return parseFunc(value);
// }

// // validateValueWithFunc('123-45-6789', /^\d{3}-\d{2}-\d{4}$/.exec, 'SSN');

// function makeRegexParser(regex) {
// 	return regex.exec;
// }
// var parseSsn = makeRegexParser(/^\d{3}-\d{2}-\d{4}$/);
// var parsePhone = makeRegexParser(/^(\d{3})\d{3}-\d{4}$/);
// validateValueWithFunc('123-45-6789', parsePhone, 'phone');

let makeAdder = constantValue => value => constantValue + value;

var add10 = makeAdder(10);
console.log(add10(20));
console.log(add10(30));