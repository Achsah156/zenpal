function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value) / 100;
    let weight = parseFloat(document.getElementById("weight").value);
    
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        displayResults("Please enter valid height and weight.", "", "", "", "", "");
        return;
    }
    
    let bmi = weight / (height * height);
    let category, mealCalorieIntake, breakfast, lunch, dinner, mealWeight;
    
    if (bmi < 18.5) {
        category = "Underweight";
        mealCalorieIntake = "700-800 kcal per meal";
        breakfast = "Scrambled eggs with toast and a banana.";
        lunch = "Grilled chicken with quinoa and steamed veggies.";
        dinner = "Salmon with sweet potatoes and broccoli.";
        mealWeight = "Recommended weight per meal: 500g";
    } else if (bmi < 24.9) {
        category = "Normal Weight";
        mealCalorieIntake = "600-700 kcal per meal";
        breakfast = "Oatmeal with nuts and fresh fruits.";
        lunch = "Brown rice with grilled fish and salad.";
        dinner = "Stir-fried tofu with mixed vegetables.";
        mealWeight = "Recommended weight per meal: 450g";
    } else if (bmi < 29.9) {
        category = "Overweight";
        mealCalorieIntake = "500-600 kcal per meal";
        breakfast = "Greek yogurt with berries and honey.";
        lunch = "Fresh salad with grilled chicken.";
        dinner = "Lentil soup with whole-grain bread.";
        mealWeight = "Recommended weight per meal: 400g";
    } else {
        category = "Obese";
        mealCalorieIntake = "400-500 kcal per meal";
        breakfast = "Smoothie with spinach, protein, and chia seeds.";
        lunch = "Vegetable soup with lean protein.";
        dinner = "Steamed fish with sautéed greens.";
        mealWeight = "Recommended weight per meal: 350g";
    }
    
    displayResults(
        `Your BMI: ${bmi.toFixed(2)} (${category})`,
        `Recommended Calories: ${mealCalorieIntake}`,
        `Breakfast: ${breakfast}`,
        `Lunch: ${lunch}`,
        `Dinner: ${dinner}`,
        mealWeight
    );
}

function displayResults(bmiResult, calorieIntake, breakfast, lunch, dinner, mealWeight) {
    document.getElementById("bmi-result").innerText = bmiResult;
    document.getElementById("meal-calorie-intake").innerText = calorieIntake;
    document.getElementById("breakfast-recommendation").innerText = breakfast;
    document.getElementById("lunch-recommendation").innerText = lunch;
    document.getElementById("dinner-recommendation").innerText = dinner;
    document.getElementById("meal-weight").innerText = mealWeight;
}

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing Effect
const typingText =  "Welcome to ZENPAL – where smart nutrition meets innovation! 🍽️✨ Transform your eating habits with our Smart Diet Bowl, designed to track, control, and optimize your meals for a healthier you. Let ZENPAL guide you toward a balanced lifestyle with intelligent meal recommendations and precision intake tracking. 🚀🥗";
let index = 0;
function typeEffect() {
    if (index < typingText.length) {
        document.querySelector('.hero-content p').textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
setTimeout(() => {
    document.querySelector('.hero-content p').textContent = "";
    typeEffect();
}, 500);

// Dark/Light Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle Mode';
toggleButton.classList.add('btn');
toggleButton.style.position = 'fixed';
toggleButton.style.top = '20px';
toggleButton.style.right = '20px';
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Adding Light Mode Styles
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .light-mode {
            background-color: #ffffff;
            color: #121212;
        }
        .light-mode .project-card {
            background: #f4f4f4;
            color: black;
        }
        .light-mode .btn {
            background: #121212;
            color: white;
    </style>
`);

// Scroll Animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transition = 'opacity 0.6s ease-in-out';
});

document.addEventListener('scroll', () => {
    document.querySelectorAll('section').forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.style.opacity = '1';
        }
    });
});


