// import useAuth from "../../hooks/useAuth";
// import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
  // const isLoggedIn = useAuth();
  // if (!isLoggedIn) {
  //   return <Navigate to={"/login"} />;
  // }

  return children;
};

export default PrivateRoute;
