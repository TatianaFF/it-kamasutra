import { Preloader } from "../components/common/preloader/Preloader";
import React, { Suspense } from "react";

export const withSuspense = (Component) => {
    return (props) => (
        <Suspense fallback={ <Preloader/> }>
            <Component { ...props }/>
        </Suspense>
    )
}