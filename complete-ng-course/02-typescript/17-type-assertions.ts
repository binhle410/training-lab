
let message;
message = 'abc';
// 2 ways of Type Assertions
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
////////////////////////////////////////////////////////