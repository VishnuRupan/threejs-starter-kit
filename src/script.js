import './style.css';
import * as THREE from 'three';


console.log('hello');
const canvas = document.querySelector('.webgl');

console.log(THREE);

const sizes = {
    width: 800,
    height: 600
};


const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' });
const cube = new THREE.Mesh(geometry, material);

cube.position.x = 2;
scene.add(cube);


const camera = new THREE.PerspectiveCamera(75,
    sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
scene.add(camera);


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);