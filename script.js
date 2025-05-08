document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    const hi = document.getElementById('hi');
    const name = document.getElementById('name');
    const loading = document.getElementById('loading');
    const getStarted = document.getElementById('get-started');
    const seeJourneyBtn = document.getElementById('see-journey');
    const pickPathBtn = document.getElementById('pick-path');
    const intro = document.getElementById('intro');
    const timeline = document.getElementById('timeline');
    const menu = document.getElementById('menu');
    const backToTopBtn = document.getElementById('back-to-top');
    const summary = document.getElementById('summary');
    const education = document.getElementById('education');
    const techSkills = document.getElementById('tech-skills');
    const projects = document.getElementById('projects');
    const workExperience = document.getElementById('work-experience');
    const leadershipActivities = document.getElementById('leadership-activities');

    // Navigation History Stack
    let navHistory = [];

    // Function to Hide All Sections
    const hideAllSections = () => {
        getStarted.style.display = 'none';
        getStarted.style.opacity = 0;
        timeline.style.display = 'none';
        timeline.style.opacity = 0;
        menu.style.display = 'none';
        menu.style.opacity = 0;
        summary.style.display = 'none';
        summary.style.opacity = 0;
        education.style.display = 'none';
        education.style.opacity = 0;
        techSkills.style.display = 'none';
        techSkills.style.opacity = 0;
        projects.style.display = 'none';
        projects.style.opacity = 0;
        workExperience.style.display = 'none';
        workExperience.style.opacity = 0;
        leadershipActivities.style.display = 'none';
        leadershipActivities.style.opacity = 0;
        backToTopBtn.style.display = 'none';
        backToTopBtn.style.opacity = 0;
    };

    // Function to Show a Section
    const showSection = (section) => {
        section.style.display = 'block';
        setTimeout(() => {
            section.style.opacity = 1;
            backToTopBtn.style.display = 'block';
            setTimeout(() => {
                backToTopBtn.style.opacity = 1;
            }, 100);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    // Intro Animation
    setTimeout(() => {
        console.log('Showing Hi');
        hi.style.animation = 'slideLeft 2s ease forwards';
        hi.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        console.log('I am Mano falls, kicking Hi');
        name.style.animation = 'fallDown 1.5s ease forwards';
        name.style.opacity = 0;
        setTimeout(() => {
            hi.style.animation = 'slideDown 0.8s ease forwards';
            setTimeout(() => {
                hi.style.display = 'none';
            }, 800);
        }, 1000);
    }, 3000);

    setTimeout(() => {
        console.log('Loading slides in, kicking I am Mano');
        loading.style.animation = 'slideRight 1s ease forwards';
        loading.style.opacity = 0;
        setTimeout(() => {
            name.style.animation = 'slideLeftOut 0.8s ease forwards';
            setTimeout(() => {
                name.style.display = 'none';
            }, 800);
        }, 300);
    }, 5000);

    setTimeout(() => {
        console.log('Hiding Loading, showing Get Started');
        loading.style.animation = 'slideDown 0.8s ease forwards';
        setTimeout(() => {
            loading.style.display = 'none';
            intro.style.display = 'none';
            getStarted.style.display = 'block';
            setTimeout(() => {
                getStarted.style.opacity = 1;
            }, 100);
        }, 800);
    }, 6500);

    // Initialize Swiper for Timeline
    let swiper;
    const initSwiper = () => {
        swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    };

    // Show Timeline
    seeJourneyBtn.addEventListener('click', () => {
        navHistory.push('get-started');
        hideAllSections();
        timeline.style.display = 'block';
        setTimeout(() => {
            timeline.style.opacity = 1;
            initSwiper();
            init3DDataStructures(timeline);
        }, 100);
    });

    // Show Pick Your Path Menu
    pickPathBtn.addEventListener('click', () => {
        navHistory.push('get-started');
        hideAllSections();
        menu.style.display = 'block';
        setTimeout(() => {
            menu.style.opacity = 1;
            init3DDataStructures(menu);
        }, 100);
    });

    // Handle Menu Button Clicks
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            navHistory.push('menu');
            hideAllSections();
            const targetSection = document.getElementById(sectionId);
            showSection(targetSection);
            init3DDataStructures(targetSection);
        });
    });

    // Handle Back Button Clicks
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (navHistory.length > 0) {
                const previousSection = navHistory.pop();
                hideAllSections();
                const targetSection = document.getElementById(previousSection);
                showSection(targetSection);
                if (previousSection === 'timeline') {
                    initSwiper();
                }
                init3DDataStructures(targetSection);
            }
        });
    });

    // Back to Top Button
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Contact Form Submission (Placeholder)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I’ll get back to you soon!');
        contactForm.reset();
    });

    // Initialize 3D Data Structures
    const init3DDataStructures = (container) => {
        const canvases = container.querySelectorAll('.ds-canvas');
        canvases.forEach(canvas => {
            const dsType = canvas.getAttribute('data-ds');
            let scene, camera, renderer, object;

            // Set up Three.js Scene
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);

            // Add Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(5, 5, 5).normalize();
            scene.add(directionalLight);

            switch (dsType) {
                case 'cluster':
                    const clusterGroup = new THREE.Group();
                    for (let i = 0; i < 5; i++) {
                        const geometry = new THREE.SphereGeometry(0.3, 32, 32);
                        const material = new THREE.MeshPhongMaterial({ color: 0xD4AF37 });
                        const node = new THREE.Mesh(geometry, material);
                        node.position.set(
                            (Math.random() - 0.5) * 3,
                            (Math.random() - 0.5) * 3,
                            (Math.random() - 0.5) * 3
                        );
                        clusterGroup.add(node);

                        const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0xB8860B, side: THREE.BackSide });
                        const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
                        outlineMesh.scale.set(1.1, 1.1, 1.1);
                        node.add(outlineMesh);
                    }
                    object = clusterGroup;
                    break;
                // Add other case types as needed
            }

            canvas.addEventListener('click', () => {
                // Optional: Add interaction
            });

            scene.add(object);
            camera.position.z = 5;

            const animate = () => {
                requestAnimationFrame(animate);
                object.rotation.x += 0.005;
                object.rotation.y += 0.005;
                renderer.render(scene, camera);
            };

            animate();
        });
    };
// Your existing DOMContentLoaded code...
const slideshowImages = [
    'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg',
    'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg',
    'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg',
    'img16.jpg', 'img17.jpg', 'img18.jpg', 'img19.jpg'
  ];
  
  const displayDurations = [1200, 1000, 800, 800, 700, 700, 500, 500, 400, 500, 600, 700, 700, 800, 1000, 1200, 1100, 1100, 1100].map(d => Math.max(150, d * 0.5));

  
  let current = 0;
  const slideshow = document.getElementById('intro-slideshow');
  const imageEl = document.getElementById('slideshow-image');
  
  function showNextImage() {
    if (current >= slideshowImages.length) {
      slideshow.style.display = 'none';
      return;
    }
    slideshow.style.display = 'flex';
    imageEl.src = slideshowImages[current];
    setTimeout(() => {
      current++;
      showNextImage();
    }, displayDurations[current]);
  }
  
  window.addEventListener('load', () => {
    setTimeout(showNextImage, 6700); // wait till after "Hi I am Mano" animations
  });
  
}); // closes DOMContentLoaded

// ===== Slideshow Code Starts Here =====


