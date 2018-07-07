import React from 'react'
import PropTypes from 'prop-types'

const ContentsList=props=>{
    const { array,keyField,descField  } = props
    
    return (
        <div className='row'>
            <div className='col-sm'>
                <ul>
                    { array.map(item => {
                        return (
                            <li key={item[keyField]}>{item[descField]}</li>
                        )
                    }) }
                </ul>
            </div>
        </div>  
    )
}

ContentsList.propTypes={
    array: PropTypes.array.isRequired,
    keyField: PropTypes.string.isRequired,
    descField: PropTypes.string.isRequired,
}

export default ContentsList