/**
 * Created by wudan on 2020/6/20.
 */
const japi = require("@swtc/api");
var Remote = japi.Remote;
var remote = new Remote({
    server: "https://tapi.jingtum.com",
    solidity: true
});

/*修改意见：
 1.返回结果ContractState未解析，具体解析过程参考jingtum-lib库中remote.js文件。
 */

// 部署合约
const v = {
    address: "jhiegcA8KnehNaQaQZJX4y7bpwgWxYjj5o",
    secret: "sa3yt7uz2wFmZrfswYJmaDMnHLstK"
};
const abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "success",
                "type": "bool"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            }
        ],
        "name": "SWTBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferSWT",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "initialSupply",
                "type": "uint256"
            },
            {
                "name": "tokenName",
                "type": "string"
            },
            {
                "name": "tokenSymbol",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "fallback"
    }
];
const payload = "60606040526012600260006101000a81548160ff021916908360ff160217905550341561002b57600080fd5b604051610b58380380610b5883398101604052808051906020019091908051820191906020018051820191905050600260009054906101000a900460ff1660ff16600a0a8302600381905550600354600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600090805190602001906100d39291906100f3565b5080600190805190602001906100ea9291906100f3565b50505050610198565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061013457805160ff1916838001178555610162565b82800160010185558215610162579182015b82811115610161578251825591602001919060010190610146565b5b50905061016f9190610173565b5090565b61019591905b80821115610191576000816000905550600101610179565b5090565b90565b6109b1806101a76000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b457806318160ddd1461014257806323b872dd1461016b578063313ce567146101d9578063675c7ae61461020857806369d8e5161461025557806370a08231146102a457806395d89b41146102f1578063a9059cbb1461037f578063dd62ed3e146103c1575b34156100af57600080fd5b600080fd5b34156100bf57600080fd5b6100c761042d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101075780820151818401526020810190506100ec565b50505050905090810190601f1680156101345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014d57600080fd5b6101556104cb565b6040518082815260200191505060405180910390f35b6101bf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506104d1565b604051808215151515815260200191505060405180910390f35b34156101e457600080fd5b6101ec61056a565b604051808260ff1660ff16815260200191505060405180910390f35b341561021357600080fd5b61023f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061057d565b6040518082815260200191505060405180910390f35b61028a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061059e565b604051808215151515815260200191505060405180910390f35b34156102af57600080fd5b6102db600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105ea565b6040518082815260200191505060405180910390f35b34156102fc57600080fd5b610304610602565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610344578082015181840152602081019050610329565b50505050905090810190601f1680156103715780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561038a57600080fd5b6103bf600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106a0565b005b34156103cc57600080fd5b610417600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106af565b6040518082815260200191505060405180910390f35b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104c35780601f10610498576101008083540402835291602001916104c3565b820191906000526020600020905b8154815290600101906020018083116104a657829003601f168201915b505050505081565b60035481565b600081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061055f8484846106d4565b600190509392505050565b600260009054906101000a900460ff1681565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b60008273ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015156105e057600080fd5b6001905092915050565b60046020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106985780601f1061066d57610100808354040283529160200191610698565b820191906000526020600020905b81548152906001019060200180831161067b57829003601f168201915b505050505081565b6106ab3383836106d4565b5050565b6005602052816000526040600020602052806000526040600020600091509150505481565b6000808373ffffffffffffffffffffffffffffffffffffffff16141515156106fb57600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561074957600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054011115156107d757600080fd5b600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401905081600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555080600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540114151561097f57fe5b505050505600a165627a7a723058207f3e753801a4412668b8744b2423f16d260221d3e8b74dca6355627b0b601b390029"

// 部署合约
let tx = remote.buildContractInitTx({
    account: v.address,
    amount: 10,
    payload,
    abi,
    params: [2000, 'Test Currency', 'TTC1']
})
tx.submitPromise(v.secret).then(data => {
    console.log("<<<--- buildContractInitTx --->>>")
    console.log(data)//hash:8B5E1F3CC9B5817831F69B29450E030F5F8E04474E8DD013BEA8197B66ED9DF8
}).catch(console.error)

// //执行合约
var destination = 'jL7wU8CwzFnYgmFfLfHtdKdGCWoJ6qLiZi'
let tx = remote.buildContractInvokeTx({
    account: v.address,
    destination,
    abi,
    func: "totalSupply()"
    // func: "name()"
    // func: "SWTBalance('jL7wU8CwzFnYgmFfLfHtdKdGCWoJ6qLiZi')"
})
tx.submitPromise(v.secret).then(data => {
    console.log("<<<--- buildContractInvokeTx --->>>")
    console.log(data)
}).catch(console.error)