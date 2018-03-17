/**
 * MessageBox Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class MessageButton extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      hoverState: false,
    };

    this.toggleMessageContent = this.toggleMessageContent.bind(this);
  }

  toggleMessageContent() {
    // If leaving set state to false, else entering so set to true
    if (this.state.hoverState) this.setState({hoverState: false});
    else this.setState({hoverState: true})
  }

  render() {
    let message = "Say something!";
    if (this.state.hoverState) message = "Send an email.";
    return (
      <a
        onMouseEnter={this.toggleMessageContent}
        onMouseLeave={this.toggleMessageContent}
        href="mailto:?Subject=Hello!"> {/* TODO: update email address */}
        <div id="message">
          <span id="collapsedMessage">{ message }</span>
        </div>
      </a>
    );
  }
}

export default MessageButton;