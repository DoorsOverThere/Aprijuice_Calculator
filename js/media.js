window.addEventListener('resize', adjustForMedia);
adjustForMedia();

const leftContainer = document.getElementById('leftContainer');
const mainContainer = document.getElementById('mainContainer');
function adjustForMedia() {
    if (window.matchMedia("(min-width: 1300px)").matches) {
        leftContainer.prepend(document.getElementById('campfirePot'));
        leftContainer.prepend(document.getElementById('titleDescription'));
        leftContainer.prepend(document.getElementById('title'));
    } else {
        mainContainer.prepend(document.getElementById('campfirePot'));
        mainContainer.prepend(document.getElementById('titleDescription'));
        mainContainer.prepend(document.getElementById('title'));
    }
}