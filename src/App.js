import React from 'react';

import MonacoEditor from '@uiw/react-monacoeditor';

export default function App() {
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <MonacoEditor
      language="javascript"
      value="<h1>I ♥ react-monacoeditor</h1>"
      options={{
        theme: 'vs-dark',
      }}
    />       
    </div>
  )
}



