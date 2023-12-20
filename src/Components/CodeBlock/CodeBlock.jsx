import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CodeBlock = ({ code }) => {
    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code);
        // You can add some notification to the user here if needed
    };

    return (
        <div className="code-block">
            <button onClick={() => copyToClipboard(code)}>Copy</button>
            <SyntaxHighlighter language="javascript" style={dark}>
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
