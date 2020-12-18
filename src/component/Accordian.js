import React from 'react';
export default class Accordian extends React.Component {
    state = { activeIndex: '' };
    value = [{ title: 't0', content: 'c0' }, { title: 't1', content: 'c1' }]
    handlClick = (index) => {
        alert(index);
    }
    render() {
        const renderedItems = this.value.map((el, index) => {
            return (
                <div>
                    <p onClick={() => this.handlClick(index)}>{el.title}</p>
                </div>
            )
        })
        return (
            <div>
                <div>{renderedItems}</div>
                <div>{this.state.activeIndex}</div>
            </div>
        )
    }
}