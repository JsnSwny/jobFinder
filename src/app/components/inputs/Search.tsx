import React from "react";

interface SearchProps {
	placeholder?: string;
}

const Search = ({ placeholder }: SearchProps) => {
	return (
		<input
			placeholder={placeholder}
			className="focus:outline-none w-96 px-6 py-4 text-gray-600 rounded-full border-[1px] border-solid border-gray-200"
		/>
	);
};

export default Search;
