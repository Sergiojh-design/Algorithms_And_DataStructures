// First recursive example. (Udemy solution)
function countDown(num) {
  if(num <= 0){
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}