const quizData = [
    {
        question: "Kapan bb dan aku pertama ketemu?",
        a: "gatau",
        b: "lupa",
        c: "kemarin",
        d: "23 maret 2022",
        correct: "d",
    },
    {
        question: "dimana bb dan aku pertama ketemu?",
        a: "ace hardware",
        b: "starbuck ggp",
        c: "narogong :p",
        d: "bawah kalimalang",
        correct: "b",
    },
    {
        question: "makin kesini makin ____",
        a: "kesana",
        b: "apasih gajelas lu",
        c: "freak",
        d: "Helicopters helicopter",
        correct: "a",
    },
    {
        question: "bb tau ga si kalo",
        a: "aku",
        b: "kangen banget",
        c: "sama kamuuuhh",
        d: "jawabannya b bb btw <3",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

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
                <h2>aku gabut bgt bb sampe bikinin ini, soalnya its easier to fall for u than to fall asleep :p btw nih nilai keanehan kamu  ${score}/${quizData.length} </h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
