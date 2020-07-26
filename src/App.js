import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

import Landing from './components/landingpage';
import About from './components/aboutMe';
import Resume from './components/resume';
import Projects from './components/projects';
import Contact from './components/contact';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className= "App">
        <div className="demo-big-content">
            <Layout>
                <Header title="Neel's Portfolio" scroll>
                    <Navigation>
                        <Link to="/portfolio/resume">Resume</Link>
                        <Link to="/portfolio/about">About Me</Link>
                        <Link to="/portfolio/projects">Projects</Link>
                        <Link to="/portfolio/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                      <Link to="/portfolio/resume">Resume</Link>
                      <Link to="/portfolio/about">About Me</Link>
                      <Link to="/portfolio/projects">Projects</Link>
                      <Link to="/portfolio/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Switch>
                      <Route path="/portfolio" exact component={Landing}/>
                      <Route path="/portfolio/about" exact component={About} />
                      <Route path="/portfolio/resume" exact component={Resume} />
                      <Route path="/portfolio/projects" exact component={Projects} />
                      <Route path="/portfolio/contact" exact component={Contact} />
                    </Switch>
                </Content>
            </Layout>
        </div>
      </div>
    </Router>
  );
}

export default App;
