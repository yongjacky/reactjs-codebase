import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ContentLink=props=>{
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

ContentLink.propTypes={
    to: PropTypes.string.isRequired,
    linkTitle: PropTypes.string.isRequired
}

export default ContentLink