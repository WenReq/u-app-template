import {
	getAccessToken
} from '@/utils/auth'

// 登录页面
const loginPage = "/pages/login"

// 页面白名单
const whiteList = [
	'/pages/login', '/pages/common/webview/index', '/pages/common/protocol/user', '/pages/common/protocol/privacy'
]

// 检查地址白名单
function checkWhite(url) {
	const path = url.split('?')[0]
	return whiteList.indexOf(path) !== -1
}

// 页面跳转验证拦截器
/*
	uni.navigateTo() 	保留当前页面，跳转到应用内的某个页面，使用 uni.navigateBack 可以返回到原页面。
	uni.redirectTo() 	关闭当前页面，跳转到应用内的某个页面。
	uni.reLaunch() 		关闭所有页面，打开到应用内的某个页面。reLaunch 可以打开任意页面。
	uni.switchTab() 	跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。switchTab 只能打开 tabBar 页面。
*/
let list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"]
list.forEach(item => {
	uni.addInterceptor(item, {
		invoke(to) {
			if (getAccessToken()) {
				if (to.path === loginPage) {
					uni.reLaunch({
						url: "/"
					})
				}
				return true
			} else {
				if (checkWhite(to.url)) {
					return true
				}
				uni.reLaunch({
					url: loginPage
				})
				return false
			}
		},
		fail(err) {
			console.log(err)
		}
	})
})