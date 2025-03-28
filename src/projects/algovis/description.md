## Description

알고리즘, 코딩테스트, 게임의 상호작용 등 각종 연산 과정을 시각화하는 프로젝트

정렬 알고리즘이나 백트래킹 알고리즘, 혹은 코딩 테스트에서 요구하는 알고리즘 등의 작동 방식을 svg 컴포넌트 혹은 div 컴포넌트의 조합으로 애니메이션화했다.

svg 컴포넌트와 requestAnimationFrame을 이용하여 웹게임도 구현해보았다.

## Points

### 1. layout

새로운 문제에 대한 시각화 화면을 구현하기 쉽도록 전반적인 레이아웃을 재사용가능한 컴포넌트로 작성하였다. 공통적으로 필요한 재생, 정지, 초기화, 목록으로 돌아가기 등의 버튼을 하단 영역에 배치하였다. 좌측에는 알고리즘을 설명하는 부분과 알고리즘에 입력할 변수를 조절하는 부분을 각각 탭으로 전환할 수 있도록 구현했다. 우측에는 시각화화면이 배치되며, 시각화 부분과 좌측 탭을 나누는 지점을 드래그하여 조절할 수 있도록 구현했다. 또한 반응형 레이아웃을 구현하여, 충분히 적은 너비에서는 탭과 시각화화면 중 하나의 화면만 보여지며, 하단에 생긴 화면 전환 버튼을 이용해 전환할 수 있도록 구현했다.

### 2. rendering method

div를 기반으로한 컴포넌트를 이용해 시각화를 할 경우 애니메이션 성능에 한계가 있음을 깨닫고 svg를 이용한 애니메이션을 구현하여 성능을 개선할 수 있었다.

### 3. animation method

알고리즘 중간 중간에 비동기 함수를 넣어 의도적으로 화면이 리렌더링되도록하는 방법, interval을 이용해 몇 ms에 한 번씩 화면이 전환되도록하는 방법, requestAnimationFrame을 이용해 화면이 리렌더링될 때 연산을 진행하도록 하는 방법 등 다양한 애니메이션 구현 방법을 적용해보았다.
