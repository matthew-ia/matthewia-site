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
          <div id="t1" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='lg'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'chaseui-graph-clip.gif'}
                   fullscreenFile={'chaseui-graph-clip.gif'}/>
            <Label text="A label"/>
          </div>
          <div className='col'>
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'widget_primary_cluster.png'}
                   fullscreenFile={'widget_primary_cluster.png'}/>
            <Label text="Another label"/>
            <p className="stacked withLabel">Some text.</p>
          </div>
          <div id="t2" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'widget_primary_cluster.png'}
                   fullscreenFile={'widget_primary_cluster.png'}/>
            <Label text="A label"/>
          </div>
          <div id="t3" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'widget_primary_cluster.png'}
                   fullscreenFile={'widget_primary_cluster.png'}/>
            <Label text="A label"/>
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
      text: 'Develop',
      activeClass: '',
    }
  ],
};