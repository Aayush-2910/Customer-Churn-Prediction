# ChurnGuard AI - Setup Instructions

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
pip install flask flask-cors pandas numpy scikit-learn joblib
```

### Step 2: Train the Model
```bash
python train_model.py
```
This will:
- Load the churn.csv dataset
- Preprocess the data
- Train a Logistic Regression model
- Save the model as `churn_model.pkl`
- Save feature names as `feature_names.pkl`

### Step 3: Start the Server
```bash
python app.py
```

### Step 4: Open the Application
Open `index.html` in your browser or visit:
- Local: http://localhost:5000
- Network: http://0.0.0.0:5000

## 📁 Project Structure
```
├── index.html              # Main prediction interface
├── style.css               # Charcoal + Blush Pink theme
├── script.js               # Frontend logic
├── app.py                  # Flask backend server
├── train_model.py          # Model training script
├── churn.csv               # Dataset
├── churn_model.pkl         # Trained model (generated)
├── feature_names.pkl       # Feature names (generated)
└── requirements.txt        # Python dependencies
```

## 🎨 Features
- Professional UI with Charcoal + Blush Pink theme
- Lucide icons throughout
- Real-time ML predictions using Logistic Regression
- Organized form sections (Demographics, Account, Services, Billing)
- Risk level indicators (Low, Medium, High)
- Actionable recommendations based on prediction

## 🔧 Troubleshooting

### Model not found error
Run: `python train_model.py`

### CORS error
Make sure flask-cors is installed: `pip install flask-cors`

### Port already in use
Change port in app.py: `app.run(port=5001)`

## 📊 Model Details
- Algorithm: Logistic Regression
- Max Iterations: 3000
- Features: 30 (after one-hot encoding)
- Training Accuracy: ~80%
- Test Accuracy: ~80%
