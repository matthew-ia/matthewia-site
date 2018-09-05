/**
 * SpectraContent Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import GalleryNav from "../../GalleryNav";
import Image from "../../../Media/Image";
import Label from "../../../Media/Label";
import Video from "../../../Media/Video";

export class _Gallery extends Component {
  render() {
    let {p, galleryNavLinks} = this.props;
    return (
      <div id='chaseui'>
        <GalleryNav handleScroll={this.props.handleSmoothScroll}
                    links={galleryNavLinks}/>
        <div>
          <div id="t1" className='col gallery-marker'>
            <Image onLoad={(e)=>{this.props.setColumnWidth(e, true)}}
                   className='md md-width'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'chaseui-flow-chart.png'}
                   fullscreenFile={'chaseui-flow-chart.png'}/>
            <p className="stacked">As the only designer on the telemetry team, I took lead on designing ChaseUI. I periodically met with the telemetry lead to review the layout and discuss the values that needed to be presented, as well as their level of priority. In the early stage of the project, I designed while another developer worked to create a basic prototype with backend code.</p>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'widget-primary.png'}
                   fullscreenFile={'widget-primary.png'}/>
            <Label text="Widget wireframe & mockup"/>
          </div>
          <div id="t2" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'overview-wifeframe.png'}
                   fullscreenFile={'overview-wifeframe.png'}/>
            <Label text="Dashboard – Wireframe"/>
            <Image className='sm'
                   path={p.publicPath}
                   previewFile={'chaseui-graph-clip.gif'}
                   fullscreenFile={'overview-production-2.png'}/>
            <Label text="Dashboard – Production"/>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'overview-sidepanel.png'}
                   fullscreenFile={'overview-sidepanel.png'}/>
            <p className="stacked">Once the foundation for the project was built, I started refining the front-end, which included reorganizing the project structure, styling the app to match the wireframes and mockups, and implementing a real-time updating graph component. We developed the app using React and various JS libraries and node modules. Beyond the interface, we also built a backend that was capable of connecting to our companion software running on a remote computer (RaspberryPi) via WebSockets.</p>
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
  galleryNavLinks: [
    {
      href: '#t1',
      text: 'Design',
      activeClass: 'active',
    },
    {
      href: '#t2',
      text: 'Develop',
      activeClass: '',
    },
  ],
};