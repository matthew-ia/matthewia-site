/**
 * Video Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import ReactTooltip from 'react-tooltip';
import Label from "./Label";

class Video extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded(e) {
    let {isExpanded} = this.state;
    let imageExpanded = e.currentTarget.childNodes[1];
    if (isExpanded) { // Close it
      console.log(imageExpanded);
      //document.getElementById('detail').classList.remove('hidescroll');
      document.getElementById('video-container').classList.remove('expanded');
      this.setState({isExpanded: false});
    } else { // Expand it
      void imageExpanded.offsetWidth;
      //document.getElementById('detail').classList.add('hidescroll');
      document.getElementById('video-container').classList.add('expanded');
      this.setState({isExpanded: true});
    }

  }

  render() {
    let {isExpanded} = this.state;
    let {className, id, path, previewFile, videoSrc, onLoad, hasSound} = this.props;
    return (
      <div id='video-container'
           onClick={this.toggleExpanded}>
        <img onLoad={onLoad}
             id={id}
             className={className}
             src={path + previewFile}/>
        <div className='video-icon'>Video</div>
        {isExpanded
          ? <div className='video-expanded'>
              <div className='close-expand-wrapper'
                   onClick={this.toggleExpanded} data-tip='close'>
                <img id='close-expand'
                     src={window.location.origin + '/images/icons/2x/close.png'}/>

              </div>
              <ReactTooltip className="tooltip" effect="solid" place="bottom"/>
              <iframe id='full-video'
                      src={videoSrc}
                      frameborder="0"
                      allow="autoplay; encrypted-media" allowfullscreen>
              </iframe>
            </div>
          : <div/>}
      </div>
    );
  }
}

Video.defaultProps = {
  className: '',
  id: '',
  path: '',
  previewFile: '',
  videoSrc: '',
  onLoad: ()=>{},
};

export default Video;