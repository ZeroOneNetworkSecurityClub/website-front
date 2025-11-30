<template>
  <div class="members">
    <section class="members-hero">
      <div class="container">
        <h1>社团成员</h1>
      </div>
    </section>

    <section class="members-content">
      <div class="container">
        <h2>核心成员</h2>
        <div class="members-grid">
          <div class="member-card" v-for="member in coreMembers" :key="member.id">
            <div class="member-avatar">{{ member.name.charAt(0) }}</div>
            <h3>{{ member.name }}</h3>
            <p class="position">{{ member.position }}</p>
            <p>{{ member.description }}</p>
          </div>
        </div>

        <h2>成员风采</h2>
        <div class="members-grid">
          <div class="member-card" v-for="member in generalMembers" :key="member.id">
            <div class="member-avatar">{{ member.name.charAt(0) }}</div>
            <h3>{{ member.name }}</h3>
            <p class="position">{{ member.position }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Members',
  data() {
    return {
      coreMembers: [
        {
          id: 1,
          name: '张三',
          position: '社长',
          description: '网络安全爱好者，擅长Web安全和渗透测试。'
        },
        {
          id: 2,
          name: '李四',
          position: '副社长',
          description: '专注于密码学和逆向工程研究。'
        },
        {
          id: 3,
          name: '王五',
          position: '技术部部长',
          description: '擅长系统安全和网络攻防技术。'
        },
        {
          id: 4,
          name: '赵六',
          position: '宣传部部长',
          description: '负责社团的宣传和推广工作。'
        }
      ],
      generalMembers: [
        {
          id: 5,
          name: '孙七',
          position: '技术部成员'
        },
        {
          id: 6,
          name: '周八',
          position: '技术部成员'
        },
        {
          id: 7,
          name: '吴九',
          position: '宣传部成员'
        },
        {
          id: 8,
          name: '郑十',
          position: '外联部成员'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 样式将在后续统一添加 */
</style>
