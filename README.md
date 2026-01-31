# ITPM Assignment 1 – Playwright Automation

## 📌 Project Overview

This repository contains automated functional test cases developed using **Playwright (JavaScript)** for a Singlish → Sinhala transliteration web application. The automation was implemented as part of **ITPM Assignment 1 (Semester 1)** for the BSc (Hons) in Information Technology – Year 3 program.

### Test Coverage

- **29 Positive Functional Test Cases** – Validating expected behavior and successful scenarios
- **10 Negative Functional Test Cases** – Testing error handling and edge cases
- **1 UI Test Case** – Verifying user interface elements and layout

All test cases were independently designed and implemented according to the assignment requirements.

---

## 🧪 Application Under Test

| Property | Details |
|----------|---------|
| **Application Name** | SwiftTranslator |
| **Website URL** | [https://www.swifttranslator.com/](https://www.swifttranslator.com/) |
| **Input Language** | Singlish |
| **Output Language** | Sinhala |
| **Type** | Real-time transliteration (no convert button required) |

---

## 🛠️ Technologies & Tools

- **Runtime:** Node.js (LTS)
- **Test Framework:** Playwright (JavaScript)
- **IDE:** Visual Studio Code
- **Browser:** Chromium (via Playwright)
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```
IT23649644/
│
├── .github/
│   └── workflows/              # CI/CD workflows (if applicable)
│
├── data/
│   ├── IT23649644-itpm excel.xlsx    # Test case documentation
│   ├── IT23649644-screenshot.png     # Application screenshot
│   └── IT23649644-git link.txt       # Repository link reference
│
├── node_modules/               # Project dependencies (auto-generated)
├── playwright-report/          # HTML test reports (auto-generated)
├── test-results/               # Test execution artifacts (auto-generated)
│
├── tests/
│   └── all.spec.js            # All test cases (40 test cases)
│
├── .gitignore                 # Git ignore configuration
├── package.json               # Node.js project configuration
├── package-lock.json          # Dependency lock file
├── playwright.config.js       # Playwright test configuration
└── README.md                  # Project documentation (this file)
```

---

## ⚙️ Installation & Setup

### Prerequisites

Before running this project, ensure you have the following installed:

1. **Node.js (LTS version)** – [Download here](https://nodejs.org/)
2. **Visual Studio Code** – [Download here](https://code.visualstudio.com/)
3. **Git** (optional, for cloning) – [Download here](https://git-scm.com/)

### Step-by-Step Setup

#### 1️⃣ Clone or Download the Project

**Option A: Clone via Git**
```bash
git clone <repository-url>
cd IT23649644
```

**Option B: Download ZIP**
- Download the project ZIP file
- Extract to your desired location
- Navigate to the `IT23649644` folder

#### 2️⃣ Open Project in VS Code

1. Launch **Visual Studio Code**
2. Click **File → Open Folder**
3. Select the `IT23649644` folder

#### 3️⃣ Install Dependencies

Open the integrated terminal in VS Code (`Ctrl + ~` or `View → Terminal`) and run:

```bash
npm install
```

This will install all required dependencies including Playwright.

#### 4️⃣ Install Playwright Browsers

```bash
npx playwright install
```

This downloads the required browser binaries (Chromium, Firefox, WebKit).

---

## ▶️ Running Tests

### Run All Tests (Headless Mode)

Execute all test cases without opening a browser window:

```bash
npx playwright test
```

### Run Tests with Visible Browser (Headed Mode)

Watch the tests execute in real-time:

```bash
npx playwright test tests/all.spec.js --project=chromium --headed
```

### Run Specific Test File

```bash
npx playwright test tests/all.spec.js
```

### Run Tests in Debug Mode

Step through tests with Playwright Inspector:

```bash
npx playwright test --debug
```

### Run Tests with UI Mode

Interactive mode for exploring and debugging tests:

```bash
npx playwright test --ui
```

---

## 📊 Viewing Test Results

### Generate HTML Report

After running tests, generate and view the HTML report:

```bash
npx playwright show-report
```

The terminal will display:
```
Serving HTML report at http://localhost:9323
```

Open the URL in your browser to view:
- Test execution summary
- Detailed test results
- Screenshots and traces (if configured)
- Pass/fail statistics

### Stop the Report Server

Press `Ctrl + C` in the terminal.

### View Last Test Run Results

```bash
npx playwright show-report
```

This automatically opens the most recent test execution report.

---

## 📝 Test Case Categories

### Positive Functional Tests (29 cases)
These tests verify that the application correctly transliterates valid Singlish input to Sinhala:
- Single word transliteration
- Multiple word transliteration
- Sentence transliteration
- Special character handling
- Real-time transliteration validation

### Negative Functional Tests (10 cases)
These tests validate error handling and edge cases:
- Empty input handling
- Invalid character input
- Maximum input length validation
- Special character boundary testing
- Unexpected input scenarios

### UI Test (1 case)
Validates user interface elements:
- Presence of required UI components
- Layout verification
- Element visibility and positioning

---

## 🎯 Key Features

✅ **Comprehensive Coverage** – 40 test cases covering positive, negative, and UI scenarios  
✅ **Real-time Validation** – Tests validate instant transliteration without convert button  
✅ **Cross-browser Ready** – Configured for Chromium (can be extended to Firefox/WebKit)  
✅ **Detailed Reporting** – HTML reports with screenshots and execution traces  
✅ **Modular Architecture** – Well-organized test structure for maintainability  
✅ **Independent Tests** – Each test case runs independently without dependencies  

---



## 📄 Test Documentation

Detailed test case documentation is available in:
```
data/IT23649644-itpm excel.xlsx
```

This Excel file contains:
- Test case IDs
- Test case descriptions
- Expected results
- Test data
- Priority levels

---


## 🔗 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Node.js Documentation](https://nodejs.org/docs/)
- [JavaScript Testing Best Practices](https://playwright.dev/docs/best-practices)
