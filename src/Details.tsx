import React from "react";
import { useParams } from "react-router-dom";

import { useDetails } from "./hooks/useDetails";

interface UrlParams {
	npi: string;
}

const Details = () => {
	const { npi } = useParams<UrlParams>();
	const { loading, details } = useDetails(npi);

	if (loading) return <>Loading ...</>;

	if (!details) return <>Load error</>;

	const [name, providerType, address] = details;

	return (
		<>
			<h2>Details for NPI {npi}</h2>

			<p>Name: {name}</p>
			<p>Provider type: {providerType}</p>
			<p>Address: {address}</p>
		</>
	);
};

export default React.memo(Details);
