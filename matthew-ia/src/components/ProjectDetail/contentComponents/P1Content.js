/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import ProjectDetail from "../ProjectDetail";
import DetailHeader from "../DetailHeader";

class P1Content extends Component {
  render() {
    let p = this.props.info[0];
    let publicPath = this.props.info[1];
    return (
      <div>
        <DetailHeader pInfo={this.props.info}/>
        <div id="p1-content" className="content container-fluid">
          <div className="row">
            <div className="col-lg-8 nopad rpad">
              <img className="image" src={ publicPath + p.images[2] }/>
            </div>
            <div className="col-lg-4 nopad rpad">
              <p className="copy">{ p.desc }</p>
            </div>
          </div>
          <div className="row spacer">
            <div className="col-lg-5 nopad rpad">
              <img className="image" src={ publicPath + p.images[3] }/>
            </div>
            <div className="col-lg-5 nopad rpad">
              <img className="image" src={ publicPath + p.images[4] }/>
            </div>
          </div>
          <div className="row spacer">
            <div className="col-lg-5 pull-right nopad rpad">
              <img className="image" src={ publicPath + p.images[5] }/>
            </div>
            <div className="col-lg-4 pull-right nopad rpad">
              <p className="copy ralign">{ p.desc }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

P1Content.defaultProps = {
  pid: undefined,
  info: []
};

export default P1Content;