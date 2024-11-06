import React, { useState, forwardRef } from "react";
export default forwardRef(function Input(props, ref) {
    const [value] = useState("");
    console.log(props, "props");
    const handleChange = () => {
        console.log("change");
    };
    return (
        <div>
            <input ref={ref} value={value} onChange={handleChange} />
        </div>
    );
});
