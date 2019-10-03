 let log = function(message){
     console.log(message);
 }

 let doLog1 = message => console.log(message);
 let doLog2 = (message) => console.log(message);
 let doLog3 = () => console.log('doLog3 without Parameters');
 
 log('log function');
 doLog1('doLog1');
 doLog2('doLog2');
 doLog3();