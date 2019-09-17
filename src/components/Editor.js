import React, { Component, Fragment } from "react";
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/theme/monokai';

import Language from './Editor/Language';

export default class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: [],
            languages: ['C', 'C++', 'Java', 'Python'],
            isDisabled: false
        }
    }

    onChange = (value) => {

    }

    componentDidMount() {
        this.setState({
            isDisabled: true
        })
    }

	render() {
		return (
			<Fragment>
                <select>
                    {
                        this.state.languages.map(lang =>
                            <Language key={lang} lang={lang} />
                        )
                    }
                </select>

				<div style={{ position: "relative", height: "500px", width: "100%" }}>
                    <AceEditor
                        mode="python"
                        theme="monokai"
                        onChange={this.onChange}
                        name="app"
                        editorProps={{$blockScrolling: true}}
                    />
				</div>
			</Fragment>
		);
	}
}
