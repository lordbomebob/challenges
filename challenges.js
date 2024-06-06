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
//challenge 3
//q1
var merge = function(nums1, m, nums2, n) {
    let nums1end=m+n-1
    m--
    n--
    while (m >=0 && n>=0){
        if(nums1[m]>nums2[n]){
            nums1[nums1end]=nums1[m]
            m--
        }else{
            nums1[nums1end]=nums2[n]
            n--
        }
        nums1end--
    }

    while(n>=0){
        nums1[nums1end]=nums2[n]
        n--
        nums1end--
    }


};
//q2
var sortArray = function(nums) {
    if(nums.length<=1){
        return nums
    }
    const pivot =nums[0]
    const left=[]
    const right=[]
    for(let i=1; i<nums.length;i++){
        if(nums[i]<pivot){
            left.push(nums[i])
        }else{
            right.push(nums[i])
        }
    }
    return [...sortArray(left),pivot,...sortArray(right)]
};