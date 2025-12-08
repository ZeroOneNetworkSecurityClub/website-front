<script setup>

</script>

<template>
  <!-- ================= FOOTER START ================= -->
  <footer class="bg-hacker-gray border-t border-gray-800 pt-12 pb-6 relative overflow-hidden">
    <!-- Matrix Deco Background -->
    <div class="absolute top-0 right-0 p-4 opacity-5 select-none pointer-events-none">
            <pre class="text-xs font-mono text-hacker-green text-right">
0101010101
1010010010
0011100101
SYSTEM_EOF
            </pre>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

        <!-- Brand Column -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <el-icon :size="20" color="#00ff41">
              <component :is="'Platform'"/>
            </el-icon>
            <span class="font-mono text-lg font-bold text-white">0xSHIELD</span>
          </div>
          <p class="text-gray-500 text-sm mb-4">
            致力培养下一代白帽黑客。<br>
            "Defense through Offense."
          </p>
          <div class="flex gap-4">
            <a class="text-gray-400 hover:text-white transition" href="#">
              <el-icon>
                <component :is="'ChatDotSquare'"/>
              </el-icon>
            </a>
            <a class="text-gray-400 hover:text-white transition" href="#">
              <el-icon>
                <component :is="'Message'"/>
              </el-icon>
            </a>
            <a class="text-gray-400 hover:text-white transition" href="#"><i>GitHub</i></a>
          </div>
        </div>

        <!-- Links Column -->
        <div>
          <h3 class="text-white font-mono font-bold mb-4 text-sm uppercase tracking-wider">>> SITEMAP</h3>
          <ul class="space-y-2 text-sm text-gray-400 font-mono">
            <li><a class="hover:text-hacker-green transition-colors" href="#">./home</a></li>
            <li><a class="hover:text-hacker-green transition-colors" href="#">./about_us</a></li>
            <li><a class="hover:text-hacker-green transition-colors" href="#">./join_us</a></li>
            <li><a class="hover:text-hacker-green transition-colors" href="#">./wiki</a></li>
          </ul>
        </div>

        <!-- Resources Column -->
        <div>
          <h3 class="text-white font-mono font-bold mb-4 text-sm uppercase tracking-wider">>> RESOURCES</h3>
          <ul class="space-y-2 text-sm text-gray-400 font-mono">
            <li><a class="hover:text-hacker-green transition-colors" href="#">Kali Mirrors</a></li>
            <li><a class="hover:text-hacker-green transition-colors" href="#">CTF Writeups</a></li>
            <li><a class="hover:text-hacker-green transition-colors" href="#">Tools Archive</a></li>
            <li><a class="hover:text-hacker-green transition-colors" href="#">Vulnerability DB</a></li>
          </ul>
        </div>

        <!-- Newsletter / Terminal Column -->
        <div>
          <h3 class="text-white font-mono font-bold mb-4 text-sm uppercase tracking-wider">>> SUBSCRIBE</h3>
          <p class="text-gray-500 text-xs mb-3">Get the latest exploits delivered to your inbox.</p>
          <div class="flex gap-2">
            <el-input
                v-model="email"
                class="terminal-input"
                placeholder="user@domain.com"
                size="small"
            >
              <template #prefix>></template>
            </el-input>
            <el-button icon="Right" size="small" type="primary" @click="subscribe"/>
          </div>
        </div>
      </div>

      <!-- Terminal Footer Bar -->
      <div
          class="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-500">
        <div class="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto overflow-hidden">
          <span class="text-hacker-green">root@0xShield:~#</span>
          <span class="truncate">tail -f /var/log/syslog | grep "STATUS"</span>
          <span class="text-white ml-2">{{ terminalLog }}<span class="cursor-blink">_</span></span>
        </div>

        <div class="flex items-center gap-6">
          <span>PING: <span :class="pingColor">{{ ping }}ms</span></span>
          <span>&copy; 2025 0xSHIELD TEAM</span>
        </div>
      </div>
    </div>
  </footer>
  <!-- ================= FOOTER END ================= -->
</template>

<style>
/* 底部终端光标 */
.cursor-blink {
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

/* 极客输入框 (Footer用) */
.terminal-input .el-input__wrapper {
  background-color: #0d1117 !important;
  box-shadow: none !important;
  border: 1px solid #30363d !important;
  color: #00ff41 !important;
  font-family: 'JetBrains Mono', monospace;
}
.terminal-input .el-input__wrapper:hover,
.terminal-input .el-input__wrapper.is-focus {
  border-color: #00ff41 !important;
}
</style>