import React, { useState, useEffect } from "react";
import "./editor.css";
import { useSelector } from "react-redux";
const Index = () => {
  const getStatus = useSelector(
    (activeEditor) => activeEditor.activeTab.value.tabId
  );
  const [activeEditor, setActiveEditor] = useState(getStatus);
  const [html, setHtml] = useState("");
  const [css, setCSS] = useState("");
  const [js, setJS] = useState("");
  useEffect(() => {
    setActiveEditor(getStatus);
  }, [getStatus]);
  return (
    <>
      {activeEditor === 1 && (
        <textarea
          className="code-editor"
          placeholder="Write HTML CODE Here"
          onChange={(e) => {
            setHtml(e.target.value);
          }}
          value={html}
        ></textarea>
      )}
      {activeEditor === 2 && (
        <textarea
          onChange={(e) => {
            setCSS(e.target.value);
          }}
          value={css}
          className="code-editor"
          placeholder="Write CSS CODE Here"
        ></textarea>
      )}
      {activeEditor === 3 && (
        <textarea
          onChange={(e) => {
            setJS(e.target.value);
          }}
          value={js}
          className="code-editor"
          placeholder="Write JS CODE Here"
        ></textarea>
      )}
      {activeEditor === 4 && (
        <iframe
          srcDoc={`
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>`}
          title="description"
          className="code-editor bg-white"
        />
      )}
    </>
  );
};

export default Index;
