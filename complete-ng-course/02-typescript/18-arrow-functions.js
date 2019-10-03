var log = function (message) {
    console.log(message);
};
var doLog1 = function (message) { return console.log(message); };
var doLog2 = function (message) { return console.log(message); };
var doLog3 = function () { return console.log('doLog3 without Parameters'); };
log('log function');
doLog1('doLog1');
doLog2('doLog2');
doLog3();
