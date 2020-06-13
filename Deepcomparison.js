let comparison = function(a,b){
if(a!=null&&b!=null){
    if(a==b){
        return true} 
    else if (typeof(a)==typeof(b)&& keys(a) === keys(b)){
        return true}
    else{return false}     
}
else{return false}
    
}
let d = function(){
    console.log("message");
}
comparison(2,"d")
