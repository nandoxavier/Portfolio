class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        
        this.handleClick = this.handleClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    
    handleLinkClick() {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
    }

    
    addClickEvent() {
        
        this.mobileMenu.addEventListener("click", this.handleClick);

        
        this.navLinks.forEach((link) => {
            link.addEventListener("click", this.handleLinkClick);
        });
    }

    
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            if (this.navList.classList.contains(this.activeClass)) {
                
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            } else {
                
                link.style.animation = "";
            }
        });
    }

    
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}


const mobileNavbar = new MobileNavbar(
    ".mobile-menu", 
    ".nav-list",    
    ".nav-list li"  
);
mobileNavbar.init();

