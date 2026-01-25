// ============================================
// E-COMMERCE APPLICATION - DATA LAYER & API
// ============================================

// Data Storage Layer (can be replaced with backend API)
class DataStore {
  constructor() {
    this.products =
      this.loadFromStorage("products") || this.getDefaultProducts();
    this.users = this.loadFromStorage("users") || [];
    this.orders = this.loadFromStorage("orders") || [];
    this.reviews = this.loadFromStorage("reviews") || [];
    this.cart = this.loadFromStorage("cart") || [];
    this.wishlist = this.loadFromStorage("wishlist") || [];
    this.currentUser = this.loadFromStorage("currentUser") || null;
    this.editorialReviews = this.loadFromStorage("editorialReviews") || [];
    this.thirdPartyCatalogs = this.loadFromStorage("thirdPartyCatalogs") || [];
  }

  saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }

  loadFromStorage(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      console.error("Storage error:", e);
      return null;
    }
  }

  // Default products for demo
  getDefaultProducts() {
    return [
      {
        id: 1,
        name: "iPhone 17 Pro 256GB",
        brand: "Apple",
        category: "phone",
        price: 32990000,
        image:
          "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=800&fit=crop&q=80",
        specs: {
          ram: "8GB",
          rom: "256GB",
          cpu: "Chip A19 Pro",
          screen: "6.3 inch Super Retina XDR",
          resolution: "2622 x 1206 pixels",
          cameraMain: "48MP f/1.6 OIS (hỗ trợ chụp 24MP/48MP)",
          cameraUltraWide: "48MP f/2.2 góc nhìn 120°",
          cameraTelephoto: "48MP f/2.8 OIS zoom quang học 8x",
          cameraFront: "18MP Center Stage f/1.9",
          nfc: "Có",
          sim: "Dual SIM (nano-SIM và e-SIM), hỗ trợ 2 e-SIM",
          os: "iOS 26",
          screenFeatures:
            "Always-On Display, ProMotion 120Hz, HDR, True Tone, P3, Haptic Touch",
          contrast: "2.000.000:1",
          brightness:
            "1000 nit (tiêu chuẩn), 1600 nit (HDR), 3000 nit (ngoài trời)",
          colors: "Cam, Trắng, Xanh đậm, Đen",
        },
        accessories: ["Sạc nhanh", "Ốp lưng", "Tai nghe", "Cáp USB-C"],
        warranty: "12 tháng",
        rating: 4.9,
        reviewsCount: 1850,
        seller: "Apple Official",
        description:
          "iPhone 17 Pro với chip A19 Pro mạnh mẽ, hệ thống camera 48MP chuyên nghiệp và màn hình Super Retina XDR 6.3 inch với ProMotion 120Hz.",
      },
      {
        id: 2,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        category: "phone",
        price: 29990000,
        image:
          "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=800&fit=crop&q=80",
        specs: {
          ram: "8GB",
          rom: "256GB",
          cpu: "Chip A17 Pro",
          screen: "6.7 inch Super Retina XDR",
          resolution: "2796 x 1290 pixels",
          cameraMain: "48MP f/1.78 OIS (hỗ trợ chụp 24MP/48MP)",
          cameraUltraWide: "12MP f/2.2 góc nhìn 120°",
          cameraTelephoto: "12MP f/2.8 OIS zoom quang học 5x",
          cameraFront: "12MP TrueDepth f/1.9",
          nfc: "Có",
          sim: "Dual SIM (nano-SIM và e-SIM), hỗ trợ 2 e-SIM",
          os: "iOS 17",
          screenFeatures: "ProMotion 120Hz, HDR, True Tone, P3, Haptic Touch",
          contrast: "2.000.000:1",
          brightness:
            "1000 nit (tiêu chuẩn), 1600 nit (HDR), 2000 nit (ngoài trời)",
          battery: "4422 mAh",
          charging: "Sạc nhanh 27W, MagSafe, Qi",
          colors: "Titan tự nhiên, Titan xanh, Titan trắng, Titan đen",
          weight: "221g",
          waterResistant: "IP68 (độ sâu 6m trong 30 phút)",
        },
        accessories: ["Sạc nhanh", "Ốp lưng", "Tai nghe", "Cáp USB-C"],
        warranty: "12 tháng",
        rating: 4.8,
        reviewsCount: 1250,
        seller: "Apple Official",
        description:
          "iPhone 15 Pro Max với chip A17 Pro tiên tiến, hệ thống camera chuyên nghiệp và màn hình Super Retina XDR 6.7 inch với ProMotion 120Hz.",
      },
      {
        id: 3,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        category: "phone",
        price: 26990000,
        image:
          "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop&q=80",
        specs: {
          ram: "12GB",
          rom: "512GB",
          cpu: "Snapdragon 8 Gen 3 (4nm)",
          gpu: "Adreno 750",
          screen: "6.8 inch Dynamic AMOLED 2X",
          resolution: "3088 x 1440 pixels (QHD+)",
          refreshRate: "120Hz",
          cameraMain: "200MP f/1.7 OIS (hỗ trợ chụp 50MP/200MP)",
          cameraUltraWide: "12MP f/2.2 góc nhìn 120°",
          cameraTelephoto1: "50MP f/3.4 OIS zoom quang học 5x",
          cameraTelephoto2: "10MP f/2.4 OIS zoom quang học 3x",
          cameraFront: "12MP f/2.2",
          nfc: "Có",
          sim: "Dual SIM (nano-SIM và e-SIM)",
          os: "Android 14 (One UI 6.1)",
          screenFeatures:
            "Always-On Display, HDR10+, Vision Booster, S Pen hỗ trợ",
          brightness: "2600 nit (peak)",
          battery: "5000 mAh",
          charging:
            "Sạc nhanh 45W, Sạc không dây 15W, Reverse wireless charging",
          spen: "S Pen tích hợp, độ trễ thấp 2.8ms",
          colors:
            "Titanium Black, Titanium Gray, Titanium Violet, Titanium Yellow",
          weight: "233g",
          waterResistant: "IP68 (độ sâu 1.5m trong 30 phút)",
        },
        accessories: ["Sạc nhanh 45W", "Bút S Pen", "Ốp lưng", "Tai nghe"],
        warranty: "12 tháng",
        rating: 4.7,
        reviewsCount: 980,
        seller: "Samsung Official",
        description:
          "Galaxy S24 Ultra với camera 200MP chuyên nghiệp, S Pen tích hợp, màn hình Dynamic AMOLED 2X 6.8 inch và chip Snapdragon 8 Gen 3 mạnh mẽ.",
      },
      {
        id: 4,
        name: 'MacBook Pro 16" M3',
        brand: "Apple",
        category: "laptop",
        price: 59990000,
        image:
          "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=800&fit=crop&q=80",
        specs: {
          ram: "18GB Unified Memory",
          rom: "512GB SSD",
          cpu: "Apple M3 (8-core CPU)",
          gpu: "10-core GPU",
          neuralEngine: "16-core Neural Engine",
          screen: "16.2 inch Liquid Retina XDR",
          resolution: "3456 x 2234 pixels",
          refreshRate: "ProMotion 120Hz",
          screenFeatures:
            "P3 wide color, True Tone, 1000 nits sustained, 1600 nits peak",
          brightness: "1000 nit (sustained), 1600 nit (peak)",
          ports:
            "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3, 3.5mm headphone jack",
          battery: "100Wh, lên đến 22 giờ video",
          charging: "140W USB-C Power Adapter",
          webcam: "1080p FaceTime HD camera",
          audio: "6-speaker sound system với Spatial Audio",
          keyboard: "Backlit Magic Keyboard với Touch ID",
          trackpad: "Force Touch trackpad",
          wifi: "Wi‑Fi 6E (802.11ax)",
          bluetooth: "Bluetooth 5.3",
          weight: "2.14 kg",
          colors: "Space Gray, Silver",
        },
        accessories: ["Adapter sạc 140W", "Chuột Magic Mouse", "Balo"],
        warranty: "12 tháng",
        rating: 4.9,
        reviewsCount: 450,
        seller: "Apple Official",
        description:
          "MacBook Pro 16 inch với chip M3 mạnh mẽ, màn hình Liquid Retina XDR với ProMotion 120Hz, pin lên đến 22 giờ và hiệu năng chuyên nghiệp.",
      },
      {
        id: 5,
        name: "Dell XPS 15",
        brand: "Dell",
        category: "laptop",
        price: 42990000,
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop&q=80",
        specs: {
          ram: "16GB DDR5 (2 khe, tối đa 64GB)",
          rom: "1TB NVMe SSD PCIe Gen 4",
          cpu: "Intel Core i7-13700H (14 cores, 20 threads)",
          gpu: "NVIDIA GeForce RTX 4050 6GB GDDR6",
          screen: "15.6 inch OLED 3.5K Touch",
          resolution: "3456 x 2160 pixels",
          refreshRate: "60Hz",
          screenFeatures: "OLED, Touch, 400 nits, 100% DCI-P3, Dolby Vision",
          brightness: "400 nits",
          ports:
            "2x Thunderbolt 4, 1x USB-C 3.2, 1x USB-A 3.2, SD card reader, 3.5mm headphone jack",
          battery: "86Wh, lên đến 12 giờ",
          charging: "130W USB-C Power Adapter",
          webcam: "720p HD camera với IR",
          audio: "Stereo speakers với Waves MaxxAudio Pro",
          keyboard: "Backlit keyboard",
          trackpad: "Precision touchpad",
          wifi: "Wi‑Fi 6E (802.11ax)",
          bluetooth: "Bluetooth 5.2",
          weight: "1.92 kg",
          colors: "Platinum Silver với carbon fiber palm rest",
        },
        accessories: ["Adapter sạc 130W", "Balo", "Chuột không dây"],
        warranty: "24 tháng",
        rating: 4.6,
        reviewsCount: 320,
        seller: "Dell Official",
        description:
          "Dell XPS 15 với màn hình OLED 3.5K Touch, chip Intel Core i7-13700H, GPU RTX 4050 và thiết kế cao cấp với carbon fiber.",
      },
      {
        id: 6,
        name: 'iPad Pro 12.9"',
        brand: "Apple",
        category: "tablet",
        price: 27990000,
        image:
          "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=800&fit=crop&q=80",
        specs: {
          ram: "8GB",
          rom: "256GB",
          cpu: "Chip M2 (8-core CPU)",
          gpu: "10-core GPU",
          neuralEngine: "16-core Neural Engine",
          screen: "12.9 inch Liquid Retina XDR",
          resolution: "2732 x 2048 pixels",
          refreshRate: "ProMotion 120Hz",
          screenFeatures: "Liquid Retina XDR, True Tone, P3 wide color, HDR",
          brightness: "1000 nit (full screen), 1600 nit (peak)",
          cameraMain: "12MP Wide f/1.8",
          cameraUltraWide: "10MP Ultra Wide f/2.4 góc nhìn 125°",
          cameraFront: "12MP Ultra Wide f/2.4 Center Stage",
          lidar: "LiDAR Scanner",
          ports: "Thunderbolt / USB 4",
          battery: "40.88 Wh, lên đến 10 giờ",
          charging: "USB-C Power Adapter",
          audio: "4-speaker sound system",
          wifi: "Wi‑Fi 6E (802.11ax)",
          bluetooth: "Bluetooth 5.3",
          cellular: "5G (tùy chọn)",
          weight: "682g (Wi‑Fi), 684g (5G)",
          colors: "Space Gray, Silver",
          applePencil: "Hỗ trợ Apple Pencil (thế hệ 2)",
          magicKeyboard: "Hỗ trợ Magic Keyboard",
        },
        accessories: ["Apple Pencil (thế hệ 2)", "Magic Keyboard", "Cáp USB-C"],
        warranty: "12 tháng",
        rating: 4.8,
        reviewsCount: 680,
        seller: "Apple Official",
        description:
          "iPad Pro 12.9 inch với chip M2 mạnh mẽ, màn hình Liquid Retina XDR, hỗ trợ Apple Pencil và Magic Keyboard cho công việc chuyên nghiệp.",
      },
      {
        id: 7,
        name: "AirPods Pro 2",
        brand: "Apple",
        category: "accessory",
        price: 5990000,
        image:
          "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&h=800&fit=crop&q=80",
        specs: {
          chip: "H2 Chip",
          driver: "Custom high-excursion driver",
          activeNoiseCancellation: "Có (ANC)",
          transparencyMode: "Có",
          adaptiveAudio: "Có",
          spatialAudio: "Có với Dynamic Head Tracking",
          batteryEarbuds: "Lên đến 6 giờ (ANC bật), 30 giờ với hộp sạc",
          batteryCase: "Hộp sạc MagSafe, sạc không dây Qi",
          charging: "Lightning, MagSafe, Qi, USB-C",
          microphone: "3 microphones với beamforming",
          waterResistant: "IPX4 (chống mồ hôi và nước)",
          controls: "Force sensor trên thân tai nghe",
          findMy: "Hỗ trợ Find My",
          audioCodec: "AAC, SBC",
          bluetooth: "Bluetooth 5.3",
          compatibility: "iPhone, iPad, Mac, Apple Watch, Apple TV",
          colors: "Trắng",
          weight: "5.3g mỗi tai nghe, 56.1g (hộp sạc)",
        },
        accessories: [
          "Hộp sạc MagSafe",
          "Ear tips (3 kích cỡ)",
          "Cáp USB-C to Lightning",
        ],
        warranty: "12 tháng",
        rating: 4.7,
        reviewsCount: 2100,
        seller: "Apple Official",
        description:
          "AirPods Pro 2 với chip H2, Active Noise Cancellation cải tiến, Spatial Audio với Dynamic Head Tracking và pin lên đến 6 giờ.",
      },
    ].map((p, i) => ({ ...p, id: p.id || i + 1 }));
  }

  // Product API
  getProducts(filters = {}) {
    let products = [...this.products];

    // Apply filters
    if (filters.category) {
      products = products.filter((p) => p.category === filters.category);
    }
    if (filters.brand) {
      products = products.filter((p) => p.brand === filters.brand);
    }
    if (filters.search) {
      const search = filters.search.toLowerCase();
      products = products.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.brand.toLowerCase().includes(search) ||
          p.specs.ram?.toLowerCase().includes(search) ||
          p.specs.rom?.toLowerCase().includes(search) ||
          p.specs.cpu?.toLowerCase().includes(search) ||
          p.specs.screen?.toLowerCase().includes(search),
      );
    }
    if (filters.ram) {
      products = products.filter((p) => p.specs.ram?.includes(filters.ram));
    }
    if (filters.rom) {
      products = products.filter((p) => p.specs.rom?.includes(filters.rom));
    }
    if (filters.cpu) {
      products = products.filter((p) =>
        p.specs.cpu?.toLowerCase().includes(filters.cpu.toLowerCase()),
      );
    }
    if (filters.screen) {
      products = products.filter((p) =>
        p.specs.screen?.includes(filters.screen),
      );
    }

    // Sort
    if (filters.sort) {
      switch (filters.sort) {
        case "price-asc":
          products.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          products.sort((a, b) => b.price - a.price);
          break;
        case "rating":
          products.sort((a, b) => b.rating - a.rating);
          break;
        case "name":
        default:
          products.sort((a, b) => a.name.localeCompare(b.name));
      }
    }

    return products;
  }

  getProduct(id) {
    return this.products.find((p) => p.id === parseInt(id));
  }

  getBrands() {
    return [...new Set(this.products.map((p) => p.brand))];
  }

  // User API
  registerUser(userData) {
    const user = {
      id: Date.now(),
      ...userData,
      createdAt: new Date().toISOString(),
    };
    this.users.push(user);
    this.saveToStorage("users", this.users);
    return user;
  }

  loginUser(email, password) {
    const user = this.users.find(
      (u) => u.email === email && u.password === password,
    );
    if (user) {
      this.currentUser = { ...user };
      delete this.currentUser.password;
      this.saveToStorage("currentUser", this.currentUser);
      return this.currentUser;
    }
    return null;
  }

  logoutUser() {
    this.currentUser = null;
    this.saveToStorage("currentUser", null);
  }

  updateUserProfile(userId, profileData) {
    const user = this.users.find((u) => u.id === userId);
    if (user) {
      Object.assign(user, profileData);
      this.saveToStorage("users", this.users);
      if (this.currentUser && this.currentUser.id === userId) {
        Object.assign(this.currentUser, profileData);
        delete this.currentUser.password;
        this.saveToStorage("currentUser", this.currentUser);
      }
      return user;
    }
    return null;
  }

  // Cart API
  addToCart(productId, quantity = 1) {
    const product = this.getProduct(productId);
    if (!product) return false;

    const existingItem = this.cart.find((item) => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({
        productId,
        quantity,
        addedAt: new Date().toISOString(),
      });
    }
    this.saveToStorage("cart", this.cart);
    return true;
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter((item) => item.productId !== productId);
    this.saveToStorage("cart", this.cart);
  }

  updateCartQuantity(productId, quantity) {
    const item = this.cart.find((item) => item.productId === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveToStorage("cart", this.cart);
      }
    }
  }

  getCartItems() {
    return this.cart
      .map((item) => {
        const product = this.getProduct(item.productId);
        return product ? { ...item, product } : null;
      })
      .filter(Boolean);
  }

  clearCart() {
    this.cart = [];
    this.saveToStorage("cart", this.cart);
  }

  // Wishlist API
  addToWishlist(productId) {
    if (!this.wishlist.includes(productId)) {
      this.wishlist.push(productId);
      this.saveToStorage("wishlist", this.wishlist);
    }
  }

  removeFromWishlist(productId) {
    this.wishlist = this.wishlist.filter((id) => id !== productId);
    this.saveToStorage("wishlist", this.wishlist);
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  getWishlistItems() {
    return this.wishlist.map((id) => this.getProduct(id)).filter(Boolean);
  }

  // Order API
  createOrder(orderData) {
    const order = {
      id: Date.now(),
      ...orderData,
      status: "pending",
      createdAt: new Date().toISOString(),
      userId: this.currentUser?.id || null,
    };
    this.orders.push(order);
    this.saveToStorage("orders", this.orders);
    return order;
  }

  cancelOrder(orderId) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order && order.status === "pending") {
      order.status = "cancelled";
      order.cancelledAt = new Date().toISOString();
      this.saveToStorage("orders", this.orders);
      return order;
    }
    return null;
  }

  getUserOrders(userId) {
    return this.orders
      .filter((o) => o.userId === userId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  updateOrderStatus(orderId, status) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.status = status;
      if (status === "shipping") {
        order.shippedAt = new Date().toISOString();
      } else if (status === "delivered") {
        order.deliveredAt = new Date().toISOString();
      }
      this.saveToStorage("orders", this.orders);
      return order;
    }
    return null;
  }

  // Review API
  addReview(reviewData) {
    const review = {
      id: Date.now(),
      ...reviewData,
      status: "pending", // pending, approved, rejected
      createdAt: new Date().toISOString(),
      userId: this.currentUser?.id || null,
    };
    this.reviews.push(review);
    this.saveToStorage("reviews", this.reviews);
    return review;
  }

  getProductReviews(productId, approvedOnly = true) {
    let reviews = this.reviews.filter((r) => r.productId === productId);
    if (approvedOnly) {
      reviews = reviews.filter((r) => r.status === "approved");
    }
    return reviews.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  }

  approveReview(reviewId) {
    const review = this.reviews.find((r) => r.id === reviewId);
    if (review) {
      review.status = "approved";
      this.saveToStorage("reviews", this.reviews);
      // Update product rating
      this.updateProductRating(review.productId);
      return review;
    }
    return null;
  }

  rejectReview(reviewId) {
    const review = this.reviews.find((r) => r.id === reviewId);
    if (review) {
      review.status = "rejected";
      this.saveToStorage("reviews", this.reviews);
      return review;
    }
    return null;
  }

  updateProductRating(productId) {
    const approvedReviews = this.reviews.filter(
      (r) => r.productId === productId && r.status === "approved",
    );
    if (approvedReviews.length > 0) {
      const avgRating =
        approvedReviews.reduce((sum, r) => sum + r.rating, 0) /
        approvedReviews.length;
      const product = this.getProduct(productId);
      if (product) {
        product.rating = Math.round(avgRating * 10) / 10;
        product.reviewsCount = approvedReviews.length;
        this.saveToStorage("products", this.products);
      }
    }
  }

  // Editorial Review API
  addEditorialReview(reviewData) {
    const review = {
      id: Date.now(),
      ...reviewData,
      type: "editorial",
      createdAt: new Date().toISOString(),
    };
    this.editorialReviews.push(review);
    this.saveToStorage("editorialReviews", this.editorialReviews);
    return review;
  }

  getEditorialReviews(productId) {
    return this.editorialReviews
      .filter((r) => r.productId === productId)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  }

  // Third-party Catalog API
  addThirdPartyCatalog(catalogData) {
    const catalog = {
      id: Date.now(),
      ...catalogData,
      createdAt: new Date().toISOString(),
    };
    this.thirdPartyCatalogs.push(catalog);
    this.saveToStorage("thirdPartyCatalogs", this.thirdPartyCatalogs);

    // Merge products into main catalog
    if (catalogData.products) {
      catalogData.products.forEach((product) => {
        product.seller = catalogData.sellerName || "Third Party";
        this.products.push(product);
      });
      this.saveToStorage("products", this.products);
    }
    return catalog;
  }

  // XML Catalog Generator
  generateMiniCatalogXML(filters = {}) {
    const products = this.getProducts(filters);
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += "<catalog>\n";
    xml += `  <generatedAt>${new Date().toISOString()}</generatedAt>\n`;
    xml += `  <totalProducts>${products.length}</totalProducts>\n`;
    xml += "  <products>\n";

    products.forEach((product) => {
      xml += "    <product>\n";
      xml += `      <id>${product.id}</id>\n`;
      xml += `      <name><![CDATA[${product.name}]]></name>\n`;
      xml += `      <brand>${product.brand}</brand>\n`;
      xml += `      <category>${product.category}</category>\n`;
      xml += `      <price>${product.price}</price>\n`;
      xml += `      <rating>${product.rating}</rating>\n`;
      xml += `      <seller>${product.seller || "TechStore"}</seller>\n`;
      xml += "      <specs>\n";
      Object.entries(product.specs).forEach(([key, value]) => {
        xml += `        <${key}>${value}</${key}>\n`;
      });
      xml += "      </specs>\n";
      xml += "    </product>\n";
    });

    xml += "  </products>\n";
    xml += "</catalog>";
    return xml;
  }

  // Return/Refund API
  requestReturn(orderId, returnData) {
    const order = this.orders.find((o) => o.id === orderId);
    if (order) {
      order.returnRequest = {
        ...returnData,
        status: "pending",
        requestedAt: new Date().toISOString(),
      };
      this.saveToStorage("orders", this.orders);
      return order;
    }
    return null;
  }
}

