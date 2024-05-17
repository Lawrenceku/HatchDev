const scores = [88,75,40,59,90,10,20]
const target = 90


function linearSearch(input: number[], target: number):number{
    for(let i =0; i<=input.length; i++){
        const currentElement = input[i]
        if (currentElement == target){
            return i
        }
    }
    return -1
}

linearSearch(scores, target)