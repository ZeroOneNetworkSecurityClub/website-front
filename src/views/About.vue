<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1>关于我们</h1>
      </div>
    </section>

    <section class="about-content">
      <div class="container">
        <!-- 加载状态 -->
        <div v-if="loading" class="loading-container">
          <div class="loading-spinner"></div>
          <p>加载社团信息中...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error" class="error-container">
          <p>{{ error }}</p>
          <button @click="fetchAboutInfo" class="btn btn-primary">重试</button>
        </div>

        <!-- 数据展示 -->
        <div v-else>
          <h2>社团背景</h2>
          <p>{{ aboutInfo.background }}</p>

          <h2>社团宗旨</h2>
          <p>我们的宗旨是：</p>
          <ul>
            <li v-for="(mission, index) in aboutInfo.missions" :key="index">{{ mission }}</li>
          </ul>

          <h2>发展历程</h2>
          <div class="timeline">
            <div class="timeline-item" v-for="(item, index) in aboutInfo.history" :key="index">
              <h3>{{ item.year }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>

          <h2>组织结构</h2>
          <div class="organization">
            <div class="org-item" v-for="(dept, index) in aboutInfo.organization" :key="index">
              <h3>{{ dept.name }}</h3>
              <p>{{ dept.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { aboutService } from '../services/aboutService';

export default {
  name: 'About',
  data() {
    return {
      aboutInfo: {
        background: '',
        missions: [],
        history: [],
        organization: []
      },
      loading: true,
      error: null
    };
  },
  async mounted() {
    await this.fetchAboutInfo();
  },
  methods: {
    async fetchAboutInfo() {
      this.loading = true;
      this.error = null;
      try {
        // 调用API获取社团信息
        const data = await aboutService.getAboutInfo();
        this.aboutInfo = data;
      } catch (err) {
        this.error = '获取社团信息失败，请稍后重试';
        console.error('Error fetching about info:', err);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
/* 加载状态样式 */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  text-align: center;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid var(--border-color);
  border-top: 4px solid var(--accent-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 错误状态样式 */
.error-container {
  text-align: center;
  padding: 3rem 0;
  color: var(--danger-color);
}

.error-container p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
</style>
