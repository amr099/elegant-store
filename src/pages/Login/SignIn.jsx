import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <form>
            <h4>Sign In</h4>
            <p className='flex'>
                Don’t have an accout yet?{" "}
                <Link to='/login/register'>Sign Up</Link>
            </p>
            <input
                type='email'
                name='email'
                placeholder='Your username or email address'
            />
            <input type='password' placeholder='Password' />
            <div className='flexBetween'>
                <div>
                    <input type='checkbox' />
                    <label htmlFor='remember'>Remember Me</label>
                </div>
                <a href='#'>Forget password?</a>
            </div>
            <button>Sign In</button>
        </form>
    );
}
