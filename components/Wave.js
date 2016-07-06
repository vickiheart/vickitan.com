import React from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite';
import THREE from 'three';
import TweenMax from 'gsap';
import ScrollMagic from 'scrollmagic';
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js';
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';

const styles = StyleSheet.create({
  stage: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: '1',
  },
});

const SEPARATION = 100;
const AMOUNTX = 50;
const AMOUNTY = 50;

let camera;
let scene;
let renderer;

let particles;
let particle;
let count = 0;

let mouseX = 0;

let windowHalfX = window.innerWidth / 2;

function init(container) {
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
  camera.position.z = 1000;
  camera.position.y = 300;

  scene = new THREE.Scene();

  particles = [];

  const PI2 = Math.PI * 2;

  function generateTexture() {
    const canvas = document.createElement('canvas');
    const size = 256; // CHANGED
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, PI2, true);
    context.fillStyle = '#333';
    context.fill();
    return canvas;
  }

  const texture = new THREE.Texture(generateTexture());
  texture.needsUpdate = true; // important!

  const material = new THREE.SpriteMaterial({
    map: texture,
  });

  let i = 0;

  for (let ix = 0; ix < AMOUNTX; ix ++) {
    for (let iy = 0; iy < AMOUNTY; iy ++) {
      particle = particles[i ++] = new THREE.Sprite(material);
      particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
      particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
      scene.add(particle);
    }
  }

  renderer = new THREE.WebGLRenderer({
    alpha: true,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff, 0.0);
  container.appendChild(renderer.domElement);
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
}

function onDocumentTouchStart(event) {
  if (event.touches.length === 1) {
    event.preventDefault();

    mouseX = event.touches[0].pageX - windowHalfX;
  }
}

function onDocumentTouchMove(event) {
  if (event.touches.length === 1) {
    event.preventDefault();

    mouseX = event.touches[0].pageX - windowHalfX;
  }
}

function render() {
  camera.position.x += (mouseX - camera.position.x) * 0.003;
  camera.lookAt(scene.position);

  let i = 0;

  for (let ix = 0; ix < AMOUNTX; ix ++) {
    for (let iy = 0; iy < AMOUNTY; iy ++) {
      particle = particles[i++];
      particle.position.y = (Math.sin((ix + count) * 0.3) * 50) +
        (Math.sin((iy + count) * 0.5) * 50);
      particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 +
        (Math.sin((iy + count) * 0.5) + 1) * 4;
    }
  }

  renderer.render(scene, camera);

  count += 0.05;
}

let animationId;

function animate() {
  animationId = requestAnimationFrame(animate);
  render();
}

function stopAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId);
  }
  animationId = undefined;
}

function initScrollEffects() {
  const offset = window.innerHeight / 2;
  const tween = TweenMax.to('#stage > canvas', 1, { css: { opacity: 0 } });
  const controller = new ScrollMagic.Controller();
  const scrollScene = new ScrollMagic.Scene({
    triggerElement: 'header',
    offset: offset + 100,
  }).setTween(tween)
    .addIndicators()
    .addTo(controller);
}

export default class Wave extends React.Component {
  componentDidMount() {
    init(this.stage);
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);
    window.addEventListener('resize', onWindowResize, false);
    animate();
    initScrollEffects(findDOMNode(this));
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', onDocumentMouseMove, false);
    document.removeEventListener('touchstart', onDocumentTouchStart, false);
    document.removeEventListener('touchmove', onDocumentTouchMove, false);
    window.removeEventListener('resize', onWindowResize, false);
    stopAnimation();
  }

  render() {
    return (
      <div
        id="stage"
        className={css(styles.stage)}
        ref={(node) => { this.stage = node; }}
      />
    );
  }
}

