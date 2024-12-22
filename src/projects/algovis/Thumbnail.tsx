import { css } from "@emotion/react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import readmeContent from "./thumbnail.md";

export default function Thumbnail() {
  return (
    <img
      css={css`
        width: 100%;
        border-radius: 10px 10px 0px 0px;
      `}
      src="/algovis/algovis.gif"
      alt="failed to load"
    />
  );
}
