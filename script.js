/* =========================================================
   60 DAYS OF US
   Quiz Logic
   ========================================================= */


/* =========================================================
   GOOGLE APPS SCRIPT URL
   =========================================================

   We will add your Google Apps Script Web App URL here later.

   Example:

   const GOOGLE_SCRIPT_URL =
       "https://script.google.com/macros/s/YOUR-ID/exec";

   For now, leave it empty.
========================================================= */

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwDE3uRnGdclCX2HAZYbrcdHN4ugQ2wU8y_ql_lrEMhXyP4Nyi3c_fXuOrlSpgqGhvLOg/exec";


/* =========================================================
   QUIZ DATA
========================================================= */

const questions = [

    {
        number: 1,

        question: "Where did we first meet?",

        answers: [
            "Jupiter",
            "Trinoma",
            "Switzerland",
            "Sa Puso Mo"
        ],

        correct: 1,

        wrongMessages: [
            "JUPITER??? 😭😭😭 baby we are NOT astronauts HAHAHA",
            "YESSS... wait no. 😭 Think about where we ACTUALLY met.",
            "SWITZERLAND??? 😭😭 baby, did I secretly fly you to Europe?",
            "AY WOW SA PUSO MO 😭❤️ smooth answer, but that's not the answer HAHAHA"
        ]
    },


    {
        number: 2,

        question: "Where did we have our first kiss?",

        answers: [
            "Outside the mall",
            "At a restaurant",
            "In the cinema",
            "In the photobooth"
        ],

        correct: 2,

        wrongMessages: [
            "Nooo 😭 we weren't outside for that one HAHAHA",
            "A restaurant??? 😭 baby, we were busy eating HAHAHA",
            "CORRECTTT ❤️",
            "THE PHOTOBOOTH??? 😭😭 imagine HAHAHA"
        ]
    },


    {
        number: 3,

        question: "What is my reaction when you send a pic?",

        answers: [
            "DAMMMMM",
            "ANG GANDAA MOOOOO",
            "YOU ARE SO BEAUTIFUL",
            "All of the above"
        ],

        correct: 3,

        wrongMessages: [
            "DAMMMMM is definitely one of them 😭 but there's moreee.",
            "YESSSS I DO SAY THAT 😭❤️ but that's not the WHOLE answer.",
            "I mean... YES 😭❤️ but there's another one too.",
            "CORRECTTT 😭❤️ you KNOW me."
        ]
    },


    {
        number: 4,

        question: "What do I call you the most?",

        answers: [
            "Yanna",
            "Lover",
            "Babyyy",
            "Wifey"
        ],

        correct: 2,

        wrongMessages: [
            "Technically yes... but you KNOW what I call you the most 😭",
            "Lover??? 👀 okayyy but not the one I say all the time HAHAHA",
            "CORRECTTT BABYYY ❤️",
            "WIFEY??? 😭😭 slow downnn HAHAHA"
        ]
    },


    {
        number: 5,

        question: "What breed is my dog, Hatdog? 🐶",

        answers: [
            "Golden Retriever",
            "Shih Tzu",
            "Dachshund",
            "Husky"
        ],

        correct: 2,

        wrongMessages: [
            "GOLDEN RETRIEVER??? 😭 Have you even seen Hatdog HAHAHA",
            "Nooo 😭 Hatdog is not a little Shih Tzu HAHAHA",
            "CORRECTTT 🐶❤️",
            "HUSKY??? 😭😭 Hatdog would be so confused HAHAHA"
        ]
    },


    {
        number: 6,

        question: "What movie did we watch together? 🎬",

        answers: [
            "The Conjuring",
            "Insidious",
            "Annabelle",
            "Scream"
        ],

        correct: 1,

        wrongMessages: [
            "The Conjuring??? 😭 close to the horror vibe but NOPE.",
            "CORRECTTT 🎬❤️",
            "Annabelle??? 😭😭 we did NOT watch that one together.",
            "SCREAM??? 😭 baby that's a whole different movie HAHAHA"
        ]
    },


    {
        number: 7,

        question: "What food do you like that I know about? 🦐",

        answers: [
            "Pizza",
            "Shrimp / seafood",
            "Burgers",
            "Steak"
        ],

        correct: 1,

        wrongMessages: [
            "Pizza is good 😭 but that's not the one I'm thinking of.",
            "CORRECTTT 🦐❤️ I rememberrr.",
            "BURGERS??? 😭 okay but think seafood.",
            "STEAK??? 😭 baby where did the shrimp gooo?"
        ]
    },


    {
        number: 8,

        question: "What do you want for Christmas, babyy? 🎄❤️",

        type: "text"
    },


    {
        number: 9,

        question: "What is the name of our child? 👶",

        answers: [
            "Dominic Jr.",
            "Yanna Jr.",
            "Domly",
            "Hatdog Jr. 😭"
        ],

        correct: 2,

        wrongMessages: [
            "DOMINIC JR.??? 😭😭 okay that's creative but NO.",
            "YANNA JR.??? 😭❤️ I see the vision but nope HAHAHA",
            "CORRECTTT 😭❤️ DOMLYYYYY.",
            "HATDOG JR. 😭😭😭 WHAT HAVE WE CREATED"
        ]
    },


    {
        number: 10,

        question: "Is Dominic a yearner?",

        answers: [
            "Yes",
            "No"
        ],

        type: "both-valid"
    },


    {
        number: 11,

        question: "What do you think I like most about you?",

        answers: [
            "Your smile",
            "Your personality",
            "The way you make me feel",
            "Everything about you ❤️"
        ],

        correct: 3,

        wrongMessages: [
            "Your smile??? YESSS 😭❤️ but that's only part of it.",
            "Your personality??? Absolutely 😭 but not the whole answer.",
            "The way you make me feel??? ❤️ yes... but there's more.",
            "CORRECTTT ❤️ because I really mean EVERYTHING."
        ]
    },


    {
        number: 12,

        question: "What day is this? 👀",

        answers: [
            "Our 30th day",
            "Our 45th day",
            "Our 60th day",
            "I lost count because you're too distracting 😭"
        ],

        correct: 2,

        wrongMessages: [
            "30??? 😭 BABYYY we've made it further than that.",
            "45??? 😭 you're underestimating us.",
            "CORRECTTT 🥹❤️ 60 DAYS OF US.",
            "😭😭 okay that answer is actually adorable BUT NOOO."
        ]
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const introPage = document.getElementById("introPage");
const quizPage = document.getElementById("quizPage");
const finalPage = document.getElementById("finalPage");

const startButton = document.getElementById("startButton");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");

const answersContainer =
    document.getElementById("answersContainer");

const textAnswerContainer =
    document.getElementById("textAnswerContainer");

const textAnswer =
    document.getElementById("textAnswer");

const submitTextButton =
    document.getElementById("submitTextButton");

const feedback =
    document.getElementById("feedback");

const feedbackEmoji =
    document.getElementById("feedbackEmoji");

const feedbackMessage =
    document.getElementById("feedbackMessage");

const nextButton =
    document.getElementById("nextButton");

const progressText =
    document.getElementById("progressText");

const quizPageNumber =
    document.getElementById("quizPageNumber");

const playVoiceButton =
    document.getElementById("playVoiceButton");

const playIcon =
    document.getElementById("playIcon");

const playText =
    document.getElementById("playText");

const voiceMessage =
    document.getElementById("voiceMessage");

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* =========================================================
   QUIZ STATE
========================================================= */

let currentQuestionIndex = 0;

let questionCompleted = false;


/* =========================================================
   START QUIZ
========================================================= */

startButton.addEventListener("click", function () {

    transitionToPage(introPage, quizPage);

    currentQuestionIndex = 0;

    loadQuestion();

    backgroundMusic.volume = 0.35;

    backgroundMusic.play()
        .then(function () {
            console.log("Background music started ❤️");
        })
        .catch(function (error) {
            console.warn(
                "Background music could not start.",
                error
            );
        });

});

/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    const currentQuestion =
        questions[currentQuestionIndex];

    questionCompleted = false;

    /*
       Reset feedback
    */

    feedback.classList.add("hidden");

    nextButton.classList.add("hidden");

    /*
       Reset containers
    */

    answersContainer.innerHTML = "";

    answersContainer.style.display = "flex";

    textAnswerContainer.classList.add("hidden");

    textAnswer.value = "";

    /*
       Question number
    */

    const displayNumber =
        String(currentQuestion.number).padStart(2, "0");

    questionNumber.textContent =
        `QUESTION ${displayNumber}`;

    /*
       Progress
    */

    progressText.textContent =
        `${currentQuestion.number} / ${questions.length}`;

    /*
       Question text
    */

    questionText.textContent =
        currentQuestion.question;


    /*
       Question 8
    */

    if (currentQuestion.type === "text") {

        answersContainer.style.display = "none";

        textAnswerContainer.classList.remove("hidden");

        return;
    }


    /*
       Multiple choice
    */

    currentQuestion.answers.forEach(
        (answer, answerIndex) => {

            const button =
                document.createElement("button");

            button.className =
                "answer-button";

            button.type = "button";

            const letter =
                String.fromCharCode(65 + answerIndex);

            button.innerHTML = `
                <span class="answer-letter">
                    ${letter}
                </span>
                ${answer}
            `;

            button.addEventListener(
                "click",
                function () {

                    handleAnswer(
                        answerIndex,
                        button
                    );

                }
            );

            answersContainer.appendChild(button);

        }
    );

}


/* =========================================================
   HANDLE MULTIPLE CHOICE ANSWER
========================================================= */

function handleAnswer(
    answerIndex,
    selectedButton
) {

    if (questionCompleted) {
        return;
    }

    const currentQuestion =
        questions[currentQuestionIndex];


    /*
       QUESTION 10
       Both answers are valid.
    */

    if (currentQuestion.type === "both-valid") {

        recordAnswer({
            questionNumber: currentQuestion.number,

            question: currentQuestion.question,

            selectedAnswer:
                currentQuestion.answers[answerIndex],

            correct: true
        });


        selectedButton.classList.add("correct");

        questionCompleted = true;

        showFeedback(
            answerIndex === 0
                ? "CORRECT. 😭❤️ I fear I am indeed a certified yearner."
                : "...interesting. 👁️👁️ I would like to respectfully disagree with your answer. 😭",
            "❤️"
        );

        disableAnswerButtons();

        showNextButton();

        return;
    }


    /*
       NORMAL QUESTIONS
    */

    const isCorrect =
        answerIndex === currentQuestion.correct;


    /*
       RECORD EVERY ANSWER
    */

    recordAnswer({

        questionNumber:
            currentQuestion.number,

        question:
            currentQuestion.question,

        selectedAnswer:
            currentQuestion.answers[answerIndex],

        correct:
            isCorrect

    });


    /*
       WRONG ANSWER
    */

    if (!isCorrect) {

        selectedButton.classList.add("wrong");

        showFeedback(
            currentQuestion.wrongMessages[answerIndex],
            "😭"
        );


        /*
           Remove wrong animation class
           so it can animate again if clicked.
        */

        setTimeout(function () {

            selectedButton.classList.remove("wrong");

        }, 400);


        return;
    }


    /*
       CORRECT ANSWER
    */

    selectedButton.classList.add("correct");

    questionCompleted = true;

    showFeedback(
        getCorrectMessage(currentQuestion.number),
        "❤️"
    );

    disableAnswerButtons();

    showNextButton();

}


/* =========================================================
   QUESTION 8 — TEXT RESPONSE
========================================================= */

submitTextButton.addEventListener(
    "click",
    function () {

        if (questionCompleted) {
            return;
        }


        const answer =
            textAnswer.value.trim();


        /*
           Don't submit an empty answer.
        */

        if (answer.length === 0) {

            showFeedback(
                "You gotta tell me SOMETHINGGG 😭❤️",
                "👀"
            );

            textAnswer.focus();

            return;
        }


        /*
           Record exact text.
        */

        recordAnswer({

            questionNumber: 8,

            question:
                questions[7].question,

            selectedAnswer:
                answer,

            correct:
                null

        });


        questionCompleted = true;


        /*
           Hide input after submission.
        */

        textAnswer.disabled = true;

        submitTextButton.disabled = true;

        submitTextButton.style.opacity = "0.55";


        showFeedback(
            "hmmm... noted 👀🎄 I'll keep that in mind, babyyy ❤️",
            "🎄"
        );


        showNextButton();

    }
);


/* =========================================================
   CORRECT ANSWER MESSAGES
========================================================= */

function getCorrectMessage(questionNumber) {

    switch (questionNumber) {

        case 1:
            return "CORRECTTT ❤️ you remembered where this all started.";

        case 2:
            return "CORRECTTT 😭❤️ okayyyy you remembered THAT moment.";

        case 3:
            return "CORRECTTT 😭❤️ because honestly... all of them.";

        case 4:
            return "CORRECTTT BABYYY ❤️";

        case 5:
            return "CORRECTTT 🐶❤️ Hatdog would be proud.";

        case 6:
            return "CORRECTTT 🎬❤️ you remembered our movie.";

        case 7:
            return "CORRECTTT 🦐❤️ you know your seafood.";

        case 9:
            return "CORRECTTT 😭❤️ DOMLYYYYY.";

        case 11:
            return "CORRECTTT ❤️ because I really do mean everything.";

        case 12:
            return "CORRECTTT 🥹❤️ 60 DAYS OF US.";

        default:
            return "CORRECTTT ❤️";
    }

}


/* =========================================================
   FEEDBACK
========================================================= */

function showFeedback(
    message,
    emoji
) {

    feedbackEmoji.textContent = emoji;

    feedbackMessage.textContent = message;

    feedback.classList.remove("hidden");

}


/* =========================================================
   DISABLE ANSWERS
========================================================= */

function disableAnswerButtons() {

    const buttons =
        answersContainer.querySelectorAll(
            ".answer-button"
        );

    buttons.forEach(function (button) {

        button.classList.add("disabled");

    });

}


/* =========================================================
   NEXT BUTTON
========================================================= */

function showNextButton() {

    nextButton.classList.remove("hidden");

    if (
        currentQuestionIndex ===
        questions.length - 1
    ) {

        nextButton.innerHTML =
            `Finish the little quiz <span>♡</span>`;

    } else {

        nextButton.innerHTML =
            `Next page <span>→</span>`;

    }

}


/* =========================================================
   NEXT QUESTION
========================================================= */

nextButton.addEventListener(
    "click",
    function () {

        if (!questionCompleted) {
            return;
        }


        /*
           Last question
        */

           if (
            currentQuestionIndex ===
            questions.length - 1
        ) {
        
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        
            transitionToPage(
                quizPage,
                finalPage
            );
        
            return;
        }


        /*
           Next question
        */

        currentQuestionIndex++;

        loadQuestion();


        /*
           Scroll to top of question area
        */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   PAGE TRANSITIONS
========================================================= */

function transitionToPage(
    currentPage,
    nextPage
) {

    currentPage.classList.remove("active");

    nextPage.classList.add("active");

    nextPage.classList.remove("fade-in");

    /*
       Force browser to recognize animation restart.
    */

    void nextPage.offsetWidth;

    nextPage.classList.add("fade-in");

}


/* =========================================================
   ANSWER TRACKING
========================================================= */

function recordAnswer(data) {

    const record = {

        timestamp:
            new Date().toISOString(),

        questionNumber:
            data.questionNumber,

        question:
            data.question,

        selectedAnswer:
            data.selectedAnswer,

        correct:
            data.correct

    };


    /*
       Always keep a local copy too.

       This means that even if the internet connection
       temporarily fails, we still have the session history
       inside the browser.
    */

    saveLocally(record);


    /*
       Send to Google Apps Script
       once the URL has been configured.
    */

    if (GOOGLE_SCRIPT_URL.trim() !== "") {

        sendToGoogleSheet(record);

    }

}


/* =========================================================
   LOCAL BACKUP
========================================================= */

function saveLocally(record) {

    const storageKey =
        "sixtyDaysOfUsAnswers";

    let existingRecords = [];

    try {

        const saved =
            localStorage.getItem(storageKey);

        if (saved) {

            existingRecords =
                JSON.parse(saved);

        }

    } catch (error) {

        console.warn(
            "Could not read local answer history.",
            error
        );

    }


    existingRecords.push(record);


    try {

        localStorage.setItem(
            storageKey,
            JSON.stringify(existingRecords)
        );

    } catch (error) {

        console.warn(
            "Could not save local answer history.",
            error
        );

    }

}


/* =========================================================
   SEND DATA TO GOOGLE APPS SCRIPT
========================================================= */

function sendToGoogleSheet(record) {

    fetch(
        GOOGLE_SCRIPT_URL,
        {

            method: "POST",

            mode: "no-cors",

            headers: {
                "Content-Type":
                    "text/plain;charset=utf-8"
            },

            body:
                JSON.stringify(record)

        }
    )
    .then(function () {

        console.log(
            "Answer sent to Google Apps Script."
        );

    })
    .catch(function (error) {

        /*
           The local backup already saved the answer,
           so the quiz does not break if sending fails.
        */

        console.warn(
            "Could not send answer to Google Sheets.",
            error
        );

    });

}


/* =========================================================
   VOICE MESSAGE
========================================================= */

playVoiceButton.addEventListener(
    "click",
    function () {

        /*
           If audio is currently paused,
           start playing.
        */

        if (voiceMessage.paused) {

            voiceMessage.play()
                .then(function () {

                    playIcon.textContent = "❚❚";

                    playText.textContent =
                        "PLAYING MY MESSAGE...";

                })
                .catch(function (error) {

                    console.warn(
                        "Audio could not be played.",
                        error
                    );

                });

        }

        /*
           Otherwise pause it.
        */

        else {

            voiceMessage.pause();

            playIcon.textContent = "▶";

            playText.textContent =
                "PLAY MY MESSAGE";

        }

    }
);


/* =========================================================
   WHEN AUDIO FINISHES
========================================================= */

voiceMessage.addEventListener(
    "ended",
    function () {

        playIcon.textContent = "▶";

        playText.textContent =
            "PLAY MY MESSAGE";

    }
);


/* =========================================================
   PREVENT ACCIDENTAL FORM-LIKE BEHAVIOR
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        /*
           Enter should not accidentally trigger
           unexpected interactions inside the quiz.
        */

        if (
            event.key === "Enter" &&
            document.activeElement === textAnswer
        ) {

            /*
               Allow normal text entry inside textarea.
            */

            return;

        }

    }
);


/* =========================================================
   INITIAL STATE
========================================================= */

console.log(
    "60 Days of Us quiz loaded ❤️"
);