
const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll("#theme-toggle");

themeToggleBtns.forEach(btn =>{
    btn.addEventListener('click', () => {
        document.body.classList.toggle('light_mode');
    })
});
};

export default darkMode();