function calculateBMI() 
{
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // convert height to meters

    if (isNaN(weight) || isNaN(height)) 
    {
        alert("Please enter valid values for weight and height.");
        return;
    }

    var bmi = weight / (height * height);
    bmi = bmi.toFixed(1); // round to 1 decimal place

    var result = "";
    var result2 = "";

    if (bmi < 18.5) {
        result = "Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = "Kelebihan Berat Badan";
    } else if (bmi >= 30) {
        result = "Kegemukan (Obesitas)";
    }

    if (bmi < 18.5) {
        result2 = "Anda memiliki berat badan kurang";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result2 = "Anda memiliki berat badan ideal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result2 = "Anda memiliki berat badan berlebih";
    } else if (bmi >= 30) {
        result2 = "Body Shaming";
    }
    
    document.getElementById("result").innerHTML = result;
    document.getElementById("bmi").innerHTML = bmi;
    document.getElementById("result2").innerHTML = result2;
}

function resetFields() {
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    document.getElementById("result").innerHTML = "";
}
