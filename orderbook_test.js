/**
 * Created by wudan on 2020/6/20.
 */
var japi = require('@swtc/api');
var Remote = japi.Remote;
var remote = new Remote({server: 'https://api.jingtum.com'});
/*修改意见：
  获得货币对的挂单列表 ，返回结果跟官方api结果不一致，返回结果未处理。
*/

remote.getOrderBooks("SWT", "CNY+" + remote._issuer).then(data => {
    console.log("<<<--- getOrderBooks --->>>")
console.log(data);
}).catch(console.error)

remote.getOrderBooksBids("SWT", "CNY+" + remote._issuer).then(data => {
    console.log("<<<--- getOrderBooksBids --->>>")
    console.log(data);
}).catch(console.error)

remote.getOrderBooksAsks("SWT", "CNY+" + remote._issuer).then(data => {
    console.log("<<<--- getOrderBooksAsks --->>>")
    console.log(data);
}).catch(console.error)