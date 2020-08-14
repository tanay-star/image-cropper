import React from "react";
import "./App.css";
//importing components
import ImageCropper from "./components/ImageCropper/ImageCropper";

function App() {
  return (
    <div className="App">
      <ImageCropper src="https://d33wubrfki0l68.cloudfront.net/446b1f54b7535dc5e58648c68222312c90c1aec6/14bd8/img/profile.jpg"></ImageCropper>
    </div>
  );
}

export default App;
