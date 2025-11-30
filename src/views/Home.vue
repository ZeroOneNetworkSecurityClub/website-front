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
        <div class="activities-grid">
          <div class="activity-card upcoming" data-aos="fade-up">
            <div class="activity-image">
              <div class="activity-placeholder">🏆</div>
              <span class="activity-badge upcoming">即将开始</span>
            </div>
            <div class="activity-content">
              <h3 class="activity-title">2025年春季CTF比赛</h3>
              <div class="activity-meta">
                <span class="activity-date">📅 2025年3月15日</span>
                <span class="activity-location">📍 学校计算机中心</span>
              </div>
              <p class="activity-description">参与我们的春季CTF比赛，展示你的网络安全技能，与其他选手一较高下。</p>
              <a href="/activities" class="btn btn-small">查看详情</a>
            </div>
          </div>
          <div class="activity-card upcoming" data-aos="fade-up" data-aos-delay="200">
            <div class="activity-image">
              <div class="activity-placeholder">📚</div>
              <span class="activity-badge upcoming">即将开始</span>
            </div>
            <div class="activity-content">
              <h3 class="activity-title">网络安全知识讲座</h3>
              <div class="activity-meta">
                <span class="activity-date">📅 2025年4月10日</span>
                <span class="activity-location">📍 学术报告厅</span>
              </div>
              <p class="activity-description">邀请知名网络安全专家分享最新的安全趋势和防护技术。</p>
              <a href="/activities" class="btn btn-small">查看详情</a>
            </div>
          </div>
          <div class="activity-card past" data-aos="fade-up" data-aos-delay="400">
            <div class="activity-image">
              <div class="activity-placeholder">🏢</div>
              <span class="activity-badge past">已结束</span>
            </div>
            <div class="activity-content">
              <h3 class="activity-title">企业参观活动</h3>
              <div class="activity-meta">
                <span class="activity-date">📅 2025年5月20日</span>
                <span class="activity-location">📍 知名安全企业</span>
              </div>
              <p class="activity-description">参观知名网络安全企业，了解行业发展趋势和企业需求。</p>
              <a href="/activities" class="btn btn-small">查看详情</a>
            </div>
          </div>
        </div>
        <div class="text-center mt-5">
          <a href="/activities" class="btn btn-primary">查看所有活动</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* 样式将在后续统一添加 */
</style>
