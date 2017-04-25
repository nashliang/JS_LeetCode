function evaluate(element,index,array){
	return Math.sqrt(element);
}

function happyNumCheck(x){
	var temp;
	var mem={};
	while(temp != 1 && !mem[x]){
	 
	    temp = x.toString().split('').reduce(evaluate);

		mem[x]=temp;

		x = temp;	
		
	}
	return temp===1? true : false;
}
console.log(happyNumCheck(19));//true