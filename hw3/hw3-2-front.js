function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function do_sort(arr) {
    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

function join_sort_array(arr1,arr2,arr3){
    var my_arr = arr1.concat(arr2, arr3);
    console.log(do_sort(my_arr))
}



var arr1 = [2,6,3,10];
var arr2 = [1,8,5,4,11];
var arr3 = [7,9,6,12];
join_sort_array(arr1,arr2,arr3)
