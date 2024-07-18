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
//https://leetcode.com/problems/implement-queue-using-stacks/

var MyQueue = function() {
    this.q=[]
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.q.push(x)

};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const val=this.q[0]
    let x=0
    while(this.q[x]){
        this.q[x]=this.q[x+1]
        x++
    }
    return val
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.q[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.q.length===0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
//https://leetcode.com/problems/lru-cache/description/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map= new Map()
    this.capacity=capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.map.has(key)){
        return -1
    }
    const val= this.map.get(key)
    this.map.delete(key)
    this.map.set(key, val)
    return val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.map.delete(key)
    this.map.set(key, value)
    if(this.map.size>this.capacity){
        const firstItem= this.map.keys().next().value
        this.map.delete(firstItem)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

https://leetcode.com/problems/implement-stack-using-queues/description/

var MyStack = function() {
    this.q=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q.pop()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q[this.q.length-1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length===0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var preorderTraversal = function(root) {
    let arr=[]
    if(!root){
        return arr
    }
    arr.push(root.val)
    if(root.left){
        arr.push(...preorderTraversal(root.left))
    }
    if(root.right){
        arr.push(...preorderTraversal(root.right))
    }
    return arr
};

var postorderTraversal = function(root) {
    let arr=[]
    if(!root){
        return arr
    }
    if(root.left){
        arr.push(...postorderTraversal(root.left))
    }
    if(root.right){
        arr.push(...postorderTraversal(root.right))
    }
    arr.push(root.val)
    return arr
};

var inorderTraversal = function(root) {
    let arr=[]
    if(!root){
        return arr
    }
    if(root.left){
        arr.push(...inorderTraversal(root.left))
    }
    arr.push(root.val)
    if(root.right){
        arr.push(...inorderTraversal(root.right))
    }
    
    return arr
}; 