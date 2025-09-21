// Application Data
const appData = {
  artisans: [
    {
      id: 1,
      name: "Meera Devi",
      region: "Bihar - Madhubani",
      craft: "Madhubani Paintings",
      experience: 25,
      story: "Born into a family of traditional Madhubani artists, Meera has been painting since childhood. Her work carries forward the 2500-year-old tradition of Mithila art, depicting Hindu deities and nature scenes with vibrant natural colors.",
      specialties: ["Traditional Madhubani", "Contemporary Adaptations", "Wall Murals"],
      languages: ["Hindi", "Maithili", "English"],
      rating: 4.9,
      products: 23,
      sales: 156,
      revenue: 548000
    },
    {
      id: 2,
      name: "Ravi Kumar Sharma",
      region: "Rajasthan - Jaipur", 
      craft: "Blue Pottery",
      experience: 18,
      story: "Third-generation potter specializing in the unique Jaipur Blue Pottery. Ravi combines traditional techniques with contemporary designs, creating pieces that bridge ancient artistry with modern aesthetics.",
      specialties: ["Traditional Blue Pottery", "Home Decor", "Tableware"],
      languages: ["Hindi", "Rajasthani", "English"],
      rating: 4.8,
      products: 31,
      sales: 203,
      revenue: 672000
    },
    {
      id: 3,
      name: "Kavitha Nair",
      region: "Kerala - Kochi",
      craft: "Coconut Shell Craft",
      experience: 12,
      story: "Kavitha transforms discarded coconut shells into beautiful handicrafts, promoting sustainable artistry. Her eco-friendly approach has won her recognition in international craft fairs.",
      specialties: ["Eco-friendly Crafts", "Home Decor", "Jewelry"],
      languages: ["Malayalam", "Tamil", "English"],
      rating: 4.7,
      products: 28,
      sales: 142,
      revenue: 394000
    },
    {
      id: 4,
      name: "Arjun Singh",
      region: "Uttar Pradesh - Lucknow",
      craft: "Chikankari Embroidery",
      experience: 22,
      story: "Master of the delicate Chikankari embroidery, Arjun creates intricate patterns that tell stories of Mughal heritage. His work adorns fine cotton and silk fabrics with exquisite thread work.",
      specialties: ["Traditional Chikankari", "Bridal Wear", "Contemporary Fashion"],
      languages: ["Hindi", "Urdu", "English"],
      rating: 4.9,
      products: 45,
      sales: 278,
      revenue: 892000
    },
    {
      id: 5,
      name: "Lakshmi Reddy",
      region: "Andhra Pradesh - Srikalahasti",
      craft: "Kalamkari Prints",
      experience: 16,
      story: "Lakshmi preserves the ancient art of Kalamkari, using natural dyes and hand-carved blocks to create stunning textile prints. Her work depicts mythological scenes and nature motifs.",
      specialties: ["Hand-painted Kalamkari", "Block Printing", "Natural Dyes"],
      languages: ["Telugu", "Tamil", "English"],
      rating: 4.8,
      products: 35,
      sales: 198,
      revenue: 567000
    }
  ],
  products: [
    {
      id: 1,
      name: "Divine Radha-Krishna Madhubani Painting",
      artisan: "Meera Devi",
      artisanId: 1,
      price: 3500,
      originalPrice: 4200,
      category: "Traditional Art",
      description: "Hand-painted Madhubani artwork depicting the eternal love story of Radha and Krishna. Created using natural pigments on handmade paper, this piece showcases the intricate line work and vibrant colors characteristic of Mithila art.",
      story: "This painting tells the timeless tale of divine love through traditional Madhubani motifs. Each brushstroke carries the spiritual energy of Bihar's ancient art tradition.",
      dimensions: "16x12 inches",
      materials: "Natural pigments, handmade paper, bamboo pen",
      authenticity: "Blockchain Certified",
      shipping: "7-10 days",
      inStock: true,
      rating: 4.9,
      reviews: 23,
      image: "https://pplx-res.cloudinary.com/image/upload/v1755178788/pplx_project_search_images/3fe8b808b469adb612e6521e97d0c170fe4b5e0f.png"
    },
    {
      id: 2,
      name: "Royal Blue Pottery Vase Set",
      artisan: "Ravi Kumar Sharma",
      artisanId: 2,
      price: 2800,
      originalPrice: 3200,
      category: "Home Decor",
      description: "Exquisite set of three blue pottery vases featuring traditional Jaipur craftsmanship. Each piece is individually crafted and fired at high temperatures for durability.",
      story: "These vases embody the royal heritage of Rajasthan, where blue pottery was once exclusive to the Maharajas' palaces.",
      dimensions: "Small: 6\", Medium: 8\", Large: 10\"",
      materials: "Quartz stone powder, glass, Multani mitti",
      authenticity: "Blockchain Certified",
      shipping: "10-14 days",
      inStock: true,
      rating: 4.8,
      reviews: 17,
      image: "https://pplx-res.cloudinary.com/image/upload/v1755018605/pplx_project_search_images/67f91b7a6059acfeab9c739579e53b69ba238739.png"
    },
    {
      id: 3,
      name: "Sustainable Coconut Shell Jewelry Set",
      artisan: "Kavitha Nair",
      artisanId: 3,
      price: 1200,
      originalPrice: 1500,
      category: "Jewelry",
      description: "Eco-friendly jewelry set crafted from upcycled coconut shells. Includes necklace, earrings, and bracelet with intricate carved patterns.",
      story: "Each piece transforms waste into beauty, representing Kerala's commitment to sustainable living and environmental consciousness.",
      dimensions: "Necklace: 18\", Earrings: 2\", Bracelet: 7\"",
      materials: "Coconut shell, natural dyes, cotton thread",
      authenticity: "Blockchain Certified",
      shipping: "5-7 days",
      inStock: true,
      rating: 4.7,
      reviews: 12,
      image: "https://pplx-res.cloudinary.com/image/upload/v1755386535/pplx_project_search_images/0da3f00ea0826ff40a34d7e0643435d03391ec08.png"
    },
    {
      id: 4,
      name: "Elegant Chikankari Kurta",
      artisan: "Arjun Singh",
      artisanId: 4,
      price: 4500,
      originalPrice: 5200,
      category: "Textiles",
      description: "Luxurious cotton kurta featuring intricate Chikankari embroidery. Hand-embroidered with traditional motifs in fine thread work.",
      story: "This kurta represents the refined elegance of Lucknow's Nawabi culture, where every stitch tells a story of royal craftsmanship.",
      dimensions: "Multiple sizes available",
      materials: "Pure cotton, silk threads, traditional needlework",
      authenticity: "Blockchain Certified",
      shipping: "12-15 days",
      inStock: true,
      rating: 4.9,
      reviews: 31,
      image: "https://pplx-res.cloudinary.com/image/upload/v1756777651/pplx_project_search_images/befda02df75982bcdaaec13d142f6352eb5b7902.png"
    },
    {
      id: 5,
      name: "Mythological Kalamkari Wall Hanging",
      artisan: "Lakshmi Reddy",
      artisanId: 5,
      price: 3200,
      originalPrice: 3800,
      category: "Traditional Art",
      description: "Hand-painted Kalamkari textile featuring scenes from the Ramayana. Created using natural dyes and traditional painting techniques.",
      story: "This artwork brings ancient epics to life through the traditional storytelling medium of Kalamkari, preserving cultural narratives for future generations.",
      dimensions: "24x18 inches",
      materials: "Cotton fabric, natural dyes, bamboo pen",
      authenticity: "Blockchain Certified",
      shipping: "8-12 days",
      inStock: true,
      rating: 4.8,
      reviews: 19,
      image: "https://pplx-res.cloudinary.com/image/upload/v1755018606/pplx_project_search_images/5da61cae133a35eb496b956057c30ffbd1f0c0b6.png"
    }
  ],
  cart: [],
  currentUser: null,
  orders: []
};

