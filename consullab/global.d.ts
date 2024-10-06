import type { Messages } from "./messages/pt.json";
import type { ReactNode } from "react";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type RecursiveKeyOf<TObj extends Record<string, any>> = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	[TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
		? `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
		: TKey;
}[keyof TObj & string];

type TranslationValues = Record<
	string,
	string | number | ((chunks: ReactNode) => ReactNode)
>;

declare module "next-intl" {
	export function useTranslations<
		TNamespace extends keyof Messages | undefined = undefined,
	>(
		namespace?: TNamespace,
	): {
		<
			TKey extends RecursiveKeyOf<
				TNamespace extends keyof Messages ? Messages[TNamespace] : Messages
			>,
		>(
			key: TKey,
			values?: TranslationValues,
		): string;
		rich: <
			TKey extends RecursiveKeyOf<
				TNamespace extends keyof Messages ? Messages[TNamespace] : Messages
			>,
		>(
			key: TKey,
			values?: TranslationValues,
		) => ReactNode;
	};
}
