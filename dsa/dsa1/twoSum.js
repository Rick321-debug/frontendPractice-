var twoSum = function(nums, target) {
    var hash = {
    }
    var a = []   
    for(let i = 0;i<nums.length;i++){
        if((target - nums[i]) in hash){
            a.push(i)
            a.push(hash[target-nums[i]])
        }
        else{
            hash[nums[i]] = i
        }
    } 
return a;
};
console.log(twoSum([3,6,5,3,2,1],11));