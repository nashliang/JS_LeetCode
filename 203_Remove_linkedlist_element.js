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

// var currentNode = x.head 寫這樣的話 如果刪除的值在整個list的頭或尾就會fail
	var node = new LinkedList();
	var currentNode = node;
	currentNode.next = x.head;
	while(currentNode){
		if(currentNode.value === value)
			{
				currentNode.prev.next = currentNode.next;
				currentNode.next.prev = currentNode.prev;
			}

		currentNode = currentNode.next;
	}
	console.log(x);
};


var x = new LinkedList();

console.log(x.removeElements([1,5,7],7));