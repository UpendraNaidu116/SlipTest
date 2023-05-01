const quizData = [
    {
        question: "Who Is The Prime Minister Of INDIA?",
        a: "Amith Shah",
        b: "Rahul Gandi",
        c: "Modi",
        d: "APJ Abdul Kalam",
        correct: "c",
    },
    {
        question: "Who Invented By Zero(0)",
        a:"Srinivasa Ramanujan",
        b:"Aryabatta",
        c:"Sarvepally Radhakrishnan",
        d:"None of the above",
        correct:"b",
    },
    {
        question: "What Is The Capital Of INDIA",
        a:"Mumbai",
        b:"Kolkatta",
        c:"Delhi",
        d:"Bangloore",
        correct:"c",
    },
    {
        question: "Who Is The CM Of Telangana?",
        a:"KCR",
        b:"Revanth Reddy",
        c:"KTR",
        d:"Balayya",
        correct:"a",
    },
    {
        question: "What Is The Reminder Of 24/12?",
        a:"2",
        b:"1",
        c:"0",
        d:"None Of The Above",
        correct:"c",
    },
    {
        question: "Who Is The First & Last Grand Child in Pegada's Family?",
        a:"Abhilash & Ashu",
        b:"Amitha & Vasu Sri",
        c:"Bavith & Nirosh",
        d:"Abhilash & Abhinav",
        correct:"d",
    },
    {
        question: "Who's Nickname Is 'Srujana'?",
        a:"Abhinav",
        b:"Ashu",
        c:"Vinnu",
        d:"Ashu & Abhinav",
        correct:"b",
    },
    {
        question: "Who Ate With MEHANDI Instead Of 'Roselle(Gongura)'?",
        a:"Abhinav",
        b:"Ashu",
        c:"Nirosh",
        d:"Abhilash",
        correct:"d",
    },
   
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl= document.getElementById('question')
const a_text= document.getElementById('a_text')
const b_text= document.getElementById('b_text')
const c_text= document.getElementById('c_text')
const d_text= document.getElementById('d_text')
const submitBtn= document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})