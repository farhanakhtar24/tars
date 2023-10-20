"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

type Props = {};

const Cover = ({}: Props) => {
	const router = useRouter();
	const [input, setInput] = useState("");
	return (
		<div
			className="w-full h-96 flex flex-col items-center justify-center gap-5 bg-center text-white px-10 text-center
		bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2070')]">
			<div className="font-bold text-3xl leading-10">
				Download High Quality Images by creators
			</div>
			<div className="font-medium text-sm leading-4">
				Over 2.4 million+ stock Images by our talented community
			</div>
			<div className="w-full sm:w-[808px] h-14 rounded-lg bg-[#FFFFFF] text-[#C4C4C4] flex items-center p-3 gap-2">
				<CiSearch className="w-6 h-6" />
				<input
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter" && input) {
							// use naviagte
							router.push(`/search/?query=${input}`);
							setInput("");
						}
					}}
					value={input}
					type="text"
					placeholder="Search Image Here"
					className="h-full flex-1 outline-none tracking-wide text-sm font-medium text-black/70"
				/>
			</div>
		</div>
	);
};

export default Cover;
