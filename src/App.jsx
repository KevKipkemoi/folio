import "./app.scss"

import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Portfolio"
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"

function app() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default app;
