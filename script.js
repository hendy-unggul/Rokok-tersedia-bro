// Data Merek Rokok (contoh - 50 merek dari 10 pabrik)
const cigaretteBrands = [
    // Sampoerna
    { id: 1, name: "Sampoerna Mild", factory: "sampoerna", icon: "fas fa-fire", stock: 85 },
    { id: 2, name: "Sampoerna Kretek", factory: "sampoerna", icon: "fas fa-fire", stock: 72 },
    { id: 3, name: "A Mild", factory: "sampoerna", icon: "fas fa-fire", stock: 90 },
    { id: 4, name: "Sampoerna Hijau", factory: "sampoerna", icon: "fas fa-leaf", stock: 65 },
    { id: 5, name: "U Mild", factory: "sampoerna", icon: "fas fa-fire", stock: 78 },
    
    // Djarum
    { id: 6, name: "Djarum Super", factory: "djarum", icon: "fas fa-star", stock: 88 },
    { id: 7, name: "Djarum Coklat", factory: "djarum", icon: "fas fa-star", stock: 76 },
    { id: 8, name: "LA Bold", factory: "djarum", icon: "fas fa-bold", stock: 82 },
    { id: 9, name: "Djarum 76", factory: "djarum", icon: "fas fa-star", stock: 70 },
    { id: 10, name: "Magnum", factory: "djarum", icon: "fas fa-magnet", stock: 68 },
    
    // Gudang Garam
    { id: 11, name: "Gudang Garam Surya", factory: "gudang", icon: "fas fa-sun", stock: 92 },
    { id: 12, name: "Gudang Garam Merah", factory: "gudang", icon: "fas fa-fire", stock: 85 },
    { id: 13, name: "Gudang Garam Internasional", factory: "gudang", icon: "fas fa-globe", stock: 60 },
    { id: 14, name: "GG Signature", factory: "gudang", icon: "fas fa-signature", stock: 55 },
    { id: 15, name: "GG Filter", factory: "gudang", icon: "fas fa-filter", stock: 75 },
    
    // Bentoel
    { id: 16, name: "Bentoel Biru", factory: "bentoeL", icon: "fas fa-tint", stock: 80 },
    { id: 17, name: "Bentoel Hijau", factory: "bentoeL", icon: "fas fa-leaf", stock: 72 },
    { id: 18, name: "Star Mild", factory: "bentoeL", icon: "fas fa-star", stock: 88 },
    { id: 19, name: "Vintage", factory: "bentoeL", icon: "fas fa-wine-bottle", stock: 65 },
    { id: 20, name: "X Mild", factory: "bentoeL", icon: "fas fa-times", stock: 78 },
    
    // Lainnya (contoh 30 merek lainnya)
    { id: 21, name: "Marlboro Red", factory: "others", icon: "fas fa-flag-usa", stock: 95 },
    { id: 22, name: "Marlboro Gold", factory: "others", icon: "fas fa-flag-usa", stock: 90 },
    { id: 23, name: "Lucky Strike", factory: "others", icon: "fas fa-clover", stock: 70 },
    { id: 24, name: "Camel", factory: "others", icon: "fas fa-camera", stock: 65 },
    { id: 25, name: "Winston", factory: "others", icon: "fas fa-w", stock: 75 },
    { id: 26, name: "LA Lights", factory: "others", icon: "fas fa-lightbulb", stock: 80 },
    { id: 27, name: "Class Mild", factory: "others", icon: "fas fa-graduation-cap", stock: 68 },
    { id: 28, name: "Philip Morris", factory: "others", icon: "fas fa-building", stock: 72 },
    { id: 29, name: "Esse", factory: "others", icon: "fas fa-snowflake", stock: 60 },
    { id: 30, name: "Java", factory: "others", icon: "fas fa-coffee", stock: 55 },
    // ... tambahkan hingga 50 merek
];

