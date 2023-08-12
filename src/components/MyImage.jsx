import styled from "styled-components"
import { useState } from "react";

const MyImage = ({images = [{url : ""}]}) => {
    // console.log(images);

    const [mainImage, setMainImage] = useState(images[0]);

    const Wrapper = styled.section`    
    display: flex;
    gap: 1rem;
    align-items: center;

        .first_column_image{
            display: flex;
            flex-direction: column;
            gap: 2rem;

            img{
                width: 130px;
                cursor: pointer;
            }
        }

        .second_column_image{
            img{
                width: 330px;
            }
        }
    `;
  return (
    <Wrapper>
        <div className="first_column_image">
            {images.slice(0,4).map((curElem,index)=>{
                return(
                    <img src={curElem} key={index} onClick={()=>setMainImage(curElem)}/>
                )
            })}
        </div>

        <div className="second_column_image">
            <img src={mainImage} alt="" />
        </div>
    </Wrapper>
  )
}

export default MyImage