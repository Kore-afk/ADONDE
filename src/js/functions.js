/* ==========================================
   ADONDE CLIENT-SIDE ENGINE (localStorage)
   ========================================== */

// --- Default Mock Data ---
const DEFAULT_EVENTS = [
    {
        id: 1,
        title: "Fiesta de Bienvenida 2026",
        date: "30 de septiembre, 2026",
        location: "Auditorio Principal",
        description: "¡Gran fiesta para dar la bienvenida a los nuevos estudiantes! Música en vivo, comida gratis y el mejor ambiente para hacer amigos.",
        votes: 42,
        category: "Fiesta",
        subCategory: "Social",
        userVoted: null // 'up', 'down', or null
    },
    {
        id: 2,
        title: "Torneo de Fútbol 7",
        date: "05 de octubre, 2026",
        location: "Campo Deportivo Norte",
        description: "Torneo interuniversitario. Inscribe a tu equipo en la oficina de deportes. ¡Grandes premios para los ganadores!",
        votes: 28,
        category: "Deportes",
        subCategory: "Competencia",
        userVoted: null
    },
    {
        id: 3,
        title: "Hackathon ADONDE 2026",
        date: "12 de octubre, 2026",
        location: "Laboratorio de Cómputo C",
        description: "36 horas para desarrollar soluciones innovadoras. Almuerzos incluidos, mentores del sector y premios en efectivo.",
        votes: 35,
        category: "Académico",
        subCategory: "Tecnología",
        userVoted: null
    },
    {
        id: 4,
        title: "Feria de Empleo y Prácticas",
        date: "18 de octubre, 2026",
        location: "Explanada del Campus",
        description: "Conéctate con más de 30 empresas líderes buscando talento joven. Trae tu currículum impreso.",
        votes: 50,
        category: "Académico",
        subCategory: "Profesional",
        userVoted: null
    }
];

const DEFAULT_PRODUCTS = [
    {
        id: 1,
        title: "Laptop HP Pavilion",
        category: "Electrónicos",
        description: "Intel i5, 8GB RAM, 256GB SSD. Estética 9.5/10. Ideal para clases, batería de larga duración. Incluye cargador.",
        price: 8999,
        status: "Nuevo",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        title: "Pack Libros Ingeniería",
        category: "Libros",
        description: "Cálculo Integral, Física y Química Universitaria. Todos en excelentes condiciones, sin anotaciones.",
        price: 599,
        status: "Usado",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        title: "Hoodie Oficial U",
        category: "Ropa",
        description: "Sudadera de algodón abrigadora con bordado de la universidad. Tallas disponibles: S y M.",
        price: 399,
        status: "Oferta",
        image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        title: "Termo Acero Inoxidable",
        category: "Accesorios",
        description: "Termo de 1 Litro con doble aislamiento. Conserva bebidas frías hasta por 24 hrs y calientes por 12 hrs.",
        price: 249,
        status: "Nuevo",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=60"
    }
];

const DEFAULT_NOTIFICATIONS = [
    {
        id: 1,
        type: "Feria",
        title: "Nuevo evento cerca: Feria de Empleo",
        desc: "¡No te pierdas la oportunidad de encontrar tu primera práctica profesional!",
        time: "Ahora",
        place: "Campus Central",
        unread: true,
        iconClass: "fas fa-briefcase",
        bgClass: "bg-primary"
    },
    {
        id: 2,
        type: "Invitacion",
        title: "Invitación de @usuario: Proyecto X",
        desc: "Te han invitado a asistir a este gran festival este fin de semana.",
        time: "2h",
        unread: true,
        iconClass: "fas fa-glass-cheers",
        bgClass: "bg-success",
        isInvite: true
    },
    {
        id: 3,
        type: "Marketplace",
        title: "Mensaje nuevo: Laptop HP",
        desc: "Un comprador interesado pregunta si la laptop todavía está disponible.",
        time: "5h",
        unread: true,
        iconClass: "fas fa-store",
        bgClass: "bg-warning",
        isMarketReply: true
    }
];

