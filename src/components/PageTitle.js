//@flow
import React from 'react'

type PageTitleProps = {
    title: string
}

const PageTitle=(props: PageTitleProps)=>{
    return (
        <div className='row'>
            <div className='col-sm'>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default PageTitle