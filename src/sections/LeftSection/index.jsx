import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = () => {
	return (
		<div className="px-3">
			<div className="sticky top-10 grid gap-y-4 lg:grid-rows-[60%_20%_20%] lg:h-[90vh]">
				<Header />
				<Navbar />
				<Contact />
			</div>
		</div>
	);
};

export default LeftSection;
