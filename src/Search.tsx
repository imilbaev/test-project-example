import React, { ChangeEvent } from "react";
import { Link } from "react-router-dom";

import { useSearch } from "./hooks/useSearch";

const Search = () => {
	const { searching, result, search } = useSearch();
	const foundSomething = !searching && result.length > 0;

	const hanldeSearch = (event: ChangeEvent<HTMLInputElement>) => {
		search(event.target.value || "");
	};

	return (
		<div>
			<h2>Search something</h2>
			<input type="text" onChange={hanldeSearch} />

			{searching && <p>Searching ...</p>}

			{foundSomething &&
				result.map(([npi, name]) => (
					<div key={npi}>
						<Link to={`/details/${npi}`}>{name}</Link>
					</div>
				))}
		</div>
	);
};

export default React.memo(Search);
