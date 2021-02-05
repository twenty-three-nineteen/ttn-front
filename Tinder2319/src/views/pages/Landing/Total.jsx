import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import SideMenu from "../../components/SlideMeny/SideMenu.js";

export class TotalLanding extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div style={{overflowY:"auto"}}>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.Features} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default TotalLanding;
