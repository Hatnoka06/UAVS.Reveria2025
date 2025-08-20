// please do not use my source code without my permission, I put a lot of effort into it and please do let me know if you want to clone it, use it for your project, I begggg

const questions = [
    {
        question: "Q1/12: You’ve just heard the news about your favorite Got Talent’s Show coming up. Your first reaction is to…",
        image: "images/Q1.gif",
        answers: {
            I: {
                text: "Spend some quiet time alone guessing which artists to see and curating the perfect plan",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "Immediately call your friends to share the excitement and plan group activities for the show.",
                scores: { E: +1, I: 0 },
            },
        },
    },
    {
        question: "Q2/12: The night before the show, as the excitement builds, you decide to…",
        image: "images/Q2.gif",
        answers: {
            I: {
                text: "Stay home, relax, and mentally prepare by listening to music and imagining the day ahead.",
                scores: { E: 0, I: +1 },
            },
            E: {
                text: "Head out to a fan meetup or social event to chat about the show with other enthusiasts",
                scores: { E: +1, I: 0 },
            },
        },
    },
    {
        question: "Q3/12: On the day of the show, as you prepare to head to the venue, you…",
        image: "images/Q3.gif",
        answers: {
            I: {
                text: "Pack light with just your ticket and essentials, wanting to focus on the performances",
                scores: { I: +1, E: 0 },
            },
            E: {
                text: "Bring extras like a sign or snacks to share, eager to connect with other audience members.",
                scores: { I: 0, E: +1 },
            },
        },
    },
    {
        question: "Q4/12: You arrive at the theater, and the stage is set for an unforgettable night. As the show begins, you’re most captivated by…",
        image: "images/Q4.gif",
        answers: {
            S: {
                text: "The tangible details - the performers’ costumes, stage effects, and precise execution.",
                scores: { N: 0, S: +1 },
            },
            N: {
                text: "The overall vibe—the energy of the crowd and the potential for magical moments",
                scores: { N: +1, S: 0 },
            },
        },
    },
    {
        question: "Q5/12: A breathtaking magician takes the stage. As you watch, you said…",
        image: "images/Q5.gif",
        answers: {
            S: {
                text: "Wow, their sleight of hand and clever props are absolutely flawless!",
                scores: { N: +1, S: 0 },
            },
            N: {
                text: "This act is so magical. Does the world really have magic?",
                scores: { N: 0, S: +1 },
            },
        },
    },
    {
        question: "Q6/12: During a break between acts, you have a moment to explore the venue. You choose to:",
        image: "images/Q6.gif",
        answers: {
            S: {
                text: "Stick to your seat, checking the agenda to ensure you’re ready for the next act",
                scores: { N: 0, S: +1 },
            },
            N: {
                text: "Wander around, checking out the sponsor table and take another FREE PHOTOBOOTH ",
                scores: { N: +1, S: 0 },
            },
        },
    },
    {
        question: "Q7/12: While chatting with your friends, you learn they’re rooting for a different act than you. You:",
        image: "images/Q7.gif",
        answers: {
            T: {
                text: "Explain why your favorite act is superior, citing their technical achievements or judges’ scores.",
                scores: { T: +1, F: 0 }
            },
            F: {
                text: "Suggest cheering for both acts, ensuring you both enjoy the show together.",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "Q8/12: Your friend's favorite performer got eliminated, you...",
        image: "images/Q8.gif",
        answers: {
            T: {
                text: "Suggest watching other strong acts still in UAVS Got Talent lineup to keep the excitement going.",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "Offer a sympathetic ear, sharing their disappointment and lifting their spirits.",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "Q9/12: As the show progresses, you’re discussing with your group which act deserves to win. You:",
        image: "images/Q9.gif",
        answers: {
            T: {
                text: "Argue for a clear winner based on objective criteria, like skill or audience reaction.",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "Ensure everyone’s opinions are heard, even if it means debating longer.",
                scores: { T: 0, F: +1 },
            },
        },
    },
    {
        question: "Q10/12: The final result concludes, and as you leave the theater, you reflect on the night, feeling:",
        image: "images/Q10.gif",
        answers: {
            J: {
                text: "Satisfied that you saw all the acts you wanted, with the show running smoothly.",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Thrilled by unexpected surprises, like a wildcard act stealing the show.",
                scores: { J: 0, P: +1 },
            },
        },

    },
    {
        question: "Q11/12: A few days later, thinking about the next Got Talent season, you:",
        image: "images/Q11.gif",
        answers: {
            J: {
                text: "Start planning how you’ll get tickets early or choose the best seats for the show.",
                scores: { J: +1, P: 0 },
            },
            P: {
                text: "Look forward to the next event, excited for whatever surprises it brings.",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q12/12: Back home, you deal with your keepsakes like your ticket stub, program, or photos by:",
        image: "images/Q12.gif",
        answers: {
            J: {
                text: "Sorting them into a tidy collection and create a capcut video then post it on social media",
                scores: { J: 0, P: +1 },
            },
            P: {
                text: "Keeping them as they are, letting the night’s memories stay alive in your thoughts.",
                scores: { J: +1, P: 0 },
            },
        },
    },
    {
        question: "Then you wake up again. You return to the first day, but there is no UAVS Got Talent. You realize it was a Vivid Dream from your imagination.",
        image: "images/Q13.gif",
        answers: {
            K: {
                text: "Wait...all that just a dream?",
            },
            U: {
                text: "Oh no...Is this a sign for the future?",
            },
        },
    },
];

const resultOptions = {
    "ISTJ": {
        image: "Classic Rock - ISTJ.png",
    },
    "ISFJ": {
        image: "Classical - ISFJ.png"
    },
    "INFJ": {
        image: "Indie - INFJ.png"
    },
    "INTJ": {
        image: "Instrumental - INTJ.png"
    },
    "ISTP": {
        image: "Electronic - ISTP.png"
    },
    "ISFP": {
        image: "Blues - ISFP.png"
    },
    "INFP": {
        image: "Folk - INFP.png"
    },
    "INTP": {
        image: "Jazz - INTP.png"
    },
    "ESTP": {
        image: "Rap - ESTP.png"
    },
    "ESFP": {
        image: "Dance - ESFP.png"
    },
    "ENFP": {
        image: "Hip Hop - ENFP.png"
    },
    "ENTP": {
        image: "Punk - ENTP.png"
    },
    "ESTJ": {
        image: "Motivation - ESTJ.png"
    },
    "ESFJ": {
        image: "Country - ESFJ.png"
    },
    "ENFJ": {
        image: "Pop - ENFJ.png"
    },
    "ENTJ": {
        image: "Rock - ENTJ.png"
    },

};

let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...


function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...scores));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    //each pair
    const result = pairs.map(pair => topLetters[pair]).join('');

    //show result
    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    } else {

    }

    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}

//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

// Setup download button - called after result is shown
function setupDownloadButton() {
    const downloadBtn = document.getElementById('download-result');
    if (downloadBtn) {
        downloadBtn.replaceWith(downloadBtn.cloneNode(true));
        const newDownloadBtn = document.getElementById('download-result');
        
        newDownloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadResultImage();
        });
    }
}