// Data Toko
const stores = [
    { 
        id: 1, 
        name: "Warung Sembako Bahagia", 
        address: "Jl. Merdeka No. 123, Jakarta Pusat", 
        distance: "0.5 km", 
        stock: [
            { brandId: 1, quantity: 12 },
            { brandId: 6, quantity: 8 },
            { brandId: 11, quantity: 15 },
            { brandId: 21, quantity: 10 }
        ],
        open: true,
        rating: 4.5
    },
    { 
        id: 2, 
        name: "Toko Rokok Makmur", 
        address: "Jl. Sudirman No. 45, Jakarta Selatan", 
        distance: "1.2 km", 
        stock: [
            { brandId: 2, quantity: 20 },
            { brandId: 7, quantity: 5 },
            { brandId: 16, quantity: 18 },
            { brandId: 22, quantity: 7 }
        ],
        open: true,
        rating: 4.2
    },
    { 
        id: 3, 
        name: "Kios Rokok Sejahtera", 
        address: "Jl. Thamrin No. 89, Jakarta Pusat", 
        distance: "2.1 km", 
        stock: [
            { brandId: 3, quantity: 25 },
            { brandId: 8, quantity: 12 },
            { brandId: 17, quantity: 9 },
            { brandId: 23, quantity: 14 }
        ],
        open: true,
        rating: 4.7
    },
    { 
        id: 4, 
        name: "Warung Rokok Abadi", 
        address: "Jl. Gatot Subroto No. 12, Jakarta Selatan", 
        distance: "3.5 km", 
        stock: [
            { brandId: 4, quantity: 8 },
            { brandId: 9, quantity: 20 },
            { brandId: 18, quantity: 11 },
            { brandId: 24, quantity: 6 }
        ],
        open: false,
        rating: 4.0
    },
    { 
        id: 5, 
        name: "Toko Sinar Jaya", 
        address: "Jl. Hayam Wuruk No. 67, Jakarta Barat", 
        distance: "4.2 km", 
        stock: [
            { brandId: 5, quantity: 30 },
            { brandId: 10, quantity: 9 },
            { brandId: 19, quantity: 13 },
            { brandId: 25, quantity: 17 }
        ],
        open: true,
        rating: 4.3
    }
];

// DOM Elements
let popularBrandsContainer = document.getElementById('popularBrands');
let allBrandsContainer = document.getElementById('allBrands');
let storesListContainer = document.getElementById('storesList');
let searchInput = document.getElementById('searchInput');
let searchBtn = document.getElementById('searchBtn');
let locationBtn = document.getElementById('locationBtn');
let locationText = document.getElementById('locationText');
let filterButtons = document.querySelectorAll('.filter-btn');
let mobileMenuBtn = document.querySelector('.mobile-menu-btn');
let mobileMenu = document.querySelector('.mobile-menu');
let storeModal = document.getElementById('storeModal');
let closeModalBtn = document.querySelector('.close-modal');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadPopularBrands();
    loadAllBrands();
    loadStores();
    setupEventListeners();
});

// Load popular brands (top 8)
function loadPopularBrands() {
    // Ambil 8 merek dengan stock tertinggi
    const popular = [...cigaretteBrands]
        .sort((a, b) => b.stock - a.stock)
        .slice(0, 8);
    
    popularBrandsContainer.innerHTML = '';
    
    popular.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-card';
        brandCard.innerHTML = `
            <div class="brand-icon">
                <i class="${brand.icon}"></i>
            </div>
            <div class="brand-name">${brand.name}</div>
            <div class="brand-stock">${brand.stock}% tersedia</div>
        `;
        
        brandCard.addEventListener('click', function() {
            searchInput.value = brand.name;
            performSearch();
        });
        
        popularBrandsContainer.appendChild(brandCard);
    });
}

// Load all brands
function loadAllBrands(filter = 'all') {
    allBrandsContainer.innerHTML = '';
    
    let filteredBrands = cigaretteBrands;
    
    if (filter !== 'all') {
        filteredBrands = cigaretteBrands.filter(brand => brand.factory === filter);
    }
    
    filteredBrands.forEach(brand => {
        const brandCard = document.createElement('div');
        brandCard.className = 'brand-full-card';
        brandCard.setAttribute('data-factory', brand.factory);
        brandCard.innerHTML = `
            <div class="brand-full-icon">
                <i class="${brand.icon}"></i>
            </div>
            <div class="brand-name">${brand.name}</div>
            <div class="brand-stock ${brand.stock < 30 ? 'out' : ''}">
                ${brand.stock < 30 ? 'Stok terbatas' : `${brand.stock}% tersedia`}
            </div>
            <button class="find-store-btn" data-brand="${brand.name}">
                <i class="fas fa-store"></i> Cari Toko
            </button>
        `;
        
        // Add event listener to "Cari Toko" button
        const findBtn = brandCard.querySelector('.find-store-btn');
        findBtn.addEventListener('click', function() {
            searchInput.value = brand.name;
            performSearch();
            // Scroll to stores section
            document.querySelector('#nearby').scrollIntoView({ behavior: 'smooth' });
        });
        
        allBrandsContainer.appendChild(brandCard);
    });
}

