// Sample customer data with full details
const customers = [
    { 
        id: 'C001', name: 'John Smith', email: 'john.smith@email.com', phone: '+1-555-0101',
        contract: 'Month-to-month', tenure: 3, charges: 85.50, totalCharges: 256.50,
        risk: 78, status: 'Active', gender: 'Male', seniorCitizen: 0, partner: 'No', 
        dependents: 'No', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'No', techSupport: 'No', paymentMethod: 'Electronic check',
        multipleLines: 'No', onlineBackup: 'No', deviceProtection: 'No',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'Yes'
    },
    { 
        id: 'C002', name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+1-555-0102',
        contract: 'Two year', tenure: 48, charges: 95.00, totalCharges: 4560.00,
        risk: 12, status: 'Active', gender: 'Female', seniorCitizen: 0, partner: 'Yes',
        dependents: 'Yes', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'Yes', techSupport: 'Yes', paymentMethod: 'Credit card (automatic)',
        multipleLines: 'Yes', onlineBackup: 'Yes', deviceProtection: 'Yes',
        streamingTV: 'Yes', streamingMovies: 'Yes', paperlessBilling: 'No'
    },
    { 
        id: 'C003', name: 'Michael Brown', email: 'mbrown@email.com', phone: '+1-555-0103',
        contract: 'One year', tenure: 18, charges: 65.00, totalCharges: 1170.00,
        risk: 45, status: 'Active', gender: 'Male', seniorCitizen: 0, partner: 'Yes',
        dependents: 'No', phoneService: 'Yes', internetService: 'DSL',
        onlineSecurity: 'Yes', techSupport: 'No', paymentMethod: 'Mailed check',
        multipleLines: 'No', onlineBackup: 'No', deviceProtection: 'Yes',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'Yes'
    },
    { 
        id: 'C004', name: 'Emily Davis', email: 'emily.d@email.com', phone: '+1-555-0104',
        contract: 'Month-to-month', tenure: 2, charges: 70.70, totalCharges: 151.65,
        risk: 82, status: 'Active', gender: 'Female', seniorCitizen: 0, partner: 'No',
        dependents: 'No', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'No', techSupport: 'No', paymentMethod: 'Electronic check',
        multipleLines: 'No', onlineBackup: 'No', deviceProtection: 'No',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'Yes'
    },
    { 
        id: 'C005', name: 'David Wilson', email: 'dwilson@email.com', phone: '+1-555-0105',
        contract: 'Two year', tenure: 60, charges: 89.00, totalCharges: 5340.00,
        risk: 8, status: 'Active', gender: 'Male', seniorCitizen: 1, partner: 'Yes',
        dependents: 'Yes', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'Yes', techSupport: 'Yes', paymentMethod: 'Bank transfer (automatic)',
        multipleLines: 'Yes', onlineBackup: 'Yes', deviceProtection: 'Yes',
        streamingTV: 'Yes', streamingMovies: 'Yes', paperlessBilling: 'No'
    },
    { 
        id: 'C006', name: 'Lisa Anderson', email: 'lisa.a@email.com', phone: '+1-555-0106',
        contract: 'One year', tenure: 24, charges: 72.50, totalCharges: 1740.00,
        risk: 35, status: 'Active', gender: 'Female', seniorCitizen: 0, partner: 'Yes',
        dependents: 'Yes', phoneService: 'Yes', internetService: 'DSL',
        onlineSecurity: 'Yes', techSupport: 'Yes', paymentMethod: 'Credit card (automatic)',
        multipleLines: 'Yes', onlineBackup: 'Yes', deviceProtection: 'No',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'No'
    },
    { 
        id: 'C007', name: 'James Taylor', email: 'jtaylor@email.com', phone: '+1-555-0107',
        contract: 'Month-to-month', tenure: 6, charges: 78.00, totalCharges: 468.00,
        risk: 68, status: 'Active', gender: 'Male', seniorCitizen: 0, partner: 'No',
        dependents: 'No', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'No', techSupport: 'No', paymentMethod: 'Electronic check',
        multipleLines: 'No', onlineBackup: 'No', deviceProtection: 'No',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'Yes'
    },
    { 
        id: 'C008', name: 'Jennifer Martinez', email: 'jmartinez@email.com', phone: '+1-555-0108',
        contract: 'Two year', tenure: 36, charges: 92.00, totalCharges: 3312.00,
        risk: 15, status: 'Active', gender: 'Female', seniorCitizen: 0, partner: 'Yes',
        dependents: 'Yes', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'Yes', techSupport: 'Yes', paymentMethod: 'Bank transfer (automatic)',
        multipleLines: 'Yes', onlineBackup: 'Yes', deviceProtection: 'Yes',
        streamingTV: 'Yes', streamingMovies: 'No', paperlessBilling: 'No'
    },
    { 
        id: 'C009', name: 'Robert Garcia', email: 'rgarcia@email.com', phone: '+1-555-0109',
        contract: 'One year', tenure: 12, charges: 68.50, totalCharges: 822.00,
        risk: 52, status: 'Active', gender: 'Male', seniorCitizen: 0, partner: 'No',
        dependents: 'No', phoneService: 'Yes', internetService: 'DSL',
        onlineSecurity: 'No', techSupport: 'No', paymentMethod: 'Mailed check',
        multipleLines: 'No', onlineBackup: 'No', deviceProtection: 'No',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'Yes'
    },
    { 
        id: 'C010', name: 'Maria Rodriguez', email: 'mrodriguez@email.com', phone: '+1-555-0110',
        contract: 'Month-to-month', tenure: 1, charges: 75.00, totalCharges: 75.00,
        risk: 85, status: 'Active', gender: 'Female', seniorCitizen: 0, partner: 'No',
        dependents: 'No', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'No', techSupport: 'No', paymentMethod: 'Electronic check',
        multipleLines: 'No', onlineBackup: 'No', deviceProtection: 'No',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'Yes'
    },
    { 
        id: 'C011', name: 'William Lee', email: 'wlee@email.com', phone: '+1-555-0111',
        contract: 'Two year', tenure: 52, charges: 88.00, totalCharges: 4576.00,
        risk: 10, status: 'Active', gender: 'Male', seniorCitizen: 1, partner: 'Yes',
        dependents: 'No', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'Yes', techSupport: 'Yes', paymentMethod: 'Credit card (automatic)',
        multipleLines: 'Yes', onlineBackup: 'Yes', deviceProtection: 'Yes',
        streamingTV: 'Yes', streamingMovies: 'Yes', paperlessBilling: 'No'
    },
    { 
        id: 'C012', name: 'Patricia White', email: 'pwhite@email.com', phone: '+1-555-0112',
        contract: 'One year', tenure: 20, charges: 70.00, totalCharges: 1400.00,
        risk: 38, status: 'Active', gender: 'Female', seniorCitizen: 0, partner: 'Yes',
        dependents: 'Yes', phoneService: 'Yes', internetService: 'DSL',
        onlineSecurity: 'Yes', techSupport: 'No', paymentMethod: 'Bank transfer (automatic)',
        multipleLines: 'No', onlineBackup: 'Yes', deviceProtection: 'No',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'No'
    },
    { 
        id: 'C013', name: 'Christopher Hall', email: 'chall@email.com', phone: '+1-555-0113',
        contract: 'Month-to-month', tenure: 4, charges: 82.00, totalCharges: 328.00,
        risk: 72, status: 'Active', gender: 'Male', seniorCitizen: 0, partner: 'No',
        dependents: 'No', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'No', techSupport: 'No', paymentMethod: 'Electronic check',
        multipleLines: 'No', onlineBackup: 'No', deviceProtection: 'No',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'Yes'
    },
    { 
        id: 'C014', name: 'Linda Young', email: 'lyoung@email.com', phone: '+1-555-0114',
        contract: 'Two year', tenure: 44, charges: 94.00, totalCharges: 4136.00,
        risk: 12, status: 'Active', gender: 'Female', seniorCitizen: 0, partner: 'Yes',
        dependents: 'Yes', phoneService: 'Yes', internetService: 'Fiber optic',
        onlineSecurity: 'Yes', techSupport: 'Yes', paymentMethod: 'Credit card (automatic)',
        multipleLines: 'Yes', onlineBackup: 'Yes', deviceProtection: 'Yes',
        streamingTV: 'Yes', streamingMovies: 'Yes', paperlessBilling: 'No'
    },
    { 
        id: 'C015', name: 'Daniel King', email: 'dking@email.com', phone: '+1-555-0115',
        contract: 'One year', tenure: 15, charges: 66.00, totalCharges: 990.00,
        risk: 48, status: 'Active', gender: 'Male', seniorCitizen: 0, partner: 'Yes',
        dependents: 'No', phoneService: 'Yes', internetService: 'DSL',
        onlineSecurity: 'Yes', techSupport: 'No', paymentMethod: 'Mailed check',
        multipleLines: 'No', onlineBackup: 'No', deviceProtection: 'Yes',
        streamingTV: 'No', streamingMovies: 'No', paperlessBilling: 'Yes'
    }
];

