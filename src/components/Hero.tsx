import {Link} from "react-router-dom";

const Hero = () => {
	return (
		<section className="px-6 py-28 bg-darkBlack text-white bg-heroMobile bg-cover bg-bottom md:py-40 md:bg-heroTablet lg:py-30 lg:bg-heroDesktop lg:px-40">
			<span className="block w-fit mx-auto mb-4 text-white/50 font-light uppercase tracking-[10px] text-center lg:mx-0">
				new product
			</span>
			<h1 className="mb-6 max-w-[400px] mx-auto uppercase text-3xl text-center font-bold md:text-[56px] md:tracking-[2px] md:leading-[56px] lg:mx-0 lg:text-left">
				XX99 MARK II headphones
			</h1>
			<p className="max-w-[400px] px-3 mb-7 mx-auto text-center lg:mx-0 lg:text-left lg:px-0 lg:max-w-[360px]">
				Experience natural, lifelike audio and exceptional build quality made
				for the passionate music enthusiast
			</p>
			<Link to={"/headphones#XX99 Mark II"} className="py-4 px-7 w-fit uppercase font-bold tracking-wide mx-auto block transition-colors duration-700 bg-primary hover:bg-secondary lg:mx-0">
				see product
			</Link>
		</section>
	);
};

export default Hero;
