import { useCallback, useState } from "react";
import { debounce } from "lodash";

import { SEARCH_API_URL, SEARCH_FIELDS, PAGE_SIZE, SEARCH_DEBOUNCE_TIME } from "../contants";
import { useMounted } from "./useMounted";

type SearchResultItem = [string, string];

export function useSearch() {
	const [searching, setSearching] = useState(false);
	const [result, setResult] = useState<Array<SearchResultItem>>([]);
	const isMounted = useMounted();

	const search = useCallback(
		debounce(async (term: string) => {
			setResult([]);

			if (!term) {
				return;
			}

			try {
				setSearching(true);
				const response = await fetch(
					`${SEARCH_API_URL}?terms=${term}&df=${SEARCH_FIELDS}&sf=${SEARCH_FIELDS}&maxList=${PAGE_SIZE}`
				);
				const [, , , data] = await response.json();
				isMounted() && setResult(data);
			} catch (e) {
				console.log(e);
			} finally {
				isMounted() && setSearching(false);
			}
		}, SEARCH_DEBOUNCE_TIME),
		[isMounted]
	);

	return { searching, result, search };
}
