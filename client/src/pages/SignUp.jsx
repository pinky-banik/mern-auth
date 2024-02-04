
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="p-3">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form action="" className="flex flex-col gap-4 max-w-lg mx-auto">
                <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg" />

                <input type="email" placeholder="email" id="email" className="bg-slate-100 p-3 rounded-lg" />

                <input type="password" placeholder="password" id="password" className="bg-slate-100 p-3 rounded-lg" />

                <button className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3 disabled:opacity-80">Sign Up</button>
                <div className="flex">
                    <p>Have and account?</p>
                    <Link to="/signin"><span className="text-blue-500 mx-2">Sign In</span></Link>
                </div>
            </form>


        </div>
    );
};

export default SignUp;