import React, { useEffect, useState, forwardRef } from "react";
import GrapesJS from "grapesjs";
import EditorBlocks from "./EditorBlocks";
import "grapesjs/dist/css/grapes.min.css";

const osm = "open-sm";
const obl = "open-blocks";

const Editor = forwardRef((props, ref) => {
  const {
    id,
    onInit,
    blockManager,
    storageManager,
    styleManager,
    panels,
    width,
    height,
    children,
    isTemplate
  } = props;

  const [editor, setEditor] = useState(
    GrapesJS.editors.find(e => e.getContainer().id === id)
  );

  useEffect(() => {
    if (!editor) {
      const newEditor = GrapesJS.init({
        container: `#${id}`,
        fromElement: true,
        /* uncomment these lines to use your own css */
        // stylePrefix: "editor-",
        // baseCss: "",
        protectedCss: "* { box-sizing: border-box; } body {margin: 0;}",
        blockManager,
        styleManager,
        storageManager,
        panels,
        width,
        height
      });
      setEditor(newEditor);
      if (onInit) {
        onInit(newEditor);
      }
    }
  });

  return (
    <div id={id} ref={ref}>
      {children}
    </div>
  );
});

Editor.defaultProps = {
  id: "template-editor",
  blockManager: EditorBlocks,
  components: [],
  panels: {
    // stylePrefix: "rabbit-",
    defaults: [
      {
        id: "commands",
        buttons: [{}]
      },
      {
        id: "views",
        buttons: [
          {
            id: osm,
            className: "fa fa-paint-brush",
            command: osm,
            active: true,
            togglable: 0,
            attributes: { title: "Open Style Manager" }
          },
          {
            id: obl,
            className: "fa fa-th-large",
            command: obl,
            togglable: 0,
            attributes: { title: "Open Blocks" }
          }
        ]
      }
    ]
  },
  storageManager: {
    id: "gjs-",
    type: "local",
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1
  },
  styleManager: {},
  plugins: [],
  blocks: [],
  width: "auto",
  height: "100vh"
};

export default Editor;
