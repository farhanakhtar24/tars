"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {
	searchText: string;
	setSearchText: any;
};

const SearchBar = ({ searchText, setSearchText }: Props) => {
	const [input, setInput] = useState("");
	return (
		<div
			className="w-96 h-10 rounded-md bg-[#FAFAFA] border border-[#ECECEC] text-[#C4C4C4]
        flex items-center p-2 gap-1 shadow-[inset_0_4_19px_rgba(0,0,0,0.05)]">
			<CiSearch className="w-5 h-5" />
			<input
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter" && input) {
						setSearchText(input);
						setInput("");
					}
				}}
				type="text"
				placeholder="Search Image Here"
				className="flex-1 h-full bg-[#FAFAFA] outline-none tracking-wide text-xs font-medium text-black/70"
				value={input}
			/>
		</div>
	);
};

export default SearchBar;