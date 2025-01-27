let count=0;
var x=document.getElementById("spam");
var btns=document.querySelectorAll(".btn");
console.log(btns);
btns.forEach(function (btn){
btn.addEventListener('click' , function(e){
var styles=e.currentTarget.id;
if(styles=="decrement"){
    count--;
    x.textContent=count;
}
else if(styles=="increment"){
    count++;
    x.textContent=count;
}
else if(styles=="reset"){
    count=0
    x.textContent=0;
}
if(count>0){
    x.style.color="yellow";
}
else if(count<0){
    x.style.color="red";
}
else if(count==0){
    x.style.color="orange";
}
})
});