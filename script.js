document.getElementById('predictionForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('resultCard').classList.add('hidden');
    
    const formData = {
        gender: document.getElementById('gender').value,
        SeniorCitizen: parseInt(document.getElementById('seniorCitizen').value),
        Partner: document.getElementById('partner').value,
        Dependents: document.getElementById('dependents').value,
        tenure: parseInt(document.getElementById('tenure').value),
        PhoneService: document.getElementById('phoneService').value,
        MultipleLines: document.getElementById('multipleLines').value,
        InternetService: document.getElementById('internetService').value,
        OnlineSecurity: document.getElementById('onlineSecurity').value,
        OnlineBackup: document.getElementById('onlineBackup').value,
        DeviceProtection: document.getElementById('deviceProtection').value,
        TechSupport: document.getElementById('techSupport').value,
        StreamingTV: document.getElementById('streamingTV').value,
        StreamingMovies: document.getElementById('streamingMovies').value,
        Contract: document.getElementById('contract').value,
        PaperlessBilling: document.getElementById('paperlessBilling').value,
        PaymentMethod: document.getElementById('paymentMethod').value,
        MonthlyCharges: parseFloat(document.getElementById('monthlyCharges').value),
        TotalCharges: parseFloat(document.getElementById('totalCharges').value)
    };
    
    try {
        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error('Prediction failed');
        }
        
        const result = await response.json();
        document.getElementById('loading').classList.add('hidden');
        displayResult(result, formData);
        
    } catch (error) {
        document.getElementById('loading').classList.add('hidden');
        alert('Error: ' + error.message);
    }
});

function displayResult(result, formData) {
    const resultCard = document.getElementById('resultCard');
    const resultContent = document.getElementById('resultContent');
    
    const churnProb = result.churn_probability;
    const willChurn = result.prediction === 1;
    
    let riskLevel, riskClass;
    if (churnProb >= 70) {
        riskLevel = 'High Risk';
        riskClass = 'high';
    } else if (churnProb >= 40) {
        riskLevel = 'Medium Risk';
        riskClass = 'medium';
    } else {
        riskLevel = 'Low Risk';
        riskClass = 'low';
    }
    
    const recommendations = generateRecommendations(formData, churnProb);

    
    resultContent.innerHTML = `
        <div class="risk-indicator ${riskClass}">
            <h3>${riskLevel}</h3>
            <div class="percentage">${churnProb.toFixed(1)}%</div>
            <p>Churn Probability</p>
        </div>
        
        <div class="details-grid">
            <div class="detail-item">
                <strong>Prediction</strong>
                ${willChurn ? 'Customer likely to churn' : 'Customer likely to stay'}
            </div>
            <div class="detail-item">
                <strong>Tenure</strong>
                ${formData.tenure} months
            </div>
            <div class="detail-item">
                <strong>Contract Type</strong>
                ${formData.Contract}
            </div>
            <div class="detail-item">
                <strong>Monthly Charges</strong>
                $${formData.MonthlyCharges.toFixed(2)}
            </div>
        </div>
        
        <div class="recommendations">
            <h3>💡 Recommendations</h3>
            <ul>
                ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </div>
    `;
    
    resultCard.classList.remove('hidden');
    resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function generateRecommendations(data, churnProb) {
    const recommendations = [];
    
    if (churnProb >= 50) {
        recommendations.push('🚨 High churn risk detected - immediate action recommended');
    }
    
    if (data.Contract === 'Month-to-month') {
        recommendations.push('📝 Offer long-term contract with discount to increase retention');
    }
    
    if (data.tenure < 12) {
        recommendations.push('🎯 New customer - provide onboarding support and engagement programs');
    }
    
    if (data.TechSupport === 'No' && data.InternetService !== 'No') {
        recommendations.push('🛠️ Offer complimentary tech support to improve satisfaction');
    }
    
    if (data.OnlineSecurity === 'No' && data.InternetService !== 'No') {
        recommendations.push('🔒 Promote online security services for added value');
    }
    
    if (data.PaymentMethod === 'Electronic check') {
        recommendations.push('💳 Encourage automatic payment methods for convenience');
    }
    
    if (data.MonthlyCharges > 80) {
        recommendations.push('💰 Review pricing - consider loyalty discounts or bundle offers');
    }
    
    if (data.InternetService === 'Fiber optic' && churnProb > 50) {
        recommendations.push('📡 Fiber optic customers need extra attention - ensure service quality');
    }
    
    if (recommendations.length === 0) {
        recommendations.push('✅ Customer profile looks stable - maintain current service quality');
        recommendations.push('📊 Continue monitoring engagement metrics');
    }
    
    return recommendations;
}
