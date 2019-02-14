import React, {Component } from "react";

class Login extends Component {
    constructor() {
        super ();

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault ();

        try {
            const LoginResponse = await fetch ("http://localhost:9000/auth/login", {
                method : "POST",
                body : JSON.stringify(this.state),
                credentials: "include",
                headers : {
                    "content-Type" : "application/json"
                }
            })

            if (!LoginResponse.ok) {
                throw Error (LoginResponse.statusText)
            }

            const parsedResponse = await LoginResponse.json();

            if (parsedResponse.data === "login succesfull"){
                this.props.history.push("/trails")
            }

        } catch (err) {
            console.log (err)
        }
    }

    render () {
        return (
            <form>
                <label>
                    Username : <input type ="text" name = "username" onChange = {this.handleChange}/>
                </label>
                <label>
                    Password : <input type = "text" name = "password" onChange= {this.handleChange}/>
                </label>
                <input type = "submit"/>
            </form>
        )
    }
}

export default Login;