// Application State
let currentPage = 'home';
let currentArtisan = null;
let isPlayingAudio = false;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeModals();
  initializeHomepage();
  initializeForms();
  initializeCharts();
  initializeAIMentor();
  initializeMarketplace();
  initializeAdmin();
  updateCartCount();
});

// Navigation System - Fixed
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetPage = this.getAttribute('href').substring(1);
      navigateToPage(targetPage);
    });
  });

  // Button navigation
  const exploreCraftsBtn = document.getElementById('explore-crafts-btn');
  if (exploreCraftsBtn) {
    exploreCraftsBtn.addEventListener('click', () => navigateToPage('buyer-portal'));
  }
  
  const becomeArtisanBtn = document.getElementById('become-artisan-btn');
  if (becomeArtisanBtn) {
    becomeArtisanBtn.addEventListener('click', () => navigateToPage('artisan-portal'));
  }
}

function navigateToPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageId;
    
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${pageId}`) {
        link.classList.add('active');
      }
    });
    
    // Load page-specific content
    if (pageId === 'buyer-portal') {
      loadMarketplaceProducts();
    } else if (pageId === 'admin') {
      loadAdminData();
    }
  }
}

// Homepage Initialization
function initializeHomepage() {
  loadFeaturedArtisans();
  loadHeritageTimeline();
  loadFeaturedProducts();
}

function loadFeaturedArtisans() {
  const carousel = document.getElementById('artisan-carousel');
  if (!carousel) return;
  
  carousel.innerHTML = appData.artisans.map(artisan => `
    <div class="artisan-card" data-artisan-id="${artisan.id}">
      <div class="artisan-card-header">
        <div class="artisan-avatar">${artisan.name.split(' ').map(n => n[0]).join('')}</div>
        <div class="artisan-name">${artisan.name}</div>
        <div class="artisan-craft">${artisan.craft}</div>
        <div class="artisan-region">${artisan.region}</div>
      </div>
      <div class="artisan-card-body">
        <p class="artisan-story">${artisan.story.substring(0, 120)}...</p>
        <div class="artisan-stats">
          <div class="artisan-stat">
            <div class="stat-value">${artisan.rating}</div>
            <div class="stat-label-small">Rating</div>
          </div>
          <div class="artisan-stat">
            <div class="stat-value">${artisan.products}</div>
            <div class="stat-label-small">Products</div>
          </div>
          <div class="artisan-stat">
            <div class="stat-value">${artisan.sales}</div>
            <div class="stat-label-small">Sales</div>
          </div>
        </div>
        <button class="btn btn--primary btn--full-width" onclick="viewArtisanProfile(${artisan.id})">
          View Profile
        </button>
      </div>
    </div>
  `).join('');
}

function loadHeritageTimeline() {
  const timeline = document.getElementById('heritage-timeline');
  if (!timeline) return;
  
  const timelineData = [
    { year: "3000 BCE", title: "Indus Valley Crafts", description: "Early pottery and metalwork traditions emerge in the Indus Valley civilization." },
    { year: "500 BCE", title: "Madhubani Origins", description: "Traditional Mithila painting begins in Bihar, depicting Hindu mythology and nature." },
    { year: "1200 CE", title: "Blue Pottery Arrival", description: "Persian artisans bring blue pottery techniques to Rajasthan during Mughal rule." },
    { year: "1400 CE", title: "Chikankari Flourishes", description: "Lucknow becomes the center of delicate white embroidery under Nawabi patronage." },
    { year: "1600 CE", title: "Kalamkari Evolution", description: "Hand-painted textiles reach artistic peaks in Andhra Pradesh temples." },
    { year: "2020 CE", title: "Digital Renaissance", description: "AI-powered platforms help artisans reach global markets while preserving traditions." }
  ];
  
  timeline.innerHTML = timelineData.map((item, index) => `
    <div class="timeline-item">
      <div class="timeline-content">
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-description">${item.description}</p>
      </div>
      <div class="timeline-year">${item.year}</div>
    </div>
  `).join('');
}

function loadFeaturedProducts() {
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;
  
  const featuredProducts = appData.products.slice(0, 6);
  
  grid.innerHTML = featuredProducts.map(product => `
    <div class="product-card" onclick="openProductModal(${product.id})">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <div class="product-badge">${product.authenticity}</div>
      </div>
      <div class="product-card-body">
        <h4 class="product-title">${product.name}</h4>
        <p class="product-artisan">by ${product.artisan}</p>
        <div class="product-price">
          <span class="current-price">₹${product.price.toLocaleString()}</span>
          <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
        </div>
        <div class="product-rating">
          <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
          <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
        </div>
        <div class="product-actions">
          <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); addToCart(${product.id})">
            Add to Cart
          </button>
          <button class="btn btn--outline btn--sm" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
            <i class="fas fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Modal System - Fixed
function initializeModals() {
  // Close modal handlers - Fixed to work properly
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-close') || e.target.closest('.modal-close')) {
      const modal = e.target.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    }
  });
  
  // Close modal on backdrop click - Fixed
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-backdrop')) {
      const modal = e.target.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    }
  });
  
  // ESC key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.active');
      if (activeModal) {
        closeModal(activeModal.id);
      }
    }
  });
  
  // Cart icon click
  const cartIcon = document.getElementById('cart-icon');
  if (cartIcon) {
    cartIcon.addEventListener('click', () => openModal('cart-modal'));
  }
  
  // Checkout button
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      closeModal('cart-modal');
      openModal('checkout-modal');
    });
  }
  
  // AR and 3D view buttons
  const arViewBtn = document.getElementById('ar-view-btn');
  if (arViewBtn) {
    arViewBtn.addEventListener('click', () => openModal('ar-modal'));
  }
  
  const threeDViewBtn = document.getElementById('3d-view-btn');
  if (threeDViewBtn) {
    threeDViewBtn.addEventListener('click', () => open3DView());
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    if (modalId === 'cart-modal') {
      updateCartModal();
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  }
}

function openProductModal(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  // Populate modal with product data
  const modalTitle = document.getElementById('modal-product-title');
  const modalImage = document.getElementById('modal-product-image');
  const modalPrice = document.getElementById('modal-product-price');
  const modalOriginalPrice = document.getElementById('modal-product-original-price');
  const modalDescription = document.getElementById('modal-product-description');
  const modalArtisan = document.getElementById('modal-product-artisan');
  const modalDimensions = document.getElementById('modal-product-dimensions');
  const modalMaterials = document.getElementById('modal-product-materials');
  const modalAuthenticity = document.getElementById('modal-product-authenticity');
  const modalStory = document.getElementById('modal-product-story');
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalImage) modalImage.src = product.image;
  if (modalPrice) modalPrice.textContent = `₹${product.price.toLocaleString()}`;
  if (modalOriginalPrice) modalOriginalPrice.textContent = `₹${product.originalPrice.toLocaleString()}`;
  if (modalDescription) modalDescription.textContent = product.description;
  if (modalArtisan) modalArtisan.textContent = product.artisan;
  if (modalDimensions) modalDimensions.textContent = product.dimensions;
  if (modalMaterials) modalMaterials.textContent = product.materials;
  if (modalAuthenticity) modalAuthenticity.textContent = product.authenticity;
  if (modalStory) modalStory.textContent = product.story;
  
  // Add to cart button
  if (addToCartBtn) {
    addToCartBtn.onclick = () => {
      addToCart(productId);
      showSuccess('Product added to cart!', 'Continue shopping or proceed to checkout.');
    };
  }
  
  openModal('product-modal');
}