const DEFAULT_PROFILE = {
    name: "Sofía Montenegro",
    bio: "Estudiante entusiasta de Ingeniería en Sistemas. Amante del café, la tecnología y el diseño UI/UX. Co-fundadora del club de programación de la U.",
    email: "sofia.montenegro@universidad.edu",
    phone: "+52 55 1234 5678",
    university: "Universidad Tecnológica Metropolitana",
    career: "Ingeniería en Sistemas Computacionales",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
};

// --- Initialization ---
function initStorage() {
    if (!localStorage.getItem("adonde_events")) {
        localStorage.setItem("adonde_events", JSON.stringify(DEFAULT_EVENTS));
    }
    if (!localStorage.getItem("adonde_products")) {
        localStorage.setItem("adonde_products", JSON.stringify(DEFAULT_PRODUCTS));
    }
    if (!localStorage.getItem("adonde_notifications")) {
        localStorage.setItem("adonde_notifications", JSON.stringify(DEFAULT_NOTIFICATIONS));
    }
    if (!localStorage.getItem("adonde_profile")) {
        localStorage.setItem("adonde_profile", JSON.stringify(DEFAULT_PROFILE));
    }
}

// Ensure init executes on load
initStorage();

// --- STATE GETTERS & SETTERS ---
function getEvents() { return JSON.parse(localStorage.getItem("adonde_events")); }
function saveEvents(events) { localStorage.setItem("adonde_events", JSON.stringify(events)); }

function getProducts() { return JSON.parse(localStorage.getItem("adonde_products")); }
function saveProducts(products) { localStorage.setItem("adonde_products", JSON.stringify(products)); }

function getNotifications() { return JSON.parse(localStorage.getItem("adonde_notifications")); }
function saveNotifications(notifs) { localStorage.setItem("adonde_notifications", JSON.stringify(notifs)); }

function getProfile() { return JSON.parse(localStorage.getItem("adonde_profile")); }
function saveProfile(profile) { localStorage.setItem("adonde_profile", JSON.stringify(profile)); }

// --- RENDER DYNAMICS ---

document.addEventListener("DOMContentLoaded", () => {
    // Determine which page we are on and render appropriately
    if (document.getElementById("eventsContainer")) {
        setupEventsPage();
    }
    if (document.getElementById("productsContainer")) {
        setupMarketplacePage();
    }
    if (document.getElementById("notificationsContainer")) {
        setupNotificationsPage();
    }
    if (document.getElementById("profileContainer")) {
        setupProfilePage();
    }
    
    // Global Floating Navigation Indicator
    highlightActiveNavLink();
});

