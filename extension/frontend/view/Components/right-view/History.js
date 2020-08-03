import React, { useEffect, useState, useRef } from 'react';
import JSONPretty from 'react-json-pretty';

const History = ({ history }) => {
<<<<<<< HEAD
  
  const historyMap = history.map((hist) => {
  
=======
  // scroll to bottom of history
  const messagesEnd = useRef(null);
  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ block: 'end', behavior: 'smooth', inline: 'nearest' })
  }
  useEffect(scrollToBottom, [history]);


  const historyMap = history.map((hist) => {
    console.log('history!', history)
>>>>>>> a334e659693193d289edae979897aa1c2f95fadb
    // get the atoms and state data 
    let snap;
    if (hist.tree[1].atomVal) {
      snap = hist.tree[1].atomVal;
    }

<<<<<<< HEAD
    const data = <JSONPretty style={{fontSize: "3px"}} data={snap}></JSONPretty>
    return <summary>History{hist.count}: {data}</summary>
=======
    const data = <JSONPretty data={snap}></JSONPretty>
    // creat p tag
    // let json = document.querySelector('#json')
    // json.innerHTML = prettyPrintJson.toHtml(snap)
    return <summary>History {hist.count}: {data}</summary>
>>>>>>> a334e659693193d289edae979897aa1c2f95fadb
  });


  // display new history every time tree updates
  return (
    <div id="history-tab">
      <div id="history-info">
        <h3>History</h3>
        <p id='json'></p>
        {historyMap}
        <div ref={messagesEnd}></div>
      </div>
    </div >
  )
}

export default History;