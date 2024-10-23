import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<header>
			<nav className="py-9 px-6 flex justify-between items-center bg-darkBlack md:border-b-2 md:border-b-white/10 lg:py-11">
				<img
					src="/icons/icon-hamburger.svg"
					alt="menu"
					className="aspect-square w-4 block lg:hidden"
				/>
				<h1 className="text-white font-bold text">
					<span className="sr-only">audiophile</span>
					<img
						src="/icons/logo.svg"
						alt="logo"
					/>
				</h1>
				<ul className="hidden text-white uppercase font-bold lg:flex gap-x-9">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/headphones">Headphones</Link>
					</li>
					<li>
						<Link to="/speakers">Speakers</Link>
					</li>
					<li>
						<Link to="/earphones">Earphones</Link>
					</li>
				</ul>
				<img
					src="/icons/icon-cart.svg"
					alt="cart"
				/>
			</nav>
		</header>
	);
};

export default NavBar;
