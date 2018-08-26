//@flow
import React from 'react'
import { Link } from 'react-router-dom'

type ContentLinkPropsType={
    to: string,
    linkTitle: string
}

const ContentLink=(props:ContentLinkPropsType)=>{
    return (
        <div className='row'>
            <div className='col-sm'>
                <Link to={props.to}>
                    {props.linkTitle}
                </Link>
            </div>
        </div>
    )
}

export default ContentLink