// Forms System
function initializeForms() {
  // Artisan onboarding form
  const onboardingForm = document.getElementById('artisan-onboarding-form');
  if (onboardingForm) {
    onboardingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleArtisanOnboarding(this);
    });
  }
  
  // Checkout form
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleCheckout(this);
    });
  }
  
  // Add product form
  const addProductForm = document.getElementById('add-product-form');
  if (addProductForm) {
    addProductForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleAddProduct(this);
    });
  }
  
  // Initialize dashboard tabs
  initializeDashboardTabs();
}

function handleArtisanOnboarding(form) {
  const formData = new FormData(form);
  const artisanData = {
    name: formData.get('name'),
    craft: formData.get('craft'),
    region: formData.get('region'),
    experience: parseInt(formData.get('experience'))
  };
  
  // Simulate AI profile generation
  generateAIProfile(artisanData);
  
  // Switch to profile tab
  switchTab('profile');
  
  showSuccess('AI Profile Generated!', 'Your artisan profile has been created with AI-powered content generation.');
}

function generateAIProfile(artisanData) {
  // Simulate AI-generated content
  const aiGeneratedStory = `${artisanData.name} is a master artisan specializing in ${artisanData.craft} from ${artisanData.region}. With ${artisanData.experience} years of experience, they have perfected the ancient techniques passed down through generations. Their work represents the cultural heritage of India while embracing contemporary innovations. Each piece created tells a story of tradition, skill, and artistic vision that connects the past with the present.`;
  
  const specialties = getSpecialtiesByCraft(artisanData.craft);
  
  currentArtisan = {
    ...artisanData,
    id: Date.now(),
    story: aiGeneratedStory,
    specialties: specialties,
    rating: 4.5 + Math.random() * 0.4,
    products: 0,
    sales: 0,
    revenue: 0
  };
  
  displayArtisanProfile();
}

function displayArtisanProfile() {
  const profileSection = document.getElementById('artisan-profile');
  if (!profileSection || !currentArtisan) return;
  
  profileSection.innerHTML = `
    <div class="profile-info">
      <div class="profile-avatar-large">${currentArtisan.name.split(' ').map(n => n[0]).join('')}</div>
      <h3>${currentArtisan.name}</h3>
      <p><strong>Craft:</strong> ${currentArtisan.craft}</p>
      <p><strong>Region:</strong> ${currentArtisan.region}</p>
      <p><strong>Experience:</strong> ${currentArtisan.experience} years</p>
      <div class="status status--success">Verified Artisan</div>
    </div>
    <div class="profile-story">
      <h4>Heritage Story</h4>
      <p>${currentArtisan.story}</p>
      
      <div class="craft-twin-section">
        <h4><i class="fas fa-robot"></i> Digital Craft Twin</h4>
        <p>Your AI-powered storyteller is ready to share your craft heritage with the world in multiple languages.</p>
        <div class="audio-player">
          <button class="play-btn" onclick="toggleAudioNarration()">
            <i class="fas ${isPlayingAudio ? 'fa-pause' : 'fa-play'}"></i>
          </button>
          <div class="audio-progress">
            <div class="progress-bar" style="width: ${isPlayingAudio ? '45%' : '0'}"></div>
          </div>
          <span class="audio-time">${isPlayingAudio ? '1:23 / 2:45' : '0:00 / 2:45'}</span>
        </div>
      </div>
      
      <div class="specialties-section">
        <h4>Specializations</h4>
        <div class="specialties-tags">
          ${currentArtisan.specialties.map(specialty => `<span class="status status--info">${specialty}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function getSpecialtiesByCraft(craft) {
  const specialtyMap = {
    'Madhubani Paintings': ['Traditional Madhubani', 'Contemporary Adaptations', 'Wall Murals'],
    'Blue Pottery': ['Traditional Blue Pottery', 'Home Decor', 'Tableware'],
    'Coconut Shell Craft': ['Eco-friendly Crafts', 'Home Decor', 'Jewelry'],
    'Chikankari Embroidery': ['Traditional Chikankari', 'Bridal Wear', 'Contemporary Fashion'],
    'Kalamkari Prints': ['Hand-painted Kalamkari', 'Block Printing', 'Natural Dyes'],
    'Dhokra Metal Craft': ['Traditional Dhokra', 'Sculptures', 'Decorative Items'],
    'Phulkari Embroidery': ['Traditional Phulkari', 'Dupatta', 'Home Textiles'],
    'Warli Art': ['Traditional Warli', 'Wall Art', 'Modern Adaptations'],
    'Pashmina Weaving': ['Traditional Pashmina', 'Shawls', 'Luxury Textiles'],
    'Wood Carving': ['Traditional Carving', 'Sculptures', 'Furniture']
  };
  
  return specialtyMap[craft] || ['Traditional Craft', 'Contemporary Design', 'Custom Work'];
}

// Dashboard Tab System - Fixed
function initializeDashboardTabs() {
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('dash-nav-item')) {
      const tabName = e.target.getAttribute('data-tab');
      const dashboard = e.target.closest('.dashboard, .admin-dashboard');
      switchTab(tabName, dashboard);
    }
  });
  
  // Add product button
  const addProductBtn = document.getElementById('add-product-btn');
  if (addProductBtn) {
    addProductBtn.addEventListener('click', () => openModal('add-product-modal'));
  }
}

function switchTab(tabName, dashboard) {
  const container = dashboard || document.querySelector('.dashboard, .admin-dashboard');
  if (!container) return;
  
  // Update nav active state
  container.querySelectorAll('.dash-nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-tab') === tabName) {
      item.classList.add('active');
    }
  });
  
  // Update tab content
  container.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  const targetTab = container.querySelector(`#${tabName}-tab`);
  if (targetTab) {
    targetTab.classList.add('active');
    
    // Load tab-specific content
    if (tabName === 'products' && currentArtisan) {
      loadArtisanProducts();
    } else if (tabName === 'orders' && currentArtisan) {
      loadArtisanOrders();
    }
  }
}

// Product Management
function handleAddProduct(form) {
  const formData = new FormData(form);
  const category = formData.get('category');
  
  // Simulate AI product generation
  const aiProduct = generateAIProduct(category);
  
  // Show AI generated content
  const aiSection = document.getElementById('ai-generated-product');
  const contentDiv = document.getElementById('generated-product-content');
  
  if (contentDiv) {
    contentDiv.innerHTML = `
      <div class="generated-field">
        <div class="generated-label">Generated Title:</div>
        <div class="generated-value">${aiProduct.name}</div>
      </div>
      <div class="generated-field">
        <div class="generated-label">Generated Description:</div>
        <div class="generated-value">${aiProduct.description}</div>
      </div>
      <div class="generated-field">
        <div class="generated-label">Suggested Price:</div>
        <div class="generated-value">₹${aiProduct.price.toLocaleString()}</div>
      </div>
      <div class="generated-field">
        <div class="generated-label">SEO Tags:</div>
        <div class="generated-value">${aiProduct.tags.join(', ')}</div>
      </div>
      <div class="generated-field">
        <div class="generated-label">Cultural Story:</div>
        <div class="generated-value">${aiProduct.story}</div>
      </div>
    `;
  }
  
  if (aiSection) {
    aiSection.classList.remove('hidden');
  }
  
  // Save generated product button
  const saveBtn = document.getElementById('save-generated-product');
  if (saveBtn) {
    saveBtn.onclick = () => {
      if (currentArtisan) {
        const newProduct = {
          ...aiProduct,
          id: Date.now(),
          artisan: currentArtisan.name,
          artisanId: currentArtisan.id,
          inStock: true,
          rating: 4.5 + Math.random() * 0.4,
          reviews: Math.floor(Math.random() * 20) + 5
        };
        
        appData.products.push(newProduct);
        currentArtisan.products++;
        
        closeModal('add-product-modal');
        showSuccess('Product Added!', 'Your AI-generated product has been added to the marketplace.');
        loadArtisanProducts();
      }
    };
  }
}

