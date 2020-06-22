/**
 * Created by wudan on 2020/6/22.
 */
var japi = require('@swtc/api');
var Remote = japi.Remote;
var remote = new Remote({server: 'http://localhost:3000/'});

var a1 = {address: 'j3yeaNQUqMmrDb1T1p6Q2qHm9BHaAAmSwb', secret:'ssRi4kAuYJvsdiaVWCn5vYDtbBnGT'};
var a2 = {address: 'jJwkfLEVTkM6u3J7kWoATFd5aauBw5S8Kz', secret:'ssLHnWZyTuoWaJ7MoF2BoiKGtJbSy'};
var a3 = {address: 'jpX8SEpM387c9tpdAUfBr2gYTfC2k7RatA', secret:'ss6pomPicUUaTJKcv2z1daVRKWVki'};

/*修改意见：
 1.查询帐号的签名列表getAccountSignerList不通，返回结果如下：
 {
 "code": "api:getAccountSignerList",
 "message": "TypeError: index_1.state.remote.value.requestSignerList is not a function"
 }
 2.多签multiSigned不通，返回结果如下（多签不能通过blob方式传递，只能非签名方式传）：
 data:
 { code: 'api:postBlob', message: 'Missing field \'secret\'.' }
*/

const log_json = object => console.log(JSON.stringify(object, '', 2))
const sleep = time => new Promise(res => setTimeout(() => res(), time || 1))


//查询帐号的签名列表
sleep()
    .then( async () => {
    let result = await remote.getAccountSignerList(a1.address)
    console.log(result)
    log_json(result.account_objects)
}).catch(console.error)
// 返回结果：
// {
//     "code": "api:getAccountSignerList",
//     "message": "TypeError: index_1.state.remote.value.requestSignerList is not a function"
// }



// 设置帐号的签名列表
const tx = remote.buildSignerListTx({
    account: a1.address,
    threshold: 3,
    lists: [
        { account: a2.address, weight: 2 },
        { account: a3.address, weight: 1 },
    ]
})
sleep()
    .then( async () => {
    await tx._setSequencePromise()
    let result = await tx.submitPromise(a1.secret)
    log_json(result.data)
}).catch(console.error)




//设置废除主密钥
const tx = remote.buildAccountSetTx({
    account: a1.address,
    type: 'property',
    set_flag: 4
})
sleep()
    .then( async () => {
    await tx._setSequencePromise()
    log_json(tx.tx_json)
let result = await tx.submitPromise(a1.secret)
console.log(result)
})
.catch(console.error)




// 激活帐号的主密钥
const tx = remote.buildAccountSetTx({
    account: a1.address,
    type: 'property',
    clear_flag: 4
})
sleep()
    .then( async () => {
    await tx._setSequencePromise()
    // log_json(tx.tx_json)
tx.setFee(100000)  // 燃料
// log_json(tx.tx_json)
tx.multiSigning({account: a2.address, secret: a2.secret})
tx.multiSigning({account:a3.address, secret: a3.secret})
// log_json(tx.tx_json)
tx.multiSigned()
// log_json(tx.tx_json)
let result = await tx.submitPromise()
console.log(result)
// log_json(result.tx_json)
})
.catch(console.error)
// 返回结果有误，多签不能通过blob方式传递，只能非签名方式传。
// data:
// { code: 'api:postBlob', message: 'Missing field \'secret\'.' }



//通过多签完成支付
let tx = remote.buildPaymentTx({ account: a1.address, to:a2.address, amount: remote.makeAmount(1) })
tx.addMemo('multisigned payment test')
sleep()
    .then( async () => {
    await tx._setSequencePromise()
tx.setFee(20000)  // 燃料
tx.multiSigning({account: a2.address, secret: a2.secret})
tx.multiSigning({account:a3.address, secret: a3.secret})
tx.multiSigned()
let result = await tx.submitPromise() // multisign submit does not need any secret
console.log(result)
log_json(result.tx_json)
})
.catch(console.error)