import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import type { enMessages } from "@/types/messages";

type Primitive = string | number | boolean | null | undefined;

type NestedKeys<T> = T extends Primitive
	? never
	: // biome-ignore lint/suspicious/noExplicitAny: <explanation>
		T extends any[]
		? never
		: T extends object
			? {
					[K in keyof T]: `${K & string}${NestedKeys<T[K]> extends never
						? ""
						: `.${NestedKeys<T[K]>}`}`;
				}[keyof T]
			: never;

type TranslationValues = Record<
	string,
	| string
	| number
	| boolean
	| null
	| undefined
	| ReactNode
	| ((chunks: ReactNode) => ReactNode)
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	| any[]
>;

type TranslationFunction<Namespace extends keyof enMessages> = {
	<K extends NestedKeys<enMessages[Namespace]>>(
		key: K,
		values?: TranslationValues,
	): string;
	rich: <K extends NestedKeys<enMessages[Namespace]>>(
		key: K,
		values?: TranslationValues,
	) => ReactNode;
};

export function useTypedTranslations<Namespace extends keyof enMessages>(
	namespace: Namespace,
): TranslationFunction<Namespace> {
	const t = useTranslations(namespace);

	const typedT = (<K extends NestedKeys<enMessages[Namespace]>>(
		key: K,
		values?: TranslationValues,
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	) => t(key as any, values as any)) as TranslationFunction<Namespace>;

	typedT.rich = <K extends NestedKeys<enMessages[Namespace]>>(
		key: K,
		values?: TranslationValues,
	): ReactNode => {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		return t.rich(key as any, values as any);
	};

	return typedT;
}