// Load stores
function loadStores() {
    storesListContainer.innerHTML = '';
    
    stores.forEach(store => {
        // Count total brands available
        const brandCount = store.stock.length;
        
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card';
        storeCard.innerHTML = `
            <div class="store-icon">
                <i class="fas fa-store"></i>
            </div>
            <div class="store-info">
                <div class="store-name">
                    ${store.name}
                    <span class="store-status ${store.open ? 'open' : 'closed'}">
                        ${store.open ? '● Buka' : '● Tutup'}
                    </span>
                </div>
                <div class="store-address">
                    <i class="fas fa-map-marker-alt"></i> ${store.address}
                </div>
                <div class="store-distance">
                    <i class="fas fa-walking"></i> ${store.distance}
                </div>
                <div class="store-stock">
                    <i class="fas fa-boxes"></i> ${brandCount} merek tersedia
                </div>
                <div class="store-rating">
                    <i class="fas fa-star" style="color: #f1c40f;"></i> ${store.rating}
                </div>
            </div>
            <div class="store-action">
                <i class="fas fa-chevron-right"></i>
            </div>
        `;
        
        // Add click event to view store details
        storeCard.addEventListener('click', function() {
            showStoreDetails(store);
        });
        
        storesListContainer.appendChild(storeCard);
    });
}

// Show store details in modal
function showStoreDetails(store) {
    // Get brand names from stock
    const brandDetails = store.stock.map(item => {
        const brand = cigaretteBrands.find(b => b.id === item.brandId);
        return brand ? `${brand.name} (${item.quantity} pack)` : '';
    }).filter(name => name !== '');
    
    const modalContent = document.getElementById('storeDetailContent');
    modalContent.innerHTML = `
        <h2>${store.name}</h2>
        <div class="store-detail-info">
            <p><i class="fas fa-map-marker-alt"></i> <strong>Alamat:</strong> ${store.address}</p>
            <p><i class="fas fa-walking"></i> <strong>Jarak:</strong> ${store.distance}</p>
            <p><i class="fas fa-clock"></i> <strong>Status:</strong> <span class="${store.open ? 'open' : 'closed'}">${store.open ? 'Buka' : 'Tutup'}</span></p>
            <p><i class="fas fa-star"></i> <strong>Rating:</strong> ${store.rating}/5.0</p>
        </div>
        
        <h3>Stok Rokok di Toko Ini</h3>
        <div class="store-stock-list">
            ${brandDetails.map(brand => `<div class="stock-item"><i class="fas fa-check-circle"></i> ${brand}</div>`).join('')}
        </div>
        
        <div class="store-actions">
            <button class="btn-primary">
                <i class="fas fa-directions"></i> Dapatkan Petunjuk Arah
            </button>
            <button class="btn-secondary">
                <i class="fas fa-phone"></i> Telepon Toko
            </button>
        </div>
        
        <div class="store-note">
            <p><i class="fas fa-info-circle"></i> Stok dapat berubah sewaktu-waktu. Disarankan untuk menghubungi toko terlebih dahulu.</p>
        </div>
    `;
    
    // Show the modal
    storeModal.style.display = 'flex';
}

