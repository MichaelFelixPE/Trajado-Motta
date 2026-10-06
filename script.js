// ==========================================================================
//  TRAJADO MOTTA — script.js
//  • Banco de dados de produtos da marca
//  • Lógica interativa do widget BOGO (Compre 1 Leve 2) no Hero
//  • Carrossel horizontal de produtos com arrasto/clique
//  • Carrinho de compras lateral persistente no localStorage
//  • Integração de checkout via WhatsApp (87) 99624-6308
// ==========================================================================

// ─── 1. BANCO DE DADOS DE PRODUTOS ────────────────────────────────────────
const PRODUCTS_DB = [
    {
        id: 1,
        name: "Óculos de Sol Eye Jacket Redux",
        model: "Eye Jacket",
        color: "Metallic",
        price: 297.90,
        originalPrice: 297.90,
        images: ["assets/glasses_1.png"],
        installments: "5x de R$ 59,58",
        tag: "Mais Vendido"
    },
    {
        id: 2,
        name: "Óculos de Sol Radar Ev Path",
        model: "Radar",
        color: "torch",
        price: 267.90,
        originalPrice: 297.90,
        images: ["assets/glasses_2.png"],
        installments: "5x de R$ 53,58",
        tag: "Destaque"
    },
    {
        id: 3,
        name: "Óculos de Sol Minute Classic",
        model: "Minute",
        color: "Matte Black",
        price: 297.90,
        originalPrice: null,
        images: ["assets/glasses_3.png"],
        installments: "5x de R$ 59,58",
        tag: "Mais Vendido"
    },
    {
        id: 4,
        name: "Óculos de Sol Minute Cooper",
        model: "Minute",
        color: "Gold Cafe",
        price: 297.90,
        originalPrice: null,
        images: ["assets/glasses_4.png"],
        installments: "5x de R$ 59,58",
        tag: "Lançamento"
    },
    {
        id: 5,
        name: "Óculos de Sol Radar EV Black",
        model: "Radar",
        color: "Dark Matter",
        price: 297.90,
        originalPrice: null,
        images: ["assets/glasses_5.png"],
        installments: "5x de R$ 59,58",
        tag: "Constância"
    },
    {
        id: 6,
        name: "Óculos de Sol Eye Jacket Silver",
        model: "Eye Jacket",
        color: "Chrome Blue",
        price: 297.90,
        originalPrice: null,
        images: ["assets/glasses_6.png"],
        installments: "5x de R$ 59,58",
        tag: "Casual"
    },
    {
        id: 7,
        name: "Óculos de Sol Jawbreaker Sport",
        model: "Jawbreaker",
        color: "Yellow Neon",
        price: 297.90,
        originalPrice: null,
        images: ["assets/glasses_7.png"],
        installments: "5x de R$ 59,58",
        tag: "Performance"
    },
    {
        id: 8,
        name: "Óculos de Sol Flak 2.0",
        model: "Óculos de Sol Flak 2.0",
        color: "Cor 1",
        price: 297.90,
        originalPrice: null,
        images: ["assets/flak_1.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Lançamento"
    },
    {
        id: 18,
        name: "Óculos de Sol Flak 2.0",
        model: "Óculos de Sol Flak 2.0",
        color: "Cor 2",
        price: 297.90,
        originalPrice: null,
        images: ["assets/flak_2.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Lançamento"
    },
    {
        id: 19,
        name: "Óculos de Sol Flak 2.0",
        model: "Óculos de Sol Flak 2.0",
        color: "Cor 3",
        price: 297.90,
        originalPrice: null,
        images: ["assets/flak_3.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Lançamento"
    },
    {
        id: 20,
        name: "Óculos de Sol Flak 2.0",
        model: "Óculos de Sol Flak 2.0",
        color: "Cor 4",
        price: 297.90,
        originalPrice: null,
        images: ["assets/flak_4.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Lançamento"
    },
    {
        id: 21,
        name: "Óculos de Sol Flak 2.0",
        model: "Óculos de Sol Flak 2.0",
        color: "Cor 5",
        price: 297.90,
        originalPrice: null,
        images: ["assets/flak_5.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Lançamento"
    },
    {
        id: 22,
        name: "Óculos de Sol Flak 2.0",
        model: "Óculos de Sol Flak 2.0",
        color: "Cor 6",
        price: 297.90,
        originalPrice: null,
        images: ["assets/flak_6.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Lançamento"
    },
    {
        id: 9,
        name: "Óculos de Sol Esconder",
        model: "Esconder",
        color: "Marrom",
        price: 297.90,
        originalPrice: null,
        images: ["assets/esconder_marrom_1.jpg", "assets/esconder_marrom_2.jpg", "assets/esconder_marrom_3.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Novidade"
    },
    {
        id: 10,
        name: "Óculos de Sol Esconder",
        model: "Esconder",
        color: "Azul",
        price: 297.90,
        originalPrice: null,
        images: ["assets/esconder_azul_1.jpg", "assets/esconder_azul_2.jpg", "assets/esconder_azul_3.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Novidade"
    },
    {
        id: 11,
        name: "Óculos de Sol Esconder",
        model: "Esconder",
        color: "Preta",
        price: 297.90,
        originalPrice: null,
        images: ["assets/esconder_preta_1.jpg", "assets/esconder_preta_2.jpg", "assets/esconder_preta_3.jpg", "assets/esconder_preta_4.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Novidade"
    },
    {
        id: 12,
        name: "Óculos de Sol Esconder",
        model: "Esconder",
        color: "Dourado",
        price: 297.90,
        originalPrice: null,
        images: ["assets/esconder_dourado_1.jpg", "assets/esconder_dourado_2.jpg", "assets/esconder_dourado_3.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Novidade"
    },
    {
        id: 13,
        name: "Óculos de Sol Esconder",
        model: "Esconder",
        color: "Prata",
        price: 297.90,
        originalPrice: null,
        images: ["assets/esconder_prata_1.jpg", "assets/esconder_prata_2.jpg", "assets/esconder_prata_3.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Novidade"
    },
    {
        id: 14,
        name: "Óculos de Sol Kato",
        model: "Kato",
        color: "Preta",
        price: 297.90,
        originalPrice: null,
        images: ["assets/kato_preta_1.jpg", "assets/kato_preta_2.jpg", "assets/kato_preta_3.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Novidade"
    },
    {
        id: 15,
        name: "Óculos de Sol Kato",
        model: "Kato",
        color: "Dourado",
        price: 297.90,
        originalPrice: null,
        images: ["assets/kato_dourado_1.jpg", "assets/kato_dourado_2.jpg", "assets/kato_dourado_3.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Novidade"
    },
    {
        id: 16,
        name: "Óculos de Sol Kato",
        model: "Kato",
        color: "Marrom",
        price: 297.90,
        originalPrice: null,
        images: ["assets/kato_marrom_1.jpg", "assets/kato_marrom_2.jpg", "assets/kato_marrom_3.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Novidade"
    },
    {
        id: 17,
        name: "Óculos de Sol Kato",
        model: "Kato",
        color: "Azul",
        price: 297.90,
        originalPrice: null,
        images: ["assets/kato_azul_1.jpg", "assets/kato_azul_2.jpg", "assets/kato_azul_3.jpg"],
        installments: "5x de R$ 59,58",
        tag: "Novidade"
    }
];

// ─── 2. ESTADO DA APLICAÇÃO ───────────────────────────────────────────────
let cart = loadCart();

// ─── 3. PERSISTÊNCIA (localStorage) ───────────────────────────────────────
function loadCart() {
    try {
        return JSON.parse(localStorage.getItem('trajado_cart_new')) || [];
    } catch {
        return [];
    }
}

function saveCart() {
    localStorage.setItem('trajado_cart_new', JSON.stringify(cart));
}

// ─── 4. INICIALIZAÇÃO DO SITE ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCart();
    initMobileNav();
    initSearch();
    initCartDrawer();
    initSlider();
    initHeaderScroll();
    initKeyboard();
});

// ─── 5. HEADER SCROLL EFFECT ──────────────────────────────────────────────
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            header.style.height = '70px';
        } else {
            header.style.backgroundColor = '#000000';
            header.style.height = '80px';
        }
    });
}

// ─── 6. RENDERIZAÇÃO DOS PRODUTOS (Carrossel e Grade) ─────────────────────
function buildCard(p, fullWidth = false) {
    const imgs = p.images || [p.image];
    const multi = imgs.length > 1;
    const styleAttr = fullWidth ? 'style="width:100%;"' : '';
    return `
        <div class="product-card" ${styleAttr} data-product-id="${p.id}">
            <div class="product-card__img-box" style="position:relative;">
                <img src="${imgs[0]}" alt="${p.name}" class="product-card__img" data-imgs='${JSON.stringify(imgs)}' data-idx="0"
                    onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22%23f0f0f0%22/><text x=%2250%25%22 y=%2255%25%22 font-size=%2240%22 text-anchor=%22middle%22 fill=%22%23333%22>🕶️</text></svg>';">
                ${multi ? `
                <button class="card-gallery-btn card-gallery-btn--prev" onclick="cardGalleryNav(this,-1)" aria-label="Anterior">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button class="card-gallery-btn card-gallery-btn--next" onclick="cardGalleryNav(this,1)" aria-label="Próxima">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
                <div class="card-gallery-dots">
                    ${imgs.map((_, i) => `<span class="card-gallery-dot${i===0?' active':''}" onclick="cardGalleryGoTo(this,${i})"></span>`).join('')}
                </div>
                <button class="card-zoom-btn" onclick="openLightbox(${p.id},0)" aria-label="Ver foto">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </button>
                ` : `
                <button class="card-zoom-btn" onclick="openLightbox(${p.id},0)" aria-label="Ver foto">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                </button>
                `}
            </div>
            <div class="product-card__info">
                <p class="product-card__color-tag">${p.color}</p>
                <h3 class="product-card__name">${p.name}</h3>
                <div class="product-card__price-row">
                    <span class="product-card__price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                </div>
                <span class="product-card__installment">em até ${p.installments}</span>
                <div style="margin-top:1.2rem;">
                    <button class="bogo-checkout-btn" style="width:100%; padding:1.2rem; font-size:1.3rem;" onclick="addToDirectCart(${p.id})">ADICIONAR AO CARRINHO</button>
                </div>
            </div>
        </div>
    `;
}

function cardGalleryNav(btn, dir) {
    const box = btn.closest('.product-card__img-box');
    const img = box.querySelector('.product-card__img');
    const dots = box.querySelectorAll('.card-gallery-dot');
    const imgs = JSON.parse(img.dataset.imgs);
    let idx = parseInt(img.dataset.idx);
    idx = (idx + dir + imgs.length) % imgs.length;
    img.src = imgs[idx];
    img.dataset.idx = idx;
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

function cardGalleryGoTo(dot, idx) {
    const box = dot.closest('.product-card__img-box');
    const img = box.querySelector('.product-card__img');
    const dots = box.querySelectorAll('.card-gallery-dot');
    const imgs = JSON.parse(img.dataset.imgs);
    img.src = imgs[idx];
    img.dataset.idx = idx;
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────
function openLightbox(productId, startIdx) {
    const product = PRODUCTS_DB.find(p => p.id === productId);
    if (!product) return;
    const imgs = product.images || [product.image];
    let current = startIdx || 0;

    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.92);z-index:99999;display:flex;align-items:center;justify-content:center;';
    overlay.onclick = (e) => { if (e.target === overlay) closeLightbox(); };

    const render = () => {
        overlay.innerHTML = `
            <button onclick="closeLightbox()" style="position:absolute;top:20px;right:24px;color:#fff;font-size:3rem;background:none;border:none;cursor:pointer;line-height:1;z-index:2;">&#215;</button>
            ${imgs.length > 1 ? `<button onclick="lbNav(-1)" style="position:absolute;left:20px;color:#fff;font-size:3rem;background:rgba(255,255,255,0.1);border:none;cursor:pointer;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg></button>` : ''}
            <div style="display:flex;flex-direction:column;align-items:center;gap:1.6rem;max-width:90vw;">
                <img src="${imgs[current]}" alt="${product.name}" style="max-width:90vw;max-height:80vh;object-fit:contain;border-radius:8px;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
                <div style="display:flex;gap:1rem;align-items:center;">
                    ${imgs.map((img, i) => `<img src="${img}" onclick="lbGoTo(${i})" style="width:60px;height:60px;object-fit:cover;border-radius:6px;cursor:pointer;border:2px solid ${i===current?'#f57c00':'rgba(255,255,255,0.3)'};opacity:${i===current?'1':'0.6'};transition:all 0.2s;">`).join('')}
                </div>
                <p style="color:#ccc;font-size:1.3rem;">${product.name} — ${product.color} (${current+1}/${imgs.length})</p>
            </div>
            ${imgs.length > 1 ? `<button onclick="lbNav(1)" style="position:absolute;right:20px;color:#fff;font-size:3rem;background:rgba(255,255,255,0.1);border:none;cursor:pointer;width:50px;height:50px;border-radius:50%;display:flex;align-items:center;justify-content:center;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg></button>` : ''}
        `;
    };

    window.lbNav = (dir) => { current = (current + dir + imgs.length) % imgs.length; render(); };
    window.lbGoTo = (i) => { current = i; render(); };
    window.closeLightbox = () => { overlay.remove(); document.body.style.overflow = ''; };

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    render();

    document.addEventListener('keydown', function lbKey(e) {
        if (e.key === 'ArrowRight') lbNav(1);
        else if (e.key === 'ArrowLeft') lbNav(-1);
        else if (e.key === 'Escape') { closeLightbox(); document.removeEventListener('keydown', lbKey); }
    });
}

function renderProducts() {
    const slider = document.getElementById('featured-products-slider');
    const container = document.getElementById('main-products-container');

    if (slider) {
        slider.innerHTML = PRODUCTS_DB.slice(0, 5).map(p => buildCard(p, false)).join('');
    }

    if (container) {
        const grouped = {};
        PRODUCTS_DB.forEach(p => {
            if (!grouped[p.model]) grouped[p.model] = [];
            grouped[p.model].push(p);
        });

        container.innerHTML = Object.keys(grouped).map(modelName => {
            const products = grouped[modelName];
            return `
                <div class="model-group" id="model-${modelName.toLowerCase().replace(/\s+/g, '-')}">
                    <div class="model-group__header">
                        <h2 class="model-group__title">Modelo ${modelName}</h2>
                        <span class="model-group__count">${products.length} ${products.length === 1 ? 'cor' : 'cores'} disponível${products.length === 1 ? '' : 'is'}</span>
                    </div>
                    <div class="products-grid">
                        ${products.map(p => buildCard(p, true)).join('')}
                    </div>
                </div>
            `;
        }).join('');
    }
}

// ─── 7. LÓGICA DO WIDGET BOGO (Hero Section REMOVIDA) ──────────────────────

// ─── 8. CARRINHO LATERAL (DRAWER) ─────────────────────────────────────────
function initCartDrawer() {
    const cartToggle = document.getElementById('cart-toggle');
    const cartClose = document.getElementById('cart-close');
    const cartOverlay = document.getElementById('cart-overlay');
    
    if (cartToggle) cartToggle.addEventListener('click', () => toggleCart(true));
    if (cartClose) cartClose.addEventListener('click', () => toggleCart(false));
    if (cartOverlay) cartOverlay.addEventListener('click', () => toggleCart(false));
}

function toggleCart(open) {
    const overlay = document.getElementById('cart-overlay');
    if (overlay) {
        if (open) {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            renderCartDrawer();
        } else {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
}

function addToDirectCart(productId) {
    const product = PRODUCTS_DB.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    
    saveCart();
    updateCart();
    toggleCart(true); // Abre o carrinho lateral automaticamente
}

function updateCart() {
    saveCart();
    
    // Atualiza contador de itens nos ícones do cabeçalho
    const counts = document.querySelectorAll('.cart-count');
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    counts.forEach(c => c.textContent = totalQty);
}

function renderCartDrawer() {
    const body = document.getElementById('cart-body');
    const footer = document.getElementById('cart-footer');
    const totalVal = document.getElementById('cart-total-value');
    
    if (!body) return;
    
    if (cart.length === 0) {
        body.innerHTML = `
            <div class="cart-empty">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                <p>Seu carrinho está vazio</p>
            </div>
        `;
        if (footer) footer.style.display = 'none';
        return;
    }
    
    body.innerHTML = cart.map((item, index) => `
        <div style="display: flex; gap: 1.4rem; padding: 1.6rem 0; border-bottom: 1px solid #eee; align-items: center;">
            <div style="width: 65px; height: 65px; background: #f5f5f5; border-radius: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden; flex-shrink: 0;">
                <img src="${item.image}" alt="${item.name}" style="width:90%; height:90%; object-fit:contain;">
            </div>
            <div style="flex: 1; min-width: 0;">
                <h4 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.2rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</h4>
                <p style="font-size: 1.15rem; color: #666; margin-bottom: 0.6rem;">Cor: ${item.color}</p>
                <div style="display:flex; align-items:center; gap:1.2rem;">
                    <div class="bogo-qty" style="background-color:#eee; padding:1px;">
                        <button class="bogo-qty__btn" style="width:20px; height:20px; font-size:1.1rem;" onclick="adjustCartQty(${index}, -1)">-</button>
                        <span class="bogo-qty__val" style="min-width:18px; font-size:1.1rem;">${item.qty}</span>
                        <button class="bogo-qty__btn" style="width:20px; height:20px; font-size:1.1rem;" onclick="adjustCartQty(${index}, 1)">+</button>
                    </div>
                    <span style="font-size: 1.35rem; font-weight: 700; color: #000;">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
            <button onclick="removeFromCart(${index})" style="color: #bbb; font-size: 2rem; padding: 0.4rem; cursor:pointer;" onmouseover="this.style.color='#f44336'" onmouseout="this.style.color='#bbb'">&times;</button>
        </div>
    `).join('');
    
    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    if (footer) footer.style.display = 'block';
    if (totalVal) totalVal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function adjustCartQty(index, amount) {
    if (cart[index]) {
        cart[index].qty += amount;
        if (cart[index].qty <= 0) cart.splice(index, 1);
        updateCart();
        renderCartDrawer();
    }
}

function removeFromCart(index) {
    if (cart[index]) {
        cart.splice(index, 1);
        updateCart();
        renderCartDrawer();
    }
}

function finalizeCartCheckout() {
    if (cart.length === 0) return;
    
    let total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let itemsMessage = [];
    
    cart.forEach(item => {
        itemsMessage.push(`• ${item.name} (${item.color}) x${item.qty} = R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}`);
    });
    
    const wppMessage = [
        '🕶️ *NOVO PEDIDO (CARRINHO) — TRAJADO MOTTA*',
        '',
        '*Itens do Carrinho:*',
        ...itemsMessage,
        '',
        `*Frete:* GRÁTIS`,
        `*Total Geral:* *R$ ${total.toFixed(2).replace('.', ',')}*`,
        '',
        'Gostaria de finalizar minha compra e organizar a entrega!'
    ].join('\n');
    
    const wppUrl = `https://wa.me/5587996246308?text=${encodeURIComponent(wppMessage)}`;
    window.open(wppUrl, '_blank');
}

// ─── 9. NAVEGAÇÃO DO CARROSSEL (SLIDER) ───────────────────────────────────
function initSlider() {
    const slider = document.getElementById('featured-products-slider');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    
    if (!slider || !prevBtn || !nextBtn) return;
    
    const scrollAmount = 272; // Largura do card (248px) + gap (24px)
    
    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
    
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}

// ─── 10. MOBILE MENU, SEARCH OVERLAYS & KEYBOARD ─────────────────────────
function initMobileNav() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavClose = document.getElementById('mobile-nav-close');
    
    if (menuToggle && mobileNavOverlay) {
        menuToggle.addEventListener('click', () => {
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (mobileNavClose && mobileNavOverlay) {
        mobileNavClose.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

function initSearch() {
    const searchToggle = document.getElementById('search-toggle');
    const searchClose = document.getElementById('search-close');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', () => {
            searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 300);
        });
    }
    
    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}

function initKeyboard() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const searchOverlay = document.getElementById('search-overlay');
            const cartOverlay = document.getElementById('cart-overlay');
            const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
            
            if (searchOverlay) searchOverlay.classList.remove('active');
            if (cartOverlay) cartOverlay.classList.remove('active');
            if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
            
            document.body.style.overflow = '';
        }
    });
}
