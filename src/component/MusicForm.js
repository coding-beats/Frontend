import React, { Component } from "react";
import MusicFormRender from "./MusicFormRender.js"

class Music extends Component {
    render() {
        return (
                <MusicFormRender createMusicFun={this.props.createMusicFun} />
        )
    }
}
export default Music