const downloadBtn = document.querySelector(".download-btn");

const fileLink ="https://docs.google.com/spreadsheets/d/1qeTMRNTr_FyEgxPfuMOcY32mT6WPQtSr5PCgqsS2smI/edit?usp=drive_link";



const initTimer = () => {

    if(downloadBtn.classList.contains("disable-timer")) {

        return location.href = fileLink;

    }

    let timer = downloadBtn.dataset.timer;

    downloadBtn.classList.add("timer");

    downloadBtn.innerHTML = ` Your File Will Download in <b>${timer} </b> seconds `;

    const initCounter = setInterval(() => {

        if(timer > 0) {

            timer--;

            return downloadBtn.innerHTML =` Your File Will Download in <b>${timer} </b> seconds `;

        }

        clearInterval(initCounter);

        location.href = fileLink;

        downloadBtn.innerText = "Your file is downloading...";

        setTimeout(() => {

            downloadBtn.classList.replace("timer", "disable-timer");

            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>

                                     <span class="text">Download Again</span>`;

        }, 3000);

    }, 1000);

}



downloadBtn.addEventListener("click", initTimer);
