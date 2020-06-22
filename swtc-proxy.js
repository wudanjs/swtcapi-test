/**
 * Created by wudan on 2020/6/20.
 */
const proxy = require('swtc-proxy');
proxy.state.funcConfig({server: 'wss://hc.jingtum.com:5020'});
proxy.web.listen(3000);

//接口文档地址： https://github.com/swtcca/swtcdoc/tree/master/docs/api
//https://github.com/JCCDex/ProjectFundingProposal/issues/37