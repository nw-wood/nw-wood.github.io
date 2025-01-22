import React, { ChangeEvent, Component } from "react";
import "./MarkdownPreviewer.css";
import Markdown from "marked-react";

//import to fix line breaks
import { marked } from "marked";
marked.setOptions({
  breaks: true,
});

const defaultText: string = `# Header (H1 size)
## Subheader (H2 size)
[This is a link](https://www.example.com)

Here is some \`inline code\`.

\`\`\`
This is a code block.
\`\`\`

- List item

> This is a blockquote.

![Alt text](images/iambadatvideogames.png)

**This is bold text**
`;

interface MarkdownPreviewerState {
  markdown: string;
}

class MarkdownPreviewer extends Component<{}, MarkdownPreviewerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      markdown: "",
    };
  }

  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ markdown: event.target.value });
  };

  componentDidMount(): void {
    this.setState({ markdown: defaultText });
  }

  render = () => {
    return (
      <div className="back-drop">
        <div id="heading-bar">
          <span id="title-text">Markdown Previewer</span>
        </div>
        <div className="app-container">
          <textarea
            id="editor"
            onChange={this.handleChange}
            defaultValue={defaultText}
          />
          <div id="preview" className="markdown-body">
            <Markdown>{this.state.markdown}</Markdown>
          </div>
        </div>
        <a href="/" id="back-home">
          Home
        </a>
      </div>
    );
  };
}

export default MarkdownPreviewer;
