import { css } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import readmeContent from "./description.md";

export default function ProjectDesc() {
  return (
    <div
      css={css`
        padding: 0px 20px;
      `}
    >
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <img
              {...props}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              alt={props.alt || "Markdown image"}
            />
          ),
          pre: ({ node, ...props }) => (
            <pre
              {...props}
              style={{
                maxWidth: "90%",
                height: "auto",
              }}
            />
          ),
        }}
        remarkPlugins={[remarkGfm]}
      >
        {readmeContent}
      </ReactMarkdown>
    </div>
  );
}
