import React from "react";
import Preview from "./preview/index";
import ControlPanel from "./controlPanel/index";
import OutputBar from "./outputBar/index";

export default function Layout() {
    return (
        <div className="baseContainer">
            <div className="PreviewContainer">
                <Preview/>
            </div>
            <div className="ControlPanel">
                <ControlPanel/>
            </div>
            <div className="OutputBar">
                <OutputBar/>
            </div>
        </div>
    )
}