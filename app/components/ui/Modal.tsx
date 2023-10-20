"use client";
import React from "react";
import Image from "next/image";
import { ImCross as Cross } from "react-icons/im";
import { AiOutlineLike, AiOutlineInstagram as Ig } from "react-icons/ai";
import { PiTwitterLogo as Twitter } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { AiOutlineShareAlt as ShareIcon } from "react-icons/ai";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";
import axios from "axios";
import { saveAs } from "file-saver";

type Props = {
	selectedImage: any;
	setSelectedImage: any;
};

const ACCESSKEY = process.env.NEXT_PUBLIC_ACCESSKEY;

const Modal = ({ selectedImage, setSelectedImage }: Props) => {
	const { alt_description, urls, user, likes, slug, links } = selectedImage;
	const { name, profile_image, username, social } = user;
	const { instagram_username, twitter_username } = social;
	const router = useRouter();

	const handleDownload = () => {
		const downloadLocation = links.download_location;
		const downloadImage = async () => {
			const res = await axios.get(
				`${downloadLocation}&client_id=${ACCESSKEY}`
			);
			const { url } = res.data;
			saveAs(url, "image.jpg");
		};
		downloadImage();
	};

	const handleShare = () => {
		const imageUrl = selectedImage.urls.regular;
		navigator.clipboard
			.writeText(imageUrl)
			.then(() => {
				console.log("Image URL copied to clipboard:", imageUrl);
			})
			.catch((error) => {
				console.error("Failed to copy image URL to clipboard:", error);
			});
	};

	return (
		<div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
			<div className="w-4/5 h-5/6 bg-white rounded-xl relative">
				<Cross
					className="absolute w-6 h-6 -top-2 -right-2 z-10 bg-slate-200/50 p-1.5 rounded-full
					cursor-pointer text-[#4F4F4F]"
					onClick={() => setSelectedImage(null)}
				/>
				<div className="w-full h-full flex flex-col overflow-y-scroll">
					<div className="relative w-full h-full flex justify-center items-center">
						<Image
							className="h-full w-auto object-cover rounded-md sm:rounded-none"
							src={selectedImage.urls.regular}
							width={999}
							height={999}
							alt={selectedImage.alt_description}
						/>
						<div
							className="absolute right-7 bottom-7 py-5 px-9 bg-[#3CB46E] rounded text-white font-bold
						text-xs leading-3 cursor-pointer"
							onClick={handleDownload}>
							Download Image
						</div>
						<div className="absolute bottom-7 left-7 flex gap-5 font-medium text-[12px]">
							<div
								className="flex items-center gap-1 text-black border border-black rounded p-2 cursor-pointer"
								onClick={handleShare}>
								<ShareIcon />
								Share
							</div>
							<div className="flex items-center gap-1 text-black border border-black rounded p-2 cursor-pointer">
								<InfoIcon />
								Info
							</div>
						</div>
					</div>
					<div className="flex flex-col flex-1 w-full p-10">
						<div className="w-full flex items-center">
							<div className="w-14 h-14 flex items-center justify-center">
								<Image
									className="rounded-full"
									src={profile_image.large}
									width={999}
									height={999}
									alt={username}
								/>
							</div>
							<div className="flex flex-col pl-2 gap-1">
								<p className="font-bold text-sm leading-4 text-[#4F4F4F]">
									{name}
								</p>
								<p className="font-semibold italic text-xs leading-4 text-[#A7A7A7]">
									@{username}
								</p>
							</div>
							<div className="w-full flex justify-between items-center ml-4">
								{/* ig, x , likes,downloads */}
								<div className="flex items-center font-semibold italic text-[#A7A7A7] text-xs gap-2">
									{instagram_username && (
										<p className="flex items-center">
											<Ig />/{instagram_username}
										</p>
									)}
									{twitter_username && (
										<p className="flex items-center">
											<Twitter />/{twitter_username}
										</p>
									)}
								</div>
								<div className="flex gap-1 items-center text-[#858484]">
									<AiOutlineLike className="w-5 h-5" />
									<p className="font-bold text-[15px] leading-4 pr-5">
										{likes > 999
											? (likes / 1000).toFixed(1) + "k"
											: likes}
									</p>
								</div>
							</div>
						</div>
						{selectedImage.tags && (
							<div className="w-full flex flex-col gap-4 mt-10">
								<p className="font-bold text-[#4F4F4F] leading-4">
									Related Tags
								</p>
								<div className="flex flex-wrap gap-2">
									{selectedImage.tags.map(
										(
											tag: any,
											idx: React.Key | null | undefined
										) => {
											return (
												<div
													key={idx}
													className="bg-[#ECECEC] text-[#4F4F4F] flex justify-center items-center p-2
												text-xs font-medium leading-3 rounded cursor-pointer"
													onClick={() => {
														setSelectedImage(null);
														router.push(
															`/search/?query=${tag.title}`
														);
													}}>
													{tag.title}
												</div>
											);
										}
									)}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
