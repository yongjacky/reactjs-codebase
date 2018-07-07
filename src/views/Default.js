import React from 'react'
import ContainerRowSpace from '../components/ContainerRowSpace'
import PageTitle from '../components/PageTitle'
import ContentLink from '../components/ContentLink'

export const Default=()=>{
    return (
        <div className='container'>
            <ContainerRowSpace />

            <PageTitle 
                title={'Sample ReactJs Codebase'}
            />
            
            <ContainerRowSpace />

            <ContentLink 
                to={'/sample'}
                linkTitle={'Demo Router Link'}
            />
            
        </div>
    )
}

export default Default