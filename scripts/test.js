/* Fahad JS script */

var questions = [
    {
        question : '1) Which type of Python language is ___' ,
        a: 'Object-Oriented',
        b: 'Object-Based',
        c: 'Assembly-language',
        d: 'High-level',
        ans: 'Object-Oriented'
    },
    {
        question : '2) Which one of the following also known as Conditional Expression:' ,
        a: 'Alternative to if-else',
        b: 'Switch statement',
        c: 'If-then-else statement',
        d: 'Immediate if',
        ans: 'Immediate if'
    },
    {
        question : '3) In Python, what is a block of statement?' ,
        a: 'Conditional block',
        b: 'Block that combines a number of statements into a single compound statement',
        c: 'Both conditional block and a single statement',
        d: 'Block that contains a single statement',
        ans: 'Block that combines a number of statements into a single compound statement'
    },
    {
        question : '4) Which built-in method removes the last element from an array and returns that element?' ,
        a: 'last()',
        b: 'get()',
        c: 'pop()',
        d: 'None of the above.',
        ans: 'pop()'
    },
    {
        question : '5) Which of the following function of Array object removes the first element from an array and returns that element?' ,
        a: 'reverse()',
        b: 'shift()',
        c: 'slice()',
        d: 'some()',
        ans: 'shift()'
    },
    {
        question : '6) Is Python case sensitive when dealing with identifiers?' ,
        a: 'no',
        b: 'yes',
        c: 'machine dependent',
        d: 'none of the mentioned',
        ans: 'yes'
    },
    {
        question : '7) Which of the following is the correct extension of the Python file?' ,
        a: '.python',
        b: '.pl',
        c: '.py',
        d: '.p',
        ans: '.py'
    },
    {
        question : '8) Is Python code compiled or interpreted?' ,
        a: 'Python code is both compiled and interpreted',
        b: 'Python code is neither compiled nor interpreted',
        c: 'Python code is only compiled',
        d: 'Python code is only interpreted',
        ans: 'Python code is both compiled and interpreted'
    },
    {
        question : '9) All keywords in Python are in _________' ,
        a: 'Capitalized',
        b: 'lower case',
        c: 'UPPER CASE',
        d: 'None of the mentioned',
        ans: 'None of the mentioned'
    },
    {
        question : '10) Which keyword is used for function in Python language?' ,
        a: 'Function',
        b: 'def',
        c: 'Fun',
        d: 'Define',
        ans: 'def'
    },
];

var btns = [];
var grade = 0;

function loadQuestion(qNum)
{
    document.getElementById("quiz").innerHTML += `<div class="question-bar">
            <h2 class="question">` + questions[qNum].question + `</h2>
            <br>
            <ul>
              <li>
                <input type="radio" value="a` + qNum + `" name="option` + qNum + `" id="a` + qNum + `" class="ansList">
                <label for="a` + qNum + `" id="ansa` + qNum + `">` + questions[qNum].a + `</label>
              </li>
              <li>
                <input type="radio" value="b` + qNum + `" name="option` + qNum + `" id="b` + qNum + `" class="ansList">
                <label for="b` + qNum + `" id="ansb` + qNum + `">` + questions[qNum].b + `</label>
              </li>
              <li>
                <input type="radio" value="c` + qNum + `" name="option` + qNum + `" id="c` + qNum + `" class="ansList">
                <label for="c` + qNum + `" id="ansc` + qNum + `">` + questions[qNum].c + `</label>
              </li>
              <li>
                <input type="radio" value="d` + qNum + `" name="option` + qNum + `" id="d` + qNum + `" class="ansList">
                <label for="d` + qNum + `" id="ansd` + qNum + `">` + questions[qNum].d + `</label>
              </li>

            </ul>
                <div class="footer-button">
                    <button id="` + qNum + `" class="checkBtn">Check</button>
                </div>
            </div>`;
}

function loadQuestions()
{
    //loadQuestion(2);
    for(let i = 0; i < questions.length; i++)
    {
        loadQuestion(i);
        
        if(i+1 < questions.length)
        {
            document.getElementById("quiz").innerHTML += `<br>`;
            document.getElementById("quiz").innerHTML += `<hr>`;
        }
    }
    
    document.getElementById("quiz").innerHTML += `<br><hr><br>`;
    document.getElementById("quiz").innerHTML += `<h2 id="grade">Your Result is `+ grade + `/` + questions.length + `</h2>`;
    
    for(let i = 0; i < questions.length; i++)
    {
        btns.push(i.toString());
        
        btns[i] = document.getElementById(i.toString());
        console.log(i);
        btns[i].onclick  = function()
        {
            var radioButtons = document.getElementsByName("option" + i);
            var selectedNum = Boolean(false);
            
            for (let j = 0; j < radioButtons.length; j++) 
            {
                if (radioButtons[j].checked) 
                {
                    var label = radioButtons[j].nextElementSibling;
                    var labelValue = label.textContent;
                    
                    console.log(labelValue);
                    
                    if(questions[i].ans == labelValue)
                    {
                        label.style.color = "limegreen";
                        updateGrade();
                    }
                    else if(questions[i].ans != labelValue)
                    {
                        label.style.color = "red";
                    }
                    
                    selectedNum = true;
                }
            }
            
            for (let j = 0; j < radioButtons.length; j++) 
            {
                if(selectedNum == true)
                {
                    radioButtons[j].disabled = true;
                }
            }
            
        }
    }
    
    
    
}

function updateGrade()
{
    grade++;
    
    document.getElementById("grade").innerHTML = `Your Result is `+ grade + `/` + questions.length +`` + `<br> <button class="checkBtn" onclick="refreshPage()">Try Again</button>`;
}

function refreshPage()
{
    window.location.reload();
} 
