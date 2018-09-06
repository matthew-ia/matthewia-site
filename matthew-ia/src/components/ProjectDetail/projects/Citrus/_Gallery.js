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
      <div>
        <GalleryNav handleScroll={this.props.handleSmoothScroll}
                    links={this.props.galleryNavLinks}/>
        <div>
          <div id='t1' className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'citrus-0.png'}
                   fullscreenFile={'citrus-0.png'}/>
            <Label text="Original site design (2013)"/>
            <p className='stacked withLabel'>I want to create a web experience for Citrus that evokes the feeling of being in a space rather than just browsing a website. I took inspiration from sites like <a href="https://hoverstat.es/features/leroy-nguyen" target='_blank'>Leeroy Nguyen’s</a>, <a href="http://thexx.info/home/" target='_blank'>The XX</a>, <a href="https://www.lushusa.com" target='_blank'>LUSH</a>, and <a href="https://www.glossier.com/" target='_blank'>Glossier</a>.</p>
          </div>
          <div id='t2' className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'citrus-1.png'}
                   fullscreenFile={'citrus-1.png'}/>
            <Label text="Proposed design (2017), screenshot of Redesign_Proposal.pdf"/>
            <p className='stacked withLabel'>The original design began to haunt me every time I had to update the site. So, I decided to put some effort into thinking about a redesign.</p>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'citrus-product-1.png'}
                   fullscreenFile={'citrus-product-1.png'}/>
            <Label text="Updated proposed design (2018), cont."/>
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'citrus-product-2.png'}
                   fullscreenFile={'citrus-product-2.png'}/>
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