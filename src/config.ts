import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "(￣∀￣)",
	subtitle: "ノ",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 244, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/yaoyue.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Photo,
		LinkPreset.Music,
		LinkPreset.Recommend,
		LinkPreset.Thinking,
		LinkPreset.Me,
		{
			name: "GitHub",
			url: "https://jiachengwu-5.github.io/", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/shu.gif", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "吴佳诚 (Jiacheng WU)",
	bio: "事已至此，先睡觉吧",
	links: [
		{
			name: "Bilibili",
			icon: "streamline-ultimate:bilibili-logo-bold", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/44689654?spm_id_from=333.1365.0.0",
		},
		{
			name: "Wechat",
			icon: "mingcute:wechat-fill", // 仍保留图标作为回退
			url: "", // image: "assets/images/Wechat.png", // 相对于 /src 的路径，或以 / 开头表示 public 下的路径: '/images/wechat.png'
			title: "微信号: wjc407171301",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://jiachengwu-5.github.io/",
			title: "GitHub",
			// image:
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
