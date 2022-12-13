let s="accbddde";
s.sort;
let queries=[1,3,12,5,9,10];
let i=0;
let j=1;
let count=1;
let map=new Map();
while(j<s.length){
    if(s[i]!=s[j]){
        map.set(s[i],count);
        i=j;
        j++;
        count=1;
    }
    else if(s[i]==s[j]){
        j++;
        count++;
    }
}
map.set(s[s.length-1],count)
let arr=[];
for(let pairs of map){
    let [key,count]=pairs
    if(count==1){
        arr.push(key.charCodeAt()-96)
    }else{
        let value=key.charCodeAt()-96;
        let sum=value;
        for(let i=0;i<count;i++){
            arr.push(sum);
            sum=sum+value
        }
        
    }
}
let outstr=[];
for(let i=0;i<queries.length;i++){
    let index=arr.indexOf(queries[i]);
    if(index==-1){
        outstr.push("No")
    }else{
        outstr.push("Yes")
    }
}
console.log(outstr);
// let string = s.split("");
// // console.log(string);
// let map = new Map();
// let left = 0;
// let right = 0;

// let  sub =string[left]
// let sum = 0;

// while(right<string.length){
    
//     if(right == left){                           //             
//         sub =string[left]                        // a
//         sum += sub.charCodeAt(string[left]) -96  // 97-96 = 1
//         map.set(sum,sub) 
//         // console.log(sub)
//     }
//     else if(string[right] == string[left]){
//         sub+= string[right]                              //aa             aaa
//         // console.log(sub)
//         sum += sub.charCodeAt(string[left])-96           //1+97-96 = 2     2+97-96=3
//         map.set(sum,sub)
//     }
//     else{
//         left = right   //3 = 3
//         sub =string[left]   //b
//         // console.log(sub) 
//         sum = 0;  
//         sum +=  sub.charCodeAt(string[left])-96   //3+ 99 -96
//         map.set(sum,sub)
//     }
//     right++                                          //1    2     3
// }
// // console.log(map)

// let array = [];
// let querySize = parseInt(readLine());
// for(let i = 0 ; i < querySize;i++){
//     array.push(parseInt(readLine()))
// }
// // console.log(array)

// for(let i = 0 ;  i< array.length ; i++){
//     if(map.has(array[i])){
//         console.log("Yes")
//     }
//     else{
//         console.log("No")
//     }
// }