// Highlight Bottom Navigation active page
function highlightActiveNavLink() {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll(".navbar.fixed-bottom a");
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (path.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
}

// ==========================================
// 4. EVENTS PAGE LOGIC
// ==========================================

let activeEventCategory = "Todo";
let activeEventSort = "populares"; // 'populares' or 'recientes'

function setupEventsPage() {
    renderEvents();
    
    // Category click listeners
    const categoryBadges = document.querySelectorAll(".col-md-4 .badge, .col-md-4 a.badge");
    categoryBadges.forEach(badge => {
        badge.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Remove highlight from all badges
            categoryBadges.forEach(b => {
                b.classList.remove("border", "border-white");
                b.style.transform = "none";
            });
            
            // Highlight current
            badge.classList.add("border", "border-white");
            badge.style.transform = "scale(1.05)";
            
            activeEventCategory = badge.textContent.trim();
            if (activeEventCategory === "Fiestas") activeEventCategory = "Fiesta";
            if (activeEventCategory === "Categorías" || activeEventCategory === "Social") activeEventCategory = "Social";
            if (activeEventCategory === "Académico") activeEventCategory = "Académico";
            if (activeEventCategory === "Cultural") activeEventCategory = "Cultural";
            if (activeEventCategory === "Deportes") activeEventCategory = "Deportes";
            if (activeEventCategory === "Música") activeEventCategory = "Música";
            
            renderEvents();
        });
    });
    
    // Sort dropdown click listeners
    const filterDropdownItems = document.querySelectorAll("#filterDropdown + .dropdown-menu .dropdown-item");
    filterDropdownItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const text = item.textContent.trim();
            if (text.includes("populares")) {
                activeEventSort = "populares";
            } else if (text.includes("recientes")) {
                activeEventSort = "recientes";
            } else {
                activeEventSort = "populares";
            }
            renderEvents();
        });
    });

    // Create Event Form Submission
    const createEventForm = document.getElementById("createEventForm");
    if (createEventForm) {
        createEventForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const inputs = createEventForm.querySelectorAll("input, textarea, select");
            const title = inputs[0].value;
            const rawDate = inputs[1].value;
            const location = inputs[2].value;
            const description = inputs[3].value;
            const category = inputs[4].value;
            
            // Format Date beautifully
            const dateObj = new Date(rawDate);
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const dateStr = isNaN(dateObj.getTime()) ? rawDate : dateObj.toLocaleDateString('es-ES', options);

            const newEvent = {
                id: Date.now(),
                title: title,
                date: dateStr,
                location: location,
                description: description,
                votes: 0,
                category: category,
                subCategory: "Estudiante",
                userVoted: null
            };
            
            const events = getEvents();
            events.unshift(newEvent);
            saveEvents(events);
            
            // Reset form and close modal
            createEventForm.reset();
            const modalElement = document.getElementById("createEventModal");
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) modalInstance.hide();
            
            // Show dynamic success toast/notification
            showToast("¡Evento creado con éxito!");
            
            renderEvents();
        });
    }
}

function renderEvents() {
    const eventsContainer = document.getElementById("eventsContainer");
    if (!eventsContainer) return;
    
    let events = getEvents();
    
    // 1. Filter by Category
    if (activeEventCategory !== "Todo") {
        events = events.filter(ev => ev.category.toLowerCase() === activeEventCategory.toLowerCase() || ev.subCategory.toLowerCase() === activeEventCategory.toLowerCase());
    }
    
    // 2. Sort by choice
    if (activeEventSort === "populares") {
        events.sort((a, b) => b.votes - a.votes);
    } else {
        // Since we don't have true timestamp parsing for dates, sort newer IDs first as fallback
        events.sort((a, b) => b.id - a.id);
    }
    
    eventsContainer.innerHTML = "";
    
    if (events.length === 0) {
        eventsContainer.innerHTML = `
            <div class="card p-5 text-center bg-glass">
                <i class="fas fa-calendar-times mb-3 text-muted" style="font-size: 3rem;"></i>
                <h4>No hay eventos programados</h4>
                <p class="text-muted">¡Sé el primero en organizar un evento para tu comunidad!</p>
            </div>
        `;
        return;
    }
    
    events.forEach(ev => {
        const upvotedClass = ev.userVoted === "up" ? "votado" : "";
        const downvotedClass = ev.userVoted === "down" ? "votado" : "";
        
        const cardHtml = `
            <div class="card mb-4 shadow-sm" data-id="${ev.id}">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="card-title mb-0" style="font-size: 1.35rem; font-weight: 700; color: #ffffff;">${ev.title}</h5>
                        <div class="votacion">
                            <button class="btn btn-link flecha-arriba ${upvotedClass}" onclick="handleVoteClick(${ev.id}, 'up')">
                                <i class="fas fa-arrow-up"></i>
                            </button>
                            <span class="votes" style="color: #ffffff;">${ev.votes}</span>
                            <button class="btn btn-link flecha-abajo ${downvotedClass}" onclick="handleVoteClick(${ev.id}, 'down')">
                                <i class="fas fa-arrow-down"></i>
                            </button>
                        </div>
                    </div>
                    <p class="text-muted" style="font-size: 0.9rem;">
                        <i class="fas fa-calendar-alt me-2" style="color: var(--accent-blue);"></i>${ev.date}
                        <i class="fas fa-map-marker-alt ms-3 me-2" style="color: var(--accent-purple);"></i>${ev.location}
                    </p>
                    <p class="card-text text-secondary" style="font-size: 1rem; line-height: 1.5;">${ev.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-4">
                        <div>
                            <span class="badge bg-primary me-2">${ev.category}</span>
                            <span class="badge bg-secondary">${ev.subCategory}</span>
                        </div>
                        <button class="btn btn-outline-primary btn-sm px-3 py-2" onclick="handleAttend(${ev.id}, this)">
                            <i class="fas fa-user-plus me-1"></i>Asistir
                        </button>
                    </div>
                </div>
            </div>
        `;
        eventsContainer.innerHTML += cardHtml;
    });
}

