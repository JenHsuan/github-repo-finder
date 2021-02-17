import React, {Component} from 'react'
import { initGA, logPageView } from "./googleAnalytics"


export class GaLayout extends Component {
    componentDidMount () {
        if (!(window as any).GA_INITIALIZED) {
          initGA();
          (window as any).GA_INITIALIZED = true
        }
        logPageView()
      }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default GaLayout;
