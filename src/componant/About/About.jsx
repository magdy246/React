import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <div className="about flex justify-center items-center h-screen second-color">
        <div>
          <div className="text-center pt-4">
            <h2 className="text-white text-3xl font-bold mb-4">
              ABOUT COMPONENT
            </h2>
            <div className="flex items-center justify-center mb-3">
              <div className="line bg-white mr-3 h-px w-10"></div>
              <FontAwesomeIcon className="text-white text-lg" icon={faStar} />
              <div className="line bg-white ml-3 h-px w-10"></div>
            </div>
          </div>
          <div className="text-white flex md:flex-row	flex-col px-10">
            <p className="px-3 md:mb-0 mb-7">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="px-3">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