function handleVoteClick(eventId, direction) {
    const events = getEvents();
    const ev = events.find(e => e.id === eventId);
    if (!ev) return;
    
    if (ev.userVoted === direction) {
        // Toggle off the vote
        ev.votes += (direction === "up" ? -1 : 1);
        ev.userVoted = null;
    } else {
        // If changing direction
        if (ev.userVoted !== null) {
            ev.votes += (direction === "up" ? 2 : -2);
        } else {
            ev.votes += (direction === "up" ? 1 : -1);
        }
        ev.userVoted = direction;
    }
    
    saveEvents(events);
    renderEvents();
}

function handleAttend(eventId, btn) {
    const isAttending = btn.classList.contains("btn-success");
    if (isAttending) {
        btn.classList.remove("btn-success");
        btn.classList.add("btn-outline-primary");
        btn.innerHTML = `<i class="fas fa-user-plus me-1"></i>Asistir`;
        showToast("Ya no asistirás a este evento.");
    } else {
        btn.classList.remove("btn-outline-primary");
        btn.classList.add("btn-success");
        btn.style.color = "#ffffff";
        btn.innerHTML = `<i class="fas fa-check me-1"></i>¡Asistiendo!`;
        showToast("¡Te has registrado como asistente!");
    }
}

// ==========================================
// 5. MARKETPLACE LOGIC
// ==========================================

let activeMarketCategory = "Todo";
let marketSearchQuery = "";

function setupMarketplacePage() {
    renderProducts();
    
    // Category Button Filters
    const categoryButtons = document.querySelectorAll(".d-flex.gap-3.overflow-auto button");
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active", "btn-primary"));
            categoryButtons.forEach(b => b.classList.add("btn-outline-primary"));
            
            btn.classList.remove("btn-outline-primary");
            btn.classList.add("active", "btn-primary");
            btn.style.color = "#ffffff";
            
            activeMarketCategory = btn.textContent.trim();
            renderProducts();
        });
    });
    
    // Realtime Search Input
    const searchInput = document.querySelector(".input-group input");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            marketSearchQuery = e.target.value.toLowerCase();
            renderProducts();
        });
    }
    
    // Search Button
    const searchBtn = document.querySelector(".input-group button");
    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", () => {
            marketSearchQuery = searchInput.value.toLowerCase();
            renderProducts();
        });
    }

    // Sell Product Form Submission
    const newProductForm = document.getElementById("newProductForm");
    if (newProductForm) {
        newProductForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const inputs = newProductForm.querySelectorAll("input, select, textarea");
            const title = inputs[0].value;
            const category = inputs[1].value;
            const price = parseFloat(inputs[2].value);
            const description = inputs[3].value;
            
            // Standard stylish fallback picture for student added items
            const randomId = Math.floor(Math.random() * 1000);
            const sampleImage = `https://picsum.photos/id/${randomId % 100}/600/400`;

            const newProduct = {
                id: Date.now(),
                title: title,
                category: category,
                price: price,
                description: description,
                status: "Nuevo",
                image: sampleImage
            };
            
            const products = getProducts();
            products.unshift(newProduct);
            saveProducts(products);
            
            newProductForm.reset();
            const modalElement = document.getElementById("newProductModal");
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) modalInstance.hide();
            
            showToast("¡Producto publicado correctamente!");
            renderProducts();
        });
    }
}

