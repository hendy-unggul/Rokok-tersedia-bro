// Data Merek Rokok
const cigaretteBrands = [
    // Sampoerna (Hijau Tosca)
    { id: 1, name: "Sampoerna Mild", factory: "sampoerna", icon: "fas fa-fire", stock: 85, popular: true },
    { id: 2, name: "Sampoerna Kretek", factory: "sampoerna", icon: "fas fa-fire", stock: 72, popular: true },
    { id: 3, name: "A Mild", factory: "sampoerna", icon: "fas fa-fire", stock: 90, popular: true },
    { id: 4, name: "Sampoerna Hijau", factory: "sampoerna", icon: "fas fa-leaf", stock: 65, popular: false },
    { id: 5, name: "U Mild", factory: "sampoerna", icon: "fas fa-fire", stock: 78, popular: true },
    
    // Djarum (Biru)
    { id: 6, name: "Djarum Super", factory: "djarum", icon: "fas fa-star", stock: 88, popular: true },
    { id: 7, name: "Djarum Coklat", factory: "djarum", icon: "fas fa-star", stock: 76, popular: false },
    { id: 8, name: "LA Bold", factory: "djarum", icon: "fas fa-bold", stock: 82, popular: true },
    { id: 9, name: "Djarum 76", factory: "djarum", icon: "fas fa-star", stock: 70, popular: false },
    { id: 10, name: "Magnum", factory: "djarum", icon: "fas fa-magnet", stock: 68, popular: true },
    
    // Gudang Garam (Kuning)
    { id: 11, name: "Gudang Garam Surya", factory: "gudang", icon: "fas fa-sun", stock: 92, popular: true },
    { id: 12, name: "Gudang Garam Merah", factory: "gudang", icon: "fas fa-fire", stock: 85, popular: true },
    { id: 13, name: "Gudang Garam Internasional", factory: "gudang", icon: "fas fa-globe", stock: 60, popular: false },
    { id: 14, name: "GG Signature", factory: "gudang", icon: "fas fa-signature", stock: 55, popular: false },
    { id: 15, name: "GG Filter", factory: "gudang", icon: "fas fa-filter", stock: 75, popular: true },
    
    // Bentoel (Merah)
    { id: 16, name: "Bentoel Biru", factory: "bentoel", icon: "fas fa-tint", stock: 80, popular: true },
    { id: 17, name: "Bentoel Hijau", factory: "bentoel", icon: "fas fa-leaf", stock: 72, popular: false },
    { id: 18, name: "Star Mild", factory: "bentoel", icon: "fas fa-star", stock: 88, popular: true },
    { id: 19, name: "Vintage", factory: "bentoel", icon: "fas fa-wine-bottle", stock: 65, popular: false },
    { id: 20, name: "X Mild", factory: "bentoel", icon: "fas fa-times", stock: 78, popular: true },
    
    // Lainnya
    { id: 21, name: "Marlboro Red", factory: "lainnya", icon: "fas fa-flag-usa", stock: 95, popular: true },
    { id: 22, name: "Marlboro Gold", factory: "lainnya", icon: "fas fa-flag-usa", stock: 90, popular: true },
    { id: 23, name: "Lucky Strike", factory: "lainnya", icon: "fas fa-clover", stock: 70, popular: false },
    { id: 24, name: "Camel", factory: "lainnya", icon: "fas fa-camel", stock: 65, popular: true },
    { id: 25, name: "Winston", factory: "lainnya", icon: "fas fa-w", stock: 75, popular: false },
    { id: 26, name: "LA Lights", factory: "lainnya", icon: "fas fa-lightbulb", stock: 80, popular: true },
    { id: 27, name: "Class Mild", factory: "lainnya", icon: "fas fa-graduation-cap", stock: 68, popular: false },
    { id: 28, name: "Philip Morris", factory: "lainnya", icon: "fas fa-building", stock: 72, popular: true },
    { id: 29, name: "Esse", factory: "lainnya", icon: "fas fa-snowflake", stock: 60, popular: false },
    { id: 30, name: "Java", factory: "lainnya", icon: "fas fa-coffee", stock: 55, popular: true },
];

