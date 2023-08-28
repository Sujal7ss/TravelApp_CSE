
const box = document.querySelector("#priceChange");
const btn = document.querySelector(".slider");



box.onclick = () => {
    
    // document.querySelector(".basicPrice").innerHTML;
    if(box.checked){
        document.querySelectorAll(".priceCard h2")[0].innerHTML= "$299<span class='price'>/year</span>";
        document.querySelectorAll(".priceCard h2")[0].style = "font-size:1.7rem;";
        document.querySelectorAll(".priceCard h2")[1].innerHTML= "$499<span class='price'>/year</span>";
        document.querySelectorAll(".priceCard h2")[1].style = "font-size:1.7rem;";
        document.querySelectorAll(".priceCard h2")[2].innerHTML= "$499<span class='price'>/year</span>";
        document.querySelectorAll(".priceCard h2")[2].style = "font-size:1.7rem;";

    }
    else
    {
        document.querySelectorAll(".priceCard h2")[0].innerHTML= "$29<span class='price'>/month</span>";
        document.querySelectorAll(".priceCard h2")[0].style = "font-size:1.5rem;";
        document.querySelectorAll(".priceCard h2")[1].innerHTML= "$49<span class='price'>/month</span>";
        document.querySelectorAll(".priceCard h2")[1].style = "font-size:1.5rem;";
        document.querySelectorAll(".priceCard h2")[2].innerHTML= "$99<span class='price'>/month</span>";
        document.querySelectorAll(".priceCard h2")[2].style = "font-size:1.5rem;";
    }
}