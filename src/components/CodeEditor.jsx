import { useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const editorRef = useRef();
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <Box>
      <Editor
        height="90vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="//try you code here"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </Box>
  );
};

export default CodeEditor;
