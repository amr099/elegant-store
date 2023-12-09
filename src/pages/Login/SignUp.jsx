export default function SignUp() {
    return (
        <form>
            <h4>Sign Up</h4>
            <p className='flex'>
                Already have an account? <a href='#'>Sign In</a>
            </p>
            <input type='name' name='name' placeholder='Your name' />
            <input name='username' placeholder='Username' />
            <input name='email' type='email' placeholder='Email address' />
            <input type='password' placeholder='Password' />
            <div className='flex'>
                <div>
                    <input type='checkbox' id='agree' />
                    <label htmlFor='agree'>
                        I agree with <span> Privacy Policy</span> and{" "}
                        <span>Terms of Use </span>
                    </label>
                </div>
            </div>
            <button>Sign Up</button>
        </form>
    );
}
