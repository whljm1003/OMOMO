import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "../../service/firebase";
import Wheel from "../../components/roulette_wheel/roulette_wheel";

const Roulette = ({ closeModal }) => {
  const [rouletteName, setRouletteName] = useState("");
  const [date, setDate] = useState("");
  //   const [mustSpin, setMustSpin] = useState(false);
  const [data, setData] = useState([]);
  const [test, setTest] = useState("");

  const initialData = [
    { option: "가" },
    { option: "나" },
    { option: "다" },
    { option: "라" },
    { option: "마" },
    { option: "바" },
  ];

  const reset = () => {
    setData([]);
  };

  const create = () => {
    data.length === 8 ? alert("stop") : setData([...data, { option: test }]);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    closeModal(false);
    await dbService.collection("roulettes").add({
      userId: localStorage.uid,
      rouletteName,
      optionName: data,
      date,
    });
    setRouletteName("");
    setData([]);
    setDate("");
  };

  // const onSubmit = async (event) => {
  //   const info = {
  //     userId: localStorage.uid,
  //     rouletteName,
  //     optionName: data,
  //     date,
  //   }
  //   event.preventDefault();
  //   closeModal(false);
  //   await dbService.collection("roulettes").doc(localStorage.uid).set(info)
  //   setRouletteName("");
  //   setData([]);
  //   setDate("");
  // };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setRouletteName(value);
  };

  return (
    <ModalBackground>
      <RouletteModalWrapper>
        <RouletteHeader>
          <span>Roulette</span>
          <ExitButton onClick={() => closeModal(false)}>X</ExitButton>
        </RouletteHeader>
        <RouletteModalBody>
          <LeftSection onSubmit={onSubmit}>
            <Wheel
              //   mustSpin={mustSpin}
              prizeNumber={3}
              data={data.length === 0 ? initialData : data}
              backgroundColors={["#ff8f43", "#70bbe0", "#0b3351", "#f9dd50"]}
              textColors={["black"]}
              outerBorderColor={"#eeeeee"}
              outerBorderWidth={20}
              innerBorderColor={"#30261a"}
              innerBorderWidth={0}
              innerRadius={0}
              radiusLineColor={"#eeeeee"}
              radiusLineWidth={10}
              fontSize={33}
              textDistance={60}
            />
            <AddItem>
              <input onChange={(e) => setTest(e.target.value)}></input>
              <button onClick={() => create()}>추가</button>
            </AddItem>
            <Bottom>
              <button onClick={() => reset()}>reset</button>
              {/* <button onClick={() => setMustSpin(true)}>spin</button> */}
            </Bottom>
          </LeftSection>
          <RightSection onSubmit={onSubmit}>
            <RouletteName
              value={rouletteName}
              onChange={onChange}
              type="text"
              placeholder="룰렛 네임"
            ></RouletteName>
            {/* <RouletteOption name="otion">
              <option value="">룰렛 개수</option>
              <option value="">1</option>
              <option value="학생">2</option>
              <option value="회사원">3</option>
              <option value="기타">4</option>
              <option value="기타">5</option>
              <option value="기타">6</option>
            </RouletteOption> */}
            <RouletteTime onChange={(e) => setDate(e.target.value)} type="time" placeholder="시간"></RouletteTime>
          </RightSection>
        </RouletteModalBody>
        <RoultteButton onClick={onSubmit}>저장하기</RoultteButton>
      </RouletteModalWrapper>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RouletteModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(32, 32, 32);
`;

const RouletteHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  & > span {
    font-size: 2rem;
    font-weight: 700;
    color: white;
  }
`;
const ExitButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const RouletteModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 70vh;
  margin: 5px 0;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
  height: 100%;
  border: 1px solid white;
`;
// const Wheel = styled.div`
//   width: 98%;
//   height: 98%;
//   border: 2px solid white;
//   border-radius: 50%;
// `;

// const Option = styled.input`
//   position: absolute;
//   top: 45%;
//   left: 40%;
//   width: 100px;
//   height: 30px;
// `;

const AddItem = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > input {
    margin-right: 10px;
    width: 100px;
  }
  & > button {
    width: 40px;
  }
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > button {
    width: 100px;
    height: 40px;
    margin: 0 10px 10px 0;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 1px solid white;
  //   color: white;
`;

const RouletteName = styled.input`
  width: 200px;
  height: 50px;
  font-size: 2rem;
  text-align: center;
`;
const RouletteOption = styled.select`
  width: 200px;
  height: 50px;
  font-size: 2rem;
  text-align: center;
  margin: 30px 0;
`;
const RouletteTime = styled.input`
  width: 200px;
  height: 50px;
  font-size: 1.5rem;
  text-align: center;
`;

const RoultteButton = styled.button`
  bottom: 5px;
  width: 120px;
  height: 45px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
`;

export default Roulette;
