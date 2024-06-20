export const animatePageIn3 = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  if (bannerOne && bannerTwo) {
    const tl = gsap.timeline();
    tl.set([bannerOne, bannerTwo], {
      yPercent: 0,
    })
      .to(bannerOne, {
        yPercent: -100,
        duration: 0.75,
        ease: customEase,
      })
      .to(bannerTwo, {
        yPercent: -100,
        duration: 0.75,
        ease: customEase,
        delay: -0.5, // sync with bannerOne animation
      });
  }
};

export const animatePageOut3 = (href, router) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");

  if (bannerOne && bannerTwo) {
    const tl = gsap.timeline();
    tl.set([bannerOne, bannerTwo], {
      yPercent: 100,
    })
      .to(bannerOne, {
        yPercent: 0,
        duration: 0.75,
        ease: customEase,
      })
      .to(bannerTwo, {
        yPercent: 0,
        duration: 0.75,
        ease: customEase,
        delay: -0.5, // sync with bannerOne animation
        onComplete: () => {
          router.push(href);
        },
      });
  }
};

import gsap from "gsap";

const customEase = "custom,0.76,0,0.24,1";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  if (bannerOne && bannerTwo) {
    const tl = gsap.timeline();
    tl.set([bannerTwo, bannerOne], {
      yPercent: 0,
    }).to([bannerTwo, bannerOne], {
      yPercent: -100,
      stagger: 0.2,
      duration: 0.75,
      ease: customEase,
    });
  }
};

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");

  if (bannerOne && bannerTwo) {
    const tl = gsap.timeline();
    tl.set([bannerOne, bannerTwo], {
      yPercent: 100,
    }).to([bannerOne, bannerTwo], {
      yPercent: 0,
      stagger: 0.2,
      duration: 0.75,
      ease: customEase,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

export const animatePageIn2 = () => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  if (bannerOne && bannerTwo) {
    const tl = gsap.timeline();
    tl.set(bannerTwo, { opacity: 1, y: 0 })
      .to(bannerTwo, {
        opacity: 0,
        y: -100,
        duration: 0.75,
        delay: 0.35,
        ease: customEase,
      })
      .to(bannerTwo, { y: "47.5%", onComplete: () => {} });
  }
};

export const animatePageOut2 = (href, router) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");

  if (bannerOne && bannerTwo) {
    const tl = gsap.timeline();
    tl.set(bannerTwo, { opacity: 0, y: -100 })
      .to(bannerTwo, {
        opacity: 1,
        y: "40%",
        duration: 0.5,
        delay: 0.4,
        ease: customEase,
      })
      .to(bannerTwo, {
        y: 0,
        onComplete: () => {
          router.push(href);
        },
      });
  }
};
