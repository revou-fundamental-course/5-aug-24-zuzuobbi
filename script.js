function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // convert height to meters

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid values for weight and height.");
        return;
    }

    var bmi = weight / (height * height);
    bmi = bmi.toFixed(1); // round to 1 decimal place

    var result = "";

    if (bmi < 18.5) {
        result = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = "Kelebihan berat badan";
    } else if (bmi >= 30) {
        result = "Kegemukan (Obesitas)";
    }

    document.getElementById("result").innerHTML = result + "<br>BMI: " + bmi;
}

function resetFields() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("result").innerHTML = "";
}