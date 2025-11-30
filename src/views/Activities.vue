<template>
  <div class="activities">
    <section class="activities-hero">
      <div class="container">
        <h1>社团活动</h1>
      </div>
    </section>

    <section class="activities-content">
      <div class="container">
        <h2>过往活动</h2>
        <div class="activities-grid">
          <div class="activity-card" v-for="activity in pastActivities" :key="activity.id">
            <h3>{{ activity.title }}</h3>
            <p class="date">{{ activity.date }}</p>
            <p>{{ activity.description }}</p>
          </div>
        </div>

        <h2>即将举行</h2>
        <div class="activities-grid">
          <div class="activity-card upcoming" v-for="activity in upcomingActivities" :key="activity.id">
            <h3>{{ activity.title }}</h3>
            <p class="date">{{ activity.date }}</p>
            <p>{{ activity.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Activities',
  data() {
    return {
      pastActivities: [
        {
          id: 1,
          title: '2024年秋季CTF比赛',
          date: '2024-11-15',
          description: '本次比赛吸引了来自全校的100多名选手参加，涵盖了Web安全、密码学、逆向工程等多个领域。'
        },
        {
          id: 2,
          title: '网络安全知识讲座',
          date: '2024-10-20',
          description: '邀请了知名网络安全专家进行讲座，主题包括网络安全威胁现状和防护措施。'
        },
        {
          id: 3,
          title: '企业参观活动',
          date: '2024-09-10',
          description: '组织成员参观了多家知名网络安全企业，了解行业发展趋势和企业需求。'
        }
      ],
      upcomingActivities: [
        {
          id: 4,
          title: '2025年春季CTF比赛',
          date: '2025-03-15',
          description: '即将举行的春季CTF比赛，欢迎全校学生报名参加。'
        },
        {
          id: 5,
          title: '网络安全技术培训',
          date: '2025-02-20',
          description: '针对新生的网络安全技术培训，内容包括Linux基础、Web安全入门等。'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 样式将在后续统一添加 */
</style>
