# ITPM Assignment 1 – Playwright Automation

## 📌 Project Description

This project contains automated functional test cases developed using **Playwright (JavaScript)** for a **Singlish → Sinhala transliteration web application**.

The automation was implemented as part of **ITPM Assignment 1** and includes:
- 24 Positive Functional Test Cases
- 10 Negative Functional Test Cases
- 1 UI Test Case

All test cases were designed based on the assignment requirements and independently implemented

---

## 🧪 Application Under Test

- Application Name:SwiftTranslator  
- Website URL: https://www.swifttranslator.com/  
- Input Language:Singlish  
- Output Language:Sinhala  

---

## 🛠️ Technologies & Tools Used

- Node.js
- Playwright (JavaScript)
- Visual Studio Code
- Chromium Browser (via Playwright)
- Git & GitHub

---

## 📂 Project Folder Structure
IT23649644/
.github/
workflows/
data/
   IT23649644-itpm excel.xlsx
   IT23649644-screenshot.png
   IT23649644-git link.txt
node_modules/
playwright-report/
test-results/
tests/
all.spec.js
.gitignore
package.json
package-lock.json
playwright.config.js
README.md


---

## ⚙️ Installation Instructions

### ✅ Step 1: Install Required Software

- Node.js (LTS version)
  👉 https://nodejs.org/

- Visual Studio Code 
  👉 https://code.visualstudio.com/

---

### ✅ Step 2: Open the Project

1. Open **VS Code**
2. Click **File → Open Folder**
3. Select the project folder: `IT23649644`

---

### ✅ Step 3: Install Project Dependencies

Open the VS Code terminal and run:

bash
npm install
npx playwright install
---

## ▶️ How to Run the Project

Follow the steps below to execute the Playwright automation project.

---

### ✅ Step 1: Open the Project

1. Open **Visual Studio Code**
2. Open the project folder: `name`
3. Open the **Terminal**  
   - Press `Ctrl + `` (backtick)  
   - OR go to **Terminal → New Terminal**

---

### ✅ Step 2: Run All Test Cases

In the terminal, execute:

```bash
npx playwright test

**Run Tests with Browser Visible (Headed Mode)**
npx playwright test tests/all.spec.js --project=chromium --headed

How to Get the Test Report
--npx playwright show-report
terminal will display:
--Serving HTML report at http://localhost:9323
How to Stop / Quit the Report Server
--Ctrl + C



