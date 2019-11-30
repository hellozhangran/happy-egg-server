const buffer1 = Buffer.from('zhangran');
const buffer2 = Buffer.from([12,2,3,4]);
const buffer3 = Buffer.alloc(4);

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);

const fs = require('fs');
const protoBuf = require('protocol-buffers');
const scheme = protoBuf(fs.readFileSync(__dirname + '/test.proto'));
console.log(scheme);

const buffer = scheme.Column.encode({
    id: 1,
    name: 'zhangran',
    price: 1.1
});

console.log(buffer);

const obj = scheme.Column.decode(buffer);
console.log(obj);