// Data Toko
const stores = [
    { 
        id: 1, 
        name: "Warung Bahagia", 
        address: "Jl. Merdeka No. 123", 
        distance: 0.5, 
        stock: [1, 6, 11, 21],
        open: true,
        rating: 4.5,
        phone: "081234567890",
        hours: "08:00 - 22:00"
    },
    { 
        id: 2, 
        name: "Toko Makmur", 
        address: "Jl. Sudirman No. 45", 
        distance: 1.2, 
        stock: [2, 7, 16, 22],
        open: true,
        rating: 4.2,
        phone: "081234567891",
        hours: "07:00 - 23:00"
    },
    { 
        id: 3, 
        name: "Kios Sejahtera", 
        address: "Jl. Thamrin No. 89", 
        distance: 2.1, 
        stock: [3, 8, 17, 23],
        open: true,
        rating: 4.7,
        phone: "081234567892",
        hours: "09:00 - 21:00"
    },
    { 
        id: 4, 
        name: "Warung Abadi", 
        address: "Jl. Gatot Subroto No. 12", 
        distance: 3.5, 
        stock: [4, 9, 18, 24],
        open: false,
        rating: 4.0,
        phone: "081234567893",
        hours: "10:00 - 20:00"
    },
    { 
        id: 5, 
        name: "Toko Sinar Jaya", 
        address: "Jl. Hayam Wuruk No. 67", 
        distance: 4.2, 
        stock: [5, 10, 19, 25],
        open: true,
        rating: 4.3,
        phone: "081234567894",
        hours: "08:30 - 22:30"
    }
];

// DOM Elements
const popularBrandsContainer = document.getElementById('popularBrands');
const allBrandsContainer = document.getElementById('allBrands');
const storesListContainer = document.getElementById('storesList');
const mainSearchInput = document.getElementById('mainSearch');
const mainSearchBtn = document.getElementById('mainSearchBtn');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const mapToggleBtn = document.getElementById('mapToggleBtn');
const mapView = document.getElementById('mapView');
const storeModal = document.getElementById('storeModal');
const filterModal = document.getElementById('filterModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeFilterBtn = document.getElementById('closeFilterBtn');
const fabBtn = document.getElementById('fabBtn');
const filterChips = document.querySelectorAll('.filter-chip');
const factoryButtons = document.querySelectorAll('.factory-btn');
const sortSelect = document.getElementById('sortBrands');
const priceRange = document.getElementById('priceRange');
const currentPrice = document.getElementById('currentPrice');
const applyFilterBtn = document.getElementById('applyFilterBtn');
const resetFilterBtn = document.getElementById('resetFilterBtn');

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    loadPopularBrands();
    loadAllBrands();
    loadStores();
    setupEventListeners();
    setupBottomNav();
}

// Setup Bottom Navigation
function setupBottomNav() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            if (targetId) {
                const targetSection = document.getElementById(targetId) || 
                                    document.querySelector(`.section-${targetId}`);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
}

// Load Popular Brands
function loadPopularBrands() {
    const popularBrands = cigaretteBrands.filter(brand => brand.popular);
    
    popularBrandsContainer.innerHTML = '';
    
    popularBrands.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card-popular';
        brandCard.innerHTML = `
            <div class="brand-icon-popular">
                <i class="${brand.icon}"></i>
            </div>
            <div class="brand-name-popular">${brand.name}</div>
            <div class="brand-stock-popular">${brand.stock}% tersedia</div>
        `;
        
        brandCard.addEventListener('click', () => {
            mainSearchInput.value = brand.name;
            performSearch();
        });
        
        popularBrandsContainer.appendChild(brandCard);
    });
}

