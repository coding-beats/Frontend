import React, { Component } from "react";
import SongExplorerRender from "./SongExplorerRender"

class SongExplorer extends Component {
    render() {
        return (
            <div>
                <SongExplorerRender title={this.props.songResult.title} artist={this.props.songResult.artist} songURL={this.props.songResult.songURL}/>
            </div>
        )
    }
}
export default SongExplorer