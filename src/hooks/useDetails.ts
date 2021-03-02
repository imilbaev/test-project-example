import { useEffect, useState } from "react";

import { SEARCH_API_URL, DETAILS_FIELDS } from "../contants";
import { useMounted } from "./useMounted";

type Details = [string, string, string];

export function useDetails(npi: string) {
	const [loading, setLoading] = useState(false);
	const [details, setDetails] = useState<Details>();
	const isMounted = useMounted();

	useEffect(() => {
		const getDetails = async () => {
			setLoading(true);

			try {
				const response = await fetch(`${SEARCH_API_URL}?terms=${npi}&cf=${npi}&df=${DETAILS_FIELDS}&maxList=1`);
				const [, , , data] = await response.json();
				if (data.length > 0 && isMounted()) {
					setDetails(data[0]);
				}
			} catch (e) {
				console.log(e);
			} finally {
				isMounted() && setLoading(false);
			}
		};
		getDetails();
	}, [npi, isMounted]);

	return { loading, details };
}
