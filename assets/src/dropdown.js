let dropdownBtn = document.querySelector('.drop_btn');
let menuContent = document.querySelector('.menuList');
dropdownBtn.addEventListener('click', () => {
    if (menuContent.style.display === "") {
        menuContent.style.display = "block";
    } else {
        menuContent.style.display = "";
    }
})
document.addEventListener('click', (e) => {
    if (!menuContent.contains(e.target) && 
        !dropdownBtn.contains(e.target)) {
            menuContent.style.display = "";
    }
});