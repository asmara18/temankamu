
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initActiveLinks();
    initFAQ();
    initWhatsAppLogic();
    if(document.getElementById('article-grid')) {
        console.log("Article system active.");
    }
});

function initNavbar() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });
}

function initActiveLinks() {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === "" && href === "index.html")) {
            link.classList.add('nav-link-active');
        }
    });
}

function initFAQ() {
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.faq-icon');
            
            content.classList.toggle('active');
            if(icon) icon.classList.toggle('rotate-180');
        });
    });
}

function filterArtikel(kategori) {
    const items = document.querySelectorAll('.article-item');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active-btn', 'bg-primary', 'text-white');
    });
    event.currentTarget.classList.add('active-btn', 'bg-primary', 'text-white');

    items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (kategori === 'semua' || itemCat === kategori) {
            item.style.display = 'block';
            setTimeout(() => { item.style.opacity = '1'; }, 10);
        } else {
            item.style.opacity = '0';
            setTimeout(() => { item.style.display = 'none'; }, 300);
        }
    });
}

function initWhatsAppLogic() {
    const waNumber = "62895333353386";

    document.querySelectorAll('.btn-wa-booking').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const service = btn.getAttribute('data-service') || "Tanya Layanan";
            const msg = `Halo Jogja Buddy, saya tertarik dengan: *${service}*. Mohon info lebih lanjut.`;
            window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
        });
    });
}

function sendContactForm() {
    const name = document.getElementById('name')?.value;
    const date = document.getElementById('date')?.value;
    const msg = document.getElementById('message')?.value;

    if (!name || !date) {
        alert("Silakan lengkapi Nama dan Rencana Tanggal Wisata.");
        return;
    }

    const waText = `*Booking Form - Jogja Buddy*%0ANama: ${name}%0ATanggal: ${date}%0APesan: ${msg}`;
    window.open(`https://wa.me/62895333353386?text=${waText}`, '_blank');
}