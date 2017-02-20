import React from 'react';

class NormalizeEvents extends React.Component {
    constructor() {
        super();
        this.state = {currentEvent: '--'}
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({currentEvent: e.type})
    }
    render() {
        return (
            <div>
                <textarea cols="30" row="10"
                onFocus={this.update}
                onClick={this.update}
                onChange={this.update}
                onBlur={this.update}
                 />
                <h1>{this.state.currentEvent}</h1>
            </div>
        )
    }
}

export default NormalizeEvents;