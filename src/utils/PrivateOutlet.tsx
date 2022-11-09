import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateOutlet: FC = () => {
    const auth = useAuth();
    const location = useLocation();

    return auth.user || window.localStorage.getItem("accessToken") ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} />
    );
};

export default PrivateOutlet;
