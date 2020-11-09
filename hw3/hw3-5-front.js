function replace_item (arr,item_select,item) {
    let new_arr=[]
    for(i=0;i < arr.length;i++) {
        if(arr[i] != item_select) {
            new_arr.push(arr[i])
        }
        else{
            new_arr.push(item)
        }
   }
    console.log(new_arr)
    return new_arr
}

let arr = ["a","b","c","d","e","f"];
console.log(arr)
replace_item(arr,"e","t")
