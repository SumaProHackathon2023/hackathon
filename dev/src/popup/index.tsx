import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <div className="flex justify-center mt-2 text-base">Popup</div>
    </React.StrictMode>
)