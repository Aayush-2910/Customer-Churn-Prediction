import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import joblib
import os

print("🔄 Loading data...")
data = pd.read_csv("churn.csv")

print("🧹 Preprocessing data...")
# Drop customerID
data.drop('customerID', axis=1, inplace=True)

# Convert TotalCharges to numeric
data['TotalCharges'] = pd.to_numeric(data['TotalCharges'], errors='coerce')

# Fill missing values
data['TotalCharges'] = data['TotalCharges'].fillna(data['TotalCharges'].mean())

# Convert Churn to binary
data['Churn'] = data['Churn'].map({'Yes': 1, 'No': 0})

# One-hot encoding
data = pd.get_dummies(data, drop_first=True)

print("📊 Splitting data...")
X = data.drop('Churn', axis=1)
y = data['Churn']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print("🤖 Training Logistic Regression model...")
model = LogisticRegression(max_iter=3000)
model.fit(X_train, y_train)

# Calculate accuracy
train_score = model.score(X_train, y_train)
test_score = model.score(X_test, y_test)

print(f"✅ Training Accuracy: {train_score*100:.2f}%")
print(f"✅ Testing Accuracy: {test_score*100:.2f}%")

# Save model and feature names
print("💾 Saving model...")
joblib.dump(model, 'churn_model.pkl')
joblib.dump(X.columns.tolist(), 'feature_names.pkl')

print("✨ Model training complete!")
print("📁 Files saved: churn_model.pkl, feature_names.pkl")
