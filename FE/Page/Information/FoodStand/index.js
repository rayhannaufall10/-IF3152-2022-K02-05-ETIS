const stanModule = require("../../../../object/Stan/stan");

var standsContainerComponent = document.getElementsByClassName("stands-container")[0];
console.log(standsContainerComponent);

var stans = await stanModule.Stan.getData();
for (let stan of stans){
    const templateHTML = `
    <div class="stand-container">
        <a href="" class="stand">
            <img src="${stan.path_logo}" alt="">
        </a>
        <div id=${stan.id_stan} class="name-container">
            <div class="namaStan">${stan.nama_stan}</div>
        </div>
    </div>
    `
    standsContainerComponent.innerHTML += templateHTML;
}

document.querySelectorAll('.name-container').forEach(image => {
    image.onclick = () => {
        var popUpImageComponent = document.querySelector('.popup-image img');
        popUpImageComponent.src = stans[parseInt(image.id)-1].path_menu;
        document.querySelector('.popup-image').style.display = 'block';
    }
});
document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}
