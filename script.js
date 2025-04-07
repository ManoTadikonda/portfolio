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

            // Create 3D Data Structure based on Type
            switch (dsType) {
                case 'graph':
                    // 3D Graph: Nodes and Edges (Simplified)
                    const graphGroup = new THREE.Group();
                    const nodeGeometry = new THREE.SphereGeometry(0.3, 32, 32);
                    const nodeMaterial = new THREE.MeshPhongMaterial({ color: 0x0066cc });
                    const nodes = [];
                    for (let i = 0; i < 3; i++) { // Reduced from 5 to 3 nodes
                        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
                        node.position.set(
                            Math.cos((i / 3) * Math.PI * 2) * 1.5,
                            Math.sin((i / 3) * Math.PI * 2) * 1.5,
                            0
                        );
                        nodes.push(node);
                        graphGroup.add(node);

                        // Add outline
                        const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x003366, side: THREE.BackSide });
                        const outlineMesh = new THREE.Mesh(nodeGeometry, outlineMaterial);
                        outlineMesh.scale.set(1.1, 1.1, 1.1);
                        node.add(outlineMesh);
                    }
                    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x66b3ff });
                    for (let i = 0; i < nodes.length; i++) {
                        for (let j = i + 1; j < nodes.length; j++) {
                            const points = [
                                nodes[i].position,
                                nodes[j].position
                            ];
                            const edgeGeometry = new THREE.BufferGeometry().setFromPoints(points);
                            const edge = new THREE.Line(edgeGeometry, edgeMaterial);
                            graphGroup.add(edge);
                        }
                    }
                    object = graphGroup;
                    break;

                case 'tree':
                    // 3D Tree: Hierarchical Nodes (Simplified)
                    const treeGroup = new THREE.Group();
                    const nodeGeo = new THREE.SphereGeometry(0.3, 32, 32);
                    const nodeMat = new THREE.MeshPhongMaterial({ color: 0x0066cc });
                    const root = new THREE.Mesh(nodeGeo, nodeMat);
                    root.position.set(0, 1.5, 0);
                    treeGroup.add(root);

                    // Add outline to root
                    const outlineMaterialRoot = new THREE.MeshBasicMaterial({ color: 0x003366, side: THREE.BackSide });
                    const outlineMeshRoot = new THREE.Mesh(nodeGeo, outlineMaterialRoot);
                    outlineMeshRoot.scale.set(1.1, 1.1, 1.1);
                    root.add(outlineMeshRoot);

                    const children = [];
                    for (let i = 0; i < 2; i++) { // Reduced from 3 to 2 children
                        const child = new THREE.Mesh(nodeGeo, nodeMat);
                        child.position.set((i - 0.5) * 1.5, 0, 0);
                        children.push(child);
                        treeGroup.add(child);

                        // Add outline to child
                        const outlineMaterialChild = new THREE.MeshBasicMaterial({ color: 0x003366, side: THREE.BackSide });
                        const outlineMeshChild = new THREE.Mesh(nodeGeo, outlineMaterialChild);
                        outlineMeshChild.scale.set(1.1, 1.1, 1.1);
                        child.add(outlineMeshChild);

                        const edgePoints = [
                            root.position,
                            child.position
                        ];
                        const edgeGeo = new THREE.BufferGeometry().setFromPoints(edgePoints);
                        const edgeMat = new THREE.LineBasicMaterial({ color: 0x66b3ff });
                        const edge = new THREE.Line(edgeGeo, edgeMat);
                        treeGroup.add(edge);
                    }
                    object = treeGroup;
                    break;

                case 'stack':
                    // 3D Stack: Stacked Cubes (Smaller Cubes)
                    const stackGroup = new THREE.Group();
                    for (let y = -1.5; y <= 1.5; y += 1.2) {
                        const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
                        const material = new THREE.MeshPhongMaterial({ color: 0x0066cc });
                        const cube = new THREE.Mesh(geometry, material);
                        cube.position.set(0, y, 0);
                        stackGroup.add(cube);

                        // Add outline
                        const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x003366, side: THREE.BackSide });
                        const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
                        outlineMesh.scale.set(1.1, 1.1, 1.1);
                        cube.add(outlineMesh);
                    }
                    object = stackGroup;
                    break;

                case 'queue':
                    // 3D Queue: Line of Cubes (Smaller Cubes)
                    const queueGroup = new THREE.Group();
                    for (let x = -2; x <= 2; x += 1.2) {
                        const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
                        const material = new THREE.MeshPhongMaterial({ color: 0x0066cc });
                        const cube = new THREE.Mesh(geometry, material);
                        cube.position.set(x, 0, 0);
                        queueGroup.add(cube);

                        // Add outline
                        const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x003366, side: THREE.BackSide });
                        const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
                        outlineMesh.scale.set(1.1, 1.1, 1.1);
                        cube.add(outlineMesh);
                    }
                    object = queueGroup;
                    break;

                case 'linked-list':
                    // 3D Linked List: Chain of Cubes (Simplified)
                    const linkedListGroup = new THREE.Group();
                    const nodesLL = [];
                    for (let x = -2; x <= 2; x += 1.5) {
                        const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
                        const material = new THREE.MeshPhongMaterial({ color: 0x0066cc });
                        const node = new THREE.Mesh(geometry, material);
                        node.position.set(x, 0, 0);
                        nodesLL.push(node);
                        linkedListGroup.add(node);

                        // Add outline
                        const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x003366, side: THREE.BackSide });
                        const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
                        outlineMesh.scale.set(1.1, 1.1, 1.1);
                        node.add(outlineMesh);
                    }
                    const edgeMatLL = new THREE.LineBasicMaterial({ color: 0x66b3ff });
                    for (let i = 0; i < nodesLL.length - 1; i++) {
                        const points = [
                            nodesLL[i].position,
                            nodesLL[i + 1].position
                        ];
                        const edgeGeo = new THREE.BufferGeometry().setFromPoints(points);
                        const edge = new THREE.Line(edgeGeo, edgeMatLL);
                        linkedListGroup.add(edge);
                    }
                    object = linkedListGroup;
                    break;

                case 'cluster':
                    // 3D Cluster: Randomly Positioned Nodes (Simplified)
                    const clusterGroup = new THREE.Group();
                    for (let i = 0; i < 5; i++) {
                        const geometry = new THREE.SphereGeometry(0.3, 32, 32);
                        const material = new THREE.MeshPhongMaterial({ color: 0x0066cc });
                        const node = new THREE.Mesh(geometry, material);
                        node.position.set(
                            (Math.random() - 0.5) * 3,
                            (Math.random() - 0.5) * 3,
                            (Math.random() - 0.5) * 3
                        );
                        clusterGroup.add(node);

                        // Add outline
                        const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x003366, side: THREE.BackSide });
                        const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
                        outlineMesh.scale.set(1.1, 1.1, 1.1);
                        node.add(outlineMesh);
                    }
                    object = clusterGroup;
                    break;

                case 'network':
                    // 3D Network: Nodes with Random Connections (Simplified)
                    const networkGroup = new THREE.Group();
                    const networkNodes = [];
                    for (let i = 0; i < 4; i++) {
                        const geometry = new THREE.SphereGeometry(0.3, 32, 32);
                        const material = new THREE.MeshPhongMaterial({ color: 0x0066cc });
                        const node = new THREE.Mesh(geometry, material);
                        node.position.set(
                            (Math.random() - 0.5) * 4,
                            (Math.random() - 0.5) * 4,
                            (Math.random() - 0.5) * 4
                        );
                        networkNodes.push(node);
                        networkGroup.add(node);

                        // Add outline
                        const outlineMaterial = new THREE.MeshBasicMaterial({ color: 0x003366, side: THREE.BackSide });
                        const outlineMesh = new THREE.Mesh(geometry, outlineMaterial);
                        outlineMesh.scale.set(1.1, 1.1, 1.1);
                        node.add(outlineMesh);
                    }
                    const edgeMatNet = new THREE.LineBasicMaterial({ color: 0x66b3ff });
                    for (let i = 0; i < networkNodes.length; i++) {
                        for (let j = i + 1; j < networkNodes.length; j++) {
                            if (Math.random() > 0.5) {
                                const points = [
                                    networkNodes[i].position,
                                    networkNodes[j].position
                                ];
                                const edgeGeo = new THREE.BufferGeometry().setFromPoints(points);
                                const edge = new THREE.Line(edgeGeo, edgeMatNet);
                                networkGroup.add(edge);
                            }
                        }
                    }
                    object = networkGroup;
                    break;
            }

            scene.add(object);
            camera.position.z = 5;

            // Animation Loop (Slower Rotation)
            const animate = () => {
                requestAnimationFrame(animate);
                object.rotation.x += 0.005;
                object.rotation.y += 0.005;
                renderer.render(scene, camera);
            };
            animate();

            // Handle Window Resize
            window.addEventListener('resize', () => {
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            });
        });
    };
});