function generateAIProduct(category) {
  const productTemplates = {
    'Traditional Art': {
      names: ['Divine Heritage Painting', 'Sacred Motif Artwork', 'Cultural Story Canvas', 'Traditional Folk Art'],
      descriptions: ['Hand-painted artwork depicting ancient cultural motifs and spiritual themes', 'Traditional art piece showcasing regional heritage and artistic legacy', 'Authentic cultural painting with intricate details and vibrant colors'],
      priceRange: [2000, 5000],
      stories: ['This artwork preserves ancient cultural narratives through traditional painting techniques', 'Each brushstroke carries the wisdom of generations of master artists']
    },
    'Home Decor': {
      names: ['Heritage Home Collection', 'Traditional Decor Set', 'Cultural Interior Piece', 'Artisan Home Accent'],
      descriptions: ['Handcrafted home decor piece combining traditional techniques with modern aesthetics', 'Unique decorative item that brings cultural heritage into contemporary living spaces'],
      priceRange: [1500, 4000],
      stories: ['This piece transforms living spaces with the warmth of traditional craftsmanship', 'Designed to bring cultural elegance to modern homes']
    },
    'Jewelry': {
      names: ['Heritage Jewelry Set', 'Traditional Ornament Collection', 'Cultural Accessory Piece', 'Artisan Jewelry Design'],
      descriptions: ['Handcrafted jewelry showcasing traditional techniques and cultural motifs', 'Elegant accessory piece that celebrates regional craftsmanship traditions'],
      priceRange: [800, 3000],
      stories: ['Each piece tells the story of generations of jewelry-making traditions', 'Designed to celebrate cultural heritage through wearable art']
    },
    'Textiles': {
      names: ['Heritage Textile Creation', 'Traditional Fabric Art', 'Cultural Textile Piece', 'Artisan Weave Design'],
      descriptions: ['Handwoven textile showcasing traditional patterns and techniques', 'Premium fabric piece created using ancestral weaving methods'],
      priceRange: [2500, 6000],
      stories: ['This textile carries forward centuries-old weaving traditions', 'Every thread weaves together heritage and contemporary style']
    },
    'Pottery': {
      names: ['Traditional Clay Creation', 'Heritage Pottery Piece', 'Cultural Ceramic Art', 'Artisan Pottery Design'],
      descriptions: ['Hand-thrown pottery piece showcasing traditional ceramic techniques', 'Unique ceramic creation combining ancient methods with modern functionality'],
      priceRange: [1200, 3500],
      stories: ['Shaped by hands that carry forward generations of pottery wisdom', 'Each piece reflects the earth and fire traditions of master potters']
    }
  };
  
  const template = productTemplates[category] || productTemplates['Traditional Art'];
  const price = Math.floor(Math.random() * (template.priceRange[1] - template.priceRange[0]) + template.priceRange[0]);
  
  return {
    name: template.names[Math.floor(Math.random() * template.names.length)],
    description: template.descriptions[Math.floor(Math.random() * template.descriptions.length)],
    price: price,
    originalPrice: Math.floor(price * 1.2),
    category: category,
    story: template.stories[Math.floor(Math.random() * template.stories.length)],
    tags: [`${category.toLowerCase()}`, 'handmade', 'traditional', 'authentic', 'heritage'],
    dimensions: '12x8 inches',
    materials: 'Traditional materials with natural finishes',
    authenticity: 'Blockchain Certified',
    shipping: '7-14 days',
    image: appData.products[Math.floor(Math.random() * appData.products.length)].image
  };
}

