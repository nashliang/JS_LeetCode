function evaluate(sum,element){
	return ( sum + Math.pow(element,2) );
}

function happyNumCheck(x){
	var temp;
	var mem={};
	while(temp != 1 && !mem[x]){   //20放在 mem[20]
	 
	    temp = x.toString().split('').reduce(evaluate,0);

		mem[x] = temp;

		x = temp;	
		
	}
	return temp===1? true : false;
}
console.log(happyNumCheck(19));//true
console.log(happyNumCheck(31));//true
console.log(happyNumCheck(44));//true
console.log(happyNumCheck(4));//false
console.log(happyNumCheck(30));//false