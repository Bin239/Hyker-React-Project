import React from "react";

class UsernameForm extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            username : ""
        }
        this.onChange = this.onChange.bind(this)
    }

    

    onChange = (e) => {
        this.setState ({
            username: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.username)
    }


    render () {
        return (
            <div>
                <form>
                    <input type = "text" placeholder = "Username" onChange = {this.onChange}/>
                    <input type = "submit" onSubmit = {this.onSubmit}/>
                </form>
            </div>
        )
    }   
}

export default UsernameForm;