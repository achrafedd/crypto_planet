const markets = document.querySelectorAll('.bottom .row');
const container = document.querySelector('.bottom');
const input = document.querySelector('input');
const darkMode = document.querySelector("header .dark-mode");

input.addEventListener('keyup', () => {
    container.innerHTML = "";
    markets.forEach((market) => {
        let all = market.children[0].textContent.trim().replace(/\s/g, "");
        let val = market.children[0].textContent.trim().split("-");
        console.log(all)
        if (
            val[0].startsWith(input.value.toUpperCase()) ||
            val[1].startsWith(input.value.toUpperCase()) ||
            all.startsWith(input.value.toUpperCase())
        ) {
            container.innerHTML += `
                <div class="row">
                    ${market.innerHTML}
                </div>
            `;
        }
    })
});

darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('active');
    document.body.classList.toggle('dark');
})