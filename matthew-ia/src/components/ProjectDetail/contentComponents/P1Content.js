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
        <div className="container-fluid detail-header">
          <div className="row">
            <div className="description">
              <h1 className="p-title"> { p.name }</h1>
              <span className="p-tags">{ p.tags.join(" // ") }</span>
              <p className="p-content">Inspired by Spike Jonze’s film <i>Her</i>, I created a mock informational brochure documenting the fictional operating system, OS One (OS1). I took creative liberty in writing the copy for the document, as I imagined how the OS could be used. This project was the final product of a culmination of mini personal projects related to Her, as well as the starting point of my interest in technical writing.</p>
            </div>
            <div className="main-image">
              <div>
                <img src={publicPath + p.images[0] }/>
              </div>
            </div>
          </div>
        </div>
        <div id="p1-content" className="container-fluid content">
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