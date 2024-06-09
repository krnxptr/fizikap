function showAlert() {
    alert('0744-706 657 vagy fizikamegoldo@gmail.com');
}
function calculateResistance() {
   
    const resistorsInput = document.getElementById('resistors').value;
    
  
    const resistors = resistorsInput.split(',').map(Number);
    
    const totalSeries = resistors.reduce((acc, val) => acc + val, 0);
    
  
    const totalParallel = resistors.reduce((acc, val) => acc + (1 / val), 0);
    const parallelResult = 1 / totalParallel;
    

    document.getElementById('series-result').innerText = `Total Resistance in Series: ${totalSeries.toFixed(2)} Ω`;
    document.getElementById('parallel-result').innerText = `Total Resistance in Parallel: ${parallelResult.toFixed(2)} Ω`;
}   


document.addEventListener('DOMContentLoaded', (event) => {
    
    var textElement = document.getElementById('clickable-text');
  
    textElement.addEventListener('click', showAlert);
});

function calculateCircuit() {
    // 
    const resistorsInput = document.getElementById('resistors1').value;
    const voltage = parseFloat(document.getElementById('voltage').value);
    
    //
    const resistors = resistorsInput.split(',').map(Number);
    
    //
    const totalResistance = resistors.reduce((acc, val) => acc + val, 0);
    
    //  I = V / R
    const totalCurrent = voltage / totalResistance;
    
    //  V = I * R
    const voltageDrops = resistors.map(r => (totalCurrent * r).toFixed(2));
    
    //
    document.getElementById('total-resistance').innerText = `Total Resistance: ${totalResistance.toFixed(2)} Ω`;
    document.getElementById('total-current').innerText = `Total Current: ${totalCurrent.toFixed(2)} A`;
    document.getElementById('voltage-drop').innerText = `Voltage Drop across each Resistor: ${voltageDrops.join(', ')} V`;
}
document.addEventListener('DOMContentLoaded', () => {
    const resistorsInput = document.getElementById('resistors1');
    const voltageInput = document.getElementById('voltage');
    const currentInput = document.getElementById('current');

    function toggleInputs(disableResistors, disableVoltage, disableCurrent) {
        resistorsInput.disabled = disableResistors;
        voltageInput.disabled = disableVoltage;
        currentInput.disabled = disableCurrent;
    }

    function updateCalculations() {
        const resistorsValue = resistorsInput.value;
        const voltage = parseFloat(voltageInput.value);
        const current = parseFloat(currentInput.value);

        let totalResistance, totalCurrent, voltageDrops = [];

        if (resistorsValue) {
            const resistors = resistorsValue.split(',').map(Number);
            totalResistance = resistors.reduce((acc, val) => acc + val, 0);
            totalCurrent = voltage / totalResistance;
            voltageDrops = resistors.map(r => (totalCurrent * r).toFixed(2));
        } else if (voltage && current) {
            totalResistance = voltage / current;
            totalCurrent = current;
            voltageDrops.push(voltage.toFixed(2));
        } else {
            document.getElementById('total-resistance').innerText = `Total Resistance: `;
            document.getElementById('total-current').innerText = `Total Current: `;
            document.getElementById('voltage-drop').innerText = `Voltage Drop across each Resistor: `;
            return;
        }

        document.getElementById('total-resistance').innerText = `Total Resistance: ${totalResistance.toFixed(2)} Ω`;
        document.getElementById('total-current').innerText = `Total Current: ${totalCurrent.toFixed(2)} A`;
        document.getElementById('voltage-drop').innerText = `Voltage Drop across each Resistor: ${voltageDrops.join(', ')} V`;
    }

    resistorsInput.addEventListener('input', () => {
        if (resistorsInput.value) {
            toggleInputs(false, false, true);
        } else {
            toggleInputs(false, false, false);
        }
        updateCalculations();
    });

    voltageInput.addEventListener('input', () => {
        if (voltageInput.value) {
            toggleInputs(true, true, false);
        } else {
            toggleInputs(false, false, false);
        }
        updateCalculations();
    });

    currentInput.addEventListener('input', () => {
        if (currentInput.value) {
            toggleInputs(true, false, false);
        } else {
            toggleInputs(false, false, false);
        }
        updateCalculations();
    });
});

function resetFields() {
    document.getElementById('resistors1').value = '';
    document.getElementById('voltage').value = '';
    document.getElementById('current').value = '';

    document.getElementById('resistors1').disabled = false;
    document.getElementById('voltage').disabled = false;
    document.getElementById('current').disabled = false;

    document.getElementById('total-resistance').innerText = 'Teljes elenallas: ';
    document.getElementById('total-current').innerText = 'Teljes aramfolyas: ';
    document.getElementById('voltage-drop').innerText = 'Feszultseg kulonbseg ellenallasok kozott: ';
}
