import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types';

const PrivateRoot = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="text-center">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};
PrivateRoot.propTypes = {
    children: PropTypes.node
  };

export default PrivateRoot;