import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10">
            <img src={LOGO_URL} alt="Netflix Logo" className="w-40"/>
        </div>
    )
}


export default Header;