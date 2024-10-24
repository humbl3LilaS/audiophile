import { useGetIncludedItems } from "../api/query";

const InBoxItems = ({ product_id }: { product_id: string }) => {
	const { data: includes } = useGetIncludedItems(product_id);

	return (
		<div>
			<ul className="flex flex-col gap-y-4">
				{includes &&
					includes.map((item) => (
						<li className="flex items-center justify-start gap-x-4">
							<span className="font-bold text-primary">
								{item?.quantity + "x"}
							</span>
							<span className="text-black/50">{item?.item_name}</span>
						</li>
					))}
			</ul>
		</div>
	);
};

export default InBoxItems;
