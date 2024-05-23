//challeng #2
//Q1
var fib = function(n) {
    if(n==1){
        return 1
    }else if(n==0){
        return 0
    }
    return fib(n-1)+fib(n-2)
};

//Q2
var removeDuplicates = function(nums) {
    let con=[]
    let k=0
    for(let i=0;i<nums.length;i++){
        if(!con.includes(nums[i])){
            con.push(nums[i])
            nums[k]=nums[i]
            k++
        }
    }
    return k
};