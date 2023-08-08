import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../contents/header";
import picprofile from "../../assets/profile.jpg";
//import fileResume from '../assets/resume.pdf'
const Header = () => {
	return (
		<div className="flex flex-col gap-4">
			<div className="h-1/2">
				<img
					className="h-full ml-8  rounded-full border-2 border-gray-800 "
					src={picprofile}
				/>
			</div>
			<div className="flex flex-col gap-4 ">
				<div className="text-3xl font-semibold text-Name ">{data.name}</div>
				<div className="text-Accent font-semibold">{data.title}</div>
				<div className="text-Accent w-5/6 font-medium">{data.desc}</div>
				<div className="">
					<a href={data.link} target="_blank">
						<span className="rounded-md bg-Name text-Content py-2 px-3">
							{data.btnText}
							<span className=" inline-block ml-1.5 text-sm animate-bounce">
								<FontAwesomeIcon icon={faArrowDown} />
							</span>
						</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
