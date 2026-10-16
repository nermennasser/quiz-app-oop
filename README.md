QuizMaster App (OOP JavaScript Quiz)
An interactive, responsive, and modern multiple-choice and true/false quiz application built using Vanilla JavaScript (ES6 Modules) following Object-Oriented Programming (OOP) principles. It fetches dynamic questions from the Open Trivia DB API.

🚀 Features
Object-Oriented Architecture (OOP): Built using clean, modular ES6 classes (Settings, Quiz, Question, Final).

Dynamic API Integration: Fetches questions dynamically based on user preferences using async/await and fetch.

Customizable Quiz Settings:

Select Category (General Knowledge, Science, Sports, etc.).

Choose Difficulty (Easy, Medium, Hard).

Select Question Type (Multiple Choice or True / False).

Set Custom Number of Questions.

Smart Question Handling:

Randomizes answers for multiple-choice questions.

Keeps True and False options fixed and organized for boolean questions.

Hides unused option slots dynamically.

Modern & Clean UI: Designed with a sleek, responsive layout and smooth hover interactions.

🛠️ Project Structure
Plaintext
quiz-app-oop/
│
├── index.html         # Main HTML structure
├── styles.css         # Modern styling and layout
├── main.js            # Application entry point
└── quiz/
    ├── settings.js    # Handles user preferences and API requests
    ├── quiz.js        # Manages quiz progress, scoring, and navigation
    ├── question.js    # Handles question rendering, shuffling, and validation
    └── final.js       # Displays final score and restart options
🧩 How It Works (OOP Breakdown)
Settings Class: Manages the configuration form, validates inputs, builds the API endpoint URL, and transitions to the quiz screen.

Quiz Class: Tracks the current question index, monitors user score, handles the "Next/Submit" button, and triggers the final results screen.

Question Class: Manages individual questions, shuffles options for multiple-choice items, validates user selections, and renders DOM elements.

Final Class: Computes the total score, renders the summary screen, and provides a reload option to play again.

⚙️ Setup and Installation
Clone or download this repository.

Ensure you have Visual Studio Code installed.

Open the project folder and use the Live Server extension to run index.html.

🌐 Live Demo
You can host this project easily using GitHub Pages by pointing the source branch to main (Root directory).