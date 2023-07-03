import cn from "classnames";
import React from "react";

export const UploadInput = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
    return (
        <input
            ref={ref}
            type="file"
            accept="image/png, image.jpg, image.jpeg"
            className={cn("font-input outline-none ", className)}
            {...props}
        />
    );
});

UploadInput.displayName = "Input";
