//@flow
import * as React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/sample/actions'
import ContainerRowSpace from '../components/ContainerRowSpace'
import PageTitle from '../components/PageTitle'
import Error from '../components/Error'
import ContentLink from '../components/ContentLink'
import ContentsList from '../components/ContentsList'

type SType = {
    error: string,
    vendors: Array<any>
}

type SampleProps={
    sample: SType,
    getVendors: any
}

class Sample extends React.Component<SampleProps> {

    componentWillMount(){
        this.refreshData()
    }

    refreshData(){
        this.props.getVendors()
    }

    render(){
        const { sample  } = this.props
        const { vendors } = sample;
        
        return (
            <div className='container'>
                <ContainerRowSpace />

                <Error error={sample.error} />    
                
                <PageTitle
                  title={'Sample: Redux call a vendors list API endpoints'}
                 />
                
                <ContentLink 
                    to={'/'}
                    linkTitle={'Back Home'}
                />
                
                <ContentsList 
                    array={vendors}
                    keyField={'code'}
                    descField={'desc'}
                />
                
            </div>
        )
    }
}

const mapStateToProps = (state:SampleProps, ownProps:any) => {
    return {
        sample: state.sample
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getVendors: ()=>{
            dispatch(actions.getVendors())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sample)