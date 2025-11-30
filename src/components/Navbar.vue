<template>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-brand">
        <a href="/" class="logo">
          <span class="logo-icon">🔒</span>
          <span class="logo-text">零壹网络安全社团</span>
        </a>
      </div>
      
      <!-- 移动端菜单按钮 -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="menu-icon"></span>
      </button>
      
      <!-- 导航菜单 -->
      <div class="navbar-menu" :class="{ 'active': isMenuOpen }">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="/" class="nav-link" :class="{ active: $route.path === '/' }" @click="closeMenu">首页</a>
          </li>
          <li class="nav-item">
            <a href="/about" class="nav-link" :class="{ active: $route.path === '/about' }" @click="closeMenu">关于我们</a>
          </li>
          <li class="nav-item">
            <a href="/activities" class="nav-link" :class="{ active: $route.path === '/activities' }" @click="closeMenu">社团活动</a>
          </li>
          <li class="nav-item">
            <a href="/members" class="nav-link" :class="{ active: $route.path === '/members' }" @click="closeMenu">社团成员</a>
          </li>
          <li class="nav-item">
            <a href="/contact" class="nav-link" :class="{ active: $route.path === '/contact' }" @click="closeMenu">联系我们</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
      isScrolled: false
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    handleScroll() {
      // 当滚动超过50px时，添加scrolled类
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style scoped>
/* 导航栏基础样式 */
.navbar {
  transition: all 0.3s ease;
}

/* 滚动时的导航栏样式 */
.navbar.scrolled {
  box-shadow: var(--shadow-lg);
  background-color: rgba(13, 27, 42, 0.95);
  backdrop-filter: blur(10px);
}

/* Logo样式 */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
}

.logo-icon {
  font-size: 1.8rem;
}

/* 菜单切换按钮 */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.menu-icon {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: white;
  transition: all 0.3s ease;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  top: 8px;
}

/* 菜单打开状态 */
.menu-toggle.active .menu-icon {
  background-color: transparent;
}

.menu-toggle.active .menu-icon::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-toggle.active .menu-icon::after {
  transform: rotate(-45deg);
  top: 0;
}

/* 导航菜单 */
.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-nav {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

/* 导航链接样式 */
.nav-link {
  position: relative;
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-color);
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link:hover,
.nav-link.active {
  color: var(--accent-color);
  text-decoration: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navbar-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background-color: var(--primary-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: right 0.3s ease;
    z-index: 1000;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  }

  .navbar-menu.active {
    right: 0;
  }

  .navbar-nav {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .nav-link {
    font-size: 1.2rem;
  }
}
</style>
