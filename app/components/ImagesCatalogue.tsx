import React from "react";
import ImageCard from "./ImageCard";

type Props = {
	data: any;
};

const ImagesCatalogue = ({ data }: Props) => {
	console.log("data", data);

	return (
		<div className="w-full flex justify-center">
			<div className="w-3/4 grid grid-cols-3 gap-10 pt-10">
				{data.map((item: any, idx: React.Key | null | undefined) => {
					return <ImageCard item={item} key={idx} />;
				})}
			</div>
		</div>
	);
};

export default ImagesCatalogue;
