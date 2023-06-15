document.querySelectorAll('a[href^="#]').forEach(anchor => {
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const text = document.querySelector(".nameText");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "ARSAD ANSARI";
    }, 0);
    setTimeout(() => {
        text.innerHTML = "A FRONTEND DEVELOPER";
    }, 4000);
}
textLoad ();