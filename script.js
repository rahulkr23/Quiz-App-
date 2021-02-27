const quizDB = [

    {
        question: "Q1: Web page editors works on a ____ principle?",
        a: "WWW",
        b: "HTML",
        c: "WYSIWYG",
        d: "WYGWYSI",
        ans: "ans3"
    },
    {
        question: "Q2: Which program is used by web clients to view the web pages?",
        a: "Web browser",
        b: "Protocol",
        c: " Web server",
        d: "Search Engine",
        ans: "ans1"
    },
    {
        question: "Q3: What is the name of the location address of the hypertext documents?",
        a: "Uniform Resource Locator",
        b: "Web server",
        c: " File",
        d: "Web address",
        ans: "ans1"
    },
    {
        question: "Q4: What are shared on the Internet and are called as Web pages?",
        a: " Programs",
        b: "Cables",
        c: "Hypertext documents",
        d: "None",
        ans: "ans3"
    },
    {
        question: "Q5: How many colour names are used by the browsers?",
        a: "8",
        b: "10",
        c: "12",
        d: "16",
        ans: "ans4"
    },
    {
        question: "Q6: Which tag is used to display text in title bar of a web document?",
        a: "Body tag",
        b: " Meta tag",
        c: " Title tag",
        d: " Comment tag",
        ans: "ans3"
    },
    {
        question: "Q7: The ____ attribute is used to identify the values of variables.",
        a: "text",
        b: "http-equiv",
        c: "content",
        d: "name",
        ans: "ans3"
    },
    {
        question: "Q8: The language that instructs the browser on how to display the hypertext, and adds pictures to the document is __",
        a: "C",
        b: "COBOL",
        c: "HTML",
        d: "BASIC",
        ans: "ans3"
    },
    {
        question: "Q9: Which tag is used to identify the keywords describing the site?",
        a: "Anchor tag",
        b: "Title tag",
        c: " Meta tag",
        d: "Comment tag",
        ans: "ans1"
    },
    {
        question: "Q10: Which are used with a tag to modify its function?",
        a: "Files",
        b: "Functions",
        c: "Attributes",
        d: "Documents",
        ans: "ans3"
    },


];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;



}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentAnsElem) => {
        if (currentAnsElem.checked) {
            answer = currentAnsElem.id;

        }


    });

    return answer;

};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}



submit.addEventListener('click', () => {

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;

    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3> Your Scored  ${score}/${quizDB.length} 🥳  </h3>
        <button class ="btn" onclick = "location.reload()">Test Again </button

            `;
        showScore.classList.remove('scoreArea');

    }
});