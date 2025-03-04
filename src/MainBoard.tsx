import { css } from "@emotion/react";
import { useState, useEffect } from "react";

import ProjectTemplate from "./common/ProjectTemplate";
import AlgoDesc from "./projects/algovis/ProjectDesc";
import AlgoThumb from "./projects/algovis/Thumbnail";
import AlgoTags from "./projects/algovis/ProjectTags";

import StockDesc from "./projects/stock-prediction/ProjectDesc";
import StockThumb from "./projects/stock-prediction/Thumbnail";
import StockTags from "./projects/stock-prediction/ProjectTags";

import CreditDesc from "./projects/credit-fraud/ProjectDesc";
import CreditThumb from "./projects/credit-fraud/Thumbnail";
import CreditTags from "./projects/credit-fraud/ProjectTags";

import RainDesc from "./projects/rain-forecast/ProjectDesc";
import RainThumb from "./projects/rain-forecast/Thumbnail";
import RainTags from "./projects/rain-forecast/ProjectTags";

import MovieDesc from "./projects/movie-rec/ProjectDesc";
import MovieThumb from "./projects/movie-rec/Thumbnail";
import MovieTags from "./projects/movie-rec/ProjectTags";

import RecruitDesc from "./projects/recruit/ProjectDesc";
import RecruitThumb from "./projects/recruit/Thumbnail";
import RecruitTags from "./projects/recruit/ProjectTags";

const cards = [
  {
    title: "recruit",
    desc: <RecruitDesc />,
    tags: <RecruitTags />,
    thumbnail: <RecruitThumb />,
  },
  {
    title: "stock-prediction",
    desc: <StockDesc />,
    tags: <StockTags />,
    thumbnail: <StockThumb />,
  },
  {
    title: "movie-rec",
    desc: <MovieDesc />,
    tags: <MovieTags />,
    thumbnail: <MovieThumb />,
  },
  {
    title: "algovis",
    desc: <AlgoDesc />,
    tags: <AlgoTags />,
    thumbnail: <AlgoThumb />,
  },
  {
    title: "credit-card-fraud-detection",
    desc: <CreditDesc />,
    tags: <CreditTags />,
    thumbnail: <CreditThumb />,
  },
  {
    title: "rain-forecast-mlops",
    desc: <RainDesc />,
    tags: <RainTags />,
    thumbnail: <RainThumb />,
  },
];

export default function MainBoard() {
  const [width, setWidth] = useState(window.innerWidth);
  const [selected, setSelected] = useState(-1);
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
            horizontal={width > 800}
            top={Math.floor(index / nGrid) * (cardWidth * 0.8 + gap / 2)}
            left={width / 2 + ((index % nGrid) - nGrid / 2) * (cardWidth + gap / 2)}
            width={cardWidth}
            title={card.title}
            desc={card.desc}
            thumbNail={card.thumbnail}
            tags={card.tags}
            open={selected === index}
            draw={selected === -1}
            onOpen={() => setSelected(index)}
            onClose={() => setSelected(-1)}
          />
        );
      })}
    </div>
  );
}