function loadArtisanProducts() {
  const productsGrid = document.getElementById('artisan-products');
  if (!productsGrid || !currentArtisan) return;
  
  const artisanProducts = appData.products.filter(p => p.artisanId === currentArtisan.id);
  
  productsGrid.innerHTML = artisanProducts.length > 0 ? artisanProducts.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <div class="product-badge">${product.inStock ? 'In Stock' : 'Out of Stock'}</div>
      </div>
      <div class="product-card-body">
        <h4 class="product-title">${product.name}</h4>
        <div class="product-price">
          <span class="current-price">₹${product.price.toLocaleString()}</span>
        </div>
        <div class="product-stats">
          <span class="stat-item"><i class="fas fa-star"></i> ${product.rating}</span>
          <span class="stat-item"><i class="fas fa-eye"></i> ${product.reviews * 5} views</span>
          <span class="stat-item"><i class="fas fa-shopping-cart"></i> ${Math.floor(product.reviews * 0.8)} orders</span>
        </div>
        <div class="product-actions">
          <button class="btn btn--primary btn--sm">Edit</button>
          <button class="btn btn--outline btn--sm">Analytics</button>
        </div>
      </div>
    </div>
  `).join('') : `
    <div class="empty-state">
      <i class="fas fa-box-open"></i>
      <h4>No Products Yet</h4>
      <p>Add your first product to start selling on ArtisanVerse</p>
      <button class="btn btn--primary" onclick="openModal('add-product-modal')">Add Product</button>
    </div>
  `;
}

function loadArtisanOrders() {
  const ordersList = document.getElementById('artisan-orders');
  if (!ordersList) return;
  
  const orders = generateSampleOrders();
  
  ordersList.innerHTML = `
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(order => `
            <tr>
              <td>#${order.id}</td>
              <td>${order.product}</td>
              <td>${order.customer}</td>
              <td>₹${order.amount.toLocaleString()}</td>
              <td><span class="status status--${order.statusClass}">${order.status}</span></td>
              <td>${order.date}</td>
              <td>
                <button class="btn btn--sm btn--outline">View</button>
                <button class="btn btn--sm btn--primary">Update</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function generateSampleOrders() {
  return [
    { id: 'ORD001', product: 'Traditional Painting', customer: 'Rajesh Kumar', amount: 3500, status: 'Completed', statusClass: 'success', date: '2024-12-15' },
    { id: 'ORD002', product: 'Heritage Pottery Set', customer: 'Priya Sharma', amount: 2800, status: 'Shipped', statusClass: 'info', date: '2024-12-14' },
    { id: 'ORD003', product: 'Handmade Jewelry', customer: 'Amit Patel', amount: 1200, status: 'Processing', statusClass: 'warning', date: '2024-12-13' },
    { id: 'ORD004', product: 'Cultural Textile', customer: 'Deepika Singh', amount: 4500, status: 'Pending', statusClass: 'info', date: '2024-12-12' }
  ];
}

// Charts System
function initializeCharts() {
  // Initialize charts after a delay to ensure DOM is ready
  setTimeout(() => {
    initializeSalesChart();
    initializeProductsChart();
    initializePlatformGrowthChart();
    initializeRevenueChart();
  }, 1000);
}

function initializeSalesChart() {
  const ctx = document.getElementById('sales-chart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Sales (₹)',
        data: [45000, 52000, 48000, 61000, 58000, 67000],
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function initializeProductsChart() {
  const ctx = document.getElementById('products-chart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Traditional Art', 'Home Decor', 'Jewelry', 'Textiles', 'Pottery'],
      datasets: [{
        data: [35, 25, 20, 15, 5],
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

function initializePlatformGrowthChart() {
  const ctx = document.getElementById('platform-growth-chart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
      datasets: [
        {
          label: 'Artisans',
          data: [120, 180, 245, 456],
          backgroundColor: '#1FB8CD'
        },
        {
          label: 'Products',
          data: [850, 1200, 1650, 8923],
          backgroundColor: '#FFC185'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function initializeRevenueChart() {
  const ctx = document.getElementById('revenue-chart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Revenue (₹)',
        data: [125000, 145000, 165000, 198000, 225000, 258000, 289000, 312000, 345000, 378000, 412000, 456000],
        borderColor: '#B4413C',
        backgroundColor: 'rgba(180, 65, 60, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// AI Mentor System
function initializeAIMentor() {
  // Mentor chat in artisan portal
  const mentorInput = document.getElementById('mentor-input');
  const sendMentorBtn = document.getElementById('send-mentor-message');
  
  if (mentorInput && sendMentorBtn) {
    sendMentorBtn.addEventListener('click', () => sendMentorMessage());
    mentorInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMentorMessage();
      }
    });
  }
  
  // AI Mentor page chat
  const aiMentorInput = document.getElementById('ai-mentor-input');
  const sendAIMentorBtn = document.getElementById('send-ai-mentor-message');
  
  if (aiMentorInput && sendAIMentorBtn) {
    sendAIMentorBtn.addEventListener('click', () => sendAIMentorMessage());
    aiMentorInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendAIMentorMessage();
      }
    });
  }
}

function sendMentorMessage() {
  const input = document.getElementById('mentor-input');
  const messages = document.getElementById('mentor-messages');
  
  if (!input || !input.value.trim()) return;
  
  const userMessage = input.value.trim();
  
  // Add user message
  if (messages) {
    messages.innerHTML += `
      <div class="chat-message user-message">
        <div class="message-avatar">
          <i class="fas fa-user"></i>
        </div>
        <div class="message-content">
          <p>${userMessage}</p>
        </div>
      </div>
    `;
    
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
    
    // Simulate AI response
    setTimeout(() => {
      const response = generateMentorResponse(userMessage);
      messages.innerHTML += `
        <div class="chat-message bot-message">
          <div class="message-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div class="message-content">
            <p>${response}</p>
          </div>
        </div>
      `;
      messages.scrollTop = messages.scrollHeight;
    }, 1500);
  }
}

function sendAIMentorMessage() {
  const input = document.getElementById('ai-mentor-input');
  const messages = document.getElementById('ai-mentor-messages');
  
  if (!input || !input.value.trim()) return;
  
  const userMessage = input.value.trim();
  
  // Add user message
  if (messages) {
    messages.innerHTML += `
      <div class="chat-message user-message">
        <div class="message-avatar">
          <i class="fas fa-user"></i>
        </div>
        <div class="message-content">
          <p>${userMessage}</p>
        </div>
      </div>
    `;
    
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
    
    // Simulate AI response
    setTimeout(() => {
      const response = generateMentorResponse(userMessage);
      messages.innerHTML += `
        <div class="chat-message bot-message">
          <div class="message-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div class="message-content">
            <p>${response}</p>
          </div>
        </div>
      `;
      messages.scrollTop = messages.scrollHeight;
    }, 1500);
  }
}

function generateMentorResponse(userMessage) {
  const responses = {
    pricing: [
      "For premium authentic pieces, I recommend pricing 15-25% higher than market average. Your craftsmanship justifies the premium.",
      "Consider your material costs, time investment, and regional market rates. Add 20-30% margin for sustainable business growth.",
      "Research similar products globally. International buyers often pay 2-3x more for authentic handmade items."
    ],
    marketing: [
      "Focus on storytelling! Share the cultural significance and your personal journey with each piece.",
      "Use high-quality photos with natural lighting. Show the product in use and highlight intricate details.",
      "Leverage social media to build your brand. Post behind-the-scenes content of your crafting process."
    ],
    negotiation: [
      "Always start with your story. When customers understand the heritage and effort, they value it more.",
      "Be confident about your pricing but show flexibility for bulk orders or repeat customers.",
      "Offer bundle deals rather than individual discounts. This maintains your product value."
    ],
    business: [
      "Diversify your product range while maintaining quality. Consider seasonal variations of your core items.",
      "Build relationships with international distributors. Export markets offer better margins.",
      "Invest in digital presence. A professional website increases credibility and sales by 40%."
    ]
  };
  
  const message = userMessage.toLowerCase();
  let category = 'business';
  
  if (message.includes('price') || message.includes('cost')) category = 'pricing';
  else if (message.includes('market') || message.includes('sell')) category = 'marketing';
  else if (message.includes('customer') || message.includes('negotiate')) category = 'negotiation';
  
  const categoryResponses = responses[category];
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
}

// Marketplace System - Fixed
function initializeMarketplace() {
  // Search functionality - Fixed
  const searchInput = document.getElementById('product-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      filterProducts();
    });
  }
  
  // Filter functionality - Fixed
  const filters = ['craft-filter', 'region-filter', 'price-filter'];
  filters.forEach(filterId => {
    const filter = document.getElementById(filterId);
    if (filter) {
      filter.addEventListener('change', filterProducts);
    }
  });
  
  loadMarketplaceProducts();
}

function loadMarketplaceProducts() {
  const container = document.getElementById('marketplace-products');
  if (!container) return;
  
  container.innerHTML = `
    <div class="product-grid">
      ${appData.products.map(product => `
        <div class="product-card" onclick="openProductModal(${product.id})">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-badge">${product.authenticity}</div>
          </div>
          <div class="product-card-body">
            <h4 class="product-title">${product.name}</h4>
            <p class="product-artisan">by ${product.artisan}</p>
            <div class="product-price">
              <span class="current-price">₹${product.price.toLocaleString()}</span>
              <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
            </div>
            <div class="product-rating">
              <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
              <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="product-actions">
              <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); addToCart(${product.id})">
                Add to Cart
              </button>
              <button class="btn btn--outline btn--sm" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                <i class="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function filterProducts() {
  const searchTerm = document.getElementById('product-search')?.value.toLowerCase() || '';
  const craftFilter = document.getElementById('craft-filter')?.value || '';
  const regionFilter = document.getElementById('region-filter')?.value || '';
  const priceFilter = document.getElementById('price-filter')?.value || '';
  
  let filteredProducts = appData.products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                         product.artisan.toLowerCase().includes(searchTerm) ||
                         product.description.toLowerCase().includes(searchTerm);
    
    const matchesCraft = !craftFilter || product.artisan === appData.artisans.find(a => a.craft === craftFilter)?.name;
    
    const matchesRegion = !regionFilter || product.artisan === appData.artisans.find(a => a.region.includes(regionFilter))?.name;
    
    let matchesPrice = true;
    if (priceFilter === '0-1000') matchesPrice = product.price <= 1000;
    else if (priceFilter === '1000-3000') matchesPrice = product.price > 1000 && product.price <= 3000;
    else if (priceFilter === '3000+') matchesPrice = product.price > 3000;
    
    return matchesSearch && matchesCraft && matchesRegion && matchesPrice;
  });
  
  const container = document.getElementById('marketplace-products');
  if (container) {
    container.innerHTML = `
      <div class="product-grid">
        ${filteredProducts.length > 0 ? filteredProducts.map(product => `
          <div class="product-card" onclick="openProductModal(${product.id})">
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}" loading="lazy">
              <div class="product-badge">${product.authenticity}</div>
            </div>
            <div class="product-card-body">
              <h4 class="product-title">${product.name}</h4>
              <p class="product-artisan">by ${product.artisan}</p>
              <div class="product-price">
                <span class="current-price">₹${product.price.toLocaleString()}</span>
                <span class="original-price">₹${product.originalPrice.toLocaleString()}</span>
              </div>
              <div class="product-rating">
                <div class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</div>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
              </div>
              <div class="product-actions">
                <button class="btn btn--primary btn--sm" onclick="event.stopPropagation(); addToCart(${product.id})">
                  Add to Cart
                </button>
                <button class="btn btn--outline btn--sm" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                  <i class="fas fa-heart"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('') : `
          <div class="empty-state">
            <i class="fas fa-search"></i>
            <h4>No Products Found</h4>
            <p>Try adjusting your search criteria or browse all products</p>
            <button class="btn btn--primary" onclick="clearFilters()">Clear Filters</button>
          </div>
        `}
      </div>
    `;
  }
}

function clearFilters() {
  const searchInput = document.getElementById('product-search');
  const craftFilter = document.getElementById('craft-filter');
  const regionFilter = document.getElementById('region-filter');
  const priceFilter = document.getElementById('price-filter');
  
  if (searchInput) searchInput.value = '';
  if (craftFilter) craftFilter.value = '';
  if (regionFilter) regionFilter.value = '';
  if (priceFilter) priceFilter.value = '';
  
  loadMarketplaceProducts();
}

// Shopping Cart System
function addToCart(productId) {
  const product = appData.products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = appData.cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    appData.cart.push({
      ...product,
      quantity: 1,
      addedAt: new Date()
    });
  }
  
  updateCartCount();
  
  // Show success notification
  showSuccess('Added to Cart!', `${product.name} has been added to your cart.`);
}

function removeFromCart(productId) {
  appData.cart = appData.cart.filter(item => item.id !== productId);
  updateCartCount();
  updateCartModal();
}

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    const totalItems = appData.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

function updateCartModal() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  
  if (!cartItems || !cartTotal) return;
  
  if (appData.cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-shopping-cart"></i>
        <h4>Your Cart is Empty</h4>
        <p>Add some amazing handcrafted products to get started!</p>
      </div>
    `;
    cartTotal.textContent = '0';
    return;
  }
  
  cartItems.innerHTML = appData.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-artisan">by ${item.artisan}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString()} × ${item.quantity}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `).join('');
  
  const total = appData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  cartTotal.textContent = total.toLocaleString();
  
  // Update checkout totals
  const checkoutSubtotal = document.getElementById('checkout-subtotal');
  const checkoutTotal = document.getElementById('checkout-total');
  if (checkoutSubtotal) checkoutSubtotal.textContent = total.toLocaleString();
  if (checkoutTotal) checkoutTotal.textContent = (total + 99).toLocaleString(); // Adding shipping
}

function handleCheckout(form) {
  const formData = new FormData(form);
  const orderData = {
    id: 'ORD' + Date.now(),
    items: [...appData.cart],
    customer: {
      name: formData.get('fullName'),
      address: formData.get('address'),
      phone: formData.get('phone')
    },
    paymentMethod: formData.get('paymentMethod'),
    total: appData.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + 99,
    status: 'Processing',
    orderDate: new Date(),
    authenticityCertificates: appData.cart.map(item => ({
      productId: item.id,
      certificateId: 'CERT' + Date.now() + item.id,
      blockchainHash: generateBlockchainHash()
    }))
  };
  
  appData.orders.push(orderData);
  appData.cart = [];
  
  closeModal('checkout-modal');
  updateCartCount();
  
  showSuccess('Order Placed Successfully!', 
    `Your order ${orderData.id} has been placed. Blockchain authenticity certificates have been generated for all items.`);
}

function generateBlockchainHash() {
  return 'BLK' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Admin Dashboard
function initializeAdmin() {
  // Will be called when admin page is accessed
}

function loadAdminData() {
  loadAdminUsers();
  loadAdminProducts();
  loadAdminOrders();
}

function loadAdminUsers() {
  const table = document.getElementById('admin-users-table');
  if (!table) return;
  
  const users = [
    ...appData.artisans.map(a => ({...a, type: 'Artisan', status: 'Active'})),
    { id: 101, name: 'Rajesh Kumar', type: 'Buyer', region: 'Delhi', status: 'Active' },
    { id: 102, name: 'Priya Sharma', type: 'Buyer', region: 'Mumbai', status: 'Active' },
    { id: 103, name: 'Amit Patel', type: 'Buyer', region: 'Bangalore', status: 'Active' }
  ];
  
  table.innerHTML = `
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Region</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${users.map(user => `
            <tr>
              <td>#${user.id}</td>
              <td>${user.name}</td>
              <td><span class="status status--${user.type === 'Artisan' ? 'success' : 'info'}">${user.type}</span></td>
              <td>${user.region}</td>
              <td><span class="status status--success">${user.status}</span></td>
              <td>
                <button class="btn btn--sm btn--outline">Edit</button>
                <button class="btn btn--sm btn--secondary">Suspend</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function loadAdminProducts() {
  const table = document.getElementById('admin-products-table');
  if (!table) return;
  
  table.innerHTML = `
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Artisan</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${appData.products.map(product => `
            <tr>
              <td>#${product.id}</td>
              <td>${product.name}</td>
              <td>${product.artisan}</td>
              <td>${product.category}</td>
              <td>₹${product.price.toLocaleString()}</td>
              <td><span class="status status--success">Approved</span></td>
              <td>
                <button class="btn btn--sm btn--outline">Edit</button>
                <button class="btn btn--sm btn--secondary">Feature</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function loadAdminOrders() {
  const table = document.getElementById('admin-orders-table');
  if (!table) return;
  
  const orders = generateSampleOrders();
  
  table.innerHTML = `
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Artisan</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(order => `
            <tr>
              <td>#${order.id}</td>
              <td>${order.customer}</td>
              <td>${order.artisan || 'Various'}</td>
              <td>₹${order.amount.toLocaleString()}</td>
              <td><span class="status status--${order.statusClass}">${order.status}</span></td>
              <td>${order.date}</td>
              <td>
                <button class="btn btn--sm btn--outline">View</button>
                <button class="btn btn--sm btn--primary">Update</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// Utility Functions
function toggleWishlist(productId) {
  // Simulate wishlist toggle
  showSuccess('Added to Wishlist!', 'Product saved to your wishlist.');
}

function viewArtisanProfile(artisanId) {
  const artisan = appData.artisans.find(a => a.id === artisanId);
  if (artisan) {
    currentArtisan = artisan;
    navigateToPage('artisan-portal');
    displayArtisanProfile();
  }
}

function toggleAudioNarration() {
  isPlayingAudio = !isPlayingAudio;
  displayArtisanProfile(); // Refresh to update play button
  
  if (isPlayingAudio) {
    // Simulate audio playback
    setTimeout(() => {
      isPlayingAudio = false;
      displayArtisanProfile();
    }, 10000); // Stop after 10 seconds
  }
}

function open3DView() {
  showSuccess('3D Viewer Activated', 'Opening immersive 3D product viewer. Use mouse to rotate and zoom to explore the product in detail. This feature uses WebGL for realistic rendering.');
}

function showSuccess(title, message) {
  const successTitle = document.getElementById('success-title');
  const successMessage = document.getElementById('success-message');
  const successModal = document.getElementById('success-modal');
  const closeSuccessBtn = document.getElementById('close-success-modal');
  
  if (successTitle) successTitle.textContent = title;
  if (successMessage) successMessage.textContent = message;
  
  if (successModal) {
    successModal.classList.remove('hidden');
    successModal.classList.add('active');
  }
  
  if (closeSuccessBtn) {
    closeSuccessBtn.onclick = () => {
      if (successModal) {
        successModal.classList.remove('active');
        setTimeout(() => {
          successModal.classList.add('hidden');
        }, 300);
      }
    };
  }
  
  // Auto close after 3 seconds
  setTimeout(() => {
    if (successModal && successModal.classList.contains('active')) {
      if (closeSuccessBtn) {
        closeSuccessBtn.click();
      }
    }
  }, 3000);
}

// Advanced Analytics Functions
function initializeAdvancedAnalytics() {
  // Initialize analytics period selector
  const analyticsPeriod = document.getElementById('analytics-period');
  if (analyticsPeriod) {
    analyticsPeriod.addEventListener('change', function() {
      refreshAnalyticsData(this.value);
    });
  }

  // Initialize export button
  const exportBtn = document.getElementById('export-analytics');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportAnalyticsReport);
  }

  // Initialize refresh button
  const refreshBtn = document.getElementById('refresh-analytics');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => refreshAnalyticsData('30d'));
  }

  // Initialize chart controls
  const chartControls = document.querySelectorAll('.chart-control-btn');
  chartControls.forEach(btn => {
    btn.addEventListener('click', function() {
      chartControls.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      updateRevenueChart(this.dataset.chart);
    });
  });

  // Load initial analytics data
  loadAdvancedAnalytics();
}

function loadAdvancedAnalytics() {
  // Initialize advanced charts
  initializeAdvancedCharts();
  
  // Load performance tables
  loadTopArtisansTable();
  loadTopProductsTable();
}

function initializeAdvancedCharts() {
  // Advanced Revenue Chart
  const revenueCtx = document.getElementById('advanced-revenue-chart');
  if (revenueCtx) {
    const revenueChart = new Chart(revenueCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Revenue',
            data: [45000, 52000, 48000, 61000],
            borderColor: 'rgba(33, 128, 141, 1)',
            backgroundColor: 'rgba(33, 128, 141, 0.1)',
            tension: 0.4,
            fill: true
          },
          {
            label: 'Target',
            data: [50000, 50000, 50000, 50000],
            borderColor: 'rgba(168, 75, 47, 1)',
            backgroundColor: 'rgba(168, 75, 47, 0.1)',
            borderDash: [5, 5]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Revenue vs Target Performance'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '₹' + value.toLocaleString();
              }
            }
          }
        }
      }
    });
  }

  // User Acquisition Chart
  const acquisitionCtx = document.getElementById('user-acquisition-chart');
  if (acquisitionCtx) {
    new Chart(acquisitionCtx, {
      type: 'doughnut',
      data: {
        labels: ['Organic Search', 'Social Media', 'Direct', 'Referrals', 'Paid Ads'],
        datasets: [{
          data: [35, 25, 20, 12, 8],
          backgroundColor: [
            'rgba(33, 128, 141, 0.8)',
            'rgba(168, 75, 47, 0.8)',
            'rgba(98, 108, 113, 0.8)',
            'rgba(50, 184, 198, 0.8)',
            'rgba(192, 21, 47, 0.8)'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }

  // Category Performance Chart
  const categoryCtx = document.getElementById('category-performance-chart');
  if (categoryCtx) {
    new Chart(categoryCtx, {
      type: 'bar',
      data: {
        labels: ['Textiles', 'Pottery', 'Jewelry', 'Art', 'Home Decor'],
        datasets: [{
          label: 'Sales',
          data: [120, 89, 67, 95, 78],
          backgroundColor: 'rgba(33, 128, 141, 0.8)'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Geographic Chart
  const geoCtx = document.getElementById('geographic-chart');
  if (geoCtx) {
    new Chart(geoCtx, {
      type: 'pie',
      data: {
        labels: ['North India', 'South India', 'West India', 'East India', 'International'],
        datasets: [{
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            'rgba(33, 128, 141, 0.8)',
            'rgba(168, 75, 47, 0.8)',
            'rgba(98, 108, 113, 0.8)',
            'rgba(50, 184, 198, 0.8)',
            'rgba(192, 21, 47, 0.8)'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}

function loadTopArtisansTable() {
  const tableBody = document.querySelector('#top-artisans-table tbody');
  if (!tableBody) return;

  const topArtisans = [
    {
      name: 'Meera Devi',
      craft: 'Madhubani',
      revenue: 548000,
      orders: 156,
      rating: 4.9,
      growth: '+18.5%'
    },
    {
      name: 'Arjun Singh',
      craft: 'Chikankari',
      revenue: 892000,
      orders: 278,
      rating: 4.9,
      growth: '+22.3%'
    },
    {
      name: 'Ravi Kumar',
      craft: 'Blue Pottery',
      revenue: 672000,
      orders: 203,
      rating: 4.8,
      growth: '+15.7%'
    },
    {
      name: 'Lakshmi Reddy',
      craft: 'Kalamkari',
      revenue: 567000,
      orders: 198,
      rating: 4.8,
      growth: '+12.4%'
    },
    {
      name: 'Kavitha Nair',
      craft: 'Coconut Craft',
      revenue: 394000,
      orders: 142,
      rating: 4.7,
      growth: '+9.8%'
    }
  ];

  tableBody.innerHTML = topArtisans.map(artisan => `
    <tr>
      <td>${artisan.name}</td>
      <td>${artisan.craft}</td>
      <td>₹${artisan.revenue.toLocaleString()}</td>
      <td>${artisan.orders}</td>
      <td>${artisan.rating}/5</td>
      <td><span class="metric-trend positive">${artisan.growth}</span></td>
    </tr>
  `).join('');
}

function loadTopProductsTable() {
  const tableBody = document.querySelector('#top-products-table tbody');
  if (!tableBody) return;

  const topProducts = [
    {
      name: 'Chikankari Kurta',
      category: 'Textiles',
      sales: 278,
      revenue: 4500,
      rating: 4.9,
      stock: 45
    },
    {
      name: 'Madhubani Painting',
      category: 'Art',
      sales: 156,
      revenue: 3500,
      rating: 4.9,
      stock: 23
    },
    {
      name: 'Blue Pottery Vase Set',
      category: 'Home Decor',
      sales: 203,
      revenue: 2800,
      rating: 4.8,
      stock: 31
    },
    {
      name: 'Kalamkari Wall Hanging',
      category: 'Art',
      sales: 198,
      revenue: 3200,
      rating: 4.8,
      stock: 35
    },
    {
      name: 'Coconut Shell Jewelry',
      category: 'Jewelry',
      sales: 142,
      revenue: 1200,
      rating: 4.7,
      stock: 28
    }
  ];

  tableBody.innerHTML = topProducts.map(product => `
    <tr>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.sales}</td>
      <td>₹${product.revenue.toLocaleString()}</td>
      <td>${product.rating}/5</td>
      <td>${product.stock}</td>
    </tr>
  `).join('');
}

function refreshAnalyticsData(period) {
  showSuccess('Analytics Updated', `Analytics data refreshed for ${period === '7d' ? 'last 7 days' : period === '30d' ? 'last 30 days' : period === '90d' ? 'last 90 days' : 'last year'}.`);
  
  // Simulate data refresh by updating metric values
  const metricValues = document.querySelectorAll('.metric-value');
  metricValues.forEach(value => {
    const currentValue = value.textContent;
    value.style.opacity = '0.5';
    setTimeout(() => {
      value.style.opacity = '1';
    }, 500);
  });
}

function exportAnalyticsReport() {
  showSuccess('Report Exported', 'Analytics report has been exported as CSV file. Check your downloads folder.');
}

function updateRevenueChart(chartType) {
  showSuccess('Chart Updated', `Revenue chart updated to show ${chartType.replace('revenue-', '')} view.`);
}

// Settings Functions
function initializeSettings() {
  // Initialize settings navigation
  const settingsNavItems = document.querySelectorAll('.settings-nav-item');
  settingsNavItems.forEach(item => {
    item.addEventListener('click', function() {
      const settingType = this.dataset.setting;
      switchSettingsTab(settingType);
    });
  });

  // Initialize toggle switches
  const toggles = document.querySelectorAll('.toggle-switch input');
  toggles.forEach(toggle => {
    toggle.addEventListener('change', function() {
      const settingName = this.name || this.id;
      showSuccess('Setting Updated', `${settingName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} has been ${this.checked ? 'enabled' : 'disabled'}.`);
    });
  });

  // Initialize save settings button
  const saveBtn = document.getElementById('save-settings');
  if (saveBtn) {
    saveBtn.addEventListener('click', saveAllSettings);
  }

  // Initialize reset settings button
  const resetBtn = document.getElementById('reset-settings');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllSettings);
  }

  // Initialize form inputs
  const settingsForms = document.querySelectorAll('[id$="-settings-form"]');
  settingsForms.forEach(form => {
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
      input.addEventListener('change', function() {
        const settingName = this.name;
        showSuccess('Setting Changed', `${settingName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} updated to: ${this.value}`);
      });
    });
  });
}

function switchSettingsTab(settingType) {
  // Hide all settings content
  const settingsContents = document.querySelectorAll('.settings-content');
  settingsContents.forEach(content => {
    content.classList.remove('active');
  });

  // Remove active from all nav items
  const navItems = document.querySelectorAll('.settings-nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
  });

  // Show selected content
  const targetContent = document.getElementById(`${settingType}-settings`);
  if (targetContent) {
    targetContent.classList.add('active');
  }

  // Mark nav item as active
  const activeNavItem = document.querySelector(`[data-setting="${settingType}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }
}

function saveAllSettings() {
  // Simulate saving settings
  const settingsData = {
    general: gatherFormData('general-settings-form'),
    platform: gatherFormData('platform-settings-form'),
    payments: gatherFormData('payment-settings-form'),
    security: gatherFormData('security-settings-form'),
    api: gatherFormData('api-settings-form')
  };

  showSuccess('Settings Saved', 'All settings have been saved successfully. Changes will take effect immediately.');
}

function resetAllSettings() {
  if (confirm('Are you sure you want to reset all settings to default values? This action cannot be undone.')) {
    // Reset all form values to defaults
    const forms = document.querySelectorAll('[id$="-settings-form"]');
    forms.forEach(form => {
      form.reset();
    });

    // Reset toggle switches
    const toggles = document.querySelectorAll('.toggle-switch input');
    toggles.forEach(toggle => {
      if (toggle.id === 'maintenance-mode' || toggle.id === 'require-2fa' || toggle.id === 'ip-whitelist') {
        toggle.checked = false;
      } else {
        toggle.checked = true;
      }
    });

    showSuccess('Settings Reset', 'All settings have been reset to default values.');
  }
}

function gatherFormData(formId) {
  const form = document.getElementById(formId);
  if (!form) return {};

  const formData = new FormData(form);
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  return data;
}

function regenerateApiKey(type) {
  if (confirm(`Are you sure you want to regenerate the ${type} API key? This will invalidate the current key.`)) {
    const keyElement = document.querySelector(`.api-key-item:${type === 'public' ? 'first-child' : 'last-child'} .api-key-value`);
    if (keyElement) {
      const newKey = type === 'public' 
        ? `ak_live_${generateRandomKey(24)}`
        : `sk_live_${generateRandomKey(32, true)}`;
      
      keyElement.textContent = newKey;
      showSuccess('API Key Regenerated', `New ${type} API key has been generated and is now active.`);
    }
  }
}

function generateRandomKey(length, secret = false) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return secret ? '*'.repeat(32) : result;
}

// Admin System Functions
function initializeAdmin() {
  // Initialize dashboard tab navigation
  const dashNavItems = document.querySelectorAll('.admin-dashboard .dash-nav-item');
  dashNavItems.forEach(item => {
    item.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      switchAdminTab(tabId);
    });
  });

  // Initialize advanced analytics when admin loads
  initializeAdvancedAnalytics();
  
  // Initialize settings when admin loads
  initializeSettings();
}

function loadAdminData() {
  // Load admin overview data
  loadAdminOverview();
  
  // Load user management data
  loadAdminUsers();
  
  // Load product management data
  loadAdminProducts();
  
  // Load order management data
  loadAdminOrders();
  
  // Load advanced analytics
  loadAdvancedAnalytics();
}

function switchAdminTab(tabId) {
  // Hide all tab contents
  const adminTabContents = document.querySelectorAll('.admin-dashboard .tab-content');
  adminTabContents.forEach(tab => {
    tab.classList.remove('active');
  });

  // Remove active from all nav items
  const adminNavItems = document.querySelectorAll('.admin-dashboard .dash-nav-item');
  adminNavItems.forEach(item => {
    item.classList.remove('active');
  });

  // Show target tab
  const targetTab = document.getElementById(`${tabId}-tab`);
  if (targetTab) {
    targetTab.classList.add('active');
  }

  // Mark nav item as active
  const activeNavItem = document.querySelector(`[data-tab="${tabId}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }

  // Load tab-specific data
  if (tabId === 'analytics') {
    initializeAdvancedAnalytics();
  } else if (tabId === 'settings') {
    initializeSettings();
  }
}

function loadAdminOverview() {
  // This function would load the overview tab data
  console.log('Admin overview loaded');
}

function loadAdminUsers() {
  const table = document.getElementById('admin-users-table');
  if (!table) return;
  
  const users = [
    { id: 100, name: 'Meera Devi', type: 'Artisan', region: 'Bihar', status: 'Active' },
    { id: 101, name: 'Rajesh Kumar', type: 'Buyer', region: 'Delhi', status: 'Active' },
    { id: 102, name: 'Priya Sharma', type: 'Buyer', region: 'Mumbai', status: 'Active' },
    { id: 103, name: 'Amit Patel', type: 'Buyer', region: 'Bangalore', status: 'Active' }
  ];
  
  table.innerHTML = `
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Region</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${users.map(user => `
            <tr>
              <td>#${user.id}</td>
              <td>${user.name}</td>
              <td><span class="status status--${user.type === 'Artisan' ? 'success' : 'info'}">${user.type}</span></td>
              <td>${user.region}</td>
              <td><span class="status status--success">${user.status}</span></td>
              <td>
                <button class="btn btn--sm btn--outline">Edit</button>
                <button class="btn btn--sm btn--secondary">Suspend</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function loadAdminProducts() {
  const table = document.getElementById('admin-products-table');
  if (!table) return;
  
  table.innerHTML = `
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Artisan</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${appData.products.map(product => `
            <tr>
              <td>#${product.id}</td>
              <td>${product.name}</td>
              <td>${product.artisan}</td>
              <td>${product.category}</td>
              <td>₹${product.price.toLocaleString()}</td>
              <td><span class="status status--success">Active</span></td>
              <td>
                <button class="btn btn--sm btn--outline">Edit</button>
                <button class="btn btn--sm btn--warning">Feature</button>
                <button class="btn btn--sm btn--danger">Remove</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function loadAdminOrders() {
  const table = document.getElementById('admin-orders-table');
  if (!table) return;
  
  const orders = [
    { id: 'ORD-001', customer: 'Rajesh Kumar', product: 'Madhubani Painting', amount: 3500, status: 'Shipped' },
    { id: 'ORD-002', customer: 'Priya Sharma', product: 'Blue Pottery Vase Set', amount: 2800, status: 'Processing' },
    { id: 'ORD-003', customer: 'Amit Patel', product: 'Chikankari Kurta', amount: 4500, status: 'Delivered' },
    { id: 'ORD-004', customer: 'Sunita Singh', product: 'Coconut Shell Jewelry', amount: 1200, status: 'Pending' }
  ];
  
  table.innerHTML = `
    <div class="table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(order => `
            <tr>
              <td>${order.id}</td>
              <td>${order.customer}</td>
              <td>${order.product}</td>
              <td>₹${order.amount.toLocaleString()}</td>
              <td><span class="status status--${order.status === 'Delivered' ? 'success' : order.status === 'Shipped' ? 'info' : order.status === 'Processing' ? 'warning' : 'danger'}">${order.status}</span></td>
              <td>
                <button class="btn btn--sm btn--outline">View</button>
                <button class="btn btn--sm btn--primary">Update</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}