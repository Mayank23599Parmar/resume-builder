import React, { Component } from 'react'

export default class MultiTagInput extends Component {

    render() {
        const { tags, handleKeyDown,name} = this.props
        return (
            <div className="tags-input-container">
                {tags?.map((tag, index) => (
                    <div className="tag-item" key={index}>
                        <span className="text">{tag}</span>
                    </div>
                ))}
                <input onKeyDown={handleKeyDown} name={name} type="text" className="tags-input" placeholder="Type somthing" />
            </div>
        )
    }
}
