/**
 * DetailHeader Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class DetailHeader extends Component {
  render() {
    let p = this.props.pInfo[0];
    let publicPath = this.props.pInfo[1];
    return (
      <div className="container-fluid detail-header">
        <div className="row">
          <div className="col-md-4 rpad-20">
            <h1 className="p-title">{ p.name }</h1>
            <span className="p-tags">{ p.tags.join(" // ") }</span>
            <p className="p-content">{ p.desc }</p>
          </div>
          <div className="col-md-8 lpad-20">
            <div className="main-image">
              <img src={publicPath + p.images[0] }/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DetailHeader.defaultProps = {
  pInfo: undefined
};

export default DetailHeader;