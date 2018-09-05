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
            <Image onLoad={this.props.setColumnWidth}
                   className='sm sm-width'
                   path={p.publicPath}
                   previewFile={'widget-ui-guide.png'}
                   fullscreenFile={'widget-ui-guide.png'}/>
            <Label text="Another label"/>
            <p className="stacked withLabel">As the only designer on the telemetry team, I started by designing ChaseUI for the other developer assigned to this project to work from. Our main goals with this project was to create an interface that allowed race strategists on the team to view real time data, in order to make important decisions about the race, the car, and the driver. We also wanted the interface to look clean and be simple enough for anyone on the team to use. </p>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'widget-primary.png'}
                   fullscreenFile={'widget-primary.png'}/>
            <Label text="A label"/>
          </div>
          <div id="t2" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'overview-wifeframe.png'}
                   fullscreenFile={'overview-wifeframe.png'}/>
            <Image className='sm'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'chaseui-graph-clip.gif'}
                   fullscreenFile={'overview-production-2.png'}/>
            <Label text="A label"/>
          </div>
          <div className="col">
            <Image onLoad={(e)=>{this.props.setColumnWidth(e, true)}}
                   className='md'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'overview-sidepanel.png'}
                   fullscreenFile={'overview-sidepanel.png'}/>
            <p className="stacked">Once the foundation for the project was built, I started refining the code, which included reorganizing the project structure, styling the app to match the wireframes and mockups, building the Nav and StatusBar from scratch, and implementing a real-time updating graph component. We developed the app using React and various JS libraries. Beyond the interface, we also built a backend that was capable of connecting to our companion software running on a remote computer (RaspberryPi) via WebSockets.</p>
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