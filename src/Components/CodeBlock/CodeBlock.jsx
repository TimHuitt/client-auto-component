import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ code }) => {
    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code);
    };

    return (
        <div className="code-block">
            <button onClick={() => copyToClipboard(code)}>Copy</button>
            <SyntaxHighlighter language="javascript" style={nord}>
                {code.trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
