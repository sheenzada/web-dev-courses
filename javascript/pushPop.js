// array
let a=[1,3,4,5];
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a);

a.push(6);
a.push(7);
// a.unshift(0);
// a.unshift(-1);
// a.unshift(2);
console.log(a);
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// console.log(a);

// a.map((x)=>{
//     console.log(x);
// },1);
// let arr=a.reduce((acc,curr)=>{
//     return acc+curr;
// },0);

// console.log(arr);

// a.slice(1,3);
// console.log(a);
// a.splice(4,2);
// console.log(a);
// let b=a.slice(1,3);
// console.log(b);
// let c=a.splice(1,3);
// console.log(c);
// console.log(a);

a.map((x)=>{
    console.log(x);
});

console.log(a);

let val=a.reduce((acc,curr)=>{
    console.log(acc,curr);
    return acc+curr;
},0);

console.log(`the sum of array is ${val}`);

a.forEach((x)=>{
    console.log(`the value is ${x}`);
}
);
let fil=a.filter((x)=>{
    return x%2==0;
});
console.log(fil);

let sum=a.some((x)=>{
    return x%2==0;
});
console.log(sum);

let er=a.every((x)=>{
    return x%2==0;
});
console.log(er);

ary=a.sort((a,b)=>{
    return a-b;
});
console.log(ary);