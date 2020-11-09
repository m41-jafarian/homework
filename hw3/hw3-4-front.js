function find_item (arr,item_search) {
    let new_arr=[]
    for(i=0;i < arr.length;i++) {
        if(arr[i] == item_search) {
            console.log("index: " + i + "  item: " + arr[i])
            return i,arr[i]
        }
    }
    console.log("item not found")
    return false
}

let arr = [2,3,4];
console.log(arr)
find_item(arr,3)