let filteredCustomers = [...customers];
let currentCustomer = null;

function getRiskLevel(risk) {
    if (risk >= 70) return 'high';
    if (risk >= 40) return 'medium';
    return 'low';
}

function getRiskLabel(risk) {
    if (risk >= 70) return 'High Risk';
    if (risk >= 40) return 'Medium Risk';
    return 'Low Risk';
}

function renderCustomers(data) {
    const tbody = document.getElementById('customerTableBody');
    tbody.innerHTML = '';

    data.forEach(customer => {
        const riskLevel = getRiskLevel(customer.risk);
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${customer.id}</strong></td>
            <td>${customer.name}</td>
            <td>${customer.contract}</td>
            <td>${customer.tenure} months</td>
            <td>$${customer.charges.toFixed(2)}</td>
            <td>
                <div class="risk-badge ${riskLevel}">
                    ${customer.risk}%
                </div>
            </td>
            <td>
                <span class="status-badge active">
                    <i data-lucide="check-circle"></i>
                    ${customer.status}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-icon" title="View Details" onclick="viewCustomer('${customer.id}')">
                        <i data-lucide="eye"></i>
                    </button>
                    <button class="btn-icon" title="Predict Again" onclick="predictCustomer('${customer.id}')">
                        <i data-lucide="refresh-cw"></i>
                    </button>
                    <button class="btn-icon btn-danger" title="Delete" onclick="deleteCustomer('${customer.id}')">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });

    lucide.createIcons();
    updateStats(data);
}

