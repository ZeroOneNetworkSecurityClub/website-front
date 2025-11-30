<template>
  <div class="activities">
    <section class="activities-hero">
      <div class="container">
        <h1>社团活动</h1>
      </div>
    </section>

    <section class="activities-content">
      <div class="container">
        <!-- 加载状态 -->
        <div v-if="loading" class="loading-container">
          <div class="loading-spinner"></div>
          <p>加载活动数据中...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error" class="error-container">
          <p>{{ error }}</p>
          <button @click="fetchActivities" class="btn btn-primary">重试</button>
        </div>

        <!-- 数据展示 -->
        <div v-else>
          <h2>过往活动</h2>
          <div v-if="pastActivities.length > 0" class="activities-grid">
            <div class="activity-card" v-for="activity in pastActivities" :key="activity.id">
              <h3>{{ activity.title }}</h3>
              <p class="date">{{ activity.date }}</p>
              <p>{{ activity.description }}</p>
            </div>
          </div>
          <div v-else class="empty-state">
            <p>暂无过往活动记录</p>
          </div>

          <h2>即将举行</h2>
          <div v-if="upcomingActivities.length > 0" class="activities-grid">
            <div class="activity-card upcoming" v-for="activity in upcomingActivities" :key="activity.id">
              <h3>{{ activity.title }}</h3>
              <p class="date">{{ activity.date }}</p>
              <p>{{ activity.description }}</p>
            </div>
          </div>
          <div v-else class="empty-state">
            <p>暂无即将举行的活动</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { activityService } from '../services/activityService';

export default {
  name: 'Activities',
  data() {
    return {
      activities: [],
      loading: true,
      error: null
    };
  },
  async mounted() {
    await this.fetchActivities();
  },
  methods: {
    async fetchActivities() {
      this.loading = true;
      this.error = null;
      try {
        // 调用API获取所有活动
        const data = await activityService.getActivities();
        this.activities = data;
      } catch (err) {
        this.error = '获取活动数据失败，请稍后重试';
        console.error('Error fetching activities:', err);
      } finally {
        this.loading = false;
      }
    }
  },
  computed: {
    // 过滤过往活动
    pastActivities() {
      return this.activities.filter(activity => activity.status === 'past');
    },
    // 过滤即将举行的活动
    upcomingActivities() {
      return this.activities.filter(activity => activity.status === 'upcoming');
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
