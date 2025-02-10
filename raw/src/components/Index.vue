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
<!--          <a href="#contact" class="text-gray-600 hover:text-primary">联系我</a>-->
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
            <p class="text-xl mb-8">专注于现代 Web 技术栈的开发与实践，对性能优化和用户体验有独到见解。</p>
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

          <div v-for="(c,i) of cs" :key="i" class="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div class="h-48 p-6 flex items-center justify-center" :style="c.background || getRandomGradientBackground()" v-html="c.dom"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{c.label}}</h3>
<!--              <p class="text-gray-600 mb-4">使用 CSS 动画实现平滑的交互效果</p>-->
              <button class="!rounded-button bg-primary text-white px-4 py-2 hover:bg-primary/90 whitespace-nowrap" @click="showCode(c.css)">查看代码</button>
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
              <li>mankel.li.ga@gmail.com</li>
<!--              <li>WeChat: frontend_dev</li>-->
            </ul>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-800 pt-8">
        <p class="text-center">© {{new Date().getFullYear()}} All rights reserved.</p>
      </div>
    </div>
  </footer>
<!--  <dialog ref="cssDialog" class="mk-css-dialog" style="">-->
<!--    <div class="mk-css-dialog__buttons">-->
<!--      <img alt="" src="/mk-copy.png"  />-->
<!--      <img alt="" src="/mk-close.png" @click="hideCssCode" />-->
<!--    </div>-->
<!--    <code>{{cssCode}}</code>-->
<!--  </dialog>-->
  <div id="codeModal" class="fixed inset-0 hidden items-center justify-center z-50 mk-backdrop">
    <div class="bg-white rounded-lg w-[60vw] max-h-[80vh] overflow-hidden">
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-semibold">代码示例</h3>
          <button @click="hideCode" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times text-xl"></i>
          </button>
        </div>
        <pre id="codeContent" class="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[400px]"></pre>
        <div class="mt-4 flex justify-end">
          <button @click="copyCode"
              class="!rounded-button bg-primary text-white px-4 py-2 hover:bg-primary/90 whitespace-nowrap flex items-center gap-2">
            <i class="fas fa-copy"></i>
            复制代码
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {formatCssCode, getRandomGradientBackground, insertStyleTag} from "./Utils.ts";
import {CssCollections as cs} from "./CssCollection.ts";
import {onMounted} from "vue";

// const cssDialog = ref<HTMLDialogElement>();
// const cssCode = ref<string>();

// async function showCssCode(css: string = '') {
//   cssDialog.value?.showModal();
//   cssCode.value = await formatCssCode(css);
//   document.body.classList.add('mk-lock-scroll');
// }
//
// function hideCssCode() {
//   cssDialog.value?.close();
//   document.body.classList.remove('mk-lock-scroll');
// }

async function showCode(css: string = '') {
  const modal = document.getElementById('codeModal') as HTMLDivElement;
  const codeContent = document.getElementById('codeContent') as HTMLPreElement;
  codeContent.textContent = await formatCssCode(css);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}
function hideCode() {
  const modal = document.getElementById('codeModal') as HTMLDivElement;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}
function copyCode() {
  const codeContent = document.getElementById('codeContent') as HTMLPreElement;
  navigator.clipboard.writeText(codeContent.textContent || '');
  alert('代码已复制到剪贴板');
}
window.onclick = function (event) {
  const modal = document.getElementById('codeModal');
  if (event.target === modal) {
    hideCode();
  }
}

onMounted(() => {
  cs.forEach(c => insertStyleTag(c.css));
});
</script>
