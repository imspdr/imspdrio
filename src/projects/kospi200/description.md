## Description

Kospi200 종목을 대상으로 주가 정보와 거래량, MACD, 볼린저밴드, OBV, RSI, 관련 뉴스등을 함께 보여주는 프로젝트

기존의 prophet을 이용한 주가 예측 프로젝트인 stock-prediction보다 조금 더 실용적인 정보를 담으려고했고, 레이아웃 등에 신경썼다

## Points

### 1. SVG로 직접 구현한 차트

외부 라이브러리를 사용하지않고 직접 순수 svg 컴포넌트만을 이용해 차트를 구현했다.
stock-prediction에서 사용했던 함수를 기반으로, 더 많은 차트를 화면에 담을 수 있도록 구현했다.
변수간의 의존성을 확실히 분리해서 새로운 정보가 표기될때마다 적절한 위치에 차트가 표시될 수 있도록 했다.

### 2. 반응형 layout

종목 선택 AutoComplete, NewsCard, Chart 컴포넌트를 현재 화면 너비에 맞게 배치했다. 화면이 넓을때는 가로로 배치하고 화면이 좁아지면 세로로 정렬하고, 필요하다면 상대적으로 중요도가 낮은 버튼 수를 줄여서 배치했다.
