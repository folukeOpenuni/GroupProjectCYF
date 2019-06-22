import React from 'react'
import { Radio } from 'semantic-ui-react'

const RadioExampleToggle = () => (
    <Radio 
        onActivate={() => this.setState({active: true})}
        onDeactivate={() => this.setState({ active: false })}
        toggle 
    />
)
   

export default RadioExampleToggle;