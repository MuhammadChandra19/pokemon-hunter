import React, { Component } from 'react'
import { Spin } from '../Spin'


interface ImageViewerProps {
  className?: string;
  imgUrl: string;
  style?: React.CSSProperties;
}

export class ImageViewer extends Component<ImageViewerProps, any> {
  private myRef: React.RefObject<HTMLImageElement>

  constructor(props: ImageViewerProps) {
    super(props)
    this.myRef = React.createRef();
    this.state = {
      isLoaded: false,
    }
  }

  componentDidMount() {
    const { current } = this.myRef
    if (current.complete) {
      this.loaded()
    } else {

      current.addEventListener('load', this.loaded)
    }



  }

  componentWillUnmount() {
    const { current } = this.myRef
    current.removeEventListener('load', this.loaded)

  }


  loaded = async () => {
    this.setState({ isLoaded: true })

  }

  render() {
    const { isLoaded } = this.state
    const { imgUrl, className, style } = this.props
    return (
      <div style={style}>
        {
          !isLoaded && <Spin />
        }
        <img ref={this.myRef} style={{ display: isLoaded ? 'block' : 'none' }} className={className} src={imgUrl} alt={imgUrl} />
      </div>
    )
  }
}
