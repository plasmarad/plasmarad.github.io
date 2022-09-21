import React from "react";


export function WIP_page() {
  return (
    <div className="WIP_page">
      <h1>oh neat</h1>
        <p>you found a page that's not done yet, and is currently under development</p>
        <button onClick={()=>{window.location.href="/"}}>come back later when it's finished</button>
    </div>
  );
}


export default function Error404() {
    return (
        <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        </div>
    );
}