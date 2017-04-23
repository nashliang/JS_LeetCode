function evaluate(element,index,array){
	return Math.sqrt(element);
}
var mem={};

function happyNumCheck(x){
	
	var dis=x.toString().split('');
    var temp=0;
    temp = temp +dis.forEach(evaluate);
	mem.push(temp);	

	//mem.every()

	while(temp != 1){
		happyNumCheck(temp);
	}
}
