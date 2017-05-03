function LinkedList(){
	this.head = null;
	this.tail = null;
};

function Node(value,next,prev){
	this.value = value;
	this.next = next; // ->
	this.prev = prev; // <-
};

LinkedList.prototype.addToTail = function(value){
   	var newNode = new Node(value,null,this.tail);
   	if(this.tail)
   		this.tail.next = newNode;
   	else
   		this.head = newNode;

   	this.tail = newNode;
};

LinkedList.prototype.arrayToList = function(array){	
	for(var i=0;i<array.length;i++){
		this.addToTail(array[i]);
	}
};

LinkedList.prototype.removeElements = function(array,value){
	if(!array) return null;

	var x = new LinkedList();
	x.arrayToList(array);
	
	var currentNode = x.head;

	while(currentNode){
		if(currentNode.value === value)
			{
				if(currentNode.prev === null)  //要刪的值在頭
				{
					currentNode.next.prev = null;	
					return x.head.next;				
				}
				else if(currentNode.next === null)  //要刪的值在尾
				{
					currentNode.prev.next = null;
					x.tail=null;
					return x;										
				}
				else
				{
				currentNode.prev.next = currentNode.next;
				currentNode.next.prev = currentNode.prev;
				}
			}

		currentNode = currentNode.next;
	}
	return x;
};


var x = new LinkedList();

console.log(x.removeElements([1,2,6,3,4,5,6],6));  //  1-> 2-> 3-> 4-> 5