
for (let i = 0; i <= 100 ; i++){

    if( i % 3 == 0 && i % 5 == 0){
        let num = document.getElementById('number');
        const fizzBuzz= document.createElement("span");
        fizzBuzz.style.backgroundColor = "red";
        fizzBuzz.textContent = "FizzBuzz";
        num.append(fizzBuzz);
    }

    else if(i % 3 == 0){
        let num = document.getElementById('number');
        const fizz= document.createElement("span");
        fizz.style.backgroundColor = "red";
        fizz.textContent = "Fizz";
        num.append(fizz);
    }
    else if(i % 5 == 0){
        let num = document.getElementById('number');
        const buzz= document.createElement("span");
        buzz.style.backgroundColor = "red";
        buzz.textContent = "Buzz";
        num.append(buzz);
    }

    else{
        let num = document.getElementById('number');
        const normal= document.createElement("span");
        normal.style.backgroundColor = "red";
        normal.textContent = i;
        num.append(normal);
    }

}