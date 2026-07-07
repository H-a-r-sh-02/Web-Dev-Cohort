/* Bubble sort
let arr = [1,4,3,2,9,10];
for (let i=0; i<arr.length-1; i++) {
    for(let j=0; j<arr.length-i-1; j++) {
        if(arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr); */

/* Selection sort
let arr = [1,4,3,2,9,10 ];
for (let i=0; i<arr.length-1; i++) {
    let sml = i;
    for (let j=i+1; j<arr.length; j++) {
        if (arr[sml] > arr[j]) sml = j;
    }
    if (i != sml) {
        let temp = arr[i];
        arr[i] = arr[sml];
        arr[sml] = temp;
    }
}
console.log(arr); */

/* Insertion sort
let arr = [2,6,1,9,20,14];
for (let i=1; i<arr.length; i++) {
    let key = arr[i];
    let j=i-1;
    while (j>=0 && arr[j]>key) {
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = key;
}
console.log(arr); */
