import React from "react";

import "./resetButton.css"

export function ResetButton({resetBoard}){
    return(
        <button className="reset-btn" onClick={resetBoard}>RESET</button>
    )
}