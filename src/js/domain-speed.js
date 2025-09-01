// src/js/domain-speed.js
// 域名测速与倒计时跳转稳定版

import { startCountdown } from './countdown.js';

/**
 * 解密 base64 域名
 * @param {Array<string>} domains - Base64 编码的域名数组
 * @returns {Array<string>} 解密后的域名数组
 */
function decodeDomains(domains) {
    return domains.map(d => atob(d));
}

/**
 * 测试单个域名速度（HEAD 请求）
 * @param {string} domain 
 * @param {number} timeout - 超时时间（毫秒）
 * @returns {Promise<Object>}
 */
function testSingleDomain(domain, timeout = 3000) {
    return new Promise(resolve => {
        const start = performance.now();
        const controller = new AbortController();

        const timer = setTimeout(() => controller.abort(), timeout);

        fetch(domain, { method: 'HEAD', mode: 'no-cors', signal: controller.signal })
            .then(() => {
                clearTimeout(timer);
                resolve({ domain, time: performance.now() - start });
            })
            .catch(() => resolve({ domain, time: Infinity }));
    });
}

/**
 * 测试域名速度
 * @param {Array<string>} domains 
 * @param {number} timeout 
 * @returns {Promise<Array<Object>>}
 */
function testDomainSpeed(domains, timeout = 3000) {
    return Promise.all(domains.map(d => testSingleDomain(d, timeout)));
}

/**
 * 选择最快域名
 * @param {Array<Object>} results 
 * @returns {string|null} 最快域名或 null（全部失败）
 */
function selectFastestDomain(results) {
    const valid = results.filter(r => r.time !== Infinity);
    if (valid.length === 0) return null;
    valid.sort((a, b) => a.time - b.time);
    return valid[0].domain;
}

/**
 * 测试域名并启动倒计时跳转
 * @param {Array} domains - 域名列表
 * @param {string} targetPath - URL hash 或路径
 * @param {number} countdown - 倒计时秒数
 * @returns {Promise<Array>} 域名测速结果数组
 */
async function testDomains(domains, targetPath, countdown) {
    // 域名测速
    const results = await testDomainSpeed(domains);
    console.log('域名测速结果:', results);

    // 选择最快域名
    let fastest = selectFastestDomain(results);
    console.log('最快的域名:', fastest);

    // 构造目标URL
    let targetUrl = fastest;

    if (fastest && targetPath) {
        if (!targetUrl.endsWith('/')) targetUrl += '/';
        const cleanPath = targetPath.startsWith('/') ? targetPath.substring(1) : targetPath;
        targetUrl += cleanPath;
    }

    // 判断是否与当前页面相同
    const currentUrl = window.location.href.split('#')[0]; // 忽略 hash
    const compareUrl = targetUrl ? targetUrl.split('#')[0] : '';
    if (compareUrl === currentUrl || !fastest) {
        console.log('目标URL与当前页面相同或没有可用域名，倒计时结束显示弹窗');
        startCountdown("", countdown, results); // 空字符串 → redirectToTarget 会触发弹窗
    } else {
        // 倒计时结束跳转
        startCountdown(targetUrl, countdown, results);
    }

    return results;
}

// 导出模块
export { decodeDomains, testDomainSpeed, selectFastestDomain, testDomains };
