export interface DiagnosticsItem {
	id: string;
	number: string;
	title: string;
	description: string[];
}

export interface ServiceItem {
	id: string;
	title: string;
	number: string;
	href: string;
}

export interface NewsItem {
	date: string;
	content: string;
	url: string;
}

export interface Diagnostics {
	title: string;
	description: string;
	descriptionLabel: string;
	areasLabel: string;
	areasDescription: string;
	list: DiagnosticsItem[];
}

export interface ServiceList {
	title: string;
	items: ServiceItem[];
}

export interface News {
	title: string;
	items: NewsItem[];
}

export interface ServicesTranslation {
	diagnostics: Diagnostics;
	serviceList: ServiceList;
	news: News;
	buttons: {
		viewAllNews: string;
	};
}
