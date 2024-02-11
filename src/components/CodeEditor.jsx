import { useState } from "react";
import { Box } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
const CodeEditor = () => {
  const [code, setCode] = useState("");
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
