// 新增: 格式化CSS代码的函数
import beautify from 'js-beautify';

// 添加: 返回随机RGB颜色的函数
export function getRandomRgbColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

export function getRandomGradientBackground(): string {
    const startColor = getRandomRgbColor();
    const endColor = getRandomRgbColor();
    return `background: linear-gradient(to right, ${startColor}, ${endColor})`;
}

// 新增: 动态插入style标签的函数
export function insertStyleTag(css = ''): void {
    if (css.trim().length > 0) {
        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }
}

export async function formatCssCode(css: string): Promise<string> {
    return beautify.css(css).replace(/\n\n/g, '\n');
}
