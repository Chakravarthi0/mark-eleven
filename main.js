let DOB = document.getElementById("bDay");

let luckyNo = document.getElementById("luckyNo");

let button = document.getElementById("check");

let pass = document.getElementById("pass");

let fail = document.getElementById("fail");

let closeBtn = document.getElementById("closeBtn");

let collapse = document.getElementById("collapse");

let bdayForm = document.getElementById("bdayForm");

closeBtn.addEventListener("click", () => {
    collapse.style.visibility = "HIDDEN";
})

bdayForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(DOB.value);
    console.log(luckyNo.value);
    let date = "";
    sum = 0;
    // for (let i = 0; i < DOB.value.length; i++) {
    //     if (DOB.value[i] > 0 && DOB.value[i] <= 9) {
    //         sum += Number(DOB.value[i]);
    //     }
    // }

    for (let i = 0; i < DOB.value.length; i++) {
        if (DOB.value[i] > 0 && DOB.value[i] <= 9) {
            date += (DOB.value[i]);
        }
    }

    date = Number(date);


    while (date > 0) {
        curr = date % 10;
        sum += curr;
        date = Math.floor(date / 10);
    }


    if (sum % (Number(luckyNo.value)) === 0) {
        pass.style.display = "block";
        fail.style.display = "none";
    }
    else {
        fail.style.display = "block";
        pass.style.display = "none";
    }
})