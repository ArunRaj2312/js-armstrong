let n=parseInt(prompt("enter the value"));
let l=n.toString().length;
let a=n;
let b;
let c=1;
let d=0;
for(i=1;i<=l;i++){
    b=a%10;
    a=(a-b)/10;
    c=b**l;
    d=d+c;
}
if(n==d){
    document.write("armstrong");
}
else{
    document.write("not armstrong");
}