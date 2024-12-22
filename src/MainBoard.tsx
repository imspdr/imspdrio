import { css } from "@emotion/react";
import { useState, useEffect } from "react";

import ProjectTemplate from "./common/ProjectTemplate";
import AlgoDesc from "./projects/algovis/ProjectDesc";
import AlgoThumb from "./projects/algovis/Thumbnail";
import AlgoTags from "./projects/algovis/ProjectTags";

import StockDesc from "./projects/stock-prediction/ProjectDesc";
import StockThumb from "./projects/stock-prediction/Thumbnail";
import StockTags from "./projects/stock-prediction/ProjectTags";

const cards = [
  {
    title: "Algovis",
    desc: <AlgoDesc />,
    tags: <AlgoTags />,
    thumbnail: <AlgoThumb />,
  },
  {
    title: "Stock-prediction",
    desc: <StockDesc />,
    tags: <StockTags />,
    thumbnail: <StockThumb />,
  },
];

export default function MainBoard() {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const resize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    addEventListener("resize", resize);
    return () => {
      removeEventListener("resize", resize);
    };
  }, []);

  const nGrid = width > 1000 ? 3 : width > 600 ? 2 : 1;
  const gap = Math.max(20, width / nGrid / 8);
  const cardWidth = Math.min(500, width / nGrid - gap);
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        height: 100%;
        overflow: "auto";
      `}
    >
      {cards.map((card, index) => {
        return (
          <ProjectTemplate
            setOpen={setOpen}
            horizontal={width > 800}
            top={Math.floor(index / nGrid) * (cardWidth * 0.8 + gap)}
            left={width / 2 + ((index % nGrid) - nGrid / 2) * (cardWidth + gap / 2)}
            width={cardWidth}
            title={card.title}
            desc={card.desc}
            thumbNail={card.thumbnail}
            tags={card.tags}
          />
        );
      })}
    </div>
  );
}