function renderProducts() {
    const productsContainer = document.getElementById("productsContainer");
    if (!productsContainer) return;
    
    let products = getProducts();
    
    // 1. Category Filter
    if (activeMarketCategory !== "Todo") {
        products = products.filter(p => p.category.toLowerCase() === activeMarketCategory.toLowerCase());
    }
    
    // 2. Search Query Filter
    if (marketSearchQuery !== "") {
        products = products.filter(p => p.title.toLowerCase().includes(marketSearchQuery) || p.description.toLowerCase().includes(marketSearchQuery));
    }
    
    productsContainer.innerHTML = "";
    
    if (products.length === 0) {
        productsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-box-open mb-3 text-muted" style="font-size: 3rem;"></i>
                <h4>No se encontraron productos</h4>
                <p class="text-muted">Intenta buscar otra palabra clave o selecciona otra categoría.</p>
            </div>
        `;
        return;
    }
    
    products.forEach(p => {
        let badgeBg = "bg-primary";
        if (p.status === "Nuevo") badgeBg = "bg-success";
        if (p.status === "Usado") badgeBg = "bg-info";
        if (p.status === "Oferta") badgeBg = "bg-danger";
        if (p.status === "Destacado") badgeBg = "bg-warning";
        
        const cardHtml = `
            <div class="col-md-3">
                <div class="card h-100 shadow-sm" style="overflow: hidden;">
                    <div style="height: 180px; overflow: hidden; position: relative;">
                        <img src="${p.image}" class="card-img-top" alt="${p.title}" style="object-fit: cover; width: 100%; height: 100%;">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-between">
                        <div>
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <span class="badge ${badgeBg}">${p.status}</span>
                                <small class="text-muted"><i class="fas fa-tags me-1"></i>${p.category}</small>
                            </div>
                            <h5 class="card-title text-truncate" style="color: #ffffff; font-size: 1.15rem; font-weight: 700;" title="${p.title}">${p.title}</h5>
                            <p class="card-text text-secondary" style="font-size: 0.9rem; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${p.description}</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="h5 mb-0" style="color: #ffffff; font-weight: 800;">$${parseFloat(p.price).toLocaleString()}</span>
                            <button class="btn btn-outline-primary btn-sm px-3" onclick="contactSeller('${p.title}')">
                                <i class="fas fa-comment me-1"></i>Contactar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += cardHtml;
    });
}

function contactSeller(productName) {
    // Beautiful mock contact initiation
    showToast(`¡Mensaje enviado al vendedor de "${productName}"! Recibirás respuesta pronto.`);
}

// ==========================================
// 6. NOTIFICATIONS PAGE LOGIC
// ==========================================

function setupNotificationsPage() {
    renderNotifications();
    
    // Mark All as Read button
    const markAllReadBtn = document.querySelector(".navbar .btn-outline-secondary");
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener("click", () => {
            const notifs = getNotifications();
            notifs.forEach(n => n.unread = false);
            saveNotifications(notifs);
            renderNotifications();
            showToast("Todas las notificaciones marcadas como leídas.");
        });
    }
    
    // Notification Filter group
    const filterButtons = document.querySelectorAll(".btn-group button");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active", "btn-primary"));
            filterButtons.forEach(b => b.classList.add("btn-outline-primary"));
            
            btn.classList.remove("btn-outline-primary");
            btn.classList.add("active", "btn-primary");
            btn.style.color = "#ffffff";
            
            const filter = btn.textContent.trim().toLowerCase();
            renderNotifications(filter);
        });
    });
}

