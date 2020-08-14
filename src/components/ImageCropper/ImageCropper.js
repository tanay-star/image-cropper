import React from "react";
import "./ImageCropper.css";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

class ImageCropper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDestination: "",
    };
    this.imageElement = React.createRef();
  }

  componentDidMount() {
    const cropper = new Cropper(this.imageElement.current, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        this.setState({ imageDestination: canvas.toDataURL("image/png") });
      },
    });
  }

  render() {
    return (
      <div>
        <div className="img-container">
          <img
            ref={this.imageElement}
            src={this.props.src}
            alt="Source"
            crossOrigin="true"
          />
        </div>
        <img
          src={this.state.imageDestination}
          className="img-preview"
          alt="Destination"
        />
      </div>
    );
  }
}

export default ImageCropper;
