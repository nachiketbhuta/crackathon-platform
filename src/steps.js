import React from 'react';

import Editor1 from './components/editors/Editor1';
import Editor2 from './components/editors/Editor2';
import Editor3 from './components/editors/Editor3';
import Editor4 from './components/editors/Editor4';
import Final from './components/editors/Final';

// import Test from './components/Test';


const steps = [
    {name: 'Program 1', component: <Editor1/>},
    {name: 'Program 2', component: <Editor2/>},
    {name: 'Program 3', component: <Editor3/>},
    {name: 'Program 4', component: <Editor4/>},
    {name: 'Final Submission', component: <Final/>},
  ];

export { steps }