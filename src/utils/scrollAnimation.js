// 滚动动画工具

// 初始化滚动动画
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-aos]');
  
  if (!animatedElements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 添加动画类
        entry.target.classList.add('aos-animate');
        // 一旦动画完成，停止观察
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // 观察所有带有data-aos属性的元素
  animatedElements.forEach(el => {
    // 添加初始类
    el.classList.add('aos-init');
    observer.observe(el);
  });
}

// 导出函数
export { initScrollAnimations };
