const dns = require('dns');
const util = require('util');

const resolve4 = util.promisify(dns.resolve4);

async function main(){
    const result = await resolve4('www.miu.edu')
    console.log(result)
}
main();

// resolve4('www.miu.edu').then(( addresses, err) => {
//     if (err) throw err;
//     console.log(`addresses: ${JSON.stringify(addresses)}`);
// }).catch((error) => {
//     console.log(error);
// });

// dns.resolve4('www.miu.edu', (err, addresses) => {
//   if (err) throw err;
//   console.log(`addresses: ${JSON.stringify(addresses)}`);
// });