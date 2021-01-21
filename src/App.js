import React, { Component } from "react";
import  Clarifai from "clarifai";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import './App.css';


const app = new Clarifai.App({
  apiKey: "91bd05e6378b451e8b02726b988b8ace"
});

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 500
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }  
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log("click");
    app.models
      .predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(
      function(response) {
        console.log(response.output[0].data.regions[0].region_info.bounding_box);
      },
      function(err) {
        //there was an error 
      }
    );
  }

  render() {
    return (
      <div className = "App">
        <Particles className="particles"
          params={ particlesOptions }
          />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl = {this.state.imageUrl}/>
      </div>
    )
  }
}

export default App;