// Load All Brands
function loadAllBrands(filter = 'all', sortBy = 'name') {
    let filteredBrands = [...cigaretteBrands];
    
    // Apply factory filter
    if (filter !== 'all') {
        filteredBrands = filteredBrands.filter(brand => brand.factory === filter);
    }
    
    // Apply sorting
    filteredBrands.sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'popular':
                return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
            case 'stock':
                return b.stock - a.stock;
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    allBrandsContainer.innerHTML = '';
    
    filteredBrands.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card-full';
        brandCard.innerHTML = `
            <div class="brand-icon-full">
                <i class="${brand.icon}"></i>
            </div>
            <div class="brand-name-full">${brand.name}</div>
            <div class="brand-factory">${getFactoryName(brand.factory)}</div>
            <button class="brand-action-btn" data-brand="${brand.name}">
                <i class="fas fa-store"></i> Cari Toko
            </button>
        `;
        
        const actionBtn = brandCard.querySelector('.brand-action-btn');
        actionBtn.addEventListener('click', () => {
            mainSearchInput.value = brand.name;
            performSearch();
            scrollToSection('nearby');
        });
        
        allBrandsContainer.appendChild(brandCard);
    });
}

// Get Factory Name
function getFactoryName(factoryCode) {
    const factories = {
        'sampoerna': 'Sampoerna',
        'djarum': 'Djarum',
        'gudang': 'Gudang Garam',
        'bentoel': 'Bentoel',
        'lainnya': 'Lainnya'
    };
    return factories[factoryCode] || factoryCode;
}

// Load Stores
function loadStores(filter = 'all') {
    let filteredStores = [...stores];
    
    // Apply quick filter
    if (filter === 'terdekat') {
        filteredStores.sort((a, b) => a.distance - b.distance);
    }
    
    storesListContainer.innerHTML = '';
    
    filteredStores.forEach(store => {
        const brandsInStore = store.stock.map(id => 
            cigaretteBrands.find(b => b.id === id)
        ).filter(b => b);
        
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card-list';
        storeCard.innerHTML = `
            <div class="store-header">
                <div class="store-name">${store.name}</div>
                <div class="store-status ${store.open ? 'open' : 'closed'}">
                    ${store.open ? 'BUKA' : 'TUTUP'}
                </div>
            </div>
            <div class="store-address">
                <i class="fas fa-map-marker-alt"></i> ${store.address}
            </div>
            <div class="store-details">
                <div class="store-detail-item">
                    <i class="fas fa-walking"></i>
                    <span>${store.distance} km</span>
                </div>
                <div class="store-detail-item">
                    <i class="fas fa-star"></i>
                    <span>${store.rating}</span>
                </div>
                <div class="store-detail-item">
                    <i class="fas fa-clock"></i>
                    <span>${store.hours}</span>
                </div>
            </div>
            <div class="store-stock-info">
                <i class="fas fa-boxes"></i>
                <span>${brandsInStore.length} merek tersedia</span>
            </div>
        `;
        
        storeCard.addEventListener('click', () => showStoreModal(store, brandsInStore));
        storesListContainer.appendChild(storeCard);
    });
}

