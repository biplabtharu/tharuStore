import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';
import { Button } from '../components/Button';
// import { Button } from '@mui/material';
import { AddButton } from '../components/AddButton';

const CartAmount = ({amount, setIncrease, setDecrease}) => {

  const Wrapper = styled.section `
  padding-top: 1rem;
  .container{
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 2rem;
  }
    .container .inc_dec_icon{
        font-size: 3rem;
        cursor: pointer;
        font-weight: 700;
    }

    .container span{
      font-size: 2.5rem;
      font-weight: 500;
    }
  `;
  return (
    <Wrapper>
      <div className="container">
         <AddButton onClick={()=>setIncrease()}> <AddIcon className='inc_dec_icon'/></AddButton> <span>{amount}</span>  <AddButton onClick={()=>setDecrease()}><RemoveIcon className='inc_dec_icon' /></AddButton>
      </div>

      <Button variant="contained" size='large' style={{marginTop:"2rem", fontSize:"1.2rem"}}>Add to Cart</Button>
    </Wrapper>
  )

}

export default CartAmount