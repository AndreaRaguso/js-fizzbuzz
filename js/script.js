
for (let i = 0; i <= 104 ; i++){

    if( i % 3 == 0 && i % 5 == 0){
        let num = document.getElementById('number');
        const fizzBuzz= document.createElement("li");
        fizzBuzz.style.backgroundColor = "#f0466f";
        fizzBuzz.textContent = "FizzBuzz";
        num.append(fizzBuzz);
    }

    else if(i % 3 == 0){
        let num = document.getElementById('number');
        const fizz= document.createElement("li");
        fizz.style.backgroundColor = "#0cd6a1";
        fizz.textContent = "Fizz";
        num.append(fizz);
    }
    else if(i % 5 == 0){
        let num = document.getElementById('number');
        const buzz= document.createElement("li");
        buzz.style.backgroundColor = "#ffd166";
        buzz.textContent = "Buzz";
        num.append(buzz);
    }

    else{
        let num = document.getElementById('number');
        const normal= document.createElement("li");
        normal.style.backgroundColor = "#1389b2";
        normal.textContent = i;
        num.append(normal);
    }

}