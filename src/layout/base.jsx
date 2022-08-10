import React from "react";
import Preview from "./preview/index";
import ControlPanel from "./controlPanel/index";

export default function Layout() {
    return (
        <div>
            <div className="PreviewContainer">
                <Preview/>
            </div>
            <div className="ControlPanel">
                <ControlPanel/>
            </div>
        </div>
    )
}