<template>
  <div class="members">
    <section class="members-hero">
      <div class="container">
        <h1>社团成员</h1>
      </div>
    </section>

    <section class="members-content">
      <div class="container">
        <!-- 加载状态 -->
        <div v-if="loading" class="loading-container">
          <div class="loading-spinner"></div>
          <p>加载成员数据中...</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error" class="error-container">
          <p>{{ error }}</p>
          <button @click="fetchMembers" class="btn btn-primary">重试</button>
        </div>

        <!-- 数据展示 -->
        <div v-else>
          <h2>核心成员</h2>
          <div v-if="coreMembers.length > 0" class="members-grid">
            <div class="member-card" v-for="member in coreMembers" :key="member.id">
              <div class="member-avatar">{{ member.name.charAt(0) }}</div>
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
              <p>{{ member.description }}</p>
            </div>
          </div>
          <div v-else class="empty-state">
            <p>暂无核心成员记录</p>
          </div>

          <h2>成员风采</h2>
          <div v-if="generalMembers.length > 0" class="members-grid">
            <div class="member-card" v-for="member in generalMembers" :key="member.id">
              <div class="member-avatar">{{ member.name.charAt(0) }}</div>
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
            </div>
          </div>
          <div v-else class="empty-state">
            <p>暂无普通成员记录</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { memberService } from '../services/memberService';

export default {
  name: 'Members',
  data() {
    return {
      members: [],
      loading: true,
      error: null
    };
  },
  async mounted() {
    await this.fetchMembers();
  },
  methods: {
    async fetchMembers() {
      this.loading = true;
      this.error = null;
      try {
        // 调用API获取所有成员
        const data = await memberService.getMembers();
        this.members = data;
      } catch (err) {
        this.error = '获取成员数据失败，请稍后重试';
        console.error('Error fetching members:', err);
      } finally {
        this.loading = false;
      }
    }
  },
  computed: {
    // 过滤核心成员
    coreMembers() {
      return this.members.filter(member => member.type === 'core');
    },
    // 过滤普通成员
    generalMembers() {
      return this.members.filter(member => member.type === 'general');
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
