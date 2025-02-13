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
    label: 'flex向右浮动',
    dom: `<div class="mk-flex"><div class="w-16 h-16 bg-white rounded-lg mk-flex__item"></div><div class="w-16 h-16 bg-white rounded-lg mk-flex__item"></div><div class="w-16 h-16 bg-white rounded-lg mk-flex__item"></div></div>`,
    css: '.mk-flex {display: flex; width: 80%; gap: 8px; div:nth-child(2) {margin-left: auto;}}',
  },
  {
    label: '浮雕风格',
    dom: `<div class="flex mk-emboss"><input placeholder="Input Your Text" /><button>S</button></div>`,
    css: `.mk-emboss {
      --ruler: 16px;
      --color-bg: #ebecf0;
      --color-white: #fff;
      --color-shadow: #babecc;
      gap: 12px;
      button, input {
        flex: auto;
        border: 0;
        outline: 0;
        font-size: var(--ruler);
        border-radius: 12px;
        padding: var(--ruler);
        background-color: var(--color-bg);
        text-shadow: 1px 1px 0 var(--color-white);
      }
      input {
        box-shadow: inset 2px 2px 5px var(--color-shadow), inset -5px -5px 10px var(--color-white);
        width: 100%;
        transition: all 0.2s ease-in-out;
        appearance: none;
        -webkit-appearance: none;
      
        &:focus {
          box-shadow: inset 1px 1px 2px var(--color-shadow),
            inset -1px -1px 2px var(--color-white);
        }
      }
      button {
        color: #61677c;
        font-weight: bold;
        box-shadow: -5px -5px 20px var(--color-white), 5px 5px 20px var(--color-shadow);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        font-weight: 600;
      
        &:hover {
          box-shadow: -2px -2px 5px var(--color-white), 2px 2px 5px var(--color-shadow);
        }
      
        &:active {
          box-shadow: inset 1px 1px 2px var(--color-shadow), inset -1px -1px 2px var(--color-white);
        }
      }
    }`,
    background: 'background: #ebecf0;',
  },
  {
    label: '文字反色',
    dom: `<div class="mk-mix-blend-mode text-3xl">文字反色 mix-blend-mode</div>`,
    css: '.mk-mix-blend-mode {color: white; mix-blend-mode: difference;}',
  },
  {
    label: '水平垂直居中',
    dom: `<div class="mk-hv-center rounded-lg"><div class="w-20 h-20 bg-white rounded-lg"></div></div>`,
    css: '.mk-hv-center {display: flex; width: 160px; height: 160px; background: #ffffff99; & > div {margin: auto;}}',
  },
];