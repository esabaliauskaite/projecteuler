// less than 3 cannot be multiple of 3, check if the number between 3 and the provided value is a multiple of 3 or 5 and then add them to the sum variable which is later returned
function multiplesOf3and5(number) {
  var sum = 0;
  for (var i=3; i<number;++i){
    if ((i%3==0)||(i%5==0)){
      sum=sum+i;
    }
  }
    return sum;
}
