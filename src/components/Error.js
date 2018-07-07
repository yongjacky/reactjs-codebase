import React from 'react'
import PropTypes from 'prop-types'

const Error=props=>{
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

Error.propTypes={
    error: PropTypes.string.isRequired
}

export default Error