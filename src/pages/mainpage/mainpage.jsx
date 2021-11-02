import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Wheel from "../../components/roulette_wheel/roulette_wheel";
import { useLocation } from "react-router";
import avatar1 from "../../images/avatar1.png";
import avatar2 from "../../images/avatar2.png";
import avatar3 from "../../images/avatar3.png";
import avatar4 from "../../images/avatar4.png";

const initialData = [
  { option: "모" },
  { option: "하" },
  { option: "지" },
  { option: "오" },
  { option: "늘" },
  { option: "은" },
];

const Mainpage = ({ authService }) => {
  const location = useLocation();
  const userId = location.state;
  const [mustSpin, setMustSpin] = useState(false);
  const [data, setData] = useState([]);
  const [test, setTest] = useState("");

  useEffect(() => {
    // console.log(localStorage.getItem("uid"));
  }, []);

  const reset = () => {
    setData([]);
  };

  const create = () => {
    data.length === 8 ? alert("stop") : setData([...data, { option: test }]);
  };
  // console.log("MAINDATA", data);
  return (
    <Wrapper>
      <Header authService={authService} userId={userId} />
      <Container>
        <TrialRoulette>
          <TrialRouletteIntro>나만의 룰렛을 만들어보세요.</TrialRouletteIntro>
          <Wheel
            mustSpin={mustSpin}
            prizeNumber={3}
            data={data.length === 0 ? initialData : data}
            backgroundColors={["#ff8f43", "#C0BC83", "#F7F2CB", "#F7FA1B"]}
            textColors={["black"]}
            outerBorderColor={"005248"}
            // outerBorderWidth={10}
            innerBorderColor={"#30261a"}
            innerBorderWidth={0}
            innerRadius={0}
            radiusLineColor={"#005248"}
            // radiusLineWidth={10}
            fontSize={33}
            textDistance={60}
          />
          <AddItem>
            <input
              onChange={(e) => setTest(e.target.value)}
              placeholder="OMOMO"
            ></input>
            <button onClick={() => create()}>추가</button>
          </AddItem>
          <Bottom>
            <button onClick={() => reset()}>다시할래</button>
            <button onClick={() => setMustSpin(true)}>돌려봐</button>
          </Bottom>
        </TrialRoulette>
        <RouletteDescription>
          <DescriptionWrapper>
            <Avatar>
              <img src={avatar1} alt="avatar1" width="100px" height="100px" />
            </Avatar>
            <DescriptionBubbleLeft>
              오늘은 모하지? <br />
              공부도 해야되고, 운동도 해야되는데... <br />
              공부는 뭘 하지? 운동은 또 뭘 하고? <br />
              나는 매번 뭐할지 고민만 하다 시간이 다 가.
            </DescriptionBubbleLeft>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <DescriptionBubbleRight>
              오늘은 모먹지? <br />
              피자? 햄버거? 치킨? 쌀국수? <br />
              메뉴 정하는 건 너무 어려워. 누가 좀 정해줬으면~
            </DescriptionBubbleRight>
            <Avatar>
              <img src={avatar2} alt="avatar2" width="100px" height="100px" />
            </Avatar>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <Avatar>
              <img src={avatar3} alt="avatar3" width="100px" height="100px" />
            </Avatar>
            <DescriptionBubbleLeft>
              이번 주말에 어디갈까? <br />
              부산? 경주? 전주? 제주도? <br />
              여행지는 왜 이리 많은지...
            </DescriptionBubbleLeft>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <DescriptionBubbleRight>
              무슨 게임하고 놀까? <br />
              동물의 숲? 심즈? 어몽어스?
              <br />
              아님 요즘 핫하다는 엑시인피니티? 선택이 어려워~
            </DescriptionBubbleRight>
            <Avatar>
              <img src={avatar4} alt="avatar4" width="100px" height="100px" />
            </Avatar>
          </DescriptionWrapper>
          <RouletteDescriptionIntro>
            선택의 기로에 놓인 당신... <br />
            오모오모가 당신의 선택을 도와드립니다. <br />
            무엇이든 적고 돌리기만 하면 OK~
          </RouletteDescriptionIntro>
        </RouletteDescription>
      </Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffc6a4;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 30px;
`;

const TrialRoulette = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 40%;
  padding-top: 10px;
  background-color: #f88f70;
  // border-radius: 20px;
`;

const TrialRouletteIntro = styled.div`
  font-family: "CookieRun-Regular";
  padding-bottom: 20px;
`;

const AddItem = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > input {
    margin-right: 10px;
    width: 100px;
    height: 30px;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  & > button {
    width: 40px;
    height: 100%;
    cursor: pointer;
    font-family: "CookieRun-Regular";
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #fdfae6;
  }
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > button {
    width: 80px;
    height: 35px;
    cursor: pointer;
    font-family: "CookieRun-Regular";
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: #fdfae6;
    margin: 0 10px 10px 0;
  }
`;

const RouletteDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 40%;
  // background-color: #f88f70;
  background-color: #bb5b3f;
  // border-radius: 20px;
`;

const RouletteDescriptionIntro = styled.div`
  color: #fdfae6;
  font-family: "CookieRun-Regular";
  padding-top: 17px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fdfae6;
  border-radius: 50%;
  margin-right: 10px;
`;
const DescriptionBubbleLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  font-size: 18px;
  font-family: "GowunDodum-Regular";
  padding-left: 7px;
  position: relative;
  width: 380px;
  height: auto;
  background-color: #fdfae6;
  border-radius: 4px;
  margin-left: 20px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-right-color: #fdfae6;
    border-left: 0;
    border-bottom: 0;
    margin-top: -10px;
    margin-left: -20px;
  }
`;

const DescriptionBubbleRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  font-size: 18px;
  font-family: "GowunDodum-Regular";
  // text-align: right;
  padding-left: 7px;
  position: relative;
  width: 380px;
  height: auto;
  background-color: #fdfae6;
  border-radius: 4px;
  margin-right: 27px;
  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-left-color: #fdfae6;
    border-right: 0;
    border-top: 0;
    margin-top: -10px;
    margin-right: -20px;
  }
`;

export default Mainpage;
