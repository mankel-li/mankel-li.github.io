<template>
  <header class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
    <nav class="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">
      <div class="flex items-center justify-between w-full">
        <a href="#" class="flex items-center gap-2 text-2xl font-['Pacifico'] text-primary">
          <i class="fas fa-code text-2xl"></i>
          <span>logo</span>
        </a>
        <div class="flex gap-8">
          <a href="#home" class="text-gray-600 hover:text-primary">首页</a>
          <a href="#skills" class="text-gray-600 hover:text-primary">技术栈</a>
          <a href="#collection" class="text-gray-600 hover:text-primary">CSS 收藏</a>
          <a href="#contact" class="text-gray-600 hover:text-primary">联系我</a>
        </div>
      </div>
    </nav>
  </header>
  <main class="pt-16">
    <section id="home" class="relative h-[600px] bg-cover bg-center" style="background-image: url('https://ai-public.mastergo.com/ai/img_res/aa3b991e8fb02c3354c6fe0420a08c57.jpg')">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent">
        <div class="max-w-[1440px] mx-auto px-8 h-full flex items-center">
          <div class="max-w-2xl text-white">
            <h1 class="text-5xl font-bold mb-6">高级前端开发工程师</h1>
            <p class="text-xl mb-8">专注于现代 Web 技术栈的开发与实践，拥有 5 年以上的前端开发经验。精通 Vue.js、TypeScript 等前端技术，对性能优化和用户体验有独到见解。</p>
            <div class="flex gap-4"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="skills" class="py-20 bg-white">
      <div class="max-w-[1440px] mx-auto px-8">
        <h2 class="text-3xl font-bold text-center mb-16">技术栈</h2>
        <div class="grid grid-cols-5 gap-8">
          <div class="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <img src="https://ai-public.mastergo.com/ai/img_res/34db0d51d5d794491e000cc27e92d4d1.jpg" class="w-40 h-40 mx-auto mb-6" alt="JavaScript">
            <h3 class="text-xl font-semibold text-center">JavaScript</h3>
          </div>
          <div class="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <img src="https://ai-public.mastergo.com/ai/img_res/4e56d25be254315c9365090fc5322b04.jpg" class="w-40 h-40 mx-auto mb-6" alt="TypeScript">
            <h3 class="text-xl font-semibold text-center">TypeScript</h3>
          </div>
          <div class="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <img src="https://ai-public.mastergo.com/ai/img_res/aa9060a5569efa32c9226e556a047ed9.jpg" class="w-40 h-40 mx-auto mb-6" alt="Vue.js">
            <h3 class="text-xl font-semibold text-center">Vue.js</h3>
          </div>
          <div class="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <img src="https://ai-public.mastergo.com/ai/img_res/1199b990e8aa490992e7f6b0c4371945.jpg" class="w-40 h-40 mx-auto mb-6" alt="Node.js">
            <h3 class="text-xl font-semibold text-center">Node.js</h3>
          </div>
          <div class="p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <img src="https://ai-public.mastergo.com/ai/img_res/912292540e26cd9f7c9f8d755f2e9381.jpg" class="w-40 h-40 mx-auto mb-6" alt="uni-app">
            <h3 class="text-xl font-semibold text-center">uni-app</h3>
          </div>
        </div>
      </div>
    </section>
    <section id="collection" class="py-20 bg-gray-50">
      <div class="max-w-[1440px] mx-auto px-8">
        <h2 class="text-3xl font-bold text-center mb-16">CSS 收藏</h2>
        <div class="grid grid-cols-3 gap-8">
          <div class="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-r from-blue-500 to-purple-500 p-6 flex items-center justify-center">
              <div class="w-20 h-20 bg-white rounded-lg animate-bounce"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">动画效果</h3>
              <p class="text-gray-600 mb-4">使用 CSS 动画实现平滑的交互效果</p>
              <button class="!rounded-button bg-primary text-white px-4 py-2 hover:bg-primary/90 whitespace-nowrap">查看代码</button>
            </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-r from-green-500 to-teal-500 p-6 flex items-center justify-center">
              <div class="w-32 h-32 rounded-full bg-white/20 backdrop-blur-lg"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">毛玻璃效果</h3>
              <p class="text-gray-600 mb-4">现代 UI 设计中常用的磨砂玻璃效果</p>
              <button class="!rounded-button bg-primary text-white px-4 py-2 hover:bg-primary/90 whitespace-nowrap">查看代码</button>
            </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 bg-gradient-to-r from-orange-500 to-pink-500 p-6 flex items-center justify-center">
              <div class="grid grid-cols-3 gap-2">
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">网格布局</h3>
              <p class="text-gray-600 mb-4">响应式网格系统的实现方案</p>
              <button class="!rounded-button bg-primary text-white px-4 py-2 hover:bg-primary/90 whitespace-nowrap">查看代码</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="bg-gray-900 py-12 text-gray-400">
    <div class="max-w-[1440px] mx-auto px-8">
      <div class="flex justify-between items-start mb-12">
        <div>
          <a href="#" class="text-2xl font-['Pacifico'] text-white mb-4 block">logo</a>
          <p class="max-w-xs">专注于现代 Web 技术栈的开发与实践，致力于创造优秀的用户体验。</p>
        </div>
        <div class="grid grid-cols-3 gap-12">
          <div>
            <h3 class="text-white font-semibold mb-4">导航</h3>
            <ul class="space-y-2">
              <li><a href="#home" class="hover:text-white">首页</a></li>
              <li><a href="#skills" class="hover:text-white">技术栈</a></li>
              <li><a href="#collection" class="hover:text-white">CSS 收藏</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">社交媒体</h3>
            <ul class="space-y-2">
              <li><a href="#" class="hover:text-white">GitHub</a></li>
              <li><a href="#" class="hover:text-white">Twitter</a></li>
              <li><a href="#" class="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-4">联系方式</h3>
            <ul class="space-y-2">
              <li>contact@example.com</li>
              <li>WeChat: frontend_dev</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8">
        <p class="text-center">© 2024 All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>
