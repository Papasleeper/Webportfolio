const Navbar = () => {
	return (
		<div className=" flex flex-col gap-2 font-semibold">
			<div>
				<span className="hover:transition-all hover:text-Name duration-300">
					About
				</span>
			</div>
			<div>
				<span className="hover:transition-all hover:text-Name duration-300">
					Experience
				</span>
			</div>
			<div>
				<span className="hover:transition-all hover:text-Name duration-300">
					Projec
				</span>
			</div>
			<div>
				<span className="hover:transition-all hover:text-Name duration-300">
					Article
				</span>
			</div>
		</div>
	);
};

export default Navbar;
