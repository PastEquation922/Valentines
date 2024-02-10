const button = document.getElementById("no")
button.addEventListener('mouseover', function () {
    button.style.translate = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
});
button.addEventListener('click', function () {
    alert('you clicked me')
})

document.getElementById("no").addEventListener("click", alert("heyy")); 