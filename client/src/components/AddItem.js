import React, { Component } from 'react'

export default class AddItem extends Component {
    render() {
        return (
            <div>
                <form method="post" action='http://localhost:5000/api/items'>
                <input name='name' type='text' />
                <input type='submit' value='Add'/>
                </form>
            </div>
        )
    }
}
