function LinkedList(value){
	this.value = value;
	this.next = null;
}
LinkedList.prototype.addToTail = function(value){
   	var newNode = new LinkedList(value);
   	if(this.value)
   		this.next.next= newNode;
   	else
   		this.value = newNode;

   	this.next = newNode;
};
LinkedList.prototype.arrayToList = function(array){	
	for(var i=0;i<array.length;i++){
		this.addToTail(array[i]);
	}
};

var x=new LinkedList();
x.arrayToList([2,3]);
console.log(x);