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
    let {p} = this.props;
    return (
      <div id='spectra'>
        <GalleryNav handleScroll={this.props.handleSmoothScroll}/>
        <div>
          <div id="t2016" className="col gallery-marker">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'spectra-v0.0-a.png'}
                   fullscreenFile={'spectra-v0.0-a.png'}/>
            <p className="stacked">From the beginning, we knew we wanted the interface to feel like a space to explore. Thus, we also needed to think about organizing that space in an intuitive way.</p>
          </div>
          <div className='col'>
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   path={p.publicPath}
                   previewFile={'spectra-v0.0-b.png'}
                   fullscreenFile={'spectra-v0.0-b.png'}/>
            <Image className='sm'
                   path={p.publicPath}
                   previewFile={'spectra-v0.0-c.png'}
                   fullscreenFile={'spectra-v0.0-c.png'}/>
          </div>
          <div className='col'>
            <Image className='md'
                   path={p.publicPath}
                   previewFile={'spectra-v0.0-d.png'}
                   fullscreenFile={'spectra-v0.0-d.png'}/>
            <Label text="Early mockup of Spectrum Search view"/>
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
                   className='xs'
                   path={p.publicPath}
                   previewFile={'spectra-interaction-spectrum.png'}
                   fullscreenFile={'spectra-interaction-spectrum.png'}/>
            <Label text="Spectrum interaction"/>
            <Image className='xs'
                   path={p.publicPath}
                   previewFile={'spectra-interaction-article.png'}
                   fullscreenFile={'spectra-interaction-article.png'}/>
            <Label text="Article interaction (previously referred to as &quot;Items&quot;)"/>
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
                   className='sm'
                   path={p.publicPath}
                   previewFile={'dashboard-my-spectra.png'}
                   fullscreenFile={'dashboard-my-spectra.png'}/>
            <Label text="My Spectrum view"/>
            <Image className='sm'
                   path={p.publicPath}
                   previewFile={'dashboard-my-spectra-iteration.png'}
                   fullscreenFile={'dashboard-my-spectra-iteration.png'}/>
            <Label text="Settings view iteration"/>
          </div>
          <div className='col gallery-marker' id='t2018'>
            <Video videoSrc='https://www.youtube.com/embed/cdeOKFJA3MU?rel=0&amp;showinfo=0&mute=1'
                   previewFile={'spectra-title.png'}
                   path={p.publicPath}
                   className='lg'/>
            <Label text="Video (with sound)"/>
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
};