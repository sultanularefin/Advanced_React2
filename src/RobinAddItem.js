import React, { Component } from 'react';

class RobinAddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            list: ['a', 'b', 'c'],
        };
    }

    // assign event.target.value to value
    onChangeValue = event => {
        this.setState({ value: event.target.value });
    };

    onAddItem = () => {
        // not allowed AND not working
        this.setState(state => {
            const list = state.list.concat(state.value);
            // const list = state.list.push(state.value);

            return {
                list,
                value: '',
            };
        });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.onChangeValue}
                />
                <button
                    type="button"
                    onClick={this.onAddItem}
                    disabled={!this.state.value}
                >
                    Add
                </button>
            </div>
        );
    }
}

export default RobinAddItem;