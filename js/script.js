
for (let i = 0; i <= 100 ; i++){

    let num = document.getElementById('#number');

    if( i % 3 == 0 && i % 5 == 0){
        i.backgroundColor = "#f0466f";
        
        num.append(fizzBuzz);
    }

    else if(i % 3 == 0){
        i.backgroundColor = "#0cd6a1";
        num.append("Fizz");
    }
    else if(i % 5 == 0){
        i.backgroundColor = "#ffd166";
        num.append("Buzz");
    }

    else{
        i.backgroundColor = "#1389b2";
        num.append(i);
    }

}