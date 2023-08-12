import styled from "styled-components"
import GridViewIcon from '@mui/icons-material/GridView';
import MenuIcon from '@mui/icons-material/Menu';
import { useFilterContext } from "../context/FilterContext";
import { Button } from "@mui/material";

const Sort = () => {
  const {grid_view, setGridView, setListView} = useFilterContext();

  const Wrapper = styled.section`
  .view{
    display: flex;
    gap: 1.5rem;

    .view_icon{
      /* font-size: 2rem; */
      display: block;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }

    .active{
      background-color: #000;
      color: #fff;
    }
  }
`;
  return (
    <Wrapper>
        <div className="view">
           <Button variant="outlined" className={grid_view ? "active": ""} onClick={setGridView}><GridViewIcon className="view_icon"/></Button>
            <Button variant="outlined" className={!grid_view ? "active" : ""} onClick={setListView}><MenuIcon className="view_icon"/></Button>
        </div>
    </Wrapper>
  )
}

export default Sort