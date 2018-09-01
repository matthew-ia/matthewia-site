/**
 * Image Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import ReactTooltip from 'react-tooltip';

class Image extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };

    this.onFullscreenLoad = this.onFullscreenLoad.bind(this);
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  onFullscreenLoad() {
    console.log("lol!!!");
  }

  toggleExpanded(e) {
    let {isExpanded} = this.state;
    let imageExpanded = e.currentTarget.childNodes[1];
    if (isExpanded) { // Close it
      console.log(imageExpanded);
      //document.getElementById('detail').classList.remove('hidescroll');
      document.getElementById('image-container').classList.remove('expanded');
      this.setState({isExpanded: false});
    } else { // Expand it
      void imageExpanded.offsetWidth;
      //document.getElementById('detail').classList.add('hidescroll');
      document.getElementById('image-container').classList.add('expanded');
      this.setState({isExpanded: true});
    }

  }

  render() {
    let {isExpanded} = this.state;
    let {className, id, path, previewFile, fullscreenFile, onLoad} = this.props;
    return (
      <div id='image-container'
           onClick={this.toggleExpanded}>
        <img onLoad={onLoad}
            className={className}
            id={id}
            src={path + previewFile}/>
        {isExpanded
          ? <div className='image-expanded' id='image-expanded'>
              <div className='close-expand-wrapper'
                   onClick={this.toggleExpanded} data-tip='close'>
                <img id='close-expand'
                     src={window.location.origin + '/images/icons/2x/close.png'}/>

              </div>
              <ReactTooltip className="tooltip" effect="solid" place="bottom"/>
              <img id='full-image'
                   onLoad={this.onFullscreenLoad}
                   src={path + fullscreenFile}/>
            </div>
          : <div/>}

      </div>
    );
  }
}

Image.defaultProps = {
  className: '',
  id: '',
  path: '',
  previewFile: '',
  fullscreenFile: '',
  onLoad: ()=>{},
};

export default Image;