function submitQuiz() {
    const form = document.getElementById("quizForm");
    let score = 0;
    const answers = {
        q1: "b",
        q2: "c",
        q3: "b",
        q4: "b",
        q5: "a",
        q6: "c",
        q7: "b",
        q8: "c",
        q9: "a",
        q10: "a",
        q11: "b"
        // Add more questions and their correct answers as needed
    };
    const explanations = {
        q1: "The primary goal of responsive web design is to ensure websites adapt to different devices and screen sizes.",
        q2: "Media queries are commonly used in CSS to implement responsive web design.",
        q3: "A media query allows you to apply styles based on the device characteristics such as screen size and orientation.",
        q4: "Responsive web design is important for SEO because it helps websites rank higher in search engine results for mobile devices.",
        q5: "The &lt;meta&gt; tag is used to define the viewport for responsive web design.",
        q6: "Fixed font sizes are not a key component of responsive web design as they do not adapt to different screen sizes.",
        q7: "A breakpoint is used to define when a website's layout should change based on the device width.",
        q8: "The max-width: 100%; CSS property is commonly used to make images fluid in responsive web design.",
        q9: "The purpose of a viewport meta tag in HTML is to specify the width and scale of a website's viewport.",
        q10: "The &lt;nav&gt; element is used to create a navigation bar in a responsive website.",
        q11: "CSS media queries are used to apply different styles based on device characteristics like screen size."
        // Add explanations for each question as needed
    };

    // Iterate through each question
    for (let i = 1; i <= Object.keys(answers).length; i++) {
        const selectedOption = form.elements["q" + i].value;
        if (selectedOption === answers["q" + i]) {
            score++;
        }
    }

    // Display score
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = "Your Score: " + score + " out of " + Object.keys(answers).length;

    // Display correct answers and explanations
    const answersList = document.getElementById("answers");
    for (const [question, answer] of Object.entries(answers)) {
        const listItem = document.createElement("li");
        if (answers[question] === form.elements[question].value) {
            listItem.textContent = "Question " + question.slice(1) + ": Correct - " + explanations[question];
        } else {
            listItem.textContent = "Question " + question.slice(1) + ": Incorrect - Correct answer: " + explanations[question];
        }
        answersList.appendChild(listItem);
    }

    // Show quiz results and hide the quiz form
    document.getElementById("quizResults").style.display = "block";
    form.style.display = "none";
}
