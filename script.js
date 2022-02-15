// smatphone prices
var samsungPrice = 34990;
var xiaomiPrice = 24590;
var realmePrice = 32000;
// smartphone looks
var samsungLooks = 9;
var xiaomiLooks = 7;
var realmeLooks = 8;
// smartphone reliability
var samsungRel = samsungPrice / samsungLooks;
var xiaomiRel = xiaomiPrice / xiaomiLooks;
var realmeRel = realmePrice / realmeLooks;
// reliability outputs
console.log('Samsung' + ' ' + '=' + ' ' + samsungRel);
console.log('Xiaomi' + ' ' + '=' + ' ' + xiaomiRel);
console.log('Realme' + ' ' + '=' + ' ' + realmeRel);