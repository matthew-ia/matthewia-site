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
      <div id='spectra'>
        <GalleryNav handleScroll={this.props.handleSmoothScroll}
                    links={galleryNavLinks}/>
        <div>
          <div id="t2016" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'spectra-v0.0-a.png'}
                   fullscreenFile={'spectra-v0.0-a.png'}/>
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'spectra-v0.0-b.png'}
                   fullscreenFile={'spectra-v0.0-b.png'}/>
          </div>
          <div className='col'>
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'spectra-v0.0-d.png'}
                   fullscreenFile={'spectra-v0.0-d.png'}/>
            <Label text="Early mockup of Current Spectrum view"/>
            <p className="stacked withLabel">From the beginning, we knew we wanted the interface to feel like a space to explore. Thus, we also needed to think about organizing that space in an intuitive way.</p>
          </div>
          <div id="t2017" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'spectra-uikit.png'}
                   fullscreenFile={'spectra-uikit.png'}/>
            <p className="stacked"><i>Iterate. Iterate. Iterate.</i> We took a step back from creating any more UI views to establish a design language. Then, we began designing the views core to the experience as a whole.
            </p>
          </div>
          <div className='col'>
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'dashboard-my-spectra.png'}
                   fullscreenFile={'dashboard-my-spectra.png'}/>
            <Label text="My Spectrum view"/>
            <Image className='sm'
                   path={p.publicPath}
                   previewFile={'dashboard-my-spectra-iteration.png'}
                   fullscreenFile={'dashboard-my-spectra-iteration.png'}/>
            <Label text="My Spectrum view iteration"/>
          </div>
          <div className='col'>
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'dashboard.png'}
                   fullscreenFile={'dashboard.png'}/>
            <Label text="Dashboard view"/>
          </div>
          <div className='col'>
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'social-mode.png'}
                   fullscreenFile={'social-mode.png'}/>
            <Label text="Social Mode view"/>
          </div>
          <div className='col gallery-marker' id='t2018'>
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'current-spectrum.png'}
                   fullscreenFile={'current-spectrum.png'}/>
            <Label text="Current Spectrum view iteration"/>
            <p className="stacked withLabel"><i>Refine and build the base camp.</i> For my senior capstone project, I built an early prototype of Spectra, <code>spectra-cp</code>. This introduced new design challenges, both in developing and redesigning the interface and its functionality under a new, more limited scope. The working prototype of Spectra (v0.3) was developed using React.
            </p>
          </div>
          <div className='col'>
            <Video onLoad={this.props.setColumnWidth}
                   videoSrc='https://www.youtube.com/embed/cdeOKFJA3MU?rel=0&amp;showinfo=0&mute=1'
                   previewFile={'spectra-title.png'}
                   path={p.publicPath}
                   className='lg'/>
            <Label text="Spectra-CP Demo w/ voiceover (v0.2)"/>
          </div>
          <div className='col'>
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'current-spectrum-spectra-cp.png'}
                   fullscreenFile={'current-spectrum-spectra-cp.png'}/>
            <Label text="Current Spectrum view (Capstone Project iteration)"/>
            <p className="stacked withLabel">The design for <code>spectra-cp</code> focused on the results, as the scope of the project had to be constrained to just the basic searching experience.
            </p>
          </div>
          <div className='col'>
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'spectra-v0.1.png'}
                   fullscreenFile={'spectra-v0.1.png'}/>
            <Label text="Spectra Capstone v0.1 (screenshot)"/>
            <Image className='sm'
                   path={p.publicPath}
                   previewFile={'spectra-v0.3.png'}
                   fullscreenFile={'spectra-v0.3.png'}/>
            <Label text="Spectra Capstone v0.3 (screenshot)"/>
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
      href: '#t2016',
      text: '2016',
      activeClass: 'active',
    },
    {
      href: '#t2017',
      text: '2017',
      activeClass: '',
    },
    {
      href: '#t2018',
      text: '2018',
      activeClass: '',
    }
  ],
};