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
      <div>
        <GalleryNav handleScroll={this.props.handleSmoothScroll}
                    links={galleryNavLinks}/>
        <div>
          <div id="t1" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'dashui-wireframe-2.png'}
                   fullscreenFile={'dashui-wireframe-2-full.png'}/>
            <p className="stacked">Not being a developer on this project allowed me to focus my effort in the design. As I started wireframing, I also researched existing digital dashboard designs, particularly in EVs such as Teslas.</p>
          </div>
          <div className='col'>
            <Image onLoad={(e)=>{this.props.setColumnWidth(e, true)}}
                   className='md'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'dashui-wireframe.png'}
                   fullscreenFile={'dashui-wireframe-full.png'}/>
          </div>
          <div id="t2" className="col gallery-marker">
            <Video onLoad={this.props.setColumnWidth}
                   videoSrc='https://www.youtube.com/embed/PYYzwzRVV3I?rel=0&amp;showinfo=0'
                   previewFile={'standard-mode.png'}
                   path={p.publicPath}
                   className='sm'/>
            <Label text="DashUI interaction demo (video)"/>
            <p className="stacked withLabel">Solar vehicle racing introduces a new set of measurements to be monitoring compared to a standard EV, let alone a traditional gasoline car. However, I wanted the design to be approachable to the average user and avoid overwhelming them with too many dials or moving parts. To accomplish that I focused on designing the layout while thinking about the hierarchy of priority of each data field.</p>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'dev-mode.png'}
                   fullscreenFile={'dev-mode.png'}/>
            <Label text="Dev mode view"/>
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'error-log.png'}
                   fullscreenFile={'error-log.png'}/>
            <Label text="Error Log view"/>
          </div>
          <div id="t3" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='lg'
                   path={p.publicPath}
                   previewFile={'handoff-typography.png'}
                   fullscreenFile={'handoff-typography.png'}/>
            <Label text="Handoff – Typography"/>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'handoff-icons.png'}
                   fullscreenFile={'handoff-icons.png'}/>
            <Label text="Handoff – Icons & Buttons"/>
            <p className="stacked withLabel">Another aspect of this project required me to effectively communicate my design to the developer working on building the interface. I created a design handoff for the developer to use a reference, as well as had meetings about implementing the design in code.</p>
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
      text: 'Wireframe',
      activeClass: 'active',
    },
    {
      href: '#t2',
      text: 'Mockup',
      activeClass: '',
    },
    {
      href: '#t3',
      text: 'Handoff',
      activeClass: '',
    },
  ],
};