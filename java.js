function myFunction() {
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var fname = document.getElementById("fname").value;
        document.getElementById("demo").innerHTML = "<p>Thank you for supporting my website! <br> Full name: " + fname + " <br> Age: " + age + " <br> Email: " + email + " </p>";
    }   
    const toTop = document.querySelector(".topknappen");

    window.addEventListener("skroll", () => {
        if (window.pageYOffset > 100){
            toTop.classList.add("upp");
        } else {
            toTop.classList.remove("upp")
        }
    })