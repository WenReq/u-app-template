let BASE_URL = ''
if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://api-dashboard.yudao.iocoder.cn'
} else {
  BASE_URL = 'http://api-dashboard.yudao.iocoder.cn' // 生产环境
}

// 应用全局配置
module.exports = {
	baseUrl: BASE_URL,
	// baseUrl: 'http://localhost:48080',
	baseApi: '/admin-api',
	// 应用信息
	appInfo: {
		// 应用名称
		name: "app",
		// 应用版本
		version: "1.0.0",
		// 应用logo
		logo: "/static/logo.png",
		// 官方网站
		site_url: "http://www.naiyun.com/home",
		// 政策协议
		agreements: [{
				title: "使用条款",
				url: "https://gitee.com/terms"
			},
			{
				title: "非活跃账号处理规范",
				url: "https://gitee.com/inactive_accounts"
			}
		]
	}
}