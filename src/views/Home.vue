<template>
  <div class="home">
    <section class="hero">
      <!-- 背景装饰 -->
      <div class="hero-background">
        <div class="hero-pattern"></div>
      </div>
      
      <div class="hero-content">
        <h1 class="hero-title">零壹网络安全社团</h1>
        <p class="hero-subtitle">守护网络安全，共建美好未来</p>
        <div class="hero-buttons">
          <a href="/about" class="btn btn-primary">了解更多</a>
          <a href="/activities" class="btn btn-secondary">查看活动</a>
        </div>
      </div>
      
      <!-- 滚动指示器 -->
      <div class="scroll-indicator">
        <span>向下滚动</span>
        <div class="scroll-icon"></div>
      </div>
    </section>

    <section class="intro">
      <div class="container">
        <h2>社团简介</h2>
        <p>零壹网络安全社团是一个专注于网络安全技术研究与普及的学生组织，致力于提高学生的网络安全意识和技术水平，为网络安全事业培养优秀人才。</p>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2 class="section-title">社团特色</h2>
        <p class="section-subtitle">我们致力于提供高质量的网络安全学习和实践环境</p>
        <div class="features-grid">
          <div class="feature-item" data-aos="fade-up">
            <div class="feature-icon">🔬</div>
            <h3 class="feature-title">技术研究</h3>
            <p class="feature-description">深入研究网络安全前沿技术，包括渗透测试、漏洞挖掘、加密算法等。</p>
          </div>
          <div class="feature-item" data-aos="fade-up" data-aos-delay="200">
            <div class="feature-icon">💻</div>
            <h3 class="feature-title">实践活动</h3>
            <p class="feature-description">定期举办CTF比赛、安全培训、技术分享等实践活动，提升成员实战能力。</p>
          </div>
          <div class="feature-item" data-aos="fade-up" data-aos-delay="400">
            <div class="feature-icon">🤝</div>
            <h3 class="feature-title">校企合作</h3>
            <p class="feature-description">与知名企业建立合作关系，为成员提供实习和就业机会。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="latest-activities">
      <div class="container">
        <h2 class="section-title">最新活动</h2>
        <p class="section-subtitle">参与我们的活动，提升你的网络安全技能</p>
        
        <!-- 加载状态 -->
        <div v-if="loading" class="loading-container">
          <div class="loading-spinner"></div>
          <p>加载最新活动中...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error" class="error-container">
          <p>{{ error }}</p>
          <button @click="fetchLatestActivities" class="btn btn-primary">重试</button>
        </div>

        <!-- 数据展示 -->
        <div v-else>
          <div v-if="activities.length > 0" class="activities-grid">
            <div 
              class="activity-card" 
              :class="activity.status" 
              v-for="(activity, index) in activities" 
              :key="activity.id"
              data-aos="fade-up"
              :data-aos-delay="index * 200"
            >
              <div class="activity-image">
                <div class="activity-placeholder">{{ activity.icon || '🏆' }}</div>
                <span class="activity-badge" :class="activity.status">
                  {{ activity.status === 'upcoming' ? '即将开始' : '已结束' }}
                </span>
              </div>
              <div class="activity-content">
                <h3 class="activity-title">{{ activity.title }}</h3>
                <div class="activity-meta">
                  <span class="activity-date">📅 {{ activity.date }}</span>
                  <span class="activity-location">📍 {{ activity.location }}</span>
                </div>
                <p class="activity-description">{{ activity.description }}</p>
                <a href="/activities" class="btn btn-small">查看详情</a>
              </div>
            </div>
          </div>
          <div v-else class="empty-state">
            <p>暂无活动记录</p>
          </div>
          
          <div class="text-center mt-5">
            <a href="/activities" class="btn btn-primary">查看所有活动</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { activityService } from '../services/activityService';

export default {
  name: 'Home',
  data() {
    return {
      activities: [],
      loading: true,
      error: null
    };
  },
  async mounted() {
    await this.fetchLatestActivities();
  },
  methods: {
    async fetchLatestActivities() {
      this.loading = true;
      this.error = null;
      try {
        // 调用API获取最新活动
        const data = await activityService.getLatestActivities(3);
        this.activities = data;
      } catch (err) {
        this.error = '获取最新活动失败，请稍后重试';
        console.error('Error fetching latest activities:', err);
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

/* 空状态样式 */
.empty-state {
  text-align: center;
  padding: 3rem 0;
  color: var(--light-text);
  font-size: 1.1rem;
}
</style>