// Show Store Modal
function showStoreModal(store, brands) {
    const modalTitle = document.getElementById('storeModalTitle');
    const modalBody = document.getElementById('storeModalBody');
    
    modalTitle.textContent = store.name;
    
    const brandList = brands.map(brand => 
        `<div class="brand-item">
            <i class="fas fa-check-circle" style="color: var(--success);"></i>
            <span>${brand.name}</span>
        </div>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="store-info-modal">
            <div class="info-row">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <div class="info-label">Alamat</div>
                    <div class="info-value">${store.address}</div>
                </div>
            </div>
            <div class="info-row">
                <i class="fas fa-phone"></i>
                <div>
                    <div class="info-label">Telepon</div>
                    <div class="info-value">${store.phone}</div>
                </div>
            </div>
            <div class="info-row">
                <i class="fas fa-clock"></i>
                <div>
                    <div class="info-label">Jam Buka</div>
                    <div class="info-value">${store.hours}</div>
                </div>
            </div>
            <div class="info-row">
                <i class="fas fa-star"></i>
                <div>
                    <div class="info-label">Rating</div>
                    <div class="info-value">${store.rating}/5.0</div>
                </div>
            </div>
        </div>
        
        <div class="brands-in-store">
            <h4>Rokok yang Tersedia</h4>
            <div class="brands-list">
                ${brandList}
            </div>
        </div>
        
        <div class="store-note">
            <i class="fas fa-info-circle"></i>
            <span>Stok dapat berubah sewaktu-waktu. Disarankan untuk menghubungi toko sebelum berkunjung.</span>
        </div>
    `;
    
    // Update modal buttons
    const callBtn = document.getElementById('callStoreBtn');
    const directionsBtn = document.getElementById('directionsBtn');
    
    callBtn.onclick = () => callStore(store.phone);
    directionsBtn.onclick = () => getDirections(store.address);
    
    storeModal.style.display = 'flex';
}

// Perform Search
function performSearch() {
    const query = mainSearchInput.value.trim().toLowerCase();
    
    if (!query) {
        loadStores();
        return;
    }
    
    // Filter stores that have the searched brand
    const filteredStores = stores.filter(store => {
        return store.stock.some(brandId => {
            const brand = cigaretteBrands.find(b => b.id === brandId);
            return brand && brand.name.toLowerCase().includes(query);
        });
    });
    
    if (filteredStores.length === 0) {
        storesListContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-search"></i>
                <h4>Tidak ditemukan toko dengan rokok "${query}"</h4>
                <p>Coba cari dengan merek lain atau filter yang berbeda.</p>
            </div>
        `;
        return;
    }
    
    loadStoresWithFilter(filteredStores, query);
}

// Load Stores with Highlight
function loadStoresWithFilter(filteredStores, query) {
    storesListContainer.innerHTML = '';
    
    filteredStores.forEach(store => {
        const brandsInStore = store.stock.map(id => 
            cigaretteBrands.find(b => b.id === id)
        ).filter(b => b);
        
        const matchingBrand = brandsInStore.find(brand => 
            brand.name.toLowerCase().includes(query)
        );
        
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card-list';
        storeCard.innerHTML = `
            <div class="store-header">
                <div class="store-name">${store.name}</div>
                <div class="store-status ${store.open ? 'open' : 'closed'}">
                    ${store.open ? 'BUKA' : 'TUTUP'}
                </div>
            </div>
            <div class="store-address">
                <i class="fas fa-map-marker-alt"></i> ${store.address}
            </div>
            <div class="store-details">
                <div class="store-detail-item">
                    <i class="fas fa-walking"></i>
                    <span>${store.distance} km</span>
                </div>
                <div class="store-detail-item">
                    <i class="fas fa-star"></i>
                    <span>${store.rating}</span>
                </div>
            </div>
            <div class="store-stock-info highlight">
                <i class="fas fa-check-circle" style="color: var(--success);"></i>
                <span>${matchingBrand ? matchingBrand.name : brandsInStore[0].name}</span>
                <span class="stock-badge">Tersedia</span>
            </div>
        `;
        
        storeCard.addEventListener('click', () => showStoreModal(store, brandsInStore));
        storesListContainer.appendChild(storeCard);
    });
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId) || 
                   document.querySelector(`.section-${sectionId}`);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function callStore(phone) {
    alert(`Memanggil: ${phone}\n\nDi aplikasi mobile, ini akan membuka aplikasi telepon.`);
    storeModal.style.display = 'none';
}

function getDirections(address) {
    alert(`Petunjuk arah ke:\n${address}\n\nDi aplikasi produksi, ini akan membuka Google Maps.`);
    storeModal.style.display = 'none';
}

// Setup Event Listeners
function setupEventListeners() {
    // Search functionality
    mainSearchBtn.addEventListener('click', performSearch);
    
    mainSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
    
    clearSearchBtn.addEventListener('click', () => {
        mainSearchInput.value = '';
        loadStores();
    });
    
    // Map toggle
    mapToggleBtn.addEventListener('click', () => {
        mapView.style.display = mapView.style.display === 'none' ? 'block' : 'none';
        mapToggleBtn.innerHTML = mapView.style.display === 'none' ? 
            '<i class="fas fa-map"></i> Peta' : 
            '<i class="fas fa-list"></i> List';
    });
    
    // Modal controls
    closeModalBtn.addEventListener('click', () => {
        storeModal.style.display = 'none';
    });
    
    closeFilterBtn.addEventListener('click', () => {
        filterModal.style.display = 'none';
    });
    
    fabBtn.addEventListener('click', () => {
        filterModal.style.display = 'flex';
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === storeModal) storeModal.style.display = 'none';
        if (e.target === filterModal) filterModal.style.display = 'none';
    });
    
    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            loadStores(filter);
        });
    });
    
    // Factory buttons
    factoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            factoryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const factory = this.getAttribute('data-factory');
            loadAllBrands(factory, sortSelect.value);
        });
    });
    
    // Sort select
    sortSelect.addEventListener('change', function() {
        const activeFactory = document.querySelector('.factory-btn.active');
        const factory = activeFactory ? activeFactory.getAttribute('data-factory') : 'all';
        loadAllBrands(factory, this.value);
    });
    
    // Price range slider
    priceRange.addEventListener('input', function() {
        const price = parseInt(this.value).toLocaleString('id-ID');
        currentPrice.textContent = `Rp ${price}`;
    });
    
    // Filter modal buttons
    applyFilterBtn.addEventListener('click', () => {
        alert('Filter diterapkan!');
        filterModal.style.display = 'none';
    });
    
    resetFilterBtn.addEventListener('click', () => {
        priceRange.value = 30000;
        currentPrice.textContent = 'Rp 30.000';
        document.querySelectorAll('.distance-option').forEach(opt => 
            opt.classList.remove('active')
        );
        document.querySelector('.distance-option').classList.add('active');
        alert('Filter direset!');
    });
    
    // Distance options
    document.querySelectorAll('.distance-option').forEach(opt => {
        opt.addEventListener('click', function() {
            document.querySelectorAll('.distance-option').forEach(o => 
                o.classList.remove('active')
            );
            this.classList.add('active');
        });
    });
}

// Add CSS for modal content
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .store-info-modal {
        margin-bottom: var(--spacing-xl);
    }
    
    .info-row {
        display: flex;
        align-items: flex-start;
        gap: var(--spacing-md);
        margin-bottom: var(--spacing-lg);
    }
    
    .info-row i {
        color: var(--primary);
        font-size: 1.2rem;
        margin-top: 2px;
    }
    
    .info-label {
        font-size: 0.85rem;
        color: var(--gray);
        margin-bottom: 2px;
    }
    
    .info-value {
        font-weight: 500;
        color: var(--secondary);
    }
    
    .brands-in-store {
        margin-bottom: var(--spacing-xl);
    }
    
    .brands-in-store h4 {
        margin-bottom: var(--spacing-md);
        color: var(--secondary);
    }
    
    .brands-list {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .brand-item {
        display: flex;
        align-items: center;
        gap: var(--spacing-sm);
        padding: var(--spacing-sm);
        background: var(--light-gray);
        border-radius: var(--radius-sm);
    }
    
    .store-note {
        background: #fff8e1;
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        display: flex;
        align-items: flex-start;
        gap: var(--spacing-sm);
        font-size: 0.9rem;
        color: #856404;
    }
    
    .store-note i {
        color: #ffc107;
        margin-top: 2px;
    }
    
    .highlight {
        background: var(--primary-light) !important;
        border: 1px solid var(--primary) !important;
    }
    
    .stock-badge {
        background: var(--success);
        color: white;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 500;
        margin-left: auto;
    }
`;

document.head.appendChild(modalStyles);
