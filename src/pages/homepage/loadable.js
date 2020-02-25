import Loadable from 'react-loadable'
import React from 'react'
import Loading from "../../common/components/loading"

const LoadableComponent = Loadable({
    loader: ()=> import('./'),
    loading(){
        return <Loading></Loading>
    }
})

export default ()=><LoadableComponent />