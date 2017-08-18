var crypto = require('crypto');
 
var config = {
    api_url: 'https://api.huobi.com/api.php',
    access_key : 'e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx',
    secret_key: 'b0xxxxxx-c6xxxxxx-94xxxxxx-dxxxx'
}
 
var md5 = function (str) {
    var hash = crypto.createHmac('sha256',config.secret_key);
    hash.update(str);
    str = hash.digest().toString('base64');;
    return str;
};

const str="GET\n"+
"be.huobi.com\n"+
"/v1/order/orders\n"+
"AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx&SignatureMethod=HmacSHA256&SignatureVersion=2&Timestamp=2017-05-11T15%3A19%3A30&order-id=1234567890";

const result=md5(str)
console.log(result)

//4F65x5A2bLyMWVQj3Aqp+B4w+ivaA7n5Oi2SuYtCJ9o=
//https://github.com/huobiapi/API_Docs/wiki/REST_authentication
