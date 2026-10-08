const music = document.getElementById("birthdayMusic");
const playIcon = document.getElementById("playIcon");
const galleryVideo = document.getElementById("galleryVideo");

function muteBackground() {
    galleryVideo.muted = true;
}
document.addEventListener("click", () => {
    unmuteBackground();
    galleryVideo.play();
}, { once: true });
function toggleMusic() {
    if (music.paused) {
        music.play();
        muteBackground();
        playIcon.classList.replace("fa-play", "fa-pause");
    } else {
        music.pause();
        unmuteBackground();
        playIcon.classList.replace("fa-pause", "fa-play");
    }
}

function playSong(song, button) {
    if (music.src.includes(song) && !music.paused) {
        music.pause();
        unmuteBackground();
        button.innerHTML = "▶";
        playIcon.classList.replace("fa-pause", "fa-play");
        return;
    }

    music.src = song;
    music.play();
    muteBackground();

    document.querySelectorAll(".song button").forEach(btn => {
        btn.innerHTML = "▶";
    });

    button.innerHTML = "⏸";
    playIcon.classList.replace("fa-play", "fa-pause");
}

function previousSong() {
    alert("Previous song");
}

function nextSong() {
    alert("Next song");
}

function openPhoto(image) {
    document.getElementById("popupImage").src = image;
    document.getElementById("photoPopup").style.display = "flex";
}

function closePhoto() {
    document.getElementById("photoPopup").style.display = "none";
}

document.addEventListener("click", () => {
    unmuteBackground();
    galleryVideo.play();
}, { once: true });

document.querySelectorAll("#videos video").forEach(video => {
    video.addEventListener("play", () => {
        muteBackground();

        document.querySelectorAll("#videos video").forEach(v => {
            if (v !== video) v.pause();
        });
    });

    video.addEventListener("pause", () => {
        if ([...document.querySelectorAll("#videos video")]
            .every(v => v.paused)) {
            unmuteBackground();
        }
    });

    video.addEventListener("ended", () => {
        unmuteBackground();
    });
});

music.addEventListener("pause", () => {
    unmuteBackground();

    document.querySelectorAll(".song button").forEach(btn => {
        btn.innerHTML = "▶";
    });

    playIcon.classList.replace("fa-pause", "fa-play");
});

music.addEventListener("ended", () => {
    unmuteBackground();
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
    let current = "";

    sections.forEach(section => {
        if (scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.hash === "#" + current);
    });
};