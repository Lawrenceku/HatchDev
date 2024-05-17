class LNode <T> {
    data: T;
    next: LNode<T>

    constructor(val:T){
        this.data = val
    }

}

class LinkedList<T>{
    head: LNode<T>

    add(val: T){
        const newNode = new LNode(val)
    

    if (!this.head){
        this.head = newNode
        return
    }
    let currentNode = this.head
    while(currentNode){
        arr.push(currentNode.data)
        currentNode = currentNode.next
    }
    }

    prepend(val:LNode<T>){
        let newHead = val
        let oldHead = this.head
        this.head = newHead
        newHead.next = oldHead
    }
    search(val:T){
        if (!this.head){
            return
        }
        let currentNode = this.head
        let pos = 0
        while(currentNode){
            if (currentNode==val){
                console.log(`The node is found at position ${pos}`)
                return
            }
            pos +=1
            currentNode = currentNode.next
        }
    }

}