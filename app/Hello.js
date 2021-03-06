import  React from 'react'

class Hello extends React.Component {

    render () {
        // component will have access to props passed using this props array
        console.log(this.props)
        return (
            <h2>
                Hello, 
                {this.props.name}
                {this.props.lastName} 
                { this.props.header}
                
                {this.props.someboolean === true ?
                <button onClick={this.props.someMethod}> Click Me!</button> : null}
            </h2>
        )
    }
}

export default Hello