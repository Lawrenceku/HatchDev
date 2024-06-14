class Queue<T>{
    data:Array<T> =[]

    constructor(data?:Array<T>){
    if (!data) return
       this.data = data
    }

    enqueue(addition:T){
        this.data.push(addition)
        return this.data
    }
    dequeue(){
        var removed = this.data.shift()
        return `Removed first in queue ${removed}`
    }
    peek(){
        return this.data[0]
    }
    size(){
       return this.data.length
    }//skskksksks

}

let queueTest = new Queue<number>()
console.log(
    queueTest.peek()
    )