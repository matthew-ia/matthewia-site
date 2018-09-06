/**
 * SpectraContent Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import Image from "../../../Media/Image";
import Label from "../../../Media/Label";
import Video from "../../../Media/Video";

export class _Gallery extends Component {
  render() {
    let {p} = this.props;
    return (
      <div>
        <div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'dashboard-wireframe.png'}
                   fullscreenFile={'dashboard-wireframe.png'}/>
            <Label text="Dashboard wireframe"/>
          </div>
          <div className="col">
            <Video onLoad={this.props.setColumnWidth}
                   videoSrc='https://www.youtube.com/embed/TxvO6a1o3GQ?rel=0&amp;showinfo=0'
                   previewFile={'dashboard-mockup.png'}
                   path={p.publicPath}
                   className='md'/>
            <Label text="Dashboard mockup // Video of demo"/>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='lg'
                   path={p.publicPath}
                   previewFile={'reports-mockup.png'}
                   fullscreenFile={'reports-mockup.png'}/>
            <Label text="Reports mockup"/>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='lg'
                   path={p.publicPath}
                   previewFile={'review-report-mockup.png'}
                   fullscreenFile={'review-report-mockup.png'}/>
            <Label text="New Report mockup"/>
          </div>
        </div>
      </div>
    );
  }
}

_Gallery.defaultProps = {
  p: {}, // project data,
  handleSmoothScroll: () => {},
  /**
   * This is important to set to an image's onLoad event handler IF its the first
   * image in a column container AND there's other content in the column.
   * Otherwise, it's unnecessary.
   */
  setColumnWidth: ()=>{},
};