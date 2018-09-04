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

  // FIXME: This could be simpler and just setState, and add the class to the render
  // Right now it's only being rendered when it should be seen, so it will always have
  // the expanded class. If I wanted to add a close animation, I would need this more so.
  toggleExpanded(e) {
    let {isExpanded} = this.state;
    let imageExpanded = e.currentTarget.childNodes[1];
    if (isExpanded) { // Close it
      // Don't need to handle the class because the the div is just not rendered on close.
      // imageExpanded.parentElement.classList.remove('expanded');
      this.setState({isExpanded: false});
    } else { // Expand it
      void imageExpanded.offsetWidth;
      imageExpanded.parentElement.classList.add('expanded');
      console.log(imageExpanded.parentElement);
      this.setState({isExpanded: true});
    }

  }

  render() {
    let {isExpanded} = this.state;
    let {className, id, path, previewFile, fullscreenFile, onLoad} = this.props;
    return (
      <div className='image-container'
           onClick={this.toggleExpanded}>
        <img onLoad={onLoad}
            className={className}
            id={id}
            src={path + previewFile}/>
        {isExpanded
          ? <div className='image-expanded'>
              <div className='close-expand-wrapper'
                   onClick={this.toggleExpanded} data-tip='close'>
                <img id='close-expand'
                     src={window.location.origin + '/images/icons/2x/close.png'}/>

              </div>
              <ReactTooltip className="tooltip" effect="solid" place="bottom"/>
              <img id='full-image'
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