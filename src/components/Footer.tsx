import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="px-6 py-14 relative bg-darkBlack md:px-10 lg:px-40">
			<nav className=" lg:flex justify-between items-center">
				<img
					src="/icons/logo.svg"
					alt="logo"
					className="mx-auto mb-12 md:mx-0"
				/>
				<ul className="w-full mb-12 flex flex-col items-center justify-center gap-y-4 text-white font-bold uppercase md:flex-row md:gap-x-9 md:gap-y-0 md:justify-start lg:justify-end">
					<li className="transition-colors duration-500 hover:text-primary">
						<Link to="/">Home</Link>
					</li>
					<li className="transition-colors duration-500 hover:text-primary">
						<Link to="/headphones">Headphones</Link>
					</li>
					<li className="transition-colors duration-500 hover:text-primary">
						<Link to="/speakers">Speakers</Link>
					</li>
					<li className="transition-colors duration-500 hover:text-primary">
						<Link to="/earphones">Earphones</Link>
					</li>
				</ul>
			</nav>
			<div className="md:flex md:flex-wrap justify-between lg:items-end">
				<p className="mb-12 text-white/50 text-center md:max-w-[680px] md:text-left lg:order-1 lg:max-w-[580px]">
					Audiophile is an all in one stop to fulfill your audio needs. We're a
					small team of music lovers and sound specialists who are devoted to
					helping you get the most out of personal audio. Come and visit our
					demo facility - we're open 7 days a week.
				</p>
				<p className="mb-12 text-white/50 text-center font-bold md:text-left lg:order-3 lg:w-full">
					Copyright {new Date().getFullYear()}. All rights Reserved
				</p>
				<nav className="lg:order-2 lg:mb-12">
					<ul className="w-full flex items-center justify-center gap-x-4">
						<li>
							<Link to="/facebook">
								<img
									src="/icons/icon-facebook.svg"
									alt="facebook"
								/>
							</Link>
						</li>
						<li>
							<Link to="/twitter">
								<img
									src="/icons/icon-twitter.svg"
									alt="twitter"
								/>
							</Link>
						</li>
						<li>
							<Link to="/instagram">
								<img
									src="/icons/icon-instagram.svg"
									alt="instagram"
								/>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<span className="w-[100px] h-1 absolute top-0 left-1/2 -translate-x-1/2 bg-primary md:left-10 md:-translate-x-0 lg:left-[160px]" />
		</footer>
	);
};

export default Footer;
