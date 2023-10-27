import React, { useState } from "react";
import ImageCard from "./ImageCard";
import Modal from "./Modal";

type Props = {
	data: any;
};

const ImagesCatalogue = ({ data }: Props) => {
	const [selectedImage, setSelectedImage] = useState<any>(null);

	console.log("data", data);

	return (
		<div className="w-full flex justify-center">
			<div className="w-4/5 sm:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-10 py-10">
				{data.map((item: any, idx: React.Key | null | undefined) => {
					return (
						<ImageCard
							setSelectedImage={setSelectedImage}
							item={item}
							key={idx}
						/>
					);
				})}
				{selectedImage && (
					<Modal
						setSelectedImage={setSelectedImage}
						selectedImage={selectedImage}
					/>
				)}
			</div>
		</div>
	);
};

export default ImagesCatalogue;