function renderNotifications(filter = "todas") {
    const listGroup = document.getElementById("notificationsContainer");
    if (!listGroup) return;
    
    let notifs = getNotifications();
    
    // Filter
    if (filter !== "todas") {
        if (filter === "eventos") {
            notifs = notifs.filter(n => n.type.toLowerCase() === "feria" || n.type.toLowerCase() === "invitacion");
        } else if (filter === "marketplace") {
            notifs = notifs.filter(n => n.type.toLowerCase() === "marketplace");
        } else {
            notifs = notifs.filter(n => n.type.toLowerCase() === filter);
        }
    }
    
    listGroup.innerHTML = "";
    
    if (notifs.length === 0) {
        listGroup.innerHTML = `
            <div class="list-group-item text-center py-5">
                <i class="fas fa-bell-slash mb-3 text-muted" style="font-size: 2.5rem;"></i>
                <h5>No tienes notificaciones</h5>
                <p class="text-muted">¡Te avisaremos cuando ocurra algo interesante!</p>
            </div>
        `;
        return;
    }
    
    notifs.forEach(n => {
        const bgUnread = n.unread ? "style='background-color: rgba(255,255,255,0.03) !important; border-left: 3px solid var(--accent-blue) !important;'" : "";
        
        let actionsHtml = "";
        if (n.isInvite) {
            actionsHtml = `
                <div class="btn-group btn-group-sm mt-2">
                    <button class="btn btn-success btn-sm px-3" style="color: #ffffff;" onclick="handleNotificationAction(${n.id}, 'aceptar', this)">Aceptar</button>
                    <button class="btn btn-danger btn-sm px-3" style="color: #ffffff;" onclick="handleNotificationAction(${n.id}, 'rechazar', this)">Rechazar</button>
                </div>
            `;
        } else if (n.isMarketReply) {
            actionsHtml = `
                <button class="btn btn-outline-primary btn-sm mt-2 px-3" onclick="contactSeller('Venta de Laptop')">
                    <i class="fas fa-reply me-1"></i>Responder
                </button>
            `;
        }
        
        const itemHtml = `
            <div class="list-group-item" ${bgUnread} id="notif-card-${n.id}">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <div class="${n.bgClass} bg-gradient text-white rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 44px; height: 44px;">
                            <i class="${n.iconClass}" style="font-size: 1.15rem;"></i>
                        </div>
                    </div>
                    <div class="flex-grow-1 ms-3">
                        <div class="d-flex w-100 justify-content-between align-items-center">
                            <h6 class="mb-1" style="font-weight: 700; color: #ffffff;">${n.title}</h6>
                            <div class="d-flex align-items-center gap-2">
                                <small class="text-muted">${n.time}</small>
                                <button class="btn btn-link text-muted p-0 border-0" onclick="deleteNotification(${n.id})" style="font-size: 0.85rem;"><i class="fas fa-times"></i></button>
                            </div>
                        </div>
                        <p class="mb-1 text-secondary" style="font-size: 0.95rem;">${n.desc}</p>
                        ${n.place ? `<small class="text-muted"><i class="fas fa-map-marker-alt me-1"></i>${n.place}</small>` : ""}
                        ${actionsHtml}
                    </div>
                </div>
            </div>
        `;
        listGroup.innerHTML += itemHtml;
    });
}

function handleNotificationAction(notifId, action, btn) {
    const card = document.getElementById(`notif-card-${notifId}`);
    if (card) {
        card.style.opacity = "0.5";
        const btnGroup = btn.closest(".btn-group");
        if (btnGroup) {
            if (action === "aceptar") {
                btnGroup.innerHTML = "<span class='badge bg-success'><i class='fas fa-check me-1'></i>Aceptado</span>";
                showToast("Invitación aceptada.");
            } else {
                btnGroup.innerHTML = "<span class='badge bg-danger'><i class='fas fa-times me-1'></i>Rechazado</span>";
                showToast("Invitación rechazada.");
            }
        }
        
        // Mark as read
        const notifs = getNotifications();
        const n = notifs.find(item => item.id === notifId);
        if (n) {
            n.unread = false;
            saveNotifications(notifs);
        }
    }
}

function deleteNotification(notifId) {
    const card = document.getElementById(`notif-card-${notifId}`);
    if (card) {
        card.style.transform = "translateX(50px)";
        card.style.opacity = "0";
        setTimeout(() => {
            const notifs = getNotifications();
            const filtered = notifs.filter(item => item.id !== notifId);
            saveNotifications(filtered);
            renderNotifications();
        }, 300);
    }
}

// ==========================================
// 7. PROFILE PAGE LOGIC
// ==========================================

