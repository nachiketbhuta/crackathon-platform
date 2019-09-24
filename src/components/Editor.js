import React, { Component, Fragment } from "react";
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/theme/monokai';

import Language from './Editor/Language';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: `print("Hello World");`,
            languages: ['c', 'cpp', 'java', 'python'],
            selectedLanguage: 'python',
            isDisabled: false
        }
    }

    onCodeChange = (value) => {
        this.setState({
            code: value
        })
    }

    componentDidMount() {
        this.setState({
            isDisabled: true
        })
    }

    handleSwitchLanguage = e => {
        this.setState({
            selectedLanguage: e.target.value
        })
    }

    handleRun = () => {
        // const code = this.state.code;
        // Send code to server for run and display the results
    }

    handleSubmit = () => {
        // const code = this.state.code;
        // Send code to server for submit and display the results
    }

	render() {
		return (
			<Fragment>
                <select 
                    defaultValue={this.state.selectedLanguage}
                    onChange={this.handleSwitchLanguage}
                >
                    {
                        this.state.languages.map(lang =>
                            <Language key={lang} lang={lang} />
                        )
                    }
                </select>

                <AceEditor
                    width="1280px"
                    height="730px"
                    mode={this.state.selectedLanguage}
                    theme="monokai"
                    onChange={this.onCodeChange}
                    name="app"
                    value={this.state.code}
                    editorProps={{$blockScrolling: true}}
                    fontSize={16}   
                    // readOnly
                />

                <div className="compile-btn">
                    <div className="row">
                        <div className="col-6 offset-md-5 mt-3">
                            <input type="button" className="btn btn-primary" onClick={this.handleRun} value="Run" />
                            <input type="button" className="btn btn-success ml-2" onClick={this.handleSubmit} value="Submit" />
                        </div>
                    </div>
                </div>
			</Fragment>
		);
	}
}
