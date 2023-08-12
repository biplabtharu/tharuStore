import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiStarHalfFill } from "react-icons/ri";

import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="icon" />
        ) : stars >= number ? (
          <RiStarHalfFill className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <>
      <Wrapper>
        <span>{ratingStar}</span>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  /* .icon {

    font-size: 2rem;
  } */
  span{
    font-size: 2rem;
    color: #ee4c02;
  }
`;

export default Star;
