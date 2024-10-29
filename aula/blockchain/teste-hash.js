const { createHash } = require('crypto');

// c7fda12f136cd415800371bb23cbb10aa03dc55a96061cd45b49ae4275db62bb
console.log(createHash('sha256').update('12Edson').digest('hex'));
// fd2d038db5961a7e266b1a858584356720f2b55d76c68751f08c48a9f3278043
console.log(createHash('sha256').update('Edson1').digest('hex'));
// 3388db424f8fa77d7b5127dde87e32daf02934090ff7dfc7e0a91289ac358793
console.log(createHash('sha256').update('Aula de Blockchain 123').digest('hex'));
// 14434d07d3f94a8c07446084848be34002a07a3582fbc3ad0c744d743bf6d145
console.log(createHash('sha256').update('valor=1000').digest('hex'));
// c4da01e86ab932f40198815b4577095c7c4a7325a178333911ba9a717b96ff80
console.log(createHash('sha256').update('valor=500').digest('hex'));
// 6d334659ce3ebd9f6f6864af1fe9f5f3b495bb21ea6d962c1ed8c6adb0414a23
console.log(createHash('sha256').update('valor=2000').digest('hex'));

console.log(createHash('sha256').update('159396hi').digest('hex'));