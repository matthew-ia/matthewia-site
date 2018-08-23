/**
 * Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import P1Content from "./projects/P1Content";
import P2Content from "./projects/P2Content";

class Content extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
  }
  // TODO: switch depending on the pid
  // see https://www.robinwieruch.de/conditional-rendering-react/#switch-case-operator
  render() {
    let { pid } = this.props;
    console.log(pid);
    console.log(this.props.info);
    return (
      <div>
        {(() => {
          switch(pid) {
            case '1':
              return <P1Content pid={ pid } info={ this.props.info }/>;
            case '2':
              return <P2Content pid={ pid } info={ this.props.info }/>;
            case '3':
              return <P1Content pid={ pid } info={ this.props.info }/>;
            case '4':
              return <P2Content pid={ pid } info={ this.props.info }/>;
            default:
              return <P1Content pid={ pid } info={ this.props.info }/>;
          }
        })()}
      </div>
    );
  }
}

Content.defaultProps = {
  pid: undefined,
  info: []
};

export default Content;