const tl = gsap.timeline({ default: { ease: 'power1.out' } });

tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 }); // stagger - to come up separately one by one
tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', { y: '-100%', duration: 1 }, "-=1" ); // "-=1" means to start 1 second faster...
tl.fromTo('nav', { opacity: 0}, { opacity: 1, duration: 1 });
tl.fromTo('.title', { opacity: 0}, { opacity: 1, duration: 1 }, "-=1" );