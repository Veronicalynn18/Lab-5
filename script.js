var temperature =33;
var eventType='formal';
var beginPhrase = 'Since it is' + temperature +
    'degrees outside and you are attending a'+
    eventType + 'even, you should';

var casualOutput=  'Wear something comfy and';
var semiFormalOutput= ' wear a polo or';
var formalOutput= ' wear a suit and';

var lessThen54Output=' and wear a coat';
var between54And70Output=' wear a jacket';
var higherThen70Output= ' wear no jacket';



if (eventType === 'casual' && temperature <54){
  console.log (casualOutput + lessThen54Output);
}else if (eventType=== 'formal'&& temperature <54){
  console.log (formalOutput + lessThen54Output);
}else if (eventType=== 'semi-formal'&& temperature <54){
  console.log (beginPhrase + semiFormalOutput +lessThen54Output);
}
