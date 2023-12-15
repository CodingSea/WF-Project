/* Fahad JS script */

function generate()
{
    document.getElementById("generated_code_space").style.backgroundColor = "#1d2e3f";

    var code = `<span class="gray"># set age variable</span><br>
    age <span class="brown">=</span> <span class="yellow">int</span>(<span class="red">22</span>)<br>
    <span class="gray"># Check the age and display a message based on the condition</span> <br>
    <span class="brown">if</span> age <span class="brown"><</span> <span class="red">18</span>: <br>
        <span class="brown">print</span>(<span class="green">'You are underage.'</span>) <br>
    <span class="brown">elif</span> age >= <span class="red">18</span> and age</span> < <span class="red">65</span>: <br>
        <span class="brown">print</span>(<span class="green">'You are an adult.'</span>)  <br>
    <span class="brown">else</span>: <br>
        <span class="brown">print</span>(<span class="green">'You are a senior citizen.'</span>)`;
    document.getElementById("generated_code_space_text").innerHTML = code;
    document.getElementById("generated_code_space_text").style.color = "white";
}

function generate2()
{
    var code = `a <span class="brown">=</span> <span class="red">33</span><br>
    b <span class="brown">=</span> <span class="red">200</span><br>
    <span class="brown">if</span> b <span class="brown">></span> a:<br>
      &emsp; <span class="brown">print</span>(<span class="green">"b is greater than a"</span>)`;
    document.getElementById("code_text").innerHTML = code;
    document.getElementById("code_text").style.color = "white";
}

function generate3()
{
    var code = `x = 0<br>

    if x > 0:<br>
    &emsp; print("x is positive.")<br>
    elif x < 0:<br>
    &emsp; print("x is negative.")<br>
    else:<br>
    &emsp; print("x is zero.")`;
    document.getElementById("code2_text").innerHTML = code;
    document.getElementById("code2_text").style.color = "white";
}

function generate4()
{

    var code = `has_passed_exam = False<br>

                        if not has_passed_exam:<br>
                            &emsp;print("You have not passed the exam.")`;
    document.getElementById("code4_text").innerHTML = code;
    document.getElementById("code4_text").style.color = "white";
}


function generate5()
{

    var code = `x = 10<br>
    y = 5<br>
    
    if x > 0 and y > 0:<br>
      &emsp;  print("Both x and y are positive.")`;
    document.getElementById("code5_text").innerHTML = code;
    document.getElementById("code5_text").style.color = "white";
}


/* LOOPS */
function generate6()
{
    var code = `<span>fruits = ["apple", "banana", "cherry"]<br>

    for fruit in fruits:<br>
        &emsp; print(fruit)</td></span>`;
    document.getElementById("code6").innerHTML = code;
}

function generate7()
{

    var code = `<span> count = 1<br>

    while count <= 5:<br>
        &emsp; print("Count:", count)<br>
       &emsp; count += 1</td></span>`;
    document.getElementById("code7").innerHTML = code;
}

function generate8()
{

    var code = `<span>count = 1<br>

    while True:<br>
        &emsp; print("Count:", count)<br>
        &emsp; count += 1<br>
        if count > 5:<br>
        &emsp;break</td></span>`;
    document.getElementById("code8").innerHTML = code;
}

