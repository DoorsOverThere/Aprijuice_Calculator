window.addEventListener('resize', adjustForMedia);
adjustForMedia();

function adjustForMedia() {
    if (window.matchMedia("(min-width: 1300px)").matches) {
        document.getElementById('leftContainer').prepend(document.getElementById('campfirePot'));
        document.getElementById('leftContainer').prepend(document.getElementById('title'));
    } else {
        document.getElementById('mainContainer').prepend(document.getElementById('campfirePot'));
        document.getElementById('mainContainer').prepend(document.getElementById('title'));
    }
}