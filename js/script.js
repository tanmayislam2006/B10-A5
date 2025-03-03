const donateButtons = document.querySelectorAll(".donate-btn");
for (const donateButton of donateButtons) {
    donateButton.addEventListener("click", function (event) {
        const accesInput = event.target.closest('section');
        const inputText = accesInput.querySelector('input[type="text"]').value;
        const input = makeNumber(inputText);
        const balance = getElementByIdText("main-balance");
        if (balance >= input) {

            let remaing = balance - input
            changeInnerText("main-balance", remaing);
            const modalCard = document.getElementById("modal");
            modalCard.classList.remove("hidden")
        }
        else {
            alert("plz add balance")
        }
        const date = new Date()
        const dayNames = ["San", "Mon", "Tue", 'Wed', "Thu", "Fri", "Sat"];
        let today = dayNames[date.getDay()]
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let month = months[date.getMonth()];
        let day = date.getDay()
        let year = date.getFullYear();
        let time=date.toLocaleTimeString();
        const title = accesInput.querySelector(".text-xl").innerText;
        const historyAdd = document.getElementById("history-section");
        const createDiv = document.createElement("div")
        createDiv.innerHTML = `        <div class="border my-4 py-10 pl-10 border-bordercolor rounded-xl">
            <h3 class="font-medium text-lg">${inputText} Taka is ${title}</h3>
            <p class="text-gray-500">Date : ${today} ${month} ${day} ${year} ${time}  GMT +0600 (Bangladesh Standard Time)</p>
        </div>`
        historyAdd.appendChild(createDiv)
    });
}
document.getElementById("close-btn")
    .addEventListener("click", function () {
        const modalCard = document.getElementById("modal");
        modalCard.classList.add("hidden")
    })
document.getElementById("history-btn")
    .addEventListener("click", function () {
        const sections = document.getElementsByTagName("section")
        for (const section of sections) {
            section.classList.add("hidden")
        }
        displayRemove("history-section", "hidden")
    })
document.getElementById("donation-btn")
    .addEventListener("click", function () {
        const sections = document.getElementsByTagName("section")
        for (const section of sections) {
            section.classList.remove("hidden")
        }
        displayAdd("history-section", "hidden")
    })

