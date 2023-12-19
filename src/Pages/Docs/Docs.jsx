import React from 'react';
import CodeBlock from '../../components/CodeBlock/CodeBlock';
import { devInstall, devImport, addComponent } from './codeSnippets';

const Docs = () => {
    return (
        <div className="docs-container">
            <h1>Documentation</h1>
            <div className="flex-container">
                <div className="steps-container">
                    <section className="step">
                        <h2>1. Install auto-component</h2>
                        <p>Install `auto-component` from npm as a developer dependency.</p>
                    </section>

                </div>
                <div className="code-container">

                    <CodeBlock code={devInstall} />
                </div>
            </div>
            <div className="flex-container">
                <div className="steps-container">

                    <section className="step">
                        <h2>2. Import AutoComponent</h2>
                        <p>Import inside the file where you're building the new component.</p>
                    </section>
                </div>
                <div className="code-container">
                    <CodeBlock code={devImport} />
                </div>
            </div>
            <div className="flex-container">
                <div className="steps-container">
                    <section className="step">
                        <h2>3. Add component to your code</h2>
                        <p>Place where you want new component built.</p>
                    </section>
                </div>
                <div className="code-container">
                    <CodeBlock code={addComponent} />
                </div>
            </div>
        </div>
    );
};

export default Docs;
