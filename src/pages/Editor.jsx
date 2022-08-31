import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { EditorData, editorData } from "../data/dummy";
import { Header } from "../components";
import { ToolBase } from "@syncfusion/ej2/diagrams";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 p-2 mt-24 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Editor" />

      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
