
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formdata, setFormData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();



    const handleChange = e => {
        console.log(formdata);
        setFormData({...formdata,[e.target.id]:e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const res = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formdata),
        });
        await console.log(res);
            const data = await res.json();
            setLoading(false);
            setError(false)
            console.log(data);
            if (data.success === false) {
                setError(true);
                return;
            }
            navigate('/signin');
            setError(false);
        } catch (error) {
            setLoading(false);
            setError(true)
        }
        

    }
    return (
        <div className="p-3">
            <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4 max-w-lg mx-auto">
                <input onChange={handleChange}
                    type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg" />

                <input onChange={handleChange}
                    type="email" placeholder="email" id="email" className="bg-slate-100 p-3 rounded-lg" />

                <input onChange={handleChange}
                    type="password" placeholder="password" id="password" className="bg-slate-100 p-3 rounded-lg" />

                <button disabled={loading} className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3 disabled:opacity-80">{loading?  'Loading...' : 'Sign Up'}</button>
                <div className="flex">
                    <p>Have and account?</p>
                    <Link to="/signin"><span className="text-blue-500 mx-2">Sign In</span></Link>
                </div>
                <p className='text-red-700 mt-5'>{ error && 'Something went wrong!' }</p>
            </form>


        </div>
    );
};

export default SignUp;