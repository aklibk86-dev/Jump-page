// src/js/domain-speed.js
// 域名测速功能

import { startCountdown } from './countdown.js';

/**
 * 解密base64域名
 * @param {Array<string>} domains - Base64编码的域名数组
 * @returns {Array<string>} 解密后的域名数组
 */
function decodeDomains(domains) {
    return domains.map(d => atob(d));
}

/**
 * 测试域名速度
 * @param {Array<string>} domains - 要测试的域名数组
 * @param {number} timeout - 超时时间（毫秒）
 * @returns {Promise<Array<Object>>} 包含域名和响应时间的数组
 */
function testDomainSpeed(domains, timeout = 2000) {
    return Promise.all(domains.map(domain => {
        return new Promise(resolve => {
            const img = new Image();
            const start = performance.now();
            let finished = false;
            img.onload = () => {
                if (!finished) {
                    finished = true;
                    resolve({ domain, time: performance.now() - start });
                }
            };
            img.onerror = () => {
                if (!finished) {
                    finished = true;
                    resolve({ domain, time: Infinity });
                }
            };
            img.src = domain + "/favicon.ico?_t=" + Math.random();
            setTimeout(() => {
                if (!finished) {
                    finished = true;
                    resolve({ domain, time: Infinity });
                }
            }, timeout);
        });
    }));
}

/**
 * 选择最快的域名
 * @param {Array<Object>} results - 测试结果数组
 * @returns {string|null} 最快的域名
 */
function selectFastestDomain(results) {
    results.sort((a, b) => a.time - b.time);
    if (results.length === 0 || results[0].time === Infinity) {
        return null; // 全部失败
    }
    return results[0].domain;
}

/**
 * 测试域名并启动倒计时
 * @param {Array} domains - 域名列表
 * @param {string} targetPath - 目标路径
 * @param {number} countdown - 倒计时秒数
 * @returns {Promise<Array>} 域名测速结果数组
 */
async function testDomains(domains, targetPath, countdown) {
    // 测试域名速度
    const results = await testDomainSpeed(domains);
    console.log('域名测速结果:', results);
    
    // 选择最快的域名
    const fastest = selectFastestDomain(results);
    console.log('最快的域名:', fastest);

    if (!fastest) {
        console.error("没有可用域名，显示弹窗");
        const popup = document.getElementById("popup");
        if (popup) {
            popup.style.display = "block";
        }
        return results;
    }
    
    // 构造目标URL
    let targetUrl = fastest;
    if (targetPath) {
        if (!targetUrl.endsWith('/')) {
            targetUrl += '/';
        }
        const cleanPath = targetPath.startsWith('/') ? targetPath.substring(1) : targetPath;
        targetUrl += cleanPath;
    }
    
    // 启动倒计时并在结束后跳转
    startCountdown(countdown, () => {
        window.location.href = targetUrl;
    });
    
    return results;
}

// 导出函数
export { decodeDomains, testDomainSpeed, selectFastestDomain, testDomains };
