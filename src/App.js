 
import React, { useState } from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import resultOne from './images/one.jpg';
import resultThree from './images/three.jpg';
import iconFb from './images/iconFb.png';
import iconLine from './images/iconLine.png';
import iconTwitter from './images/iconTwitter.png';

const Page1 = () => (
  <div>
    <Helmet>
      <title>Page 1</title>
      <meta property="og:title" content="title 111" />
      <meta property="og:description" content="description 111" />
      <meta property="og:url" content="https://git-scm.com/" />
      <meta property="og:image" content="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201810272230" />
    </Helmet>
    <h1>This is Page 1</h1>
  </div>
);

const Page3 = () => (
  <div>
    <Helmet>
      <title>Page 3</title>
      <meta property="og:title" content="title 333" />
      <meta property="og:description" content="description 333" />
      <meta property="og:url" content="www.gogole.com" />
      <meta property="og:image" content="https://www.coca-cola.com/content/dam/brands/global/coca-cola/images/coca-cola-siente-el-sabor-amigos-1800x700.jpg" />
    </Helmet>
    <h1>This is Page 3</h1>
  </div>
);

const Now = () => {
 
  const [resultImg, setResultImg] = useState(resultOne);
  const [data, setData] = useState({
    url: 'https://link.medium.com/ZVd9A8R2ehb',
    customText: "3 Uses of the Three Dots in JavaScript"
  })

  return (
    <div className="App-header">
      <div className="select" onClick={() => {
        setResultImg(resultImg === resultThree ?resultOne : resultThree)
      } }>select</div>
      <div>
          <img className="resultImg"
          src={resultImg}
        />
      </div>
      <div className="btns">
        <div><a href={`https://www.facebook.com/sharer.php?u=${data.url}`}  target="_blank" >
          <img className="icon" src={iconFb} />
          </a>
        </div>
        <div>
          <a href={`https://lineit.line.me/share/ui?url=${encodeURIComponent(data.url)}`} target="_blank" >
            <img className="icon" src={iconLine}/>
          </a></div>
        <div>
          <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(data.customText + " " + data.url)}`} 
            data-size="large" target="_blank">
            <img className="icon" src={iconTwitter} />
          </a>
         </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Now />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
