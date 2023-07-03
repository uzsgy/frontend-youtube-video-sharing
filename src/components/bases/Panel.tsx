import React, { BaseHTMLAttributes } from "react";

function Panel({ children }: BaseHTMLAttributes<HTMLDivElement>) {
    return <div>{children}</div>;
}

export default Panel;
