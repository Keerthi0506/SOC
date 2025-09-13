function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}


const original = [1, 2, 3, 4, 5];
const reversed = reverseArray([...original]);
console.log(reversed);