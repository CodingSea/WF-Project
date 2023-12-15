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
}

function generate2()
{
    var code = `a <span class="brown">=</span> <span class="red">33</span><br>
    b <span class="brown">=</span> <span class="red">200</span><br>
    <span class="brown">if</span> b <span class="brown">></span> a:<br>
      &emsp; <span class="brown">print</span>(<span class="green">"b is greater than a"</span>)`;
    document.getElementById("code_text").innerHTML = code;
}

function generate3()
{
    var code = `x <span class="brown">=</span> <span class="red">0</span><br>

    <span class="brown">if</span> x ></span> <span class="red">0</span>:<br>
    &emsp; <span class="brown">print</span>(<span class="green">"x is positive."</span>)<br>
    <span class="brown">elif</span> x <</span> <span class="red">0</span>:<br>
    &emsp; <span class="brown">print</span>(<span class="green">"x is negative."</span>)<br>
    <span class="brown">else</span>:<br>
    &emsp; <span class="brown">print</span>(<span class="green">"x is zero."</span>)`;
    document.getElementById("code2_text").innerHTML = code;
}

function generate4()
{

    var code = `has_passed_exam = <span class="red">False</span><br>

                        <span class="brown">if not</span> has_passed_exam:<br>
                            &emsp;<span class="brown">print</span>(<span class="green">"You have not passed the exam."</span>)`;
    document.getElementById("code4_text").innerHTML = code;
    document.getElementById("code4_text").style.color = "white";
}


function generate5()
{

    var code = `x <span class="brown">=</span> <span class="red">10</span><br>
    y <span class="brown">=</span> <span class="red">5</span><br>
    
    <span class="brown">if</span> x <span class="brown">></span> <span class="red">0</span> and y <span class="brown">></span> <span class="red">0</span>:<br>
      &emsp;  <span class="brown">print</span>(<span class="green">"Both x and y are positive."</span>)`;
    document.getElementById("code5_text").innerHTML = code;
}


/* LOOPS */
function generate6()
{
    var code = `fruits <span class="brown">=</span> [<span class="green">"apple"</span>, <span class="green">"banana"</span>, <span class="green">"cherry"</span>]<br>

    <span class="brown">for</span> fruit <span class="brown">in</span> fruits:<br>
        &emsp; <span class="brown">print</span>(fruit)`;
    document.getElementById("code6").innerHTML = code;
}

function generate7()
{

    var code = `count <span class="brown">=</span> <span class="red">1</span><br>

    <span class="brown">while</span> count <span class="brown"><=</span> <span class="red">5</span>:<br>
        &emsp; <span class="brown">print</span>(<span class="green">"Count:"</span>, count)<br>
       &emsp; count <span class="brown">+=</span> <span class="red">1</span>`;
    document.getElementById("code7").innerHTML = code;
}

function generate8()
{

    var code = `count <span class="brown">=</span> <span class="red">1</span><br>

    <span class="brown">while</span> <span class="red">True</span>:<br>
        &emsp; <span class="brown">print</span>("Count:"</span>, count)<br>
        &emsp; count <span class="brown">+=</span> <span class="red">1</span><br>
        <span class="brown">if</span> count <span class="brown">></span> <span class="red">5</span>:<br>
        &emsp;<span class="brown">break</span>`;
    document.getElementById("code8").innerHTML = code;
}

