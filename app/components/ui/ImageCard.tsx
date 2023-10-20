import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";

type Props = {
	item: any;
	setSelectedImage: any;
};

const ImageCard = ({ item, setSelectedImage }: Props) => {
	const { alt_description, urls, user, likes, slug } = item;
	const { name, profile_image, username } = user;

	return (
		<div
			onClick={() => setSelectedImage(item)}
			className="flex flex-col w-full h-full border border-[#E5E5E5] rounded-xl overflow-hidden
		shadow-md cursor-pointer">
			<Image
				className="flex-1 object-cover"
				src={urls.regular}
				width={999}
				height={999}
				alt={alt_description}
			/>

			<div className="h-16 flex">
				{/* authoir photo */}
				<div className="flex justify-center items-center h-16 w-16">
					<Image
						className="w-full h-full rounded-full p-3"
						src={profile_image.large}
						width={999}
						height={999}
						alt={username}
					/>
				</div>
				<div className="flex-1 flex justify-between items-center border-t text-[6px] sm:text-base">
					{/* authoir Name */}
					<div className="flex flex-col">
						<p className="font-bold text-xs leading-4 text-[#4F4F4F]">
							{name}
						</p>
						<p className="font-semibold italic text-[10px] text-[#A7A7A7]">
							@{username}
						</p>
					</div>
					{/* likes */}
					<div className="flex gap-1 items-center text-[#4F4F4F]">
						<AiOutlineLike className="" />
						<p className="font-bold text-[10px] pr-5">
							{likes > 999
								? (likes / 1000).toFixed(1) + "k"
								: likes}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageCard;
