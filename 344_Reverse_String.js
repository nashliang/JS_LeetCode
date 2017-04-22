function ReverseString(s){
	var ary=s.split('');  //拆成array
	var result=ary.reverse();  //反轉
	return result.join('');  //array轉string
}

 ReverseString('abcd');