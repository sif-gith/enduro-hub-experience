
async function getImages() {

    const ENDPOINT = 'https://script.google.com/macros/s/AKfycbzq1efdaUwvJhiPSkFzrGJXOUuHeeCCvKfzsoAjlIDVek1-5yi6t4cZIwJYEQw2kR9e/exec';
    const res = await fetch(ENDPOINT, { cache: 'no-cache' }); // this is fine if your web app is public
    const { items } = await res.json();

    const gallery = document.querySelector('#gallery-grid');
    items.forEach(({ url }) => {
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.decoding = 'async';
        img.src = url;     // ← cross-origin image load is OK
        gallery.appendChild(img);
    });
}

