import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: i18n(I18nKey.home),
		url: "/",
	},
	[LinkPreset.About]: {
		name: i18n(I18nKey.about),
		url: "/about/",
	},
	[LinkPreset.Archive]: {
		name: i18n(I18nKey.archive),
		url: "/archive/",
	},
	[LinkPreset.Photo]: {
		name: i18n(I18nKey.photo),
		url: "/photo/",
	},
	[LinkPreset.Music]: {
		name: i18n(I18nKey.music),
		url: "/music/",
	},
	[LinkPreset.Recommend]: {
		name: i18n(I18nKey.recommend),
		url: "/recommend/",
	},
	[LinkPreset.Thinking]: {
		name: i18n(I18nKey.thinking),
		url: "/thinking/",
	},
	[LinkPreset.Me]: {
		name: i18n(I18nKey.me),
		url: "/me/",
	},
};
