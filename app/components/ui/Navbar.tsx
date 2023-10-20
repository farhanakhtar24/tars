"use client";
import React from "react";
import logo from "../../assets/Image Gallery Logo.svg";
import Image from "next/image";
import SearchBar from "../SearchBar";
import Link from "next/link";

type Props = {};

const Navbar = ({}: Props) => {
	return (
		<div className="w-full flex justify-center">
			<div
				className="sm:w-3/4 flex justify-between items-center sm:p-5
			 py-4 w-4/5">
				<Link href="/">
					<Image
						className="w-44 h-10"
						src={logo.src}
						alt="Image Galley Logo"
						width={999}
						height={999}
					/>
				</Link>
				<SearchBar />
				<ul className="gap-4 font-bold text-xs hidden sm:flex">
					<li className="cursor-pointer">Explore</li>
					<li className="cursor-pointer">Collection</li>
					<li className="cursor-pointer">Community</li>
				</ul>
				<div className="hidden font-bold text-xs sm:block">
					Dark Mode
				</div>
			</div>
		</div>
	);
};

export default Navbar;
