"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

const SearchBar = ({}: Props) => {
	const [input, setInput] = useState("");
	const router = useRouter();

	return (
		<div
			className="w-4/5 sm:w-96 h-10 rounded-md bg-[#FAFAFA] border border-[#ECECEC] text-[#C4C4C4]
        items-center p-2 gap-1 shadow-[inset_0_4_19px_rgba(0,0,0,0.05)] flex mb-5 sm:mb-0
		dark:bg-[#4F4F4F] dark:border-[#858484] dark:text-[#858484]
		">
			<CiSearch className="w-5 h-5" />
			<input
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter" && input) {
						router.push(`/search/?query=${input}`);
						setInput("");
					}
				}}
				type="text"
				placeholder="Search Image Here"
				className="flex-1 h-full bg-[#FAFAFA] outline-none tracking-wide text-xs font-medium text-black/70
				dark:bg-[#4F4F4F] dark:text-white
				"
				value={input}
			/>
		</div>
	);
};

export default SearchBar;
