var num=2393848573495873;
if(num%2==0){
    console.log("i")
}else{
    console.log("odd")
}

// program to find factorial

var number = 6,fact=1;

for(var i=1;i<=number;i++){
    fact = fact*i;
}
console.log("Factorial  = ",fact)



var j=1,sum=0;
while(j<=20){
    sum+=j;
    j++;
}
console.log(sum)

// do while 

var k=1;
do{
console.log(k);
k++;
}
while(k<0);



// for loop
for(var i = 1;i<=50;i=i+2){
    console.log(i)
}