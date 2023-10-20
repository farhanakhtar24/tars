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
		shadow-md cursor-pointer dark:border-0 dark:bg-[#141414]">
			<Image
				className="flex-1 object-cover"
				src={urls.regular}
				width={999}
				height={999}
				alt={alt_description}
			/>
			<div className="h-16 flex p-2 sm:p-0 border-t dark:border-t-[#141414]">
				{/* authoir photo */}
				<div className="flex justify-center items-center w-3/10 sm:h-16 sm:w-16">
					<Image
						className="w-full h-full rounded-full sm:p-3 p-1"
						src={profile_image.large}
						width={999}
						height={999}
						alt={username}
					/>
				</div>
				<div className="flex-1 flex justify-between items-center text-[6px] sm:text-base">
					{/* authoir Name */}
					<div className="flex flex-col">
						<p className="font-bold text-[8px] sm:text-xs sm:leading-4 text-[#4F4F4F] dark:text-white">
							{name}
						</p>
						<p className="font-semibold italic text-[10px] text-[#A7A7A7] dark:text-white">
							@
							{username.length > 6
								? username.slice(0, 6) + "..."
								: username}
						</p>
					</div>
					{/* likes */}
					<div className="flex gap-1 items-center text-[#4F4F4F] dark:text-white">
						<AiOutlineLike className="text-xs sm:text-base" />
						<p className="font-bold text-[10px] sm:pr-5 pr-1">
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
