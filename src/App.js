import React, { useState, useEffect } from 'react';
import './App.css';

function Rank(props) {
  const entries = props.entries;
  const listRanks = entries.map((entry, index) =>
    <div class="ranks__entry">
      <div class="circle">{(index + 1).toString()}</div>
      <h4>{entry.Name}</h4>
      <h4>{entry.Score.toString()}</h4>
    </div>
  )
  return listRanks
}

function Leaderboard(props) {
  return (
    <div class="leaderboard">
      <div class="leaderboard__label">
        <h4>Rank</h4>
        <h4>Name</h4>
        <h4>Value</h4>
      </div>
      <hr class="solid" />
      <div class="ranks">
        <Rank entries={props.entries} />
      </div>
    </div>
  );
}


function App() {

  const [entries, updateEntries] = useState([{ Name: "Justin", Score: 10 }, { Name: "Mark", Score: 3 }, { Name: "Keith", Score: 1 }]);

  const onClickHandle = (e) => {
    e.preventDefault();
    var name = document.getElementById("Name").value;
    var value = document.getElementById("Value").value;
    updateEntries( arr => [...arr, {Name: name, Score: value}].sort(function(a, b){return b.Score-a.Score}));
};

  return (
    <div class="container">
      <Leaderboard entries={entries} />
      <form>
        Entry: <input type="text"  id="Name" name="Name" placeholder="Donald" /><br />
        Score: <input type="number" id="Value" name="Value" placeholder="10" /><br /><br />
        <input type="submit" value="Add Entry" onClick={onClickHandle}/>
      </form>
    </div>
  );
}

export default App;
