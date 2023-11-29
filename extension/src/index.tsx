import {StrictMode, Suspense} from "react"
import ReactDOM  from "react-dom/client"
import PopUp from "./popup"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render (
    <StrictMode>
        <Suspense fallback={<div>loading</div>}>
            <PopUp />
        </Suspense>
    </StrictMode>
)