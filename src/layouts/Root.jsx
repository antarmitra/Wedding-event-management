import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;