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
import GalleryNav from "../../GalleryNav";

export class _Gallery extends Component {
  render() {
    let {p} = this.props;
    return (
      <div id='dgsf'>
        <GalleryNav handleScroll={this.props.handleSmoothScroll}
                    links={this.props.galleryNavLinks}/>
        <div>
          <div id='t1' className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'dgsf-original.png'}
                   fullscreenFile={'dgsf-original.png'}/>
            <Label text="Original site design (2013)"/>
            <p className='stacked withLabel'><i>Look… it works!</i> While the design was rather underwhelming, it got me interested in creating things with computers.</p>
          </div>
          <div id='t2' className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'redesign-proposal-clip.png'}
                   fullscreenFile={'redesign-proposal-clip.png'}/>
            <Label text="Proposed design (2017), screenshot of Redesign_Proposal.pdf"/>
            <p className='stacked withLabel'>The original design began to haunt me every time I had to update the site. So, I decided to put some effort into thinking about a redesign.</p>
          </div>
          <div id='t3' className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'dgsf-redesign-1-small.png'}
                   fullscreenFile={'dgsf-redesign-1.png'}/>
            <Label text="Updated proposed design (2018)"/>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'dgsf-redesign-2-small.png'}
                   fullscreenFile={'dgsf-redesign-2.png'}/>
            <Label text="Updated proposed design (2018), cont."/>
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
      text: '2013',
      activeClass: 'active',
    },
    {
      href: '#t2',
      text: '2017',
      activeClass: '',
    },
    {
      href: '#t3',
      text: '2018',
      activeClass: '',
    }
  ],
};