import * as THREE from 'three';

let getUrl = window.location;
let baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

console.log(baseUrl);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// window.innerWidth is implied
renderer.setSize(innerWidth, innerHeight);
// inject renderer into html
document.body.appendChild(renderer.domElement);

// create globe
// SphereGeometry(radius, width segments, length segments)
// raymond just think how in blender more segments = more verts when u insert mesh like a sphere
// when loading, root is simplihacks app folder
// using '/' instead of './' took an hour to debug :'(
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshBasicMaterial({ 
    map: new THREE.TextureLoader().load("/static/simplihacks/globe.jpeg")
  })
 );

console.log()

scene.add(sphere);
camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
