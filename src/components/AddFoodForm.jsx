import React, { Component } from 'react'

class AddFoodForm extends Component {

    state = {
        showForm: false,
        name: "",
        calories: 0,
    }

    handleForm = () => {
        this.setState({showForm: !this.state.showForm})
    }

    handleChange = (event) =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
            <button onClick={this.handleForm}>{!this.state.showForm && "Show form to add new foods"}</button>
                {this.state.showForm && 
                    <form action="">

                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />

                        <label htmlFor="calories">Calories</label>
                        <input type="number" name="calories" onChange={this.handleChange} value={this.state.calories} />

                        <button onClick={this.handleForm}>{this.state.showForm && "Submit new foods"}</button>
                    </form>
                }
            </div>
        )
    }
}

export default AddFoodForm
