// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// false
// True

function is_array(a){
    return Array.isArray(a)
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));



// Write a JavaScript function to clone an array
// Test Data :
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


function array_Clone(a){
    return [...a]
}



// . Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
function first(a, n = 1){
    return a.slice(0,n)
}
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// [7]


// 4. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const myColor = ["Red", "Green", "White", "Black"]
console.log(myColor.join())
console.log(myColor.join('+'))



// 5. Write a JavaScript program to find the most frequent item of an array
// Sample array :
// Sample Output : a ( 5 times )
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function num(a){
    obj = {
        
    }
    num1 = 0
    for(var i=0;i<a.length;i++){
        if(a[i] in obj){
            obj[a[i]] += 1
        }
        else{
            obj[a[i]] = 1
        }
        if(num1 < obj[a[i]]){
            num1 = a[i]
        }
    }
    return num1+":("+obj[num1]+'times)'
}
console.log(num(arr1))
