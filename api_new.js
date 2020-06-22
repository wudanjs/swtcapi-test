/**
 * Created by wudan on 2020/6/20.
 */
var japi = require('@swtc/api');
var Remote = japi.Remote;

var remote = new Remote({server: 'http://swtcproxy.swtclib.ca:5080'});
var account = "jpmKEm2sUevfpFjS7QHdT8Sx7ZGoEXTJAz";
var secret = "ssiUDhUpUZ5JDPWZ9Twt27Ckq6k4C";
var to = "j3vyFAMQW2Ls48eoFCTsMXFq2KNWVUskSx";

 remote.getServerInfo().then(data => {
 console.log("<<<--- getServerInfo --->>>");
 console.log(data)
 }).catch(console.error)

 var options = {
 account: account,
 mol: 1,
 den: 1000,
 feeAccount: account,
 amount: remote.makeAmount(1, "CNY")
 }
 var tx = remote.buildBrokerageTx(options)
 tx.submitPromise(secret).then(data => {
     console.log("<<<--- buildBrokerageTx --->>>")
     console.log(data)
 }).catch(console.error)

 remote.getAccountBrokerage(account).then(data => {
 console.log("<<<--- getAccountBrokerage --->>>")
 console.log(data)
 }).catch(console.error)




