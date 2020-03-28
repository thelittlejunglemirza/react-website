/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Container,
    Row,
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Footer from "components/Footers/Footer.js";
import ContactUs from 'components/Forms/ContactUs.js';
import Projects from 'components/Projects/Projects.js';
import Services from 'components/Services/Services.js'

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.contactRef=null //used for scrolling to contact form
        this.projectsRef=null //used for scrolling to projects page
        this.servicesRef=null //used for scrolling to services page

        // These next three lines might be unessary
        document.documentElement.classList.remove("nav-open");
        document.body.classList.add("profile-page");
        document.body.classList.remove("profile-page");
    }

    // scroll handlers
    scrollToServicesRef = () => window.scrollTo(0, this.servicesRef.offsetTop)
    scrollToProjectRef = () => window.scrollTo(0, this.projectsRef.offsetTop)
    scrollToContactRef = () => window.scrollTo(0, this.contactRef.offsetTop)

    render() {
        return (
            <div>
                <IndexNavbar scrollHandler0={this.scrollToServicesRef} scrollHandler1={this.scrollToProjectRef} scrollHandler2={this.scrollToContactRef}/>
                <IndexHeader scrollHandler={this.scrollToContactRef}/>
                <div className="main">
                    <div ref={ (ref) => this.servicesRef=ref }></div>
                    <Services/>
                    <div ref={ (ref) => this.projectsRef=ref }></div>
                    <div className="section section-white text-center"
                        style={
                            {minHeight: "100vh"}
                    }>
                        <h2 className="title">Our Work</h2>
                        <Container>
                            <Row>
                                <Projects/>
                            </Row>
                        </Container>
                    </div>
                    <div ref={ (ref) => this.contactRef=ref }></div>
                    <ContactUs/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default LandingPage;
