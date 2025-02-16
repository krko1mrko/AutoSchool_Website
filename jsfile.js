// Separate question pools
const crossroadsQuestions = [
    { id: "cx1", text: "Who has the right of way at this intersection?", type: "radio", options: ["Car A", "Car B", "Pedestrian"], answer: "Car A", image: "crossroad1.jpg", points: 5 },
    // Add 9 more questions with images
];

const signsQuestions = [
    { id: "sg1", text: "What does this sign mean?", type: "radio", options: ["Stop", "Yield", "Speed Limit"], answer: "Stop", image: "sign1.jpg", points: 3 },
    // Add 9 more questions with images
];

const generalQuestions = [
    { id: "gq1", text: "What should you do at a yellow light?", type: "radio", options: ["Speed up", "Slow down", "Stop if safe"], answer: "Stop if safe", points: 4 },
    // Add remaining general questions
];

// Function to get fixed number of questions from each pool
function getRandomQuestions() {
    let selectedCrossroads = [...crossroadsQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    let selectedSigns = [...signsQuestions].sort(() => 0.5 - Math.random()).slice(0, 10);
    let remainingPoints = 80 - selectedCrossroads.reduce((sum, q) => sum + q.points, 0) - selectedSigns.reduce((sum, q) => sum + q.points, 0);
    let selectedGeneral = [...generalQuestions].sort(() => 0.5 - Math.random()).slice(0, Math.max(remainingPoints / 4, 1));

    return [...selectedCrossroads, ...selectedSigns, ...selectedGeneral].sort((a, b) => a.id.localeCompare(b.id));
}

function loadQuestions() {
    const questionnaire = document.getElementById("questionnaire");
    questionnaire.innerHTML = "";

    const selectedQuestions = getRandomQuestions();
    selectedQuestions.forEach(q => {
        let questionDiv = document.createElement("div");
        questionDiv.className = "question-step";

        if (q.image) {
            let img = document.createElement("img");
            img.src = q.image;
            img.alt = "Question Image";
            questionDiv.appendChild(img);
        }

        let label = document.createElement("label");
        label.textContent = q.text;
        questionDiv.appendChild(label);

        q.options.forEach(option => {
            let radioContainer = document.createElement("div");

            let input = document.createElement("input");
            input.type = "radio";
            input.name = q.id;
            input.value = option;

            let optionLabel = document.createElement("label");
            optionLabel.textContent = option;

            radioContainer.appendChild(input);
            radioContainer.appendChild(optionLabel);
            questionDiv.appendChild(radioContainer);
        });

        questionnaire.appendChild(questionDiv);
    });
}

function showResult() {
    let correctAnswers = 0;
    let totalPoints = 0;
    let formData = new FormData(document.getElementById('questionnaire-form'));

    formData.forEach((value, key) => {
        let question = [...crossroadsQuestions, ...signsQuestions, ...generalQuestions].find(q => q.id === key);
        if (question && value === question.answer) {
            correctAnswers++;
            totalPoints += question.points;
        }
    });

    document.getElementById("result-text").innerHTML = `You answered ${correctAnswers} correctly.<br><strong>Score: ${totalPoints}/80</strong>`;
    document.getElementById("questionnaire").style.display = 'none';
    document.getElementById("result").style.display = 'block';
    document.getElementById("submit-btn").style.display = 'none';
}

document.getElementById("submit-btn").addEventListener("click", showResult);
window.onload = loadQuestions;