function setupProfilePage() {
    renderProfile();
    
    // Edit Profile Modal Submission
    const editProfileForm = document.getElementById("editProfileForm");
    if (editProfileForm) {
        editProfileForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const inputs = editProfileForm.querySelectorAll("input, textarea");
            const name = inputs[0].value;
            const email = inputs[1].value;
            const phone = inputs[2].value;
            const university = inputs[3].value;
            const career = inputs[4].value;
            const bio = inputs[5].value;
            
            const currentProfile = getProfile();
            
            const updatedProfile = {
                name: name,
                bio: bio,
                email: email,
                phone: phone,
                university: university,
                career: career,
                image: currentProfile.image // keep existing image
            };
            
            saveProfile(updatedProfile);
            
            const modalElement = document.getElementById("editProfileModal");
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) modalInstance.hide();
            
            showToast("¡Perfil actualizado con éxito!");
            renderProfile();
        });
    }
}

function renderProfile() {
    const pContainer = document.getElementById("profileContainer");
    if (!pContainer) return;
    
    const prof = getProfile();
    
    // Fill the values in page
    pContainer.querySelector(".perfil-imagen").src = prof.image;
    pContainer.querySelector("h2.card-title").textContent = prof.name;
    pContainer.querySelector(".card-text.text-muted").textContent = prof.bio;
    
    const infoSection = pContainer.querySelector(".mb-4");
    infoSection.innerHTML = `
        <p class="mb-2"><strong style="color: #ffffff;">Correo:</strong> <span class="text-secondary">${prof.email}</span></p>
        <p class="mb-2"><strong style="color: #ffffff;">Teléfono:</strong> <span class="text-secondary">${prof.phone}</span></p>
        <p class="mb-2"><strong style="color: #ffffff;">Universidad:</strong> <span class="text-secondary">${prof.university}</span></p>
        <p class="mb-2"><strong style="color: #ffffff;">Carrera:</strong> <span class="text-secondary">${prof.career}</span></p>
    `;
    
    // Also fill the modal inputs if edit modal exists
    const editModal = document.getElementById("editProfileModal");
    if (editModal) {
        const inputs = editModal.querySelectorAll("input, textarea");
        if (inputs.length >= 6) {
            inputs[0].value = prof.name;
            inputs[1].value = prof.email;
            inputs[2].value = prof.phone;
            inputs[3].value = prof.university;
            inputs[4].value = prof.career;
            inputs[5].value = prof.bio;
        }
    }
}


// ==========================================
// 8. TOAST NOTIFICATION UTILITY
// ==========================================

function showToast(message) {
    // Create toast container if it doesn't exist
    let toastContainer = document.getElementById("toast-container");
    if (!toastContainer) {
        toastContainer = document.createElement("div");
        toastContainer.id = "toast-container";
        toastContainer.style.position = "fixed";
        toastContainer.style.top = "20px";
        toastContainer.style.right = "20px";
        toastContainer.style.zIndex = "9999";
        document.body.appendChild(toastContainer);
    }
    
    const toast = document.createElement("div");
    toast.className = "glass-card";
    toast.style.background = "rgba(15, 22, 38, 0.9)";
    toast.style.color = "#ffffff";
    toast.style.padding = "12px 24px";
    toast.style.marginBottom = "10px";
    toast.style.borderRadius = "12px";
    toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5), 0 0 10px rgba(37,99,235,0.2)";
    toast.style.border = "1px solid rgba(255,255,255,0.1)";
    toast.style.display = "flex";
    toast.style.alignItems = "center";
    toast.style.gap = "10px";
    toast.style.transform = "translateY(-20px)";
    toast.style.opacity = "0";
    toast.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    
    toast.innerHTML = `
        <i class="fas fa-info-circle" style="color: var(--accent-blue);"></i>
        <span style="font-size: 0.95rem; font-weight: 600;">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.style.transform = "translateY(0)";
        toast.style.opacity = "1";
    }, 10);
    
    // Self-destruct
    setTimeout(() => {
        toast.style.transform = "translateY(-20px)";
        toast.style.opacity = "0";
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}
