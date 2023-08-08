import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className="flex items-end ml-2 gap-4 text-3xl">
            <FontAwesomeIcon className="hover:scale-125 hover:text-Name duration-300" icon={faFacebook} />
            <FontAwesomeIcon className="hover:scale-125 hover:text-Name duration-300"icon={faLinkedin} />
            <FontAwesomeIcon className="hover:scale-125 hover:text-Name duration-300"icon={faGithub} />
        </div>
    )
}

export default Contact;