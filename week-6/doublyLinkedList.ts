class LNode<T> {
    data: T
    next: LNode<T>
    previous: LNode<T>

    constructor(val:T){
        this.data = val
    }
}

class LinkedList<T>{
    head:LNode<T>

    add(val:T){
        const newNode = new LNode(val)

        if(!this.head){
            this.head = newNode
            return   
        }
        let currentNode = this.head
        while(currentNode != null){
            if (this.head && !this.head.next){
                this.head.next = newNode
                currentNode.previous = this.head
                currentNode.next = newNode
               
            }
            else if(this.head && this.head.next){
                currentNode.next = newNode
                newNode.previous = currentNode
            }
            currentNode = currentNode.next
            newNode = currentNode
        }
    }
    print(){
        let arr: T[] = []

        if (!this.head){
            return
        }
        let currNode = this.head
        while(currNode){
            arr.push(currNode.data)
            currNode = currNode.next
    }
    console.log(arr)


    }
}

//position 3 ede cases
let LinkedList1 = new LinkedList
LinkedList1.add(2)
LinkedList1.add(76)
LinkedList1.print()
