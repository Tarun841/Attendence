document = document.getElementById("form1").addEventListener("submit", submitFun1);

var studentDataArr =JSON.parse(localStorage.getItem("studentData"))|| [];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var rollNo = document.querySelector("#rollNo").value;

    var studentObj = {
        rollNo: rollNo
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr)
}

function displayFun(studentDataArr) {

    var count = 1;
    studentDataArr.map(function (item) {
    
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++
        var td5 = document.createElement("td");
        td5.innerHTML = item.rollNo;
        var td6 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () {
            td6.innerHTML = "<button >Present</button>";
        });
        btn1.addEventListener("click", function () {
            td6.innerHTML = "<button >Present</button>";
            var totalAttended = document.querySelector(".total p");
            var currentCount = parseInt(totalAttended.innerHTML.split(":")[1]) || 0;
            totalAttended.innerHTML = "No.of students Attended: " + (currentCount + 1);
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td6.innerHTML = "<button id='absent'>Absent</button>";
        
        });
        td6.classList.add("td6");
        td6.append(btn1, btn2);

        tr.append(td1, td5, td6);

        document.querySelector("#tbody").append(tr);

    });


}
displayFun(studentDataArr);
document.querySelector(".date p").innerHTML += new Date().toLocaleDateString();