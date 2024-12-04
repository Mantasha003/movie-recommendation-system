function appendToResult(value) {
    document.getElementById('result').value += value;
}

function Toclear() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        resultField.value = "Error!";
    }
}

function changeBackgroundColor() {
    const color = document.getElementById('bgColor').value;
    document.getElementById('result').style.backgroundColor = color;
}

function cleardel() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}