function hello(){
  console.log("Hello World!");
}

function goodbye() {
  console.log("goodbye");
}

var callNtimes = function(n,func){
    for (var i=0;i<n;i++){
      func();
    }
};
callNtimes(5,hello);
callNtimes(5,goodbye);   
