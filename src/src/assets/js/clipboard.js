
import Clipboard from 'clipboard'
 
// 文本复制
function copySuccess() {
    Vue.prototype.$message({
        type: 'success',
        message: '复制文本成功',
        duration: 1500
    })
}
 
function copyFail() {
    Vue.prototype.$message({
        message: '该浏览器不支持自动复制',
        type: 'warning'
    })
}
 
function copyText(text,e) {
    const clipboard = new Clipboard(e.target, {
        text: () => text
    })
    clipboard.on('success', () => {
        clipboardSuccess()
        // 释放内存
        clipboard.destroy()
    })
    clipboard.on('error', () => {
        // 不支持复制
        clipboardError()
        // 释放内存
        clipboard.destroy()
    })
    // 解决第一次点击不生效的问题，如果没有，第一次点击会不生效
    clipboard.onClick(e)
}

export default {
    copyText
}