const sorted_scores = [10,30,45,60,90,100]

type Result = {
    iterations: number;
    idx: number;
}

const binarySearch = (input: number[], target:number): Result => {
    let high = input.length - 1
    let low = 0
    let mid;
    for(let i =0; i<input.length; i++){
        mid = Math.floor((high + low)/2)
        let middleNumber = input[mid]
        if(middleNumber == target){
            return {iterations:i+1, idx: mid }
        }
        else if (middleNumber < target){
            low = mid + 1
        }
        else if (middleNumber > target){
            high = mid  - 1
        }
    }
    return {iterations: -1, idx: -1}
    
}

console.log(binarySearch(sorted_scores, 60))