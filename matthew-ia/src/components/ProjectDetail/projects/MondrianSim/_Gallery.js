/**
 * SpectraContent Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import Image from "../../../Media/Image";
import Video from "../../../Media/Video";
import Label from "../../../Media/Label";
import GalleryNav from "../../GalleryNav";

export class _Gallery extends Component {
  render() {
    let {p} = this.props;
    return (
      <div id='mondrian-sim'>
        <div>
          <div className="col">
            <Video onLoad={this.props.setColumnWidth}
                   videoSrc='https://www.youtube.com/embed/gsIvtHAc20g?rel=0&amp;showinfo=0'
                   previewFile={'screenshot-1-cropped.png'}
                   path={p.publicPath}
                   className='md'/>
            <Label text="MondrianSim Demo (video)"/>
            <p className='stacked withLabel'>Users can draw rectangles, change the brush color, and clear the canvas. A simple time passer!
            </p>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'screenshot-2.png'}
                   fullscreenFile={'screenshot-2.png'}/>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'screenshot-1.png'}
                   fullscreenFile={'screenshot-1.png'}/>
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