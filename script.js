document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    const hi = document.getElementById('hi');
    const name = document.getElementById('name');
    const loading = document.getElementById('loading');
    const getStarted = document.getElementById('get-started');
    const seeJourneyBtn = document.getElementById('see-journey');
    const pickPathBtn = document.getElementById('pick-path');
    const intro = document.getElementById('intro');

    console.log('Elements:', { hi, name, loading, getStarted, intro });

    // "Hi" slides in from left
    setTimeout(() => {
        console.log('Showing Hi');
        hi.style.animation = 'slideLeft 2s ease forwards';
        hi.style.opacity = 1;
    }, 500);

    // "I am Mano" falls from top, "Hi" slides down after 1s
    setTimeout(() => {
        console.log('I am Mano falls, kicking Hi');
        name.style.animation = 'fallDown 1.5s ease forwards';
        name.style.opacity = 0;
        setTimeout(() => {
            hi.style.animation = 'slideDown 0.8s ease forwards';
            setTimeout(() => {
                hi.style.display = 'none';
            }, 800);
        }, 1000); // Changed from 500 to 1000 for 1s overlap
    }, 3000);

    // "Loading" slides fast from right, "I am Mano" slides left after 0.3s
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

    // "Get Started" fades in, "Loading" slides down
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
    // Three.js Cube Test - Only on "See My Journey" click
    let scene, camera, renderer, cube;
    function initCube() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    }

    // Show cube when clicking "See My Journey"
    seeJourneyBtn.addEventListener('click', () => {
        getStarted.style.display = 'none';
        initCube();
    });

    // Placeholder for "Pick Your Path"
    pickPathBtn.addEventListener('click', () => {
        alert('Pick Your Path coming soon!');
    });
});