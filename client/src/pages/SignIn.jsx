
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
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
            const res = await fetch('http://localhost:3000/api/auth/signin', {
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
            navigate('/');
            setError(false);
        } catch (error) {
            setLoading(false);
            setError(true)
        }
        

    }
    return (
        <div className="p-3">
            <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
            <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4 max-w-lg mx-auto">
                <input onChange={handleChange}
                    type="email" placeholder="email" id="email" className="bg-slate-100 p-3 rounded-lg" />

                <input onChange={handleChange}
                    type="password" placeholder="password" id="password" className="bg-slate-100 p-3 rounded-lg" />

                <button disabled={loading} className="bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3 disabled:opacity-80">{loading?  'Loading...' : 'Sign In'}</button>
                <button disabled={loading} className="bg-red-700 text-white rounded-lg uppercase hover:opacity-95 p-3 disabled:opacity-80">{loading?  'Loading...' : 'Sign In with GOOGLE'}</button>
                <div className="flex">
                    <p>{`Don't have any account?`}</p>
                    <Link to="/signup"><span className="text-blue-500 mx-2">Sign Up</span></Link>
                </div>
                <p className='text-red-700 mt-5'>{ error && 'Something went wrong!' }</p>
            </form>


        </div>
    );
};

export default SignIn;