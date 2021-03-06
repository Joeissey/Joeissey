# This is a basic workflow to help you get started with Actions/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `http://freeperson.xyz/user/checkin`;
const method = `POST`;
const headers = {
'Cookie' : `code=zrZP; email=77231592%40qq.com; expire_in=1615600368; ip=eeadf93164e3a69bf559454b20cf3f95; key=0ea6c21096d2a0582767704ec5f456561ac31e6a503ba; uid=3678; PHPSESSID=hft9ajubgv5tkm0hec5h1aub5m; mtauth=f6c37deeecf1e87a6345b705da83040c; pop=yes; __gads=ID=53f255b8a40fa2c4-22ad86fa39c6006c:T=1614922739:RT=1614922739:S=ALNI_MYjcO9C_RqlX2q9J2tZiCC1EqqmuA; __cfduid=de138eb027f92df8ea46ccf58f347a8861614922734`,
'Origin' : `http://freeperson.xyz`,
'Connection' : `keep-alive`,
'Referer' : `http://freeperson.xyz/user`,
'Accept' : `application/json, text/javascript, */*; q=0.01`,
'Host' : `freeperson.xyz`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/(null) (KHTML, like Gecko) Version/(null) Mobile/15E148 Safari/(null)`,
'Accept-Language' : `zh-cn`,
'Accept-Encoding' : `gzip, deflate`,
'X-Requested-With' : `XMLHttpRequest`
};
const body = ``;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
