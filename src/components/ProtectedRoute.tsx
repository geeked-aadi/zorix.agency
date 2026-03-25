import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
    element: JSX.Element;
}

/**
 * ProtectedRoute ensures that a page can only be accessed via navigation links
 * that set `state.fromNavbar` to true. Direct URL entry without this flag will
 * redirect to the home page.
 */
const ProtectedRoute = ({ element }: ProtectedRouteProps) => {
    const location = useLocation();
    const allowed = location.state && (location.state as any).fromNavbar;
    const isHome = location.pathname === "/";
    if (!allowed && !isHome) {
        // Redirect to home if accessed directly
        return <Navigate to="/" replace />;
    }
    return element;
};

export default ProtectedRoute;