// ============================================
// APPLICATION CONTROLLER
// ============================================

const app = {
  store: new DataStore(),
  currentPage: "home",
  currentProductId: null,
  itemsPerPage: 12,
  currentPageNum: 1,

  init() {
    this.setupEventListeners();
    this.loadUserState();
    this.renderHomePage();
    this.updateBadges();
  },

  setupEventListeners() {
    // Navigation
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        // Handle account link separately to toggle dropdown when logged in
        if (link.id === "account-link") {
          if (this.store.currentUser) {
            e.stopPropagation();
            this.toggleUserMenu();
            return;
          } else {
            // If not logged in, navigate to account page
            this.closeUserMenu();
            this.navigateToPage("account");
            return;
          }
        }
        if (page) {
          this.closeUserMenu();
          this.navigateToPage(page);
        }
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      const userMenu = document.querySelector(".user-menu");
      if (userMenu && !userMenu.contains(e.target)) {
        this.closeUserMenu();
      }
    });

    // Handle dropdown menu items
    document.querySelectorAll("#user-dropdown a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.closeUserMenu();
        const page = link.dataset.page;
        if (page) {
          this.navigateToPage(page);
        }
      });
    });

    // Mobile menu
    document
      .getElementById("mobile-menu-toggle")
      ?.addEventListener("click", () => {
        document.querySelector(".nav-menu").classList.toggle("active");
      });

    // Category cards
    document.querySelectorAll(".category-card").forEach((card) => {
      card.addEventListener("click", () => {
        const category = card.dataset.category;
        document.getElementById("filter-category").value = category;
        this.navigateToPage("products");
        this.applyFilters();
      });
    });

    // Search
    document
      .getElementById("home-search")
      ?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.navigateToPage("products");
          document.getElementById("product-search").value = e.target.value;
          this.applyFilters();
        }
      });

    document.getElementById("search-btn")?.addEventListener("click", () => {
      this.applyFilters();
    });

    document
      .getElementById("product-search")
      ?.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.applyFilters();
        }
      });

    // Filters
    [
      "filter-brand",
      "filter-category",
      "filter-sort",
      "filter-ram",
      "filter-rom",
      "filter-cpu",
      "filter-screen",
    ].forEach((id) => {
      document.getElementById(id)?.addEventListener("change", () => {
        this.applyFilters();
      });
    });

    // Account tabs
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Forms
    document.getElementById("login-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleLogin();
    });

    document
      .getElementById("register-form")
      ?.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleRegister();
      });

    document.getElementById("profile-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      // Prevent default form submission
    });

    document
      .getElementById("update-profile-btn")
      ?.addEventListener("click", () => {
        this.handleUpdateProfile();
      });

    document.getElementById("checkout-btn")?.addEventListener("click", () => {
      this.showPaymentModal();
    });

    document
      .getElementById("confirm-payment-btn")
      ?.addEventListener("click", () => {
        this.handlePayment();
      });

    document.getElementById("review-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmitReview();
    });

    document.getElementById("return-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleReturnRequest();
    });

    document.getElementById("logout-btn")?.addEventListener("click", (e) => {
      e.preventDefault();
      this.closeUserMenu();
      this.handleLogout();
    });

    // Rating stars
    document.querySelectorAll("#review-stars i").forEach((star) => {
      star.addEventListener("click", () => {
        const rating = parseInt(star.dataset.rating);
        this.setRating(rating);
      });
    });
  },

  loadUserState() {
    const accountLink = document.getElementById("account-link");
    if (this.store.currentUser && accountLink) {
      accountLink.innerHTML = `<i class="fas fa-user"></i> ${this.store.currentUser.name}`;
    } else if (accountLink) {
      accountLink.innerHTML = `<i class="fas fa-user"></i> Tài Khoản`;
    }
  },

  navigateToPage(page) {
    document
      .querySelectorAll(".page")
      .forEach((p) => p.classList.remove("active"));
    document.getElementById(`${page}-page`)?.classList.add("active");
    this.currentPage = page;

    // Load page content
    switch (page) {
      case "home":
        this.renderHomePage();
        break;
      case "products":
        this.renderProductsPage();
        break;
      case "cart":
        this.renderCartPage();
        break;
      case "wishlist":
        this.renderWishlistPage();
        break;
      case "orders":
        this.renderOrdersPage();
        break;
      case "account":
        this.renderAccountPage();
        break;
    }

    // Close mobile menu and user menu
    document.querySelector(".nav-menu")?.classList.remove("active");
    this.closeUserMenu();
  },

  renderHomePage() {
    const featuredProducts = this.store
      .getProducts({ sort: "rating" })
      .slice(0, 6);
    const container = document.getElementById("featured-products");
    if (container) {
      if (featuredProducts.length === 0) {
        container.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--card-bg); border-radius: 1rem; box-shadow: var(--shadow);">
                        <i class="fas fa-box-open" style="font-size: 4rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                        <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Chưa có sản phẩm nổi bật</h2>
                        <p style="color: var(--text-secondary); font-size: 1.1rem;">
                            Sản phẩm hiện tại tại cửa hàng chưa có hoặc thiếu thông tin sản phẩm
                        </p>
                    </div>
                `;
      } else {
        container.innerHTML = featuredProducts
          .map((p) => this.renderProductCard(p))
          .join("");
      }
    }
  },

  renderProductsPage() {
    this.applyFilters();
    this.populateBrandFilter();
  },

  populateBrandFilter() {
    const brands = this.store.getBrands();
    const select = document.getElementById("filter-brand");
    if (select) {
      select.innerHTML =
        '<option value="">Tất cả thương hiệu</option>' +
        brands.map((b) => `<option value="${b}">${b}</option>`).join("");
    }
  },

  applyFilters() {
    const filters = {
      search: document.getElementById("product-search")?.value || "",
      category: document.getElementById("filter-category")?.value || "",
      brand: document.getElementById("filter-brand")?.value || "",
      sort: document.getElementById("filter-sort")?.value || "name",
      ram: document.getElementById("filter-ram")?.value || "",
      rom: document.getElementById("filter-rom")?.value || "",
      cpu: document.getElementById("filter-cpu")?.value || "",
      screen: document.getElementById("filter-screen")?.value || "",
    };

    const products = this.store.getProducts(filters);
    this.renderProductsGrid(products);
  },

  renderProductsGrid(products) {
    const container = document.getElementById("products-grid");
    if (!container) return;

    if (products.length === 0) {
      container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--card-bg); border-radius: 1rem; box-shadow: var(--shadow);">
                    <i class="fas fa-search" style="font-size: 4rem; color: var(--text-secondary); margin-bottom: 1rem;"></i>
                    <h2 style="color: var(--text-primary); margin-bottom: 1rem;">Không tìm thấy sản phẩm</h2>
                    <p style="color: var(--text-secondary); font-size: 1.1rem;">
                        Sản phẩm hiện tại tại cửa hàng chưa có hoặc thiếu thông tin sản phẩm
                    </p>
                    <p style="color: var(--text-secondary); margin-top: 1rem;">
                        Vui lòng thử lại với từ khóa khác hoặc xem các sản phẩm khác
                    </p>
                </div>
            `;
      // Hide pagination when no products
      const pagination = document.getElementById("pagination");
      if (pagination) pagination.innerHTML = "";
      return;
    }

    const start = (this.currentPageNum - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const pageProducts = products.slice(start, end);

    container.innerHTML = pageProducts
      .map((p) => this.renderProductCard(p))
      .join("");

    // Pagination
    this.renderPagination(products.length);
  },

  renderProductCard(product) {
    const inWishlist = this.store.isInWishlist(product.id);
    const imageHtml = product.image.startsWith("http")
      ? `<img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='📱'; this.parentElement.style.fontSize='4rem'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
            `
      : `<div style="font-size: 4rem; display: flex; align-items: center; justify-content: center; height: 100%;">${product.image}</div>`;
    return `
            <div class="product-card" onclick="app.showProductDetail(${
              product.id
            })">
                <div class="product-image">${imageHtml}</div>
                <div class="product-info">
                    <div class="product-brand">${product.brand}</div>
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">${this.formatPrice(
                      product.price,
                    )}</div>
                    <div class="product-rating">
                        <div class="stars">${this.renderStars(
                          product.rating,
                        )}</div>
                        <span>${product.rating} (${product.reviewsCount})</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary btn-small" onclick="event.stopPropagation(); app.addToCart(${
                          product.id
                        })">
                            <i class="fas fa-cart-plus"></i> Thêm
                        </button>
                        <button class="btn btn-secondary btn-small" onclick="event.stopPropagation(); app.toggleWishlist(${
                          product.id
                        })">
                            <i class="fas fa-heart ${
                              inWishlist ? "active" : ""
                            }"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
  },

  renderStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    let html = "";
    for (let i = 0; i < full; i++) {
      html += '<i class="fas fa-star"></i>';
    }
    if (half) {
      html += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = full + (half ? 1 : 0); i < 5; i++) {
      html += '<i class="far fa-star"></i>';
    }
    return html;
  },

  showProductDetail(productId) {
    this.currentProductId = productId;
    const product = this.store.getProduct(productId);
    if (!product) return;

    const reviews = this.store.getProductReviews(productId);
    const editorialReviews = this.store.getEditorialReviews(productId);
    const inWishlist = this.store.isInWishlist(productId);

    const content = document.getElementById("product-detail-content");
    if (content) {
      const detailImageHtml = product.image.startsWith("http")
        ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;" onerror="this.style.display='none'; this.parentElement.innerHTML='📱'; this.parentElement.style.fontSize='6rem'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
                `
        : `<div style="font-size: 6rem; display: flex; align-items: center; justify-content: center; height: 100%;">${product.image}</div>`;
      content.innerHTML = `
                <div class="product-detail">
                    <div class="product-detail-header">
                        <div class="product-detail-image">${detailImageHtml}</div>
                        <div class="product-detail-info">
                            <h1>${product.name}</h1>
                            <div class="product-brand">${product.brand}</div>
                            <div class="product-detail-price">${this.formatPrice(
                              product.price,
                            )}</div>
                            <div class="product-rating">
                                <div class="stars">${this.renderStars(
                                  product.rating,
                                )}</div>
                                <span>${product.rating} (${
                                  product.reviewsCount
                                } đánh giá)</span>
                            </div>
                            <div class="product-actions" style="margin-top: 1rem;">
                                <button class="btn btn-primary" onclick="app.addToCart(${
                                  product.id
                                })">
                                    <i class="fas fa-cart-plus"></i> Thêm Vào Giỏ
                                </button>
                                <button class="btn btn-secondary" onclick="app.toggleWishlist(${
                                  product.id
                                })">
                                    <i class="fas fa-heart ${
                                      inWishlist ? "active" : ""
                                    }"></i> ${
                                      inWishlist ? "Đã Yêu Thích" : "Yêu Thích"
                                    }
                                </button>
                                ${
                                  this.store.currentUser
                                    ? `
                                    <button class="btn btn-secondary" onclick="app.showReviewModal(${product.id})">
                                        <i class="fas fa-star"></i> Đánh Giá
                                    </button>
                                `
                                    : ""
                                }
                            </div>
                        </div>
                    </div>
                    ${
                      product.description
                        ? `
                        <div class="product-specs">
                            <h2>Mô Tả Sản Phẩm</h2>
                            <p>${product.description}</p>
                        </div>
                    `
                        : ""
                    }
                    <div class="product-specs">
                        <h2>Thông Số Kỹ Thuật</h2>
                        ${Object.entries(product.specs)
                          .map(([key, value]) => {
                            // Format key names for better display
                            const keyNames = {
                              ram: "RAM",
                              rom: "Bộ Nhớ Trong",
                              cpu: "Chipset",
                              gpu: "GPU",
                              neuralEngine: "Neural Engine",
                              screen: "Màn Hình",
                              resolution: "Độ Phân Giải",
                              refreshRate: "Tần Số Quét",
                              cameraMain: "Camera Sau Chính",
                              cameraUltraWide: "Camera Góc Siêu Rộng",
                              cameraTelephoto: "Camera Telephoto",
                              cameraTelephoto1: "Camera Telephoto 1",
                              cameraTelephoto2: "Camera Telephoto 2",
                              cameraFront: "Camera Trước",
                              lidar: "LiDAR Scanner",
                              nfc: "NFC",
                              sim: "Thẻ SIM",
                              os: "Hệ Điều Hành",
                              screenFeatures: "Tính Năng Màn Hình",
                              contrast: "Tỷ Lệ Tương Phản",
                              brightness: "Độ Sáng",
                              colors: "Màu Sắc",
                              battery: "Pin",
                              batteryEarbuds: "Pin Tai Nghe",
                              batteryCase: "Hộp Sạc",
                              charging: "Sạc",
                              waterResistant: "Chống Nước",
                              weight: "Trọng Lượng",
                              ports: "Cổng Kết Nối",
                              webcam: "Webcam",
                              audio: "Âm Thanh",
                              keyboard: "Bàn Phím",
                              trackpad: "Trackpad",
                              wifi: "Wi-Fi",
                              bluetooth: "Bluetooth",
                              cellular: "Kết Nối Di Động",
                              spen: "S Pen",
                              activeNoiseCancellation: "Chống Ồn Chủ Động",
                              transparencyMode: "Chế Độ Trong Suốt",
                              adaptiveAudio: "Âm Thanh Thích Ứng",
                              spatialAudio: "Spatial Audio",
                              microphone: "Microphone",
                              controls: "Điều Khiển",
                              findMy: "Find My",
                              audioCodec: "Audio Codec",
                              compatibility: "Tương Thích",
                              applePencil: "Apple Pencil",
                              magicKeyboard: "Magic Keyboard",
                            };
                            const displayKey =
                              keyNames[key] ||
                              key.charAt(0).toUpperCase() +
                                key.slice(1).replace(/([A-Z])/g, " $1");
                            return `
                                <div class="spec-item">
                                    <span><strong>${displayKey}:</strong></span>
                                    <span>${value}</span>
                                </div>
                            `;
                          })
                          .join("")}
                        <div class="spec-item">
                            <span><strong>Bảo Hành:</strong></span>
                            <span>${product.warranty}</span>
                        </div>
                        <div class="spec-item">
                            <span><strong>Người Bán:</strong></span>
                            <span>${product.seller || "TechStore"}</span>
                        </div>
                    </div>
                    ${
                      product.accessories.length > 0
                        ? `
                        <div class="product-specs">
                            <h2>Phụ Kiện Kèm Theo</h2>
                            <ul>
                                ${product.accessories
                                  .map((acc) => `<li>${acc}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                    `
                        : ""
                    }
                    ${
                      editorialReviews.length > 0
                        ? `
                        <div class="editorial-reviews">
                            <h2>Đánh Giá Biên Tập</h2>
                            ${editorialReviews
                              .map(
                                (er) => `
                                <div class="editorial-review">
                                    <h3>${er.title}</h3>
                                    <p>${er.content}</p>
                                    <small>Bởi ${er.author} - ${new Date(
                                      er.createdAt,
                                    ).toLocaleDateString("vi-VN")}</small>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    `
                        : ""
                    }
                    <div class="reviews-section">
                        <h2>Đánh Giá Khách Hàng</h2>
                        ${
                          reviews.length > 0
                            ? reviews.map((r) => this.renderReview(r)).join("")
                            : "<p>Chưa có đánh giá nào.</p>"
                        }
                    </div>
                </div>
            `;
    }

    this.navigateToPage("product-detail");
  },

  renderReview(review) {
    const user = this.store.users.find((u) => u.id === review.userId);
    const userName = user ? user.name : "Khách hàng";
    const isLong = review.content.length > 200;
    const displayContent = isLong
      ? review.content.substring(0, 200) + "..."
      : review.content;

    return `
            <div class="review-card">
                <div class="review-header">
                    <div>
                        <div class="review-title">${review.title}</div>
                        <div class="product-rating">
                            <div class="stars">${this.renderStars(
                              review.rating,
                            )}</div>
                            <span>${userName}</span>
                            <span style="color: var(--text-secondary);"> - ${new Date(
                              review.createdAt,
                            ).toLocaleDateString("vi-VN")}</span>
                        </div>
                    </div>
                </div>
                <div class="review-content ${
                  isLong ? "truncated" : ""
                }" id="review-${review.id}">
                    ${displayContent}
                </div>
                ${
                  isLong
                    ? `
                    <span class="review-expand" onclick="app.expandReview(${review.id})">Xem thêm</span>
                `
                    : ""
                }
            </div>
        `;
  },

  expandReview(reviewId) {
    const review = this.store.reviews.find((r) => r.id === reviewId);
    if (review) {
      const element = document.getElementById(`review-${reviewId}`);
      if (element) {
        element.textContent = review.content;
        element.classList.remove("truncated");
        element.nextElementSibling?.remove();
      }
    }
  },

  renderCartPage() {
    const items = this.store.getCartItems();
    const container = document.getElementById("cart-items");
    const summary = document.getElementById("cart-summary");

    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = "<p>Giỏ hàng trống.</p>";
      if (summary) summary.style.display = "none";
      return;
    }

    if (summary) summary.style.display = "block";

    container.innerHTML = items
      .map((item) => {
        const cartImageHtml = item.product.image.startsWith("http")
          ? `<img src="${item.product.image}" alt="${item.product.name}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 0.5rem;" onerror="this.style.display='none'; this.parentElement.innerHTML='📱'; this.parentElement.style.fontSize='2rem'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
                `
          : `<div style="font-size: 2rem; display: flex; align-items: center; justify-content: center; height: 100%;">${item.product.image}</div>`;
        return `
            <div class="cart-item">
                <div class="cart-item-image">${cartImageHtml}</div>
                <div class="cart-item-info">
                    <h3>${item.product.name}</h3>
                    <p>${item.product.brand}</p>
                    <div class="product-price">${this.formatPrice(
                      item.product.price,
                    )}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button onclick="app.updateCartQuantity(${
                          item.product.id
                        }, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="app.updateCartQuantity(${
                          item.product.id
                        }, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="btn btn-danger btn-small" onclick="app.removeFromCart(${
                      item.product.id
                    })">
                        <i class="fas fa-trash"></i> Xóa
                    </button>
                </div>
            </div>
        `;
      })
      .join("");

    this.updateCartSummary();
  },

  updateCartSummary() {
    const items = this.store.getCartItems();
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
    const shipping = 30000;
    const total = subtotal + shipping;

    document.getElementById("cart-subtotal").textContent =
      this.formatPrice(subtotal);
    document.getElementById("cart-total").textContent = this.formatPrice(total);
  },

  renderWishlistPage() {
    const items = this.store.getWishlistItems();
    const container = document.getElementById("wishlist-items");
    if (container) {
      if (items.length === 0) {
        container.innerHTML = "<p>Danh sách yêu thích trống.</p>";
      } else {
        container.innerHTML = items
          .map((p) => this.renderProductCard(p))
          .join("");
      }
    }
  },

  renderOrdersPage() {
    if (!this.store.currentUser) {
      document.getElementById("orders-list").innerHTML =
        "<p>Vui lòng đăng nhập để xem đơn hàng.</p>";
      return;
    }

    const orders = this.store.getUserOrders(this.store.currentUser.id);
    const container = document.getElementById("orders-list");
    if (!container) return;

    if (orders.length === 0) {
      container.innerHTML = "<p>Bạn chưa có đơn hàng nào.</p>";
      return;
    }

    container.innerHTML = orders
      .map((order) => {
        const items = order.items
          .map((item) => {
            const product = this.store.getProduct(item.productId);
            return product ? `${product.name} x${item.quantity}` : "";
          })
          .filter(Boolean)
          .join(", ");

        return `
                <div class="order-card">
                    <div class="order-header">
                        <div>
                            <strong>Đơn hàng #${order.id}</strong>
                            <p>${new Date(order.createdAt).toLocaleString(
                              "vi-VN",
                            )}</p>
                        </div>
                        <div>
                            <span class="order-status ${
                              order.status
                            }">${this.getOrderStatusText(order.status)}</span>
                        </div>
                    </div>
                    <div>
                        <p><strong>Sản phẩm:</strong> ${items}</p>
                        <p><strong>Tổng tiền:</strong> ${this.formatPrice(
                          order.total,
                        )}</p>
                        <p><strong>Phương thức thanh toán:</strong> ${
                          order.paymentMethod
                        }</p>
                        ${
                          order.status === "pending"
                            ? `
                            <button class="btn btn-danger btn-small" onclick="app.cancelOrder(${order.id})" style="margin-top: 1rem;">
                                Hủy Đơn Hàng
                            </button>
                        `
                            : ""
                        }
                        ${
                          order.status === "delivered"
                            ? `
                            <button class="btn btn-secondary btn-small" onclick="app.showReturnModal(${order.id})" style="margin-top: 1rem;">
                                Yêu Cầu Đổi Trả
                            </button>
                        `
                            : ""
                        }
                    </div>
                </div>
            `;
      })
      .join("");
  },

  getOrderStatusText(status) {
    const statusMap = {
      pending: "Chờ Xử Lý",
      processing: "Đang Xử Lý",
      shipping: "Đang Giao",
      delivered: "Đã Giao",
      cancelled: "Đã Hủy",
    };
    return statusMap[status] || status;
  },

  renderAccountPage() {
    if (this.store.currentUser) {
      this.switchTab("profile");
      const user = this.store.currentUser;
      document.getElementById("profile-name").value = user.name || "";
      document.getElementById("profile-phone").value = user.phone || "";
      document.getElementById("profile-email").value = user.email || "";

      // Parse address if it's stored as object
      if (user.address && typeof user.address === "object") {
        document.getElementById("profile-street").value =
          user.address.street || "";
        document.getElementById("profile-ward").value = user.address.ward || "";
        document.getElementById("profile-district").value =
          user.address.district || "";
        document.getElementById("profile-city").value = user.address.city || "";
      } else if (user.address) {
        // If address is stored as string, try to parse or leave empty
        document.getElementById("profile-street").value = "";
        document.getElementById("profile-ward").value = "";
        document.getElementById("profile-district").value = "";
        document.getElementById("profile-city").value = "";
      } else {
        document.getElementById("profile-street").value = "";
        document.getElementById("profile-ward").value = "";
        document.getElementById("profile-district").value = "";
        document.getElementById("profile-city").value = "";
      }

      if (document.getElementById("profile-invoice")) {
        document.getElementById("profile-invoice").value =
          user.invoiceInfo || "";
      }
    } else {
      this.switchTab("login");
    }
  },

  switchTab(tab) {
    document
      .querySelectorAll(".tab-btn")
      .forEach((btn) => btn.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((content) => content.classList.remove("active"));

    document.querySelector(`[data-tab="${tab}"]`)?.classList.add("active");
    document.getElementById(`${tab}-tab`)?.classList.add("active");
  },

  renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    const container = document.getElementById("pagination");
    if (!container || totalPages <= 1) {
      container.innerHTML = "";
      return;
    }

    let html = "";
    for (let i = 1; i <= totalPages; i++) {
      html += `
                <button class="${i === this.currentPageNum ? "active" : ""}" 
                        onclick="app.goToPage(${i})">${i}</button>
            `;
    }
    container.innerHTML = html;
  },

  goToPage(page) {
    this.currentPageNum = page;
    this.applyFilters();
  },

  // Cart Actions
  addToCart(productId) {
    this.store.addToCart(productId);
    this.updateBadges();
    if (this.currentPage === "cart") {
      this.renderCartPage();
    }
    this.showNotification("Đã thêm vào giỏ hàng!");
  },

  removeFromCart(productId) {
    this.store.removeFromCart(productId);
    this.updateBadges();
    this.renderCartPage();
    this.showNotification("Đã xóa khỏi giỏ hàng!");
  },

  updateCartQuantity(productId, quantity) {
    this.store.updateCartQuantity(productId, quantity);
    this.updateBadges();
    this.renderCartPage();
  },

  // Wishlist Actions
  toggleWishlist(productId) {
    if (this.store.isInWishlist(productId)) {
      this.store.removeFromWishlist(productId);
      this.showNotification("Đã xóa khỏi yêu thích!");
    } else {
      this.store.addToWishlist(productId);
      this.showNotification("Đã thêm vào yêu thích!");
    }
    this.updateBadges();
    if (this.currentPage === "wishlist") {
      this.renderWishlistPage();
    }
    if (this.currentPage === "product-detail") {
      this.showProductDetail(productId);
    }
  },

  // Order Actions
  cancelOrder(orderId) {
    if (confirm("Bạn có chắc chắn muốn hủy đơn hàng này?")) {
      const order = this.store.cancelOrder(orderId);
      if (order) {
        this.renderOrdersPage();
        this.showNotification("Đã hủy đơn hàng!");
      }
    }
  },

  // Payment
  showPaymentModal() {
    if (!this.store.currentUser) {
      alert("Vui lòng đăng nhập để thanh toán!");
      this.navigateToPage("account");
      return;
    }

    const items = this.store.getCartItems();
    if (items.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }

    document.getElementById("modal-overlay").classList.add("active");
    document.getElementById("payment-modal").style.display = "block";
  },

  handlePayment() {
    const paymentMethod = document.querySelector(
      'input[name="payment"]:checked',
    ).value;
    const items = this.store.getCartItems();
    const subtotal = items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );
    const total = subtotal + 30000;

    // Xác định phương thức thanh toán
    let paymentMethodText;
    if (paymentMethod === "momo") {
      paymentMethodText = "Momo";
    } else if (paymentMethod === "ewallet") {
      paymentMethodText = "Ví Điện Tử";
    } else {
      paymentMethodText = "Thẻ Tín Dụng/Ghi Nợ";
    }

    const order = this.store.createOrder({
      items: items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      })),
      subtotal,
      shipping: 30000,
      total,
      paymentMethod: paymentMethodText,
      shippingAddress: this.store.currentUser.address,
    });

    this.store.clearCart();
    this.updateBadges();
    this.closeModal();
    this.showNotification("Đặt hàng thành công!");
    this.renderCartPage();
  },

  // Review
  showReviewModal(productId) {
    if (!this.store.currentUser) {
      alert("Vui lòng đăng nhập để đánh giá!");
      return;
    }
    this.currentProductId = productId;
    document.getElementById("modal-overlay").classList.add("active");
    document.getElementById("review-modal").style.display = "block";
    document.getElementById("review-form").reset();
    this.setRating(5);
  },

  setRating(rating) {
    document.getElementById("review-rating").value = rating;
    document.querySelectorAll("#review-stars i").forEach((star, index) => {
      if (index < rating) {
        star.classList.add("active");
        star.classList.remove("far");
        star.classList.add("fas");
      } else {
        star.classList.remove("active");
        star.classList.remove("fas");
        star.classList.add("far");
      }
    });
  },

  handleSubmitReview() {
    const review = this.store.addReview({
      productId: this.currentProductId,
      title: document.getElementById("review-title").value,
      rating: parseInt(document.getElementById("review-rating").value),
      content: document.getElementById("review-content").value,
    });

    this.closeModal();
    this.showNotification("Đánh giá đã được gửi và đang chờ duyệt!");
  },

  // Return/Refund
  showReturnModal(orderId) {
    this.currentOrderId = orderId;
    document.getElementById("modal-overlay").classList.add("active");
    document.getElementById("return-modal").style.display = "block";
    document.getElementById("return-form").reset();
  },

  handleReturnRequest() {
    const order = this.store.requestReturn(this.currentOrderId, {
      reason: document.getElementById("return-reason").value,
      description: document.getElementById("return-description").value,
      sealIntact: document.getElementById("return-seal").checked,
    });

    if (order) {
      this.closeModal();
      this.showNotification("Yêu cầu đổi trả đã được gửi!");
      this.renderOrdersPage();
    }
  },

  // User Actions
  handleLogin() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const user = this.store.loginUser(email, password);
    if (user) {
      this.loadUserState();
      this.showNotification("Đăng nhập thành công!");
      this.switchTab("profile");
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  },

  handleRegister() {
    const usernameInput = document.getElementById("register-username");
    const emailInput = document.getElementById("register-email");
    const passwordInput = document.getElementById("register-password");
    const confirmPasswordInput = document.getElementById(
      "register-confirm-password",
    );

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // 1️⃣ Không được để trống
    if (!username) {
      alert("Tài khoản không được để trống");
      usernameInput.focus();
      return;
    }

    if (!email) {
      alert("Email không được để trống");
      emailInput.focus();
      return;
    }

    if (!password) {
      alert("Mật khẩu không được để trống");
      passwordInput.focus();
      return;
    }

    if (!confirmPassword) {
      alert("Vui lòng nhập xác nhận mật khẩu");
      confirmPasswordInput.focus();
      return;
    }

    // 2️⃣ Tài khoản
    if (username.length < 5) {
      alert("Tài khoản phải có trên 5 ký tự");
      usernameInput.focus();
      return;
    }

    if (username.length > 25) {
      alert("Tài khoản phải có dưới 25 ký tự");
      usernameInput.focus();
      return;
    }

    if (username.includes(" ")) {
      alert("Tài khoản không được chứa dấu cách");
      usernameInput.focus();
      return;
    }

    if (/[^a-zA-Z0-9]/.test(username)) {
      alert("Tài khoản không được chứa ký tự đặc biệt");
      usernameInput.focus();
      return;
    }

    // 3️⃣ Mật khẩu
    if (password.length < 5) {
      alert("Mật khẩu phải có trên 5 ký tự");
      passwordInput.focus();
      return;
    }

    if (password.length > 25) {
      alert("Mật khẩu phải có dưới 25 ký tự");
      passwordInput.focus();
      return;
    }

    if (password.includes(" ")) {
      alert("Mật khẩu không được chứa dấu cách");
      passwordInput.focus();
      return;
    }

    // 4️⃣ Email
    if (!email.endsWith("@email.com")) {
      alert("Email phải có đuôi @email.com");
      emailInput.focus();
      return;
    }

    const emailName = email.replace("@email.com", "");

    if (emailName.length < 5) {
      alert("Phần trước @email.com phải có trên 5 ký tự");
      emailInput.focus();
      return;
    }

    // ❌ Không dấu, không ký tự đặc biệt (chỉ a-z A-Z 0-9)
    if (!/^[a-zA-Z0-9]+$/.test(emailName)) {
      alert(
        "Phần trước @email.com chỉ được chứa chữ cái không dấu và số, không được chứa dấu tiếng Việt hoặc ký tự đặc biệt",
      );
      emailInput.focus();
      return;
    }

    // 5️⃣ Xác nhận mật khẩu
    if (password !== confirmPassword) {
      alert("Xác nhận mật khẩu không khớp");
      confirmPasswordInput.focus();
      return;
    }

    // ✅ Đăng ký thành công
    const user = this.store.registerUser({
      name: username,
      email: email,
      password: password,
      address: null,
      phone: "",
    });

    this.store.loginUser(user.email, user.password);
    this.loadUserState();
    this.showNotification("Đăng ký thành công!");
    this.switchTab("profile");
  },

  validateProfileField(fieldName, value) {
    const errors = [];

    switch (fieldName) {
      case "name":
        if (!value) errors.push("Họ và tên không được để trống");
        else if (value.length < 5)
          errors.push("Họ và tên phải có trên 5 ký tự");
        else if (value.length > 25)
          errors.push("Họ và tên phải có dưới 25 ký tự");
        else if (/[0-9]/.test(value))
          errors.push("Họ và tên không được chứa số");
        else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(value))
          errors.push("Họ và tên không được chứa ký tự đặc biệt");
        break;

      case "phone":
        if (!value) errors.push("Số điện thoại không được để trống");
        else if (value.includes(" "))
          errors.push("Số điện thoại không được chứa dấu cách");
        else if (!value.startsWith("0"))
          errors.push("Số điện thoại phải bắt đầu bằng số 0");
        else if (!/^\d+$/.test(value))
          errors.push("Số điện thoại chỉ được chứa chữ số");
        else if (value.length !== 10)
          errors.push("Số điện thoại phải có đúng 10 chữ số");
        break;

      case "email":
        if (!value) errors.push("Email không được để trống");
        else if (!value.endsWith("@email.com"))
          errors.push("Email phải có đuôi @email.com");
        else {
          const emailName = value.replace("@email.com", "");
          if (emailName.length < 5)
            errors.push("Phần trước @email.com phải có trên 5 ký tự");
          else if (!/[a-zA-Z]/.test(emailName))
            errors.push("Phần trước @email.com phải có ít nhất 1 chữ cái");
          else if (/[À-ỹ]/.test(emailName))
            errors.push("Phần trước @email.com không được chứa dấu tiếng Việt");
          else if (!/^[a-zA-Z0-9]+$/.test(emailName))
            errors.push("Phần trước @email.com không được chứa ký tự đặc biệt");
        }
        break;

      case "street":
        if (!value) errors.push("Số nhà & tên đường không được để trống");
        else if (!/^[a-zA-ZÀ-ỹ0-9\s]+$/.test(value))
          errors.push("Số nhà & tên đường không được chứa ký tự đặc biệt");
        break;

      case "ward":
        if (!value) errors.push("Phường / Xã không được để trống");
        else if (/[0-9]/.test(value))
          errors.push("Phường / Xã không được chứa số");
        else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(value))
          errors.push("Phường / Xã không được chứa ký tự đặc biệt");
        break;

      case "district":
        if (!value) errors.push("Quận / Huyện không được để trống");
        else if (/[0-9]/.test(value))
          errors.push("Quận / Huyện không được chứa số");
        else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(value))
          errors.push("Quận / Huyện không được chứa ký tự đặc biệt");
        break;

      case "city":
        if (!value) errors.push("Tỉnh / Thành phố không được để trống");
        else if (/[0-9]/.test(value))
          errors.push("Tỉnh / Thành phố không được chứa số");
        else if (!/^[a-zA-ZÀ-ỹ\s]+$/.test(value))
          errors.push("Tỉnh / Thành phố không được chứa ký tự đặc biệt");
        break;
    }

    return errors;
  },

  displayFieldError(fieldName, errorMessages) {
    const errorElement = document.getElementById(`error-${fieldName}`);
    const inputElement = document.getElementById(`profile-${fieldName}`);

    if (errorElement) {
      if (errorMessages.length > 0) {
        errorElement.textContent = errorMessages[0];
        inputElement.classList.add("input-error");
      } else {
        errorElement.textContent = "";
        inputElement.classList.remove("input-error");
      }
    }
  },

  handleUpdateProfile() {
    const fields = [
      "name",
      "phone",
      "email",
      "street",
      "ward",
      "district",
      "city",
    ];
    let hasErrors = false;

    // Clear previous success message
    const successMessage = document.getElementById("success-message");
    if (successMessage) successMessage.textContent = "";

    // Validate all fields
    for (const field of fields) {
      const input = document.getElementById(`profile-${field}`);
      const value = input.value.trim();
      const errors = this.validateProfileField(field, value);

      this.displayFieldError(field, errors);

      if (errors.length > 0) {
        hasErrors = true;
      }
    }

    // If there are errors, stop here
    if (hasErrors) {
      return;
    }

    // Get values
    const nameInput = document.getElementById("profile-name");
    const phoneInput = document.getElementById("profile-phone");
    const emailInput = document.getElementById("profile-email");
    const streetInput = document.getElementById("profile-street");
    const wardInput = document.getElementById("profile-ward");
    const districtInput = document.getElementById("profile-district");
    const cityInput = document.getElementById("profile-city");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const street = streetInput.value.trim();
    const ward = wardInput.value.trim();
    const district = districtInput.value.trim();
    const city = cityInput.value.trim();

    const address = {
      street,
      ward,
      district,
      city,
      full: `${street}, ${ward}, ${district}, ${city}`,
    };

    const user = this.store.updateUserProfile(this.store.currentUser.id, {
      name,
      phone,
      email,
      address,
    });

    if (user) {
      this.loadUserState();
      if (successMessage)
        successMessage.textContent = "Cập nhật thông tin thành công!";
      // Clear error messages on success
      for (const field of fields) {
        this.displayFieldError(field, []);
      }
    }
  },
  handleLogout() {
    this.store.logoutUser();
    this.loadUserState();
    this.closeUserMenu();
    this.showNotification("Đã đăng xuất!");
    this.navigateToPage("home");
  },

  // User Menu Toggle
  toggleUserMenu() {
    const userMenu = document.querySelector(".user-menu");
    if (userMenu) {
      userMenu.classList.toggle("active");
    }
  },

  closeUserMenu() {
    const userMenu = document.querySelector(".user-menu");
    if (userMenu) {
      userMenu.classList.remove("active");
    }
  },

  // Utility
  updateBadges() {
    const cartCount = this.store.cart.reduce(
      (sum, item) => sum + item.quantity,
      0,
    );
    const wishlistCount = this.store.wishlist.length;
    document.getElementById("cart-badge").textContent = cartCount;
    document.getElementById("wishlist-badge").textContent = wishlistCount;
  },

  formatPrice(price) {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  },

  closeModal() {
    document.getElementById("modal-overlay").classList.remove("active");
    document
      .querySelectorAll(".modal")
      .forEach((m) => (m.style.display = "none"));
  },

  showNotification(message) {
    // Simple notification - can be enhanced
    const notification = document.createElement("div");
    notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--success-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-lg);
            z-index: 3000;
            animation: slideIn 0.3s;
        `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.animation = "slideOut 0.3s";
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  },
};

// Initialize app when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => app.init());
} else {
  app.init();
}

// Export for external use (API access)
window.ecommerceAPI = {
  getProducts: (filters) => app.store.getProducts(filters),
  getProduct: (id) => app.store.getProduct(id),
  generateCatalogXML: (filters) => app.store.generateMiniCatalogXML(filters),
  addThirdPartyCatalog: (data) => app.store.addThirdPartyCatalog(data),
  approveReview: (id) => app.store.approveReview(id),
  rejectReview: (id) => app.store.rejectReview(id),
  addEditorialReview: (data) => app.store.addEditorialReview(data),
  updateOrderStatus: (id, status) => app.store.updateOrderStatus(id, status),
};
