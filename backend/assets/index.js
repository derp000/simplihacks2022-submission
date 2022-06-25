import * as THREE from "three";
import vertexShader from ".//vertex.glsl";
import fragmentShader from ".//fragment.glsl";

console.log(fragmentShader);

let getUrl = window.location;
let baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];

console.log(baseUrl);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  antialias: true
});

// window.innerWidth is implied
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
// inject renderer into html
document.body.appendChild(renderer.domElement);

// create globe
// SphereGeometry(radius, width segments, length segments)
// raymond just think how in blender more segments = more verts when u insert mesh like a sphere
// when loading, root is simplihacks app folder
// using '/' instead of './' took an hour to debug :'(
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({ 
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader().load("/static/simplihacks/globeUV.jpeg")
      }
    }
  })
 );

console.log()

scene.add(sphere);
camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
