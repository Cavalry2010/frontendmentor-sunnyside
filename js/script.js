"use strict";

class Sunnyside {
  nav = document.getElementsByTagName("nav");
  header = document.getElementsByTagName("header");
  mobileBtn = document.querySelector(".nav-mobile-btn");
  overlay = document.querySelector(".overlay");

  constructor() {
    this.init();
  }

  toggleMobileNav() {
    this.nav[0].classList.toggle("open");
    this.overlay.classList.toggle("hidden");
    document.documentElement.classList.toggle("scroll-lock");
  }

  assignStickyDeskNav() {
    console.log(this.header[0]);
    const obs = new IntersectionObserver(
      function (entries) {
        const entry = entries[0];
        console.log(entry);
        if (entry.isIntersecting === false) {
          this.nav[0].classList.add("sticky");
          this.header[0].style.paddingTop = "12.32rem";
        } else {
          this.nav[0].classList.remove("sticky");
          this.header[0].style.paddingTop = "0";
        }
      }.bind(this),
      {
        // In the viewport
        root: undefined,
        threshold: 0,
        rootMargin: "-80px",
      }
    );

    obs.observe(this.header[0]);
  }

  init() {
    this.mobileBtn.addEventListener("click", this.toggleMobileNav.bind(this));
    this.overlay.addEventListener("click", this.toggleMobileNav.bind(this));
    this.assignStickyDeskNav();
  }
}

const app = new Sunnyside();
