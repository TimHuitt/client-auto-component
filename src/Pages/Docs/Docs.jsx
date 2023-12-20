import React from 'react';
import CodeBlock from '../../Components/CodeBlock/CodeBlock';
import { devInstall, devImport, addComponent } from './codeSnippets';


const Docs = () => {
    return (
        <div className="docs-container">
            <h1>Documentation</h1>
            <div className="flex-container">
                <div className="steps-container">
                    <section className="step">
                        <h2>1. Install auto-component</h2>
                        <p>Install `auto-component` from npm as a developer dependency within your project directory.</p>
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
                    <img
                    src="../../../assets/step2.png"
                    alt="step2" style={{maxWidth: '100%', height: 'auto'}} />
                </div>
            </div>
            <div className="flex-container">
                <div className="steps-container">
                    <section className="step">
                        <h2>3. Add component to your code</h2>
                        <p>Place within the parent component's return statement where you want the new component built.</p>
                    </section>
                </div>
                <div className="code-container">
                    <CodeBlock code={addComponent} />
                    <img
                    src="../../../assets/step3.png"
                    alt="step3" style={{maxWidth: '100%', height: 'auto'}} />
                </div>
            </div>
            <div className="flex-container">
                <div className="steps-container" style={{display: 'flex'}}>
                    <section className="step">
                    <h2>4. View your page</h2>
                    <p>View the parent component in browser. You'll see the auto-component tool at the bottom of your page, and an indicator where auto-component will render your code.</p>
                    </section>
                </div>
                <div className="code-container" style={{display: 'flex'}}>
                    <img
                    src="../../../assets/step4.png"
                    alt="gif" style={{maxWidth: '100%', height: 'auto'}} />
                </div>
            </div>

            <div className="flex-container">
                <div className="steps-container" style={{display: 'flex'}}>
                    <section className="step">
                    <h2>5. Start building</h2>
                    <p>Tell auto-component what you want, and click "Generate." The result
                        will be rendered on the page. You can click the "Request" or "Response"
                        tabs underneath the input to see what is being sent to the AI, and what
                        was returned.</p>
                    </section>
                </div>
                <div className="code-container" style={{display: 'flex'}}>
                    <img
                    src="../../../assets/step5.gif"
                    alt="gif" style={{maxWidth: '100%', height: 'auto'}} />
                </div>
            </div>
                        
            <div className="flex-container">
                <div className="steps-container">
                    <section className="step">
                        <h2>6. Make changes</h2>
                        <p>Ask auto-component to make changes to the code it provided. Those changes will be rendered on the page.</p>
                    </section>
                </div>
                <div className="code-container">
                <img
                    src="../../../assets/step6.gif"
                    alt="gif" style={{maxWidth: '100%', height: 'auto'}} />
                </div>
            </div>
            
            
            <div className="flex-container">
                <div className="steps-container">
                    <section className="step">
                        <h2>7. Copy your code</h2>
                        <p>When you're happy with the response, click on the "Response" tab underneath the input. You'll see the code from the AI, and can click the copy button to use it in your code base.</p>
                    </section>
                </div>
                <div className="code-container">
                <img
                    src="../../../assets/step7.gif"
                    alt="gif" style={{maxWidth: '100%', height: 'auto'}} />
                </div>
            </div>

            <div className="flex-container">
                <div className="steps-container">
                    <section className="step">
                        <h2>8. Start a new session</h2>
                        <p>Click the red X button to start a new session.</p>
                    </section>
                </div>
                <div className="code-container">
                    
                </div>
            </div>
        </div>
    );
};

export default Docs;
