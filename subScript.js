/* Fahad JS script */

function generate()
{
    document.getElementById("generated_code_space").style.backgroundColor = "white";

    var code = `# set age variable<br>
    age = int(22)<br>
    # Check the age and display a message based on the condition <br>
    if age < 18: <br>
        print('You are underage.') <br>
    elif age >= 18 and age < 65: <br>
        print('You are an adult.')  <br>
    else: <br>
        print('You are a senior citizen.')`;
    document.getElementById("generated_code_space_text").innerHTML += code;
}

function generate2()
{
    document.getElementById("code").style.backgroundColor = "white";

    var code = `a = 33<br>
    b = 200<br>
    if b > a:<br>
      &emsp; print("b is greater than a")`;
    document.getElementById("code_text").innerHTML += code;
}

function generate3()
{
    document.getElementById("code2").style.backgroundColor = "white";

    var code = `x = 0<br>

    if x > 0:<br>
    &emsp; print("x is positive.")<br>
    elif x < 0:<br>
    &emsp; print("x is negative.")<br>
    else:<br>
    &emsp; print("x is zero.")`;
    document.getElementById("code2_text").innerHTML += code;
}

function generate4()
{
    document.getElementById("code4").style.backgroundColor = "white";

    var code = `has_passed_exam = False<br>

                        if not has_passed_exam:<br>
                            &emsp;print("You have not passed the exam.")`;
    document.getElementById("code4_text").innerHTML += code;
}

function generate5()
{
    document.getElementById("code5").style.backgroundColor = "white";

    var code = `x = 10<br>
    y = 5<br>
    
    if x > 0 and y > 0:<br>
      &emsp;  print("Both x and y are positive.")`;
    document.getElementById("code5_text").innerHTML += code;
}


/* LOOPS */
function generate6()
{
    document.getElementById("code6").style.backgroundColor = "white";
    
    var code = `<span>fruits = ["apple", "banana", "cherry"]<br>

    for fruit in fruits:<br>
        &emsp; print(fruit)</td></span>`;
    document.getElementById("code6").innerHTML += code;
}

function generate7()
{
    document.getElementById("code7").style.backgroundColor = "white";

    var code = `<span> count = 1<br>

    while count <= 5:<br>
        &emsp; print("Count:", count)<br>
       &emsp; count += 1</td></span>`;
    document.getElementById("code7").innerHTML += code;
}

function generate8()
{
    document.getElementById("code8").style.backgroundColor = "white";

    var code = `<span>count = 1<br>

    while True:<br>
        &emsp; print("Count:", count)<br>
        &emsp; count += 1<br>
        if count > 5:<br>
        &emsp;break</td></span>`;
    document.getElementById("code8").innerHTML += code;
}

