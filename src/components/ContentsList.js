import React from 'react'

type ContentsListPropsType={
    array: Array<any>,
    keyField: string,
    descField: string
}

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

export default ContentsList