/**
 * Created by wudan on 2020/6/18.
 */
//创建Wallet对象
var japi = require('@swtc/api');
var Wallet = japi.Remote.Wallet;

//方式一
var w1 = Wallet.generate();
console.log(w1);

//方式二
var w2 = Wallet.fromSecret('ssiUDhUpUZ5JDPWZ9Twt27Ckq6k4C');
console.log(w2);