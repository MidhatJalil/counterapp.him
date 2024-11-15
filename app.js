(function(){
    let counter = 0;
    const decreament =() =>{
        counter--;
        updateCounter();
    };

    const increament = () =>{
        counter++;
        updateCounter();
    };

    const updateCounter= () =>{
        document.getElementById("counter").innerHTML = counter;
    } ;

    function refresh(){
     document.getElementById('counter').innerHTML = '0';
    }

    document.getElementById('refresh').addEventListener("click",refresh);
    document.getElementById('increament').addEventListener("click",increament);
    document.getElementById('decreament').addEventListener("click",decreament);

})();