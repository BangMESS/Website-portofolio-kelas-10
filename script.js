function confirmDownload () { 
    const confirmation = confirm("yakin nih mau download cv aku?");
    if(confirmation) {
        window.location.href = "cvfake.pdf";
        return true;
    }else{
        window.location.href = "index.html";
        return false; 
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const skillBoxes = document.querySelectorAll(".skill-box");

    skillBoxes.forEach((box) => {
        box.addEventListener("click", function () {
            this.classList.toggle("clicked"); 
            let imgAlt = this.querySelector("img").alt;
            this.querySelector(".skill-text").textContent = imgAlt.toUpperCase(); 
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const portfolioBoxes = document.querySelectorAll(".portfolio-box");

    portfolioBoxes.forEach((box) => {
        let isFollowing = false;

        box.addEventListener("click", () => {
            isFollowing = !isFollowing;
            if (isFollowing) {
                box.classList.add("following");
                document.addEventListener("mousemove", moveBox);
            } else {
                box.classList.remove("following");
                document.removeEventListener("mousemove", moveBox);
                box.style.transform = "translate(0, 0)";
            }
        });

        function moveBox(e) {
            if (isFollowing) {
                let x = e.clientX / 20;
                let y = e.clientY / 20;
                box.style.transform = `translate(${x}px, ${y}px)`;
            }
        }
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const btn = document.getElementById("button");

document.getElementById("email-form").addEventListener("submit", function (e) {
    e.preventDefault();
    btn.value = "Sending...";
    const serviceID = "service_kz5desv";
    const templateID = "template_l93fyua";
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = "Send Email";
            alert("Sent!");
        }, (err) => {
            btn.value = "Send Email";
            alert(JSON.stringify(err));
        });
}
);