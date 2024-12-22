import { css } from "@emotion/react";
import { Divider, Typography, Dialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function ProjectTemplate(props: {
  top: number;
  left: number;
  width: number;
  horizontal: boolean;
  title: string;
  desc: JSX.Element;
  tags: JSX.Element;
  thumbNail: JSX.Element;
  setOpen: (v: boolean) => void;
}) {
  const [open, setOpen] = useState(false);
  const fontsize = 30;
  return (
    <div
      css={css`
        position: absolute;
        top: ${open ? 0 : props.top}px;
        left: ${open
          ? window.innerWidth > 1440
            ? (window.innerWidth - 1440) / 2
            : 0
          : props.left}px;
        width: ${open ? "calc(100% - 20px)" : `${props.width}px`};
        height: ${open ? "calc(100% - 20px)" : `${props.width * 0.8}px`};
        min-width: 278px;
        max-width: 1440px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: width 0.3s ease, height 0.3s ease, top 0.3s ease, left 0.3s ease;
      `}
      onClick={() => {
        if (!open) {
          props.setOpen(true);
          setOpen((v) => true);
        }
      }}
    >
      <div
        css={css`
          border-radius: 10px;
          border: 1px solid;
          width: 100%;
          height: 100%;
          background-color: var(--paper);
          z-index: ${open ? 11 : 0};
        `}
      >
        {open ? (
          <WholeLayout
            horizontal={props.horizontal}
            setOpen={(v) => {
              setOpen(v);
              props.setOpen(v);
            }}
            title={props.title}
            thumbNail={props.thumbNail}
            desc={props.desc}
            tags={props.tags}
            fontsize={fontsize}
          />
        ) : (
          <SmallLayout
            long={props.width > 400}
            fontsize={fontsize}
            title={props.title}
            longTitle={props.title}
            thumbNail={props.thumbNail}
          />
        )}
      </div>
    </div>
  );
}

function WholeLayout(props: {
  horizontal: boolean;
  setOpen: (v: boolean) => void;
  title: string;
  thumbNail: JSX.Element;
  desc: JSX.Element;
  tags: JSX.Element;
  fontsize: number;
}) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          padding: 0px 10px;
          width: calc(100% - 20px);
          height: 60px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Typography
          css={css`
            font-size: ${props.fontsize}px;
          `}
        >
          {props.title}
        </Typography>
        <CloseIcon
          onClick={() => {
            props.setOpen(false);
          }}
        />
      </div>
      <Divider />
      <div
        css={css`
          width: calc(100%);
          height: calc(100% - 60px);
        `}
      >
        {props.horizontal ? (
          <div
            css={css`
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: row;
            `}
          >
            <div
              css={css`
                width: calc(50% - 20px);
                height: calc(100% - 20px);
                overflow: auto;
                padding: 10px;
              `}
            >
              {props.thumbNail}
              <div>{props.tags}</div>
            </div>
            <Divider orientation="vertical" />
            <div
              css={css`
                width: 50%;
                height: 100%;
                overflow: auto;
              `}
            >
              {props.desc}
            </div>
          </div>
        ) : (
          <div
            css={css`
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              overflow: auto;
            `}
          >
            {props.thumbNail}
            <div>{props.tags}</div>
            <Divider />
            {props.desc}
          </div>
        )}
      </div>
    </div>
  );
}

function SmallLayout(props: {
  long: boolean;
  thumbNail: JSX.Element;
  title: string;
  longTitle: string;
  fontsize: number;
}) {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      `}
    >
      <div
        css={css`
          width: 100%;
        `}
      >
        {props.thumbNail}
      </div>
      <div
        css={css`
          width: 100$;
          padding: 0px 10px;
          min-height: 48px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        `}
      >
        <Typography
          css={css`
            font-size: ${props.fontsize}px;
          `}
        >
          {props.long ? props.longTitle : props.title}
        </Typography>
      </div>
    </div>
  );
}
