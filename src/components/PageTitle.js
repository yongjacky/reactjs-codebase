import React from 'react'
import PropTypes from 'prop-types'

const PageTitle=props=>{
    return (
        <div className='row'>
            <div className='col-sm'>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

PageTitle.propTypes={
    title: PropTypes.string.isRequired
}

export default PageTitle