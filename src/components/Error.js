import React from 'react'

const Error = ({ message }) => {
    let errorMessage = message || "에러입니다.";
    return (
        <div
            style={{ backgroundColor: "red", color: "white" }}
        >
            {errorMessage}
        </div>
    )
}

export default Error