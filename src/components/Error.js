//@flow
import React from 'react'

type errorProps={
    error: string
}

const Error=(props: errorProps)=>{
    const { error } = props

    if (error){
        return (
            <div className='row'>
                <div className='col-sm'>
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                </div>
            </div> 
        )
    }

    return null
}

export default Error