import React from "react";
import "./App.css"

function App(){
  const pdfData = [
    {"nome": "pdf1","qM": 3,"qP": 5},
    {"nome": "pdf2","qM": 4,"qP": 6}
  ]

  return (
    <div className="container">
      <div className="formulario">
        <form action="" method="get">

          <div className="containerQ">
            
            <div className="answerRadio">
              <input type="radio" value="a" name="markA" className="mark" id="markA"/>
              <label htmlFor="markA"> a</label>
            </div>
            <div className="answerText">
              <textarea className="areaAnswer" name="" rows="5" cols="10"></textarea>
            </div>
          </div>

          <div className="containerQ">
            
            <div className="answerRadio">
              <input type="radio" value="b" name="markB" className="mark" id="markB"/>
              <label htmlFor="markA"> b</label>
            </div>
            <div className="answerText">
              <textarea className="areaAnswer" name="" rows="5" cols="10"></textarea>
            </div>
          </div>

          <div className="containerQ">
            
            <div className="answerRadio">
              <input type="radio" value="c" name="markC" className="mark" id="markC"/>
              <label htmlFor="markC"> c</label>
            </div>
            <div className="answerText">
              <textarea className="areaAnswer" name="" rows="5" cols="10"></textarea>
            </div>
          </div>

          <div className="containerQ">
            
            <div className="answerRadio">
              <input type="radio" value="d" name="markD" className="mark" id="markD"/>
              <label htmlFor="markD"> d</label>
            </div>
            <div className="answerText">
              <textarea className="areaAnswer" name="" rows="5" cols="10"></textarea>
            </div>
          </div>

          <div className="containerQ">
            
            <div className="answerRadio">
              <input type="radio" value="e" name="markE" className="mark" id="markE"/>
              <label htmlFor="markE"> e</label>
            </div>
              <div className="answerText">
              <textarea className="areaAnswer" name="" rows="5" cols="10"></textarea>
            </div>
          </div>
            

        </form>
      </div>
    </div>
  );
}

export default App;