import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <Link to='/login'>login</Link>
            <h2>navbar</h2>
        </div>
    );
};

export default Navbar;