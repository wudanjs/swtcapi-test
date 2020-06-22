var japi = require('@swtc/api');
var Remote = japi.Remote;
var remote = new Remote({server: 'https://tapi.jingtum.com',issuer: 'jBciDE8Q3uJjf111VeiUNM775AMKHEbBLS'});
var account = "jhiegcA8KnehNaQaQZJX4y7bpwgWxYjj5o";
var secret = "sa3yt7uz2wFmZrfswYJmaDMnHLstK";
var to = "j3mYkCVF68x8LDno3Ea8iz4ZJ7mETcrhcn";
var to_secret = "sn5jqpezsfiggiv9mMSoB2DJvd8Jn";
var hash = "0123590431D16BBAC76A1C9854F2760C345D351D0054F37D921EC2E192D9DD35";
var order_hash = "83EF9512C51F55D7B82E948AF6D37D8C52C1D1BD2C3C885BC793C2BD483ADBDF";

/*修改意见：
1.getAccountBalances方法当传入参数为未激活钱包时，需友好提示用户。
返回结果{ code: 'api:swtclib', message: 'swtclib get an error' } => expected "account not found" at err.
2.关系设置，账号属性，lua版合约，目前不涉及，可先删除。
 */

remote.getAccountBalances(account).then(data => {
    console.log("<<<--- getAccountBalances 1 --->>>")
    console.log(data)
}).catch(console.error)

remote.getAccountBalances('jjj').then(data => {
    console.log("<<<--- getAccountBalances 2 --->>>")
    console.log(data)
}).catch(err => {
    console.error('invalid address err: ', err);
})

remote.getAccountBalances('j9Q5HCEiqB31r2dFE1wLsLKkx6tZCsFsGE').then(data => {
    console.log("<<<--- getAccountBalances 3 --->>>")
    console.log('data: ',data)  //{ code: 'api:swtclib', message: 'swtclib get an error' } => expected "account not found" at err.
}).catch(err => {
    console.error('address not found err: ', err);
})

remote.buildPaymentTx({
    account: account,
    to: to,
    amount: remote.makeAmount(1, 'SWT')
}).submitPromise(secret, 'payment test').then(console.log).catch(console.error)

 remote.getAccountPayment(to, hash).then(data => {
 console.log("<<<--- getAccountPayment --->>>")
 console.log(data)
 }).catch(console.error)

 remote.getAccountPayments(account).then(data => {
 console.log("<<<--- getAccountPayments --->>>")
 console.log(data)
 }).catch(console.error)

 var options = {
 type: 'Sell',
 account: account,
 taker_pays: remote.makeAmount(1, 'CNY'),
 taker_gets: remote.makeAmount(1)
 };
 var tx = remote.buildOfferCreateTx(options);
 tx.submitPromise(secret).then(console.log).catch(console.error)

 remote.getAccountOrder(account, order_hash).then(data => {
 console.log("<<<--- getAccountOrder --->>>")
 console.log(data)
 }).catch(console.error)


 remote.getAccountOrders(account).then(data => {
 console.log("<<<--- getAccountOrders --->>>")
 console.log(data)
 }).catch(console.error)

 var options = {account: account, sequence: 2};
 var tx = remote.buildOfferCancelTx(options);
 tx.submitPromise(secret).then(console.log).catch(console.error) //order_cancle_hash: 3C296ABB759870BD3940885B9C4DCFA3B6B0E33C6074852F370843D3D67C1DC3

 remote.getAccountTransactions(account).then(data => {
 console.log("<<<--- getAccountTransactions --->>>")
 console.log(data)
 }).catch(console.error)

 remote.getAccountTransaction(account, hash).then(data => {
 console.log("<<<--- getAccountTransaction --->>>")
 console.log(data)
 }).catch(console.error)

remote.getAccountSequence(account).then(data => {
 console.log("<<<--- getAccountSequence --->>>")
 console.log(data)
 }).catch(console.error)

 remote.getTransaction(hash).then(data => {
 console.log("<<<--- getTransaction --->>>")
 console.log(data)
 }).catch(console.error)

 remote.getLedger().then(data => {
 console.log("<<<--- getLedger --->>>");
 console.log(data)
 }).catch(console.error)

 remote.getLedger(1039798).then(data => {
 console.log("<<<--- getLedger --->>>");
 console.log(data)
 }).catch(console.error)

 remote.postBlob({blob: '120000220000000024000D04DB2F2680CACE61400000000754D4C068400000000000271073210330E7FC9D56BB25D6893BA3F317AE5BCF33B3291BD63DB32654A313222F7FD0207446304402202E40B9238C78BD291BB4892409FB8932809AAAD831F8781B5C666E25FD52B0760220301824EE81A6C9D66B6731811053165AF664A4AA6DB1C306AB3EE6707FEE121D8114B5F762798A53D543A014CAF8B297CFF8F2F937E883142A4C373B1DC87E2B913F3528FFD0ECAFD5D362F6'}).then(console.log).catch(console.error)






