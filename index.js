import React from "react"
import reactDom from "react-dom"
import { Provider } from 'react-redux'
import store,{history} from '@/connect/store'

import App from "@/connect/app"
reactDom.render(
    <Provider store={store}>
        <App store={store} history={history} />
    </Provider>,
    document.getElementById("react-root")
)