/**
 * SpectraContent Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import GalleryNav from "../../GalleryNav";
import Image from "../../../Image/Image";
import Label from "../../../Label/Label";

export class _Gallery extends Component {
  render() {
    let {p} = this.props;
    return (
      <div>
        <GalleryNav handleScroll={this.props.handleSmoothScroll}/>
        <div>
          <div id="t2016" className="col gallery-marker">
            {/*<img onLoad={this.props.setColumnWidth}
                 className="sm" id="1" src={p.publicPath + "ab.jpg"}/>
             */}
            <Image onLoad={this.props.setColumnWidth}
                   className='sm'
                   id='t2016'
                   path={p.publicPath}
                   previewFile={'ab.png'}
                   fullscreenFile={'ab.jpg'}/>
            <Label text="I'm a label"/>
            <Image className='md'
                   path={p.publicPath}
                   previewFile={'bbb.jpg'}
                   fullscreenFile={'bbb.jpg'}/>
            <Label text="I'm a label too!"/>
          </div>
          <div className="col">
            <Image onLoad={this.props.setColumnWidth}
                   className='md'
                   path={p.publicPath}
                   previewFile={'cd.jpg'}
                   fullscreenFile={'cd.jpg'}/>
            <p className="stacked">I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text.I'm a full column of text. I'm a full column of text. I'm a full column of text.</p>
          </div>
          <div className='col gallery-marker'>
            <Image className='lg'
                   id='t2017'
                   path={p.publicPath}
                   previewFile={'dd.jpg'}
                   fullscreenFile={'dd.jpg'}/>
            <Label text="I'm a label too!"/>
          </div>
          <div className='col'>
            <Image className='md'
                   path={p.publicPath}
                   previewFile={'main.png'}
                   fullscreenFile={'main.png'}/>
            <Label text="I'm a label too!"/>
          </div>
          <div className='col'>
            <Image className='md'
                   path={p.publicPath}
                   previewFile={'main.png'}
                   fullscreenFile={'main.png'}/>
            <Label text="I'm a label too!"/>
          </div>
          <div className='col'>
            <Image className='md'
                   path={p.publicPath}
                   previewFile={'main.png'}
                   fullscreenFile={'main.png'}/>
            <Label text="I'm a label too!"/>
          </div>
          <div className='col gallery-marker'>
            <Image className='md'
                   id='t2018'
                   path={p.publicPath}
                   previewFile={'ab.png'}
                   fullscreenFile={'ab.png'}/>
            <Label text="I'm a label too!"/>
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