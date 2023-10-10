import { Link } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import register from "../../assets/image/register.jpg"
import flower2 from "../../assets/image/flower2.jpg"
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);


        // create user
        createUser(email, password)
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
                    <img className="w-full  rounded-xl h-[740px] hidden md:block" src={register} alt="" />
                    <div className="hero-overlay h-full bg-black bg-opacity-50"></div>
                </div>


                <div className="md:flex justify-evenly md:absolute top-12 lg:left-52 bg-gray-400">
                    <div className="text-center p-5">
                        <div className="space-y-3 ">
                            <h2 className="text-4xl font-medium">Welcome</h2>
                            <p className="text-xl font-normal">Please Register Now!</p>
                        </div>

                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">User Name</span>
                                </label>
                                <input type="text" name="name" placeholder="User Name here..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL here...." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email here..." className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password here..." className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-orange-400 text-xl text-white">Register</button>
                            </div>

                            <div className="flex gap-10 mt-5">
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
                            <p className="mt-2">Do not have an account, please <Link to="/login" className="text-white font-bold underline">Login</Link></p>
                        </form>
                    </div>

                    <div>
                        <img className="w-[580px]" src={flower2} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;