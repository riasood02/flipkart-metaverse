import * as THREE from './three.js-master/build/three.module.js'
import { GLTFLoader } from "./three.js-master/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js'
//import {str} from './avatar.js'
// import * as Avat from './avatar.js';

//console.log(str)
const canvas=document.querySelector('.webgl')

const scenic=new THREE.Scene()
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scenic.add( cube );
const loader=new GLTFLoader()
loader.load('assets/metaverse shop.gltf',function(gltfScene){
    const root=gltfScene.scene;
    root.scale.set(0.1,0.1,0.1)
    root.position.set(0,0,0);
    // root.rotation.y+=1;
    scenic.add(root);
    loader.load('assets/dress1/scene.gltf',function(gltfScene){
        const root=gltfScene.scene;
        root.scale.set(0.07,0.07,0.07);
        root.position.set(0.7,0.2,0);
        root.rotation.y-=1;
        scenic.add(root);
    },function(xhr){
        console.log((xhr.loaded/xhr.total * 100) + "% loaded")
    },function(error){
        console.log('An error occured')
    })
    loader.load('https://d1a370nemizbjq.cloudfront.net/6ea10d1a-705e-42f9-b9ed-eefe42b0a15e.glb',function(glb){
        const root=glb.scene;
        root.scale.set(0.13,0.13,0.13);
        root.position.set(0.7,0.2,0);
        // root.rotation.y-=1;
        scenic.add(root);
    },function(xhr){
        console.log((xhr.loaded/xhr.total * 100) + "% loaded")
    },function(error){
        console.log('An error occured')
    })
    
},function(xhr){
    console.log((xhr.loaded/xhr.total * 100) + "% loaded")
},function(error){
    console.log('An error occured')
})


const light =  new THREE.DirectionalLight(0xffffff,3)
light.position.set(2,2,5)
scenic.add(light)
const sizes={
	width:window.innerWidth,
	height:window.innerHeight
}
const camera =new THREE.PerspectiveCamera()

camera.position.set(0,1,2)
scenic.add(camera)
const renderer=new THREE.WebGL1Renderer({
	canvas:canvas
})
const controls = new OrbitControls(camera,renderer.domElement)
controls.keys = {
    LEFT: 'ArrowLeft',
    UP: 'ArrowUp',
    RIGHT: 'KeyD',
    BOTTOM: 'KeyS'

}
renderer.setSize(sizes.width,sizes.height)

renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled=true
renderer.gammaOuput=true
var raycastor = new THREE.Raycaster();
var mouse = new THREE.Vector2();
document.addEventListener('click',(e)=>onClick(e),false);

 function onClick(event) {

    event.preventDefault();
  
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    raycastor.setFromCamera(mouse,camera);
  
    var intersects = raycastor.intersectObjects(scenic.children);
  console.log(intersects);
    if (intersects.length > 0) {
      
      console.log('Intersection:', intersects[0]);
  
    }
  
  }
function animate(){
    controls.update()
    requestAnimationFrame(animate)
    renderer.render(scenic,camera)
}
animate()