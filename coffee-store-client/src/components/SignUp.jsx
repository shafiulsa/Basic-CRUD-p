import Navber from "./Navber";
import Swal from 'sweetalert2'
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        // console.log(form.email.value, form.password.value);
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                //new user has been created
                const creationTime= result.user?.metadata?.creationTime;
                const user = { email ,creationTime};
                
                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(user)

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        //jata sundor dekha jay ai jonna sweet alert use kori
                        if (data.insertedId) {

                            Swal.fire({
                                title: "Good job!",
                                text: "Data addade successfully !",
                                icon: "success"
                            });
                        }
                    })

            })
            .catch(error => {
                console.error(error)
            })


    }
    return (
        <>
            <Navber></Navber>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;