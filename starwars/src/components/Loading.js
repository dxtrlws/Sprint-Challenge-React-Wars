import React from "react";
import "./Loading.css";

function Loading() {
  const quotes = [
    "“Help me, Obi-Wan Kenobi. You’re my only hope.” — Leia Organa",
    "“I find your lack of faith disturbing.” — Darth Vader",
    "“The Force will be with you. Always.” — Obi-Wan Kenobi",
    "“Do. Or do not. There is no try.” — Yoda",
    '“I’ll never turn to the dark side. You’ve failed, your highness. I am a Jedi, like my father before me.” — Luke Skywalker', 
    '“Power! Unlimited power!” — Darth Sidious',
    '“So this is how liberty dies. With thunderous applause.” — Padmé Amidala',
    '“You know, no matter how much we fought, I’ve always hated watching you leave.” — Leia Organa',
    '“I’m one with the Force. The Force is with me.” — Chirrut Imwe'
  ];

  let quote = quotes[Math.floor(Math.random()*quotes.length)];


  return (
      <div>
      <h3>{quote}</h3>

    <div className="loading">
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-yellow-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </div>
      </div>
  );
}

export default Loading;
