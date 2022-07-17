var count = 0;

const Hello = () => {
   console.log("Hello World "+count++);
}
const debounce = (fn, delay) =>{
   let time;
   return function(){
      clearTimeout(time); 
      time = setTimeout(() => {
         Hello();
      },delay);
   }
}

//This will only call the function after a delay of 2sec.
const bounce = debounce(Hello, 2000);