import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className="flex h-screen items-center justify-center">
            <h1>Welcome</h1>
        </div>
    </React.StrictMode>
)