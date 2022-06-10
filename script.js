function getmarks() {

    var maths = Number(document.getElementById("maths").value);
    var english = Number(document.getElementById("english").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var physics = Number(document.getElementById("physics").value);
    var totalmarks = 400;
    var marksobtained = maths + english + chemistry + physics;
    var percentage = (marksobtained / totalmarks) * 100;
    var garde = "";

    document.getElementById("percentage").innerHTML = percentage + "%"

    if(percentage > 70){
        grade = "A";
    }else if (percentage < 70 && percentage > 50) {
        grade = "B";
    }else if (percentage < 50 && percentage >40) {
        grade = "C";
    }else if (percentage <40){
        grade = "F";
    }

    document.getElementById("grade").innerHTML = grade;
    if(percentage < 40){
        document.getElementById("pass").innerHTML = "You Failed!";

    }else {
        document.getElementById("pass").innerHTML = "You're a Scholar!";
    }


}
