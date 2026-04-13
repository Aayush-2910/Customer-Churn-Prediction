# ChurnGuard AI - Project Structure

## 📁 Directory Organization

```
customer-prediction/
│
├── 📂 templates/              # HTML Templates
│   ├── login.html            # Login page
│   ├── index.html            # Main dashboard
│   ├── analytics.html        # Analytics dashboard
│   └── customers.html        # Customer management
│
├── 📂 static/                 # Static Assets
│   ├── 📂 css/               # Stylesheets
│   │   ├── style.css         # Main styles
│   │   └── login-styles.css  # Login page styles
│   │
│   └── 📂 js/                # JavaScript Files
│       ├── script.js         # Main dashboard logic
│       └── customers.js      # Customer data & logic
│
├── 📂 models/                 # ML Models & Training
│   ├── train_model.py        # Model training script
│   └── Customer_Churn_Prediction.ipynb  # Analysis notebook
│
├── 📂 data/                   # Data Files
│   └── test_samples.json     # Sample test data
│
├── 📂 docs/                   # Documentation
│   ├── README.md             # Project overview
│   ├── QUICKSTART.md         # Quick start guide
│   ├── SETUP_INSTRUCTIONS.md # Setup instructions
│   └── NETWORK_ACCESS.md     # Network access guide
│
├── 📂 .vscode/               # VS Code Configuration
│   ├── settings.json
│   └── launch.json
│
├── app.py                    # Flask Backend Server
├── requirements.txt          # Python dependencies
├── package.json              # Node.js dependencies
└── PROJECT_STRUCTURE.md      # This file

```

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

2. **Run the Server**
   ```bash
   python app.py
   ```

3. **Access the Application**
   - Open browser: http://localhost:5000
   - Login with demo credentials shown on login page

## 📋 File Descriptions

### Backend
- **app.py** - Flask server with routes and prediction logic

### Frontend Templates
- **login.html** - Authentication page with demo credentials
- **index.html** - Main prediction dashboard with form
- **analytics.html** - Interactive charts and KPIs
- **customers.html** - Customer management table

### Styles
- **style.css** - Main application styles (charcoal + blush pink theme)
- **login-styles.css** - Dedicated login page styles

### Scripts
- **script.js** - Prediction form logic and API calls
- **customers.js** - Customer data and table functionality

### Models
- **train_model.py** - ML model training (requires churn.csv)
- **Customer_Churn_Prediction.ipynb** - Data analysis notebook

## 🎨 Design System

**Color Theme:**
- Primary: Charcoal (#2d3436)
- Accent: Blush Pink (#ff9eb1)
- Background: Light Gray (#f8f9fa)

**Icons:** Lucide Icons
**Charts:** Chart.js

## 🔐 Demo Credentials

- **Admin:** admin@churnguard.ai / admin123
- **Manager:** manager@churnguard.ai / manager123
- **Analyst:** analyst@churnguard.ai / analyst123
- **Demo:** demo@churnguard.ai / demo123

## 📊 Features

✅ Customer churn prediction with 19 features
✅ Interactive analytics dashboard
✅ Customer management system
✅ Session-based authentication
✅ Responsive design
✅ Real-time predictions

## 🛠️ Technology Stack

- **Backend:** Flask, Python
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Charts:** Chart.js
- **Icons:** Lucide
- **ML:** Scikit-learn (optional)
