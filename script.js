
/* ==========================================
   WEBSITE UNDANGAN PERNIKAHAN
   ALYA PUTRI & RAKA PRATAMA
========================================== */


/* ==========================================
   1. KONFIGURASI UNDANGAN
========================================== */

const CONFIG = {
    bride: "Alya Putri",
    groom: "Raka Pratama",

    weddingDate: "2026-12-20T08:00:00+07:00",

    // Nomor WhatsApp tujuan RSVP
    whatsappNumber: "6283829265601"
};


/* ==========================================
   2. MENGAMBIL ELEMENT HTML
========================================== */

const openButton = document.getElementById("openInvitation");

const music = document.getElementById("weddingMusic");

const musicToggle = document.getElementById("musicToggle");


/* ==========================================
   3. FUNGSI STATUS MUSIK
========================================== */

function setMusicState(isPlaying) {

    musicToggle.classList.toggle("playing", isPlaying);

    musicToggle.classList.add("visible");

    musicToggle.textContent = isPlaying ? "♫" : "♪";

    musicToggle.setAttribute(
        "aria-label",
        isPlaying ? "Jeda musik" : "Putar musik"
    );

}


/* ==========================================
   4. EVENT MUSIK
========================================== */

music.addEventListener("play", function () {

    setMusicState(true);

});


music.addEventListener("pause", function () {

    setMusicState(false);

});


music.addEventListener("error", function () {

    console.error(
        "Musik gagal dimuat. Periksa assets/Musik.mp3"
    );

    setMusicState(false);

});


/* ==========================================
   5. TOMBOL BUKA UNDANGAN
========================================== */

openButton.addEventListener("click", async function () {

    // Gulir menuju halaman pembuka
    document.getElementById("intro").scrollIntoView({
        behavior: "smooth"
    });

    // Tampilkan tombol musik
    musicToggle.classList.add("visible");

    // Putar musik
    try {

        await music.play();

        setMusicState(true);

        console.log("Musik berhasil diputar!");

    } catch (error) {

        setMusicState(false);

        console.error("Musik gagal diputar:", error);

        alert(
            "Musik belum dapat diputar. Periksa file Musik.mp3 di folder assets."
        );

    }

});


/* ==========================================
   6. TOMBOL PLAY / PAUSE MUSIK
========================================== */

musicToggle.addEventListener("click", async function () {

    if (music.paused) {

        try {

            await music.play();

            setMusicState(true);

        } catch (error) {

            console.error("Gagal memutar musik:", error);

            alert(
                "Musik gagal diputar. Periksa file Musik.mp3."
            );

        }

    } else {

        music.pause();

        setMusicState(false);

    }

});


/* ==========================================
   7. NAMA TAMU OTOMATIS
========================================== */

// Contoh link:
// https://username.github.io/undangan-pernikahan/?to=Bapak%20Budi

const params = new URLSearchParams(window.location.search);

const guestName = params.get("to");

if (guestName) {

    document.getElementById("guestName").textContent =
        guestName;

}


/* ==========================================
   8. COUNTDOWN PERNIKAHAN
========================================== */

const targetDate = new Date(CONFIG.weddingDate).getTime();


function updateCountdown() {

    const now = Date.now();

    let distance = targetDate - now;

    if (distance < 0) {
        distance = 0;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* ==========================================
   9. RSVP WHATSAPP
========================================== */

const rsvpForm = document.getElementById("rsvpForm");


rsvpForm.addEventListener("submit", function (event) {

    // Mencegah halaman melakukan refresh
    event.preventDefault();


    // Mengambil data formulir
    const name = document.getElementById("name").value.trim();

    const attendance =
        document.getElementById("attendance").value;

    const guests =
        document.getElementById("guests").value;


    // Validasi data
    if (name === "") {

        alert("Silakan masukkan nama Anda.");

        return;

    }


    if (attendance === "") {

        alert("Silakan pilih konfirmasi kehadiran.");

        return;

    }


    // Membuat pesan WhatsApp
    const message = `
Assalamualaikum Warahmatullahi Wabarakatuh.

Halo, saya ${name}.

Saya ingin mengonfirmasi kehadiran pada acara pernikahan:

${CONFIG.bride} & ${CONFIG.groom}

Konfirmasi Kehadiran: ${attendance}

Jumlah Tamu: ${guests}

Terima kasih atas undangannya.

Wassalamualaikum Warahmatullahi Wabarakatuh.
`.trim();


    // Membuat URL WhatsApp
    const whatsappURL =
        "https://wa.me/" +
        CONFIG.whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    // Membuka WhatsApp
    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );

});


/* ==========================================
   10. ANIMASI SCROLL
========================================== */

const revealElements = document.querySelectorAll(
    ".section > *, .event-card, .person, .gallery-photo"
);


// Menambahkan class animasi
revealElements.forEach(function (element) {

    element.classList.add("reveal");

});


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


/* ==========================================
   11. KONFIRMASI SCRIPT BERHASIL DIMUAT
========================================== */

console.log("================================");
console.log("UNDANGAN ALYA & RAKA");
console.log("Website berhasil dimuat!");
console.log("WhatsApp:", CONFIG.whatsappNumber);
console.log("================================");
