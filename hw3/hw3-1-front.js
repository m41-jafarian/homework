function delete_item (arr,index_select) {
        let new_arr=[]
        for(i=0;i < arr.length;i++) {
            if(i != index_select) {
                new_arr.push(arr[i])
            }
       }
        console.log(new_arr)
        return new_arr
    }

let arr = [45, 4, 9, 16, 25];
console.log(arr)
delete_item(arr,1)
