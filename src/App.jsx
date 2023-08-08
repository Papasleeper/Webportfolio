import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Contact from "./sections/Contact";
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="mt-10 mx-auto max-w-6xl grid gap-y-4 lg:grid-cols-2">
			<LeftSection />
			<RightSection />
		</div>
			
	)
}

export default App;
