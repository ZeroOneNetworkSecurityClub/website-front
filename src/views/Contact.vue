<template>
  <div class="contact">
    <section class="contact-hero">
      <div class="container">
        <h1>联系我们</h1>
      </div>
    </section>

    <section class="contact-content">
      <div class="container">
        <!-- 加载状态 -->
        <div v-if="loading" class="loading-container">
          <div class="loading-spinner"></div>
          <p>加载联系信息中...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error" class="error-container">
          <p>{{ error }}</p>
          <button @click="fetchContactInfo" class="btn btn-primary">重试</button>
        </div>

        <!-- 数据展示 -->
        <div v-else>
          <div class="contact-info">
            <h2>联系方式</h2>
            <div class="contact-details">
              <div class="contact-item" v-for="(item, index) in contactInfo.details" :key="index">
                <h3>{{ item.type }}</h3>
                <p>{{ item.value }}</p>
              </div>
            </div>

            <h2>社交媒体</h2>
            <div class="social-links">
              <a 
                :href="link.url" 
                class="social-link" 
                v-for="(link, index) in contactInfo.socialLinks" 
                :key="index"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ link.name }}
              </a>
            </div>
          </div>

          <div class="join-us">
            <h2>加入我们</h2>
            <p>{{ contactInfo.joinUs.description }}</p>
            <h3>加入条件</h3>
            <ul>
              <li v-for="(condition, index) in contactInfo.joinUs.conditions" :key="index">{{ condition }}</li>
            </ul>
            <h3>加入方式</h3>
            <p v-for="(step, index) in contactInfo.joinUs.steps" :key="index">{{ step }}</p>
            <a :href="contactInfo.joinUs.applicationUrl" class="btn">下载申请表</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { contactService } from '../services/contactService';

export default {
  name: 'Contact',
  data() {
    return {
      contactInfo: {
        details: [],
        socialLinks: [],
        joinUs: {
          description: '',
          conditions: [],
          steps: [],
          applicationUrl: '#'
        }
      },
      loading: true,
      error: null
    };
  },
  async mounted() {
    await this.fetchContactInfo();
  },
  methods: {
    async fetchContactInfo() {
      this.loading = true;
      this.error = null;
      try {
        // 调用API获取联系信息
        const data = await contactService.getContactInfo();
        this.contactInfo = data;
      } catch (err) {
        this.error = '获取联系信息失败，请稍后重试';
        console.error('Error fetching contact info:', err);
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
