/**
 * Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class Detail extends Component {
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
      </div>
    );
  }
}

Detail.defaultProps = {
  pid: undefined,
  info: []
};

export default Detail;