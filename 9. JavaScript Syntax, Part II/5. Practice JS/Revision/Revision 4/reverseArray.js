const sentence = ['sense.','make', 'all', 'will', 'This'];

const reverseArray=arr=>{
    let reversedArray=[];
    for (let i=arr.length-1;i>=0;i--){
        reversedArray.push(arr[i])
    }
    console.log(reversedArray)
}

reverseArray(sentence)