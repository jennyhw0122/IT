const video = document.querySelector('.hero-video');

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

const maxScroll = 800; // 최대 스크롤 기준

function animate() {
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;

  video.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animate);
}

window.addEventListener('scroll', () => {
  const scrollY = Math.min(window.scrollY, maxScroll);
  const progress = scrollY / maxScroll;

  // 🎯 왼쪽(-), 아래(+) 방향으로 이동
  targetX = -60 * progress; // -60px까지 왼쪽 이동
  targetY =  60 * progress; // 60px까지 아래 이동
});

animate();