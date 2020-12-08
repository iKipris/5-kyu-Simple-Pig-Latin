
function pigIt(str){
 
 var temp=str.split(' ');
 var result=[];
 temp.forEach((element,index)=>
 {
 if (!checkif(element))
 {
 if (element.length>2)
 {
  var pushed= element.substring(1,element.length) + element[0] +'ay';
 }
 else if ( element.length==2)
 {
  var pushed=element[1]+element[0]+'ay'
 }
 else
 {
  var pushed=element +'ay'
 }
 result.push(pushed);
 }
 else 
 {
  result.push(element);
 }})
 return result.join(" ")
}

function checkif (str)
{
  var punctuations = [".", ",", ":", "!", "?"];
  for (var i in str)
  {
    
    if (punctuations.includes(str[i]))
    {
      return true;
    }
  }
  return false;
}
