import React, { Component } from "react";
import MusicRender from "./MusicRender.js"

class Music extends Component {
    render() {
        return (
            <>

                <MusicRender showUpdateMusicForm={this.props.showUpdateMusicForm} deleteMusciFun={this.props.deleteMusicFun}
                    key={this.props.index} id={this.props.musicData._id} musicData={this.props.musicData} />
            </>
        )
    }
}
export default Music