// Perform search
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        // If search is empty, reset to show all stores
        loadStores();
        return;
    }
    
    // Filter stores that have the searched brand
    const filteredStores = stores.filter(store => {
        // Check if any stock item matches the search query
        return store.stock.some(stockItem => {
            const brand = cigaretteBrands.find(b => b.id === stockItem.brandId);
            return brand && brand.name.toLowerCase().includes(query);
        });
    });
    
    // Update stores list with filtered results
    storesListContainer.innerHTML = '';
    
    if (filteredStores.length === 0) {
        storesListContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                <h3>Tidak ditemukan toko dengan rokok "${query}"</h3>
                <p>Coba cari dengan merek lain atau periksa ejaan</p>
            </div>
        `;
        return;
    }
    
    filteredStores.forEach(store => {
        // Find the matching brand for highlighting
        const matchingStock = store.stock.find(stockItem => {
            const brand = cigaretteBrands.find(b => b.id === stockItem.brandId);
            return brand && brand.name.toLowerCase().includes(query);
        });
        
        const brand = cigaretteBrands.find(b => b.id === matchingStock.brandId);
        const brandCount = store.stock.length;
        
        const storeCard = document.createElement('div');
        storeCard.className = 'store-card';
        storeCard.innerHTML = `
            <div class="store-icon">
                <i class="fas fa-store"></i>
            </div>
            <div class="store-info">
                <div class="store-name">
                    ${store.name}
                    <span class="store-status ${store.open ? 'open' : 'closed'}">
                        ${store.open ? '● Buka' : '● Tutup'}
                    </span>
                </div>
                <div class="store-address">
                    <i class="fas fa-map-marker-alt"></i> ${store.address}
                </div>
                <div class="store-distance">
                    <i class="fas fa-walking"></i> ${store.distance}
                </div>
                <div class="store-stock">
                    <i class="fas fa-boxes"></i> ${brandCount} merek tersedia
                    <div class="highlighted-brand">
                        <i class="fas fa-check"></i> ${brand.name}: ${matchingStock.quantity} pack tersedia
                    </div>
                </div>
            </div>
            <div class="store-action">
                <i class="fas fa-chevron-right"></i>
            </div>
        `;
        
        storeCard.addEventListener('click', function() {
            showStoreDetails(store);
        });
        
        storesListContainer.appendChild(storeCard);
    });
    
    // Scroll to stores section
    document.querySelector('#nearby').scrollIntoView({ behavior: 'smooth' });
}

// Setup event listeners
function setupEventListeners() {
    // Search button click
    searchBtn.addEventListener('click', performSearch);
    
    // Search input enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Location button
    locationBtn.addEventListener('click', function() {
        // In a real app, this would trigger geolocation API
        locationText.textContent = "Jakarta Pusat (Ditetapkan manual)";
        alert("Fitur deteksi lokasi akan aktif di aplikasi produksi. Saat ini lokasi diatur ke Jakarta Pusat.");
    });
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load brands with filter
            const filter = this.getAttribute('data-filter');
            loadAllBrands(filter);
        });
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close modal when X is clicked
    closeModalBtn.addEventListener('click', function() {
        storeModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === storeModal) {
            storeModal.style.display = 'none';
        }
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.style.display = 'none';
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Add CSS for new elements
const style = document.createElement('style');
style.textContent = `
    .store-status {
        font-size: 0.8rem;
        margin-left: 10px;
        font-weight: normal;
    }
    
    .store-status.open {
        color: var(--success);
    }
    
    .store-status.closed {
        color: var(--primary);
    }
    
    .store-rating {
        margin-top: 5px;
        font-size: 0.9rem;
    }
    
    .find-store-btn {
        margin-top: 15px;
        padding: 10px 15px;
        background-color: var(--primary);
        color: white;
        border-radius: 50px;
        font-weight: 500;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
    
    .find-store-btn:hover {
        background-color: var(--primary-dark);
    }
    
    .store-detail-info {
        background-color: var(--light-gray);
        padding: 20px;
        border-radius: var(--radius);
        margin: 20px 0;
    }
    
    .store-detail-info p {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .store-stock-list {
        margin: 20px 0;
    }
    
    .stock-item {
        padding: 10px;
        background-color: var(--light-gray);
        margin-bottom: 10px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .store-actions {
        display: flex;
        gap: 10px;
        margin: 25px 0;
    }
    
    .btn-primary, .btn-secondary {
        flex: 1;
        padding: 15px;
        border-radius: var(--radius);
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }
    
    .btn-primary {
        background-color: var(--primary);
        color: white;
    }
    
    .btn-primary:hover {
        background-color: var(--primary-dark);
    }
    
    .btn-secondary {
        background-color: var(--light);
        color: var(--dark);
        border: 1px solid var(--gray);
    }
    
    .btn-secondary:hover {
        background-color: #e0e0e0;
    }
    
    .store-note {
        background-color: #fff8e1;
        padding: 15px;
        border-radius: var(--radius);
        border-left: 4px solid var(--accent);
        font-size: 0.9rem;
    }
    
    .highlighted-brand {
        background-color: #e8f5e9;
        padding: 8px 12px;
        border-radius: 5px;
        margin-top: 8px;
        font-size: 0.9rem;
        color: var(--success);
        display: flex;
        align-items: center;
        gap: 8px;
    }
    
    .no-results {
        text-align: center;
        padding: 40px 20px;
        background-color: white;
        border-radius: var(--radius);
        box-shadow: var(--shadow);
    }
    
    @media (max-width: 768px) {
        .store-actions {
            flex-direction: column;
        }
    }
`;

document.head.appendChild(style);
