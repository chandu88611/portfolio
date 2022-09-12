import React from 'react'
import "./Home.css"
import{ useEffect} from "react"
import*as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

import images from  "../images/moon2.png"

import image from  "../images/venus1.png"
import space from "../images/space.png"
// import my from "../images/uranus.png"/
import me from "../images/IMG-20210304-WA0007.jpg"
import mine from "../images/IMG-20210304-WA0007.jpg"
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
// import YoutubeCard from "../YoutubeCard/YoutubeCard";
import { Link } from "react-router-dom";
import { MouseOutlined } from "@mui/icons-material";

import { Typography } from "@mui/material";
// import About from './About'
// import Typography from '@mui/material'
function Home() {
  useEffect(()=>{
    
    const textureLoader=new THREE.TextureLoader()
    const moonTexture=textureLoader.load(images)
    const myTexture=textureLoader.load(me)
    const venusTexture=textureLoader.load(image)
    const spaceTexture=textureLoader.load(space)
    const scene=new THREE.Scene()
    const camera= new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
    const canvas=document.querySelector('.homeCanvas')
    const renderer=new THREE.WebGLRenderer({canvas})
    const geometry=new THREE.SphereGeometry(2,64,64);
    // const material=new THREE.MeshBasicMaterial({color:"grey"})
    const moonMaterial=new THREE.MeshStandardMaterial({map:moonTexture})
    const venusgeometry=new THREE.SphereGeometry(6,64,64);
    const venusMaterial=new THREE.MeshBasicMaterial({map:venusTexture})

    
    const mygeometry=new THREE.SphereGeometry(0.5,64,64);
    const myMaterial=new THREE.MeshBasicMaterial({map:myTexture})
    
    const mesh=new THREE.Mesh(geometry,moonMaterial)
    
    const vmesh=new THREE.Mesh(venusgeometry,venusMaterial)
    
    const myMesh=new THREE.Mesh(mygeometry,myMaterial)

    const pointLight=new THREE.PointLight(0xffffff,1)
    const pointLight2=new THREE.PointLight(0xffffff,0.1)
      pointLight.position.z=10
      pointLight2.position.set(-8,-5,-5)
      
    const moonControl=new THREE.PointLightHelper(pointLight)

    new OrbitControls(camera,renderer.domElement)
    // vmesh.position.x=5
    // vmesh.position.set(8,5,5)
    
    camera.position.set(4,4,8);
   myMesh.position.x=-4;
   myMesh.position.y=7;
  //  myMesh.position.z=5;
   
       
    // pointLight.position.z=10;
    scene.add(mesh)
    scene.add(vmesh)
    scene.add(pointLight)
    scene.background=spaceTexture
    scene.add(pointLight2)
    scene.add(moonControl)
    scene.add(myMesh)
    const constSpeed=0.05
window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        mesh.rotation.x -= constSpeed;
        mesh.rotation.y += constSpeed;
        vmesh.rotation.x -= constSpeed;
        vmesh.rotation.y += constSpeed;
        vmesh.position.x=8;
        // vmesh.position.set(6,5,5)
      }

      if (e.clientX > window.innerWidth / 2) {
      mesh.rotation.x -= constSpeed;
      mesh.rotation.y -= constSpeed;
        vmesh.rotation.x -= constSpeed;
        vmesh.rotation.y -= constSpeed;
        vmesh.position.y=8;
      }

      if (e.clientY > window.innerHeight / 2) {
        mesh.rotation.x -= constSpeed;
        mesh.rotation.y += constSpeed;
       vmesh.rotation.x -= constSpeed;
       vmesh.rotation.y += constSpeed;
       vmesh.position.x=9;
      }

      if (e.clientY <= window.innerHeight / 2) {
       mesh.rotation.x -= constSpeed;
       mesh.rotation.y -= constSpeed;
        vmesh.rotation.x -= constSpeed;
        vmesh.rotation.y -= constSpeed;
        vmesh.position.y=10;
      }
    });
   
    const animate=()=>{
      requestAnimationFrame(animate);
    mesh.rotation.y+=0.01;
    myMesh.rotation.y+=0.05;
    renderer.setSize(window.innerWidth,window.innerHeight)
    renderer.render(scene,camera)
  }
  animate() 

  })
  return (
    <div  className='home'>Home<canvas className='homeCanvas'></canvas>
    
    {/* <div className='homeContainer'><Typography variant="h3">TIMELINE</Typography>
   <Timeline  Timeline={[1,2,3,4]}/></div> */}
   <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>C</p>
          <p>H</p>
          <p>A</p>
          <p>N</p>
          <p>D</p>
          <p>A</p>
          <p>N</p>
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">FITNESS TRAINER</Typography>
          {/* <Typography variant="h2">UPSC ASPIRANT</Typography> */}
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
        

     
    

      <div className="homeSkills">
        {/* <Typography variant="h3">SKILLS</Typography> */}

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src="https://images.freeimages.com/images/previews/7f6/book-worm-1240387.jpg" alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">,-
            <img src={mine} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src="https://www.pexels.com/photo/teach-dice-ornament-on-table-301926/" alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src="https://image.shutterstock.com/image-photo/backpack-different-colorful-stationery-on-260nw-1710645322.jpg" alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src="https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.thehansindia.com%2Fh-upload%2F2022%2F01%2F10%2F1186314-creative.webp&imgrefurl=https%3A%2F%2Fwww.thehansindia.com%2Fhans%2Fyoung-hans%2Fbe-creative-be-productive-724090&tbnid=ortr24Hnde48aM&vet=12ahUKEwj1qsCI8eb5AhWOgGMGHdzGBDQQMygLegUIARDXAQ..i&docid=aWcbvijZbQw2DM&w=1000&h=600&q=creative&ved=2ahUKEwj1qsCI8eb5AhWOgGMGHdzGBDQQMygLegUIARDXAQ' alt="Face6" />
          </div>
        </div>
            
      
        
        <div className="cubeShadow">
      

        </div>
        <div className="homeskillsBox" id="homeskillsBox">
        
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiMongodb />
        <SiExpress />
        <SiReact />
        <SiNodedotjs />
      
      </div>
      </div>

    
     {/* <div className='ab'><About/></div> */}
   </div>
   
  )
}

export default Home