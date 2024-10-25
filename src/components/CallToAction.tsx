import Image from "./Image";
import Section from "./Section";

const CallToAction = () => {
	return (
		<Section className="my-30 lg:flex lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-x-[120px] lg:mt-20 ">
			<Image
				srcMobile="/images/mobile/image-best-gear-mobile.jpg"
				srcTablet="/images/tablet/image-best-gear-tablet.jpg"
				srcDesktop="/images/desktop/image-best-gear-desktop.jpg"
				className="mx-auto rounded-lg lg:flex-1"
			/>
			<div className="lg:flex-1">
				<h2 className="max-w-[280px] mt-10 mb-8 mx-auto text-2xl text-center font-bold uppercase md:text-4xl md:max-w-[520px] lg:text-left lg:mx-0">
					Bringing you the
					<span className="text-secondary"> best</span> audio gear
				</h2>
				<p className="text-center md:max-w-[560px] md:mx-auto lg:text-left lg:max-w-[440px] lg:mx-0">
					Located at the heart of New York City, Audiophile is the premier store
					for high end headphones, earphones, speakers, and audio accessories.
					We have a large showroom and luxury demonstration rooms available fro
					you to browse and experience a wide range of our products. Stop by our
					store to meet some of the fantastic people who make Audiophile the
					best place to buy portable audio equipment
				</p>
			</div>
		</Section>
	);
};

export default CallToAction;
