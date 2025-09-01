// src/js/domain-speed.js
// 域名测速功能（使用 HEAD 请求替代图片请求）

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
 * 测试单个域名速度
 * @param {string} domain - 域名
 * @param {number} timeout - 超时时间（毫秒）
 * @returns {Promise<Object>} 域名及响应时间
 */
function testSingleDomain(domain, timeout = 3000) {
    return new Promise(resolve => {
        const start = performance.now();
        const controller = new AbortController();

        // 超时处理
        const timer = setTimeout(() => {
            controller.abort();
        }, timeout);

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
 * @param {Array<string>} domains - 域名列表
 * @param {number} timeout - 超时时间（毫秒）
 * @returns {Promise<Array<Object>>} 域名及响应时间
 */
function testDomainSpeed(domains, timeout = 3000) {
    return Promise.all(domains.map(d => testSingleDomain(d, timeout)));
}

/**
 * 选择最快的域名
 * @param {Array<Object>} results - 测试结果数组
 * @returns {string|null} 最快域名或 null（全部失败）
 */
function selectFastestDomain(results) {
    const valid = results.filter(r => r.time !== Infinity);
    if (valid.length === 0) return null;
    valid.sort((a, b) => a.time - b.time);
    return valid[0].domain;
}

/**
 * 测试域名并启动倒计时
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

    // 启动倒计时
    // 如果最快域名为 null（全部失败），倒计时结束后会触发弹窗
    startCountdown(targetUrl || "", countdown, results);

    return results;
}

// 导出函数
export { decodeDomains, testDomainSpeed, selectFastestDomain, testDomains };
