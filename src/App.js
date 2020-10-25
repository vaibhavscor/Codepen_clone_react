import React,{useState,useEffect} from 'react';
import './App.css';
import Editor from "./Components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";


function App() {

    const [Html, setHtml] = useLocalStorage('Html','')
    const [Css, setCss] = useLocalStorage('Css','')
    const [Js, setJs] = useLocalStorage('Js','')
    const [srcDoc, setsrcDoc] = useState('')

    useEffect(() => {
      const timeout = setTimeout(()=>{
        setsrcDoc(`  
        <html>
        <body>${Html}</body>
        <style>${Css}</style>
        <script>${Js}</script>
        </html>
    
      `)
      },250)
      return () => clearInterval(timeout)
    },[Html,Css,Js])


  return (
    <div className="App">
    <div className="pane top-pane">
      <Editor
      language="xml"
      displayName="HTML"
      value={Html}
      onChange={setHtml}   
      />
      
      <Editor
      language="css"
      displayName="CSS"
      value={Css}
      onChange={setCss}   
      />

<Editor
      language="javascript"
      displayName="JavaScript"
      value={Js}
      onChange={setJs}   
      />
    </div>
    
    <div className="pane">

      <iframe 
      srcDoc={srcDoc}
      title="output"
      sandbox="allow-scripts"
      formBroder="0"
      width="100%"
      height="100%"
      />

      </div>



    </div>
  );
}

export default App;
