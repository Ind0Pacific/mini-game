# Guess My Number 🎯

A fun, interactive mobile mini-game built with **React Native** and **Expo**. In this game, the player chooses a number between 1 and 100, and the device attempts to guess it. The player provides hints (Higher or Lower) until the device successfully narrows down the correct number.

## 🚀 Features
* **Interactive Gameplay**: Device calculates the next guess based on user feedback.
* **Validation & Error Handling**: Prevents users from inputting out-of-bounds numbers or providing false "Higher/Lower" hints.
* **Custom UI Components**: Reusable modular components like `PrimaryButton`, `Card`, and `Title`.
* **Dynamic Styling**: Beautiful UI incorporating `expo-linear-gradient` and custom `ImageBackground` assets.
* **Cross-Platform**: Runs seamlessly on both Android and iOS.

## 🛠️ Tech Stack
* **Framework:** React Native, Expo
* **Language:** JavaScript
* **Development Environment:** Visual Studio Code
* **Testing/Preview:** Expo Go (Android & iOS), Metro Bundler

## 📂 Project Structure
```text
miniGame/
 ├── assets/                 # Images, fonts, and app icons (background.png, etc.)
 ├── components/             # Reusable UI components
 │    ├── game/              # Game-specific components (NumberContainer.js)
 │    ├── ui/                # Generic UI elements (Card.js, PrimaryComponents.js, InstructionText.js)
 │    └── Title.js           # Custom typography component
 ├── constants/              # Global variables
 │    └── Colors.js          # Centralized color palette
 ├── screens/                # Main application screens
 │    ├── StartGameScreen.js # Initial input screen
 │    ├── GameScreen.js      # Active gameplay screen
 │    └── GameOverScreen.js  # Result and summary screen
 ├── App.js                  # Entry point and screen routing
 └── package.json            # Project dependencies and scripts