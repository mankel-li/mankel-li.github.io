import type {CssCollection} from "../types";

export const CssCollections: CssCollection[] = [
  {
    label: '动画效果',
    dom: '<div class="w-20 h-20 bg-white rounded-lg mk-animate-bounce"></div>',
    css: `@keyframes mk-bounce {
      0%, 100% {transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8,0,1,1);}
      50% {transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1);}
    }
    .mk-animate-bounce {animation: mk-bounce 1s infinite;}`,
  },
  {
    label: '毛玻璃效果',
    dom: '<div class="w-32 h-32 rounded-full bg-white/20 mk-backdrop-blur"></div>',
    css: '.mk-backdrop-blur {backdrop-filter: blur(4px);}',
    background: 'background: url("/mk-bg.png") no-repeat center center / cover;',
  },
  {
    label: '网格布局',
    dom: `<div class="grid grid-cols-3 gap-2">
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
                <div class="w-8 h-8 bg-white rounded-lg"></div>
              </div>`,
    css: '',
  },
];