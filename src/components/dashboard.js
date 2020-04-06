import React, { Component } from 'react';
import pulse_icon from '../img/pulse_icon.png';
import Navbar from './Navbar';
import Menu from './Menu';
import YearlyTurnover from './YearlyTurnover';
import EnterpriseClients from './EnterpriseClients';
import LocationContainer from './LocationContainer';
import EarningsGraph from './EarningsGraph';
import City from './City';
import AnalyticsGraph from './AnalyticsGraph';
import StatisticGraph from './StatisticGraph';
import Profile from './Profile';
import OpenProjects from './OpenProjects';
import Completed from './Completed';
import Earned from './Earned';
import Premium from './Premium';
import side_arrow from '../img/side_arrow.png';


class Dashboard extends Component {
    constructor() {
        super();
        
        this.hideSidebar = this.hideSidebar.bind(this)
        this.showSideBar = this.showSideBar.bind(this)
        
        this.state = {
            test: {
              marginLeft:"0%"
            },
            sidebar: {
                zIndex: 2,
                opacity: 1
            },
            transparentVeil: {
                display:"none",
               
            },
            sidebar_show_hide_btn: {
                opacity: 0,
                
            }

            
          }

        
    }
    
    
    reportWindowSize = e => {

        console.log(window.innerWidth);
        if (window.innerWidth > 1410) {
            this.setState({analyticsGraph: {analyticsGraphWith: "685px", analyticsHeight: "220px"}})
        } else {this.setState({analyticsGraph: {analyticsGraphWith: "800px", analyticsHeight: "215px"}})}
        
        if (window.innerWidth <= 770) {this.setState({test: {marginLeft: "50%"}})}
        if (window.innerWidth <= 610) {this.setState({test: {marginLeft: "30%"}})}
        if (window.innerWidth <= 540) {this.setState({test: {marginLeft: "10%"}})}
        if (window.innerWidth > 770) {this.setState({test: {marginLeft: "0%"}})}
        
        if (window.innerWidth <= 770) {this.setState({sidebar_show_hide_btn: {opacity: 1, left: 0, top: "48%"}})}
        if (window.innerWidth > 770) {this.setState({sidebar_show_hide_btn: {opacity: 0}})}
        if (window.innerWidth > 770) {this.setState({sidebar: {opacity: 1}})}
        if (window.innerWidth < 770) {this.setState({sidebar: {display:"none"}})}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
        window.addEventListener('resize', this.reportWindowSize)

        if (window.innerWidth <= 770) {this.setState({test: {marginLeft: "50%"}})}
        if (window.innerWidth <= 610) {this.setState({test: {marginLeft: "30%"}})}
        if (window.innerWidth <= 540) {this.setState({test: {marginLeft: "10%"}})}
        if (window.innerWidth > 770) {this.setState({test: {marginLeft: "0%"}})}  

        if (window.innerWidth <= 770) {this.setState({sidebar_show_hide_btn: {opacity: 1, left: 0, top: "48%"}})}
        if (window.innerWidth < 770) {this.setState({sidebar: {display:"none"}})}

        if (window.innerWidth > 1410) {
            this.setState({analyticsGraph: {analyticsGraphWith: "685px", analyticsHeight: "220px"}})
        } else {this.setState({analyticsGraph: {analyticsGraphWith: "2000px", analyticsHeight: "215px"}})}
      }
      

      hideSidebar() {
          this.setState({sidebar: {display:"none"}})
          this.setState({transparentVeil: {display:"none", zIndex:0}})
          this.setState({sidebar_show_hide_btn: {opacity: 1, left: 0, top: "48%"}})
          return console.log("hide sidebar")
      }

      showSideBar() {
        this.setState({sidebar: {opacity: 1, zIndex:2}})
        this.setState({transparentVeil: {opacity: 0.5, zIndex:0}})
        this.setState({sidebar_show_hide_btn: {opacity: 0, left: 0, top: "48%"}})
        return console.log("show sidebar")
      }

      
    
    render() {

        return (
            <div>

            <div className="larger_screen">
                <div className="larger_screen__container">

                <div className="main" >
                    <div className="main__container" style={this.state.test}>
                        <Navbar />
                        <Menu />
                        <div className="main__content">
                            <div className="main__content__top_section">
                                <div className="main__content__top_section__first_container">
                                    <YearlyTurnover />
                                    <EnterpriseClients />
                                    <LocationContainer />
                                </div>
                                <EarningsGraph />
                                <City />
                            </div>
                            <div className="main__content__bottom_section">
                                <AnalyticsGraph />
                                <StatisticGraph />
                            </div>
                        </div>
                    </div>
                </div>
               
               
               
                <div className="side_container" style={this.state.sidebar}>
                    <Profile />
                    <div className="side_container__current_stats">
                        <p className="side_container__current_stats__title">Current Stats</p>
                        <img src={pulse_icon} alt="pulse_icon" className="side_container__current_stats__pulse_icon"/>
                    </div>
                    <OpenProjects />
                    <Completed />
                    <Earned />
                    <Premium />
                </div>
                <div className="side_filler" onClick={this.hideSidebar} style={this.state.transparentVeil}></div>
                <div className="hide_show_sidebar_btn" onClick={this.showSideBar} style={this.state.sidebar_show_hide_btn}>
                    <img src={side_arrow} alt="side_arrow" />
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Dashboard;