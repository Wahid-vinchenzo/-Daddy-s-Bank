
document.addEventListener('DOMContentLoaded', () => {

    


    const depositTotalEl = document.getElementById('deposit-total');
    const withdrawTotalEl = document.getElementById('withdraw-total');
    const balanceTotalEl = document.getElementById('balance-total');

    const depositAmountInput = document.getElementById('deposit-amount');
    const withdrawAmountInput = document.getElementById('withdraw-amount');

    
    const depositButton = document.getElementById('deposit-button');
    const withdrawButton = document.getElementById('withdraw-button');

    let currentBalance = 0;
    let currentDeposit = 0;
    let currentWithdrawal = 0;

 
    function updateDisplay() {
       
        depositTotalEl.textContent = currentDeposit.toFixed(2);
        withdrawTotalEl.textContent = currentWithdrawal.toFixed(2);
        balanceTotalEl.textContent = currentBalance.toFixed(2);
    }

    
    function getInputValue(inputElement) {
        const valueString = inputElement.value;
        
        inputElement.value = '';

        const valueNumber = parseFloat(valueString);

        
        if (isNaN(valueNumber) || valueNumber <= 0) {
            alert('Please enter a valid positive amount.');
            return null; 
        }
        return valueNumber;
    }

   
    depositButton.addEventListener('click', () => {
        const depositAmount = getInputValue(depositAmountInput);

        if (depositAmount !== null) { 
            currentDeposit += depositAmount;
            currentBalance += depositAmount;

          
            updateDisplay();
        }
    });

   
    withdrawButton.addEventListener('click', () => {
        const withdrawAmount = getInputValue(withdrawAmountInput);

        if (withdrawAmount !== null) { 
            if (withdrawAmount > currentBalance) {
                alert('Insufficient balance for this withdrawal.');
                return;
            }

            
            currentWithdrawal += withdrawAmount;
            currentBalance -= withdrawAmount;

            
            updateDisplay();
        }
    });

  
    updateDisplay();

});