// Add this line to your showResult() function at the end:
setupDownloadButton();

// Download function with fallback
function downloadResultImage() {
    const resultImage = document.getElementById('result-image');
    
    if (!resultImage || !resultImage.src) {
        alert('No result image available to download!');
        return;
    }
    
    // Try canvas method first
    if (resultImage.complete) {
        tryCanvasDownload();
    } else {
        resultImage.onload = tryCanvasDownload;
    }
    
    function tryCanvasDownload() {
        try {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = resultImage.naturalWidth || 360;
            canvas.height = resultImage.naturalHeight || 300;
            
            ctx.drawImage(resultImage, 0, 0);
            
            canvas.toBlob(function(blob) {
                if (blob) {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    
                    const personalityType = resultImage.alt.replace(' Image', '') || 'PersonalityResult';
                    const timestamp = new Date().toISOString().slice(0,10);
                    link.download = `UAVS_${personalityType}_${timestamp}.png`;
                    
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                } else {
                    fallbackDownload();
                }
            }, 'image/png');
            
        } catch (error) {
            fallbackDownload();
        }
    }
    
    function fallbackDownload() {
        const link = document.createElement('a');
        link.href = resultImage.src;
        const personalityType = resultImage.alt.replace(' Image', '') || 'PersonalityResult';
        const timestamp = new Date().toISOString().slice(0,10);
        link.download = `UAVS_${personalityType}_${timestamp}.png`;
        link.click();
    }
}


document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