function updateStats(data) {
    const high = data.filter(c => c.risk >= 70).length;
    const medium = data.filter(c => c.risk >= 40 && c.risk < 70).length;
    const low = data.filter(c => c.risk < 40).length;

    document.getElementById('totalCount').textContent = data.length;
    document.getElementById('highRiskCount').textContent = high;
    document.getElementById('mediumRiskCount').textContent = medium;
    document.getElementById('lowRiskCount').textContent = low;
}

function filterCustomers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const riskFilter = document.getElementById('riskFilter').value;
    const contractFilter = document.getElementById('contractFilter').value;

    filteredCustomers = customers.filter(customer => {
        const matchesSearch = customer.name.toLowerCase().includes(searchTerm) ||
                            customer.id.toLowerCase().includes(searchTerm) ||
                            customer.email.toLowerCase().includes(searchTerm);
        
        const matchesRisk = riskFilter === 'all' || getRiskLevel(customer.risk) === riskFilter;
        
        const matchesContract = contractFilter === 'all' || customer.contract === contractFilter;

        return matchesSearch && matchesRisk && matchesContract;
    });

    renderCustomers(filteredCustomers);
}

// View customer details
function viewCustomer(customerId) {
    const customer = customers.find(c => c.id === customerId);
    if (!customer) return;
    
    currentCustomer = customer;
    const riskLevel = getRiskLevel(customer.risk);
    const riskLabel = getRiskLabel(customer.risk);
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="customer-detail-grid">
            <div class="detail-section">
                <h4><i data-lucide="user"></i> Personal Information</h4>
                <div class="detail-row">
                    <span>Customer ID:</span>
                    <strong>${customer.id}</strong>
                </div>
                <div class="detail-row">
                    <span>Name:</span>
                    <strong>${customer.name}</strong>
                </div>
                <div class="detail-row">
                    <span>Email:</span>
                    <strong>${customer.email}</strong>
                </div>
                <div class="detail-row">
                    <span>Phone:</span>
                    <strong>${customer.phone}</strong>
                </div>
                <div class="detail-row">
                    <span>Gender:</span>
                    <strong>${customer.gender}</strong>
                </div>
                <div class="detail-row">
                    <span>Senior Citizen:</span>
                    <strong>${customer.seniorCitizen ? 'Yes' : 'No'}</strong>
                </div>
                <div class="detail-row">
                    <span>Partner:</span>
                    <strong>${customer.partner}</strong>
                </div>
                <div class="detail-row">
                    <span>Dependents:</span>
                    <strong>${customer.dependents}</strong>
                </div>
            </div>
            
            <div class="detail-section">
                <h4><i data-lucide="file-text"></i> Account Information</h4>
                <div class="detail-row">
                    <span>Contract Type:</span>
                    <strong>${customer.contract}</strong>
                </div>
                <div class="detail-row">
                    <span>Tenure:</span>
                    <strong>${customer.tenure} months</strong>
                </div>
                <div class="detail-row">
                    <span>Monthly Charges:</span>
                    <strong>$${customer.charges.toFixed(2)}</strong>
                </div>
                <div class="detail-row">
                    <span>Total Charges:</span>
                    <strong>$${customer.totalCharges.toFixed(2)}</strong>
                </div>
                <div class="detail-row">
                    <span>Payment Method:</span>
                    <strong>${customer.paymentMethod}</strong>
                </div>
            </div>
            
            <div class="detail-section">
                <h4><i data-lucide="wifi"></i> Services</h4>
                <div class="detail-row">
                    <span>Phone Service:</span>
                    <strong>${customer.phoneService}</strong>
                </div>
                <div class="detail-row">
                    <span>Internet Service:</span>
                    <strong>${customer.internetService}</strong>
                </div>
                <div class="detail-row">
                    <span>Online Security:</span>
                    <strong>${customer.onlineSecurity}</strong>
                </div>
                <div class="detail-row">
                    <span>Tech Support:</span>
                    <strong>${customer.techSupport}</strong>
                </div>
            </div>
            
            <div class="detail-section">
                <h4><i data-lucide="alert-triangle"></i> Churn Risk Analysis</h4>
                <div class="risk-display ${riskLevel}">
                    <div class="risk-percentage">${customer.risk}%</div>
                    <div class="risk-label">${riskLabel}</div>
                </div>
                <div class="detail-row">
                    <span>Status:</span>
                    <span class="status-badge active">
                        <i data-lucide="check-circle"></i>
                        ${customer.status}
                    </span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('customerModal').style.display = 'flex';
    lucide.createIcons();
}

// Close modal
function closeModal() {
    document.getElementById('customerModal').style.display = 'none';
    currentCustomer = null;
}

// Predict from modal
function predictFromModal() {
    if (!currentCustomer) return;
    localStorage.setItem('customerData', JSON.stringify(currentCustomer));
    window.location.href = 'index.html?predict=true';
}

// Predict customer
function predictCustomer(customerId) {
    const customer = customers.find(c => c.id === customerId);
    if (!customer) return;
    localStorage.setItem('customerData', JSON.stringify(customer));
    window.location.href = 'index.html?predict=true';
}

// Delete customer
function deleteCustomer(customerId) {
    if (confirm('Are you sure you want to delete this customer?')) {
        const index = customers.findIndex(c => c.id === customerId);
        if (index > -1) {
            customers.splice(index, 1);
            filterCustomers();
            showNotification('Customer deleted successfully', 'success');
        }
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    lucide.createIcons();
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', filterCustomers);
document.getElementById('riskFilter').addEventListener('change', filterCustomers);
document.getElementById('contractFilter').addEventListener('change', filterCustomers);

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('customerModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Initial render
renderCustomers(customers);
