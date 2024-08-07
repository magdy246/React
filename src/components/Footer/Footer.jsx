import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <>
      <div className="footer w-full bg-gray-800 -z-10">
        <div className="flex flex-wrap w-full p-10">
          <div className="card p-6 md:w-1/3 w-full text-center text-white">
            <h3 className="mb-2 pt-5 text-2xl">LOCATION</h3>
            <p className="mb-4">2215 John Daniel Drive</p>
            <p className="mb-4">Clark, MO 65243</p>
          </div>
          <div className="card p-6 md:w-1/3 w-full text-center text-white">
            <h3 className="mb-2 pt-5 text-2xl">AROUND THE WEB</h3>
            <div className="flex justify-center space-x-4 mt-4">
              <span className="m-2">
                <FontAwesomeIcon className='text-lg hover:bg-white hover:border-blue-900 hover:text-blue-900 transition-colors duration-500 p-3 rounded-full border-2' icon={faFacebook} />
              </span>
              <span className="m-2">
                <FontAwesomeIcon className='text-lg hover:bg-white hover:border-blue-500 hover:text-blue-500 transition-colors duration-500 p-3 rounded-full border-2' icon={faTwitter} />
              </span>
              <span className="m-2">
                <FontAwesomeIcon className='text-lg hover:bg-white hover:border-blue-700 hover:text-blue-700 transition-colors duration-500 p-3 rounded-full border-2' icon={faLinkedin} />
              </span>
              <span className="m-2">
                <FontAwesomeIcon className='text-lg hover:bg-white hover:border-red-600 hover:text-red-600 transition-colors duration-500 p-3 rounded-full border-2' icon={faYoutube} />
              </span>
            </div>
          </div>
          <div className="card p-6 md:w-1/3 w-full text-center text-white">
            <h3 className="mb-2 pt-5 text-2xl">ABOUT FREELANCER</h3>
            <p className="mb-4">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
        <div className="text-center text-white bg-gray-900">
          <p className="p-4">Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  )
}
