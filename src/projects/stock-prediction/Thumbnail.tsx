import { css } from "@emotion/react";

export default function Thumbnail() {
  return (
    <img
      css={css`
        width: 100%;
        border-radius: 10px 10px 0px 0px;
      `}
      src="./stock-prediction.gif"
      alt="failed to load"
    />
  );
}
