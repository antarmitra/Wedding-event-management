import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import image2 from "../../../assets/image/cover.jpg";
import flower from "../../../assets/image/buqut.jpg";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })

        e.target.reset();
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="relative">
                <div className=" hero  mt-14 mb-10 ">
                    <img className="w-full  rounded-xl h-[600px] hidden md:block" src={image2} alt="" />
                    <div className="hero-overlay h-full bg-black bg-opacity-50"></div>
                </div>


                <div className="md:flex justify-evenly md:absolute top-12 lg:left-52 bg-gray-400">
                    <div>
                        <img className="w-[500px]" src={flower} alt="" />
                    </div>

                    <div className="text-center p-5">
                        <div className="space-y-3 mt-10 ">
                            <h2 className="text-4xl font-medium">Welcome</h2>
                            <p className="text-xl font-normal">Please Login Now!</p>
                        </div>

                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="email here..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Password</span>
                                </label>
                                <input type="password" name="password" required placeholder="password here..." className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-400 text-xl text-white">Login</button>
                            </div>

                            <div className="flex gap-10 mt-5 ">
                                <div>
                                    <button className="btn">
                                        <FaGoogle className="text-xl"></FaGoogle>
                                        Google
                                    </button>
                                </div>
                                <div>
                                    <button className="btn">
                                        <FaGithub className="text-xl"></FaGithub>
                                        Github
                                    </button>
                                </div>
                            </div>

                            <p className=" mt-2">Do not have an account, please <Link to="/register" className="text-white font-bold underline">Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default Login;