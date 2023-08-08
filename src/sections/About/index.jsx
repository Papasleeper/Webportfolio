import { data } from "../../contents/About";

const About = () => {
	return (
		<div className="space-y-3">
			<div className="font-bold text-xl">{data.title}</div>
			<div className="text-Accent font-medium">{data.desc}</div>
		</div>
	);
};

export default About;
