import React, {useState}from 'react';
import './App.css';
import Block from './Components/Block';
import indicatorGreen from './img/trianglegreenUp.png';
import triangle from './img/triangle.png';
import searchImg from './img/search.png';

function App() {
  
  const arr =[
    {
      "id": 1,
      "name": "ExpsaertSender",
      "sites": 0,
      "type": "email",
      "status": "blocked"
    },
    {
      "id": 2,
      "name": "Tag Commander",
      "sites": 0,
      "type": "tag manager",
      "status": "blocked"
    },
    {
      "id": 3,
      "name": "Ysance",
      "sites": 0,
      "type": "dmp / crm",
      "status": "blocked"
    },
    {
      "id": 4,
      "name": "AT Internet",
      "sites": 1,
      "type": "analytics",
      "status": "enable"
    },
    {
      "id": 5,
      "name": "Content Square",
      "sites": 3,
      "type": "analytics",
      "status": "enable"
    },
    {
      "id": 6,
      "name": "Google Tag Manager",
      "sites": 2,
      "type": "tag manager",
      "status": "enable"
    },
    {
      "id": 7,
      "name": "Heatmap",
      "sites": 1,
      "type": "heatmap",
      "status": "enable"
    },
    {
      "id": 8,
      "name": "Tealium",
      "sites": 0,
      "type": "dmp / crm",
      "status": "disable"
    },
    {
      "id": 9,
      "name": "Emarsys",
      "sites": 0,
      "type": "email",
      "status": "disable"
    }
  ];
  const [indicatorUp, setIndicatorUp] = useState(triangle);
  const [indicatorDown, setIndicatorDown] = useState(triangle);
  const [filtredArray, setFiltredArray] = useState(arr);
  const [search, setSearch] = useState("");
  const [sortState, setSortState] = useState(true);


  function sort(count){
    let clonedArray = filtredArray.slice(0);
    clonedArray.sort((a, b) => (a.name > b.name ? count : -count));
    setFiltredArray(clonedArray);
  }


  function handleSort() {
    if (sortState){
      sort(1);
      setSortState(false);
      setIndicatorUp(indicatorGreen);
      setIndicatorDown(triangle);
    } else {
      sort(-1);
      setSortState(true);
      setIndicatorUp(triangle);
      setIndicatorDown(indicatorGreen);
    }
  }

  function handleSearch(value) {
    const arrsearch = arr.filter(ar => {
      return ar.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearch(value);
    setFiltredArray(arrsearch)

  }
  return (
    <div className="head"> 
      <img  className="searchImg" src={searchImg} alt='search' />
      <input
          type="text"
          className="search"
          value={search}
          onChange={e => handleSearch(e.target.value)}
        >
      </input>
      <div className="board">
      <div className="topic">
        <div onClick={() => handleSort()}
            className="toolName">
            <span>Tool name</span>
            <div className="toolNameIndicators">
                <img className="triangleImg" src={indicatorUp} alt="triangle" />
                <img className="triangleImg down" src={indicatorDown} alt="triangle" />
            </div>
        </div>
        <div className="textPosition">
            <span>Used on</span>
            <span>Type</span>
            <span>Status</span>
        </div>
    </div>
        {filtredArray.map(el => (
          <Block
            key={el.id}
            name={el.name}
            sites={el.sites}
            type={el.type}
            status={el.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
