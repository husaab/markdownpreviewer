import {useState} from "react"
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './App.css';


const defaultMarkdown = `# Welcome to my React Markdown Previewer!


## This is a sub-heading...
### And here's some other cool stuff:


Heres some code, \`<div></div>\`, between 2 backticks.


\`\`\`
// this is multi-line code:


function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`


You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.


There's also [links](https://www.freecodecamp.org), and
> Block Quotes!


And if you want to get really crazy, even tables:


Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.


- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.




1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


 `


function App() {


  const[state, setState]= useState(defaultMarkdown);


  return (
    <div className="App">
      <h1 id="header"><FontAwesomeIcon id="eye" icon={faEye}></FontAwesomeIcon> Markdown Previewer <FontAwesomeIcon id="eye" icon={faEye}></FontAwesomeIcon></h1>
      <div class="container">
        <textarea
        id="editor"
        onChange={(event) => {
          setState(event.target.value);
        }}
        value={state}
      ></textarea>
     
        <div id="preview"><ReactMarkdown>{state}</ReactMarkdown></div>
      </div>
    </div>
  );
}


export default App;