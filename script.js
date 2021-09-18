const  quizDB = [
    {
        question: "Q1:  What is the sum of 130+125+191?",
        a: "450",
        b: "470",
        c: "446",
        d: "450",
        ans: "ans3"
    },
    {
        question: "Q2: If we minus 712 from 1500, how much do we get??",
        a: "788",
        b: "798",
        c: "778",
        d: "877",
        ans: "ans1"
    },
    {
        question: "Q3:  50 times of 8 is equal to:",
        a: "600",
        b: "450",
        c: "400",
        d: "550",
        ans: "ans3"
    },
    {
        question: "Q4:  110 divided by 10 is:?",
        a: "11",
        b: "21",
        c: "10",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q5: Solve 24÷8+2.",
        a: "5",
        b: "6",
        c: "8",
        d: "12",
        ans: "ans1"
    },
    {
        question: "Q6:  Solve: 300 – (150×2)",
        a: "300",
        b: "250",
        c: "199",
        d: "0",
        ans: "ans4"
    },
    {
        question: "Q7: The product of 121 x 0 x 200 x 25 is",
        a: "0",
        b: "1500",
        c: "721",
        d: "None of these",
        ans: "ans1"
    },
    {
        question: "Q8: What is the next prime number after 5?",
        a: "6",
        b: "9",
        c: "11",
        d: "7",
        ans: "ans4"
    },
    {
        question: "Q9: Equation of (x+1)2-x2=0 has number of real roots equal to:",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        ans: "ans1"
    },
    {
        question: "Q10:  If ½ is a root of the quadratic equation x2-mx-5/4=0, then value of m is:",
        a: "2",
        b: "-2",
        c: "3",
        d: "None of these",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option5 = document.querySelector('#option5');
const option6 = document.querySelector('#option6');
const option7 = document.querySelector('#option7');
const option8 = document.querySelector('#option8');
const option9 = document.querySelector('#option9');
const option10 = document.querySelector('#option10');


const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};


const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans ){
        score++;
    };

questionCount++;

deselectAll();

if(questionCount < quizDB.length){
    loadQuestion();
}else{

    showScore.innerHTML = `
    <h3> You scored ${score}/${quizDB.length} * </h3>
    <button class="btn" onclick="location.reload()"> play again </button>
    `;

    showScore.classList.remove('scoreArea');
}


});