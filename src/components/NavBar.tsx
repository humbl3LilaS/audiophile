import { Link } from "react-router-dom";
import Menu from "./Menu";
import Cart from "./Cart";

const NavBar = () => {
	return (
		<header className="md:px-10 bg-darkBlack lg:px-40 relative">
			<nav className="py-9 px-6 flex justify-between items-center  border-b-2 border-b-white/10 bg-darkBlack lg:py-11">
				<Menu />
				<h1 className="text-white font-bold text">
					<span className="sr-only">audiophile</span>
					<img
						src="/icons/logo.svg"
						alt="logo"
					/>
				</h1>
				<ul className="hidden text-white uppercase font-bold lg:flex gap-x-9">
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
				<Cart />
			</nav>
		</header>
	);
};

export default NavBar;
