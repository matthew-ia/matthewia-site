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
    this.handleScroll = this.handleScroll.bind(this);
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

  handleScroll(e) {
    e.preventDefault();
  }

  render() {
    let {isExpanded} = this.state;
    let {className, id, path, previewFile, videoSrc, onLoad, hasSound} = this.props;
    let iconPath = window.location.origin + '/images/icons/2x/';
    return (
      <div id='video-container'
           onClick={this.toggleExpanded}>
        <img onLoad={onLoad}
             id={id}
             className={className}
             src={path + previewFile}/>
        <div className='video-icon'>
          <img id="icon" src={iconPath + 'video-white.png'}/>
        </div>
        {isExpanded
          ? <div className='video-expanded' onWheel={this.handleScroll}>
              <div className='close-expand-wrapper'
                   onClick={this.toggleExpanded} data-tip='close'>
                <img id='close-expand'
                     src={iconPath + 'close-white.png'}/>

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