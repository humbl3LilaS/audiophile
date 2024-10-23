import { Link } from "react-router-dom";
import Image from "./Image";

const Feature = () => {
	return (
		<section className="px-6 md:px-10 lg:px-40">
			<div className="px-6 py-14 mb-6 bg-primary rounded-lg overflow-y-hidden lg:flex items-center justify-center gap-x-[140px] lg:pb-0 lg:mb-12">
				<Image
					srcMobile="/images/image-speaker-zx9-mobile.png"
					srcDesktop="/images/image-speaker-zx9-desktop.png"
					srcTablet="/images/image-speaker-zx9-tablet.png"
					className="w-40 mx-auto mb-8 md:w-48 md:mb-16 lg:w-[400px] lg:mb-0 lg:translate-y-2"
				/>
				<article>
					<h2 className="mb-8 text-center text-3xl font-bold uppercase text-white md:text-5xl">
						zxp <br /> speaker
					</h2>
					<p className="max-w-[350px] mb-6 mx-auto text-center text-white/75">
						Upgrade to premium speakers that are phenomenally built to deliver
						truly remarkable sound.
					</p>
					<Link
						to={"/speaker/zx9"}
						className="w-fit px-8 py-4 mx-auto block bg-darkBlack uppercase tracking-wide text-white font-bold transition-colors duration-500 hover:bg-[#4c4c4c]">
						see product
					</Link>
				</article>
			</div>
			<div className="px-6 py-28 mb-6 bg-paleGray rounded-lg bg-zx7Mobile bg-cover bg-center md:px-16 md:bg-zx7Tablet lg:px-24 lg:bg-zx7Desktop lg:mb-12">
				<h2 className="mb-8 text-3xl uppercase font-bold tracking-wider">
					zx7 speaker
				</h2>
				<Link
					to={"/speaker/zx7"}
					className="block w-fit px-8 py-4 border border-darkBlack  font-bold uppercase tracking-wide transition-colors duration-500 hover:bg-darkBlack hover:text-white">
					see product
				</Link>
			</div>
			<div className="md:grid grid-cols-2 gap-x-3  lg:gap-x-8">
				<div className="">
					<Image
						srcMobile="/images/image-earphones-yx1-mobile.jpg"
						srcTablet="/images/image-earphones-yx1-tablet.jpg"
						srcDesktop="/images/image-earphones-yx1-desktop.jpg"
						className="mb-6 rounded-lg md:mb-0"
					/>
				</div>
				<div className="px-6 py-10 bg-paleWhite shadow-md rounded-lg md:flex md:flex-col md:justify-center md:px-10">
					<h2 className="mb-8 text-3xl uppercase font-bold tracking-wider">
						yx1 earphones
					</h2>
					<Link
						to={"/speaker/zx7"}
						className="block w-fit px-8 py-4 border border-darkBlack  font-bold uppercase tracking-wide transition-colors duration-500 hover:bg-darkBlack hover:text-white">
						see product
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Feature;
