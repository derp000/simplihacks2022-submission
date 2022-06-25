import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

console.log(scene);
console.log(camera);
console.log(renderer);

// window.innerWidth is implied
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
console.log(boxGeometry);

// mesh requires geoemtry and material object 27:07
const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
console.log(boxGeometry);

const mesh = new THREE.Mesh(boxGeometry, material);
console.log(mesh);

scene.add(mesh);

// ensure not at center bc that is default 30:21
// this basically moves the camera so that its not also at the center where the box is
// prob bc there would be camera clipping
// raymond u do blender you'll prob understand what i mean
camera.position.z = 5;

renderer.render(scene, camera);

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = 'Hello webpack';
//     return element;
//   } 
//   document.body.appendChild(component());
