import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Container } from 'react-bootstrap';
import FilterByInterested from './FilterByInterested'
import FilterByDates from './FilterByDates';
import FilterByPrice from './FilterByPrice';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";

function FilterTag(props) {
    let changePage = (numPage) => {
        // page[1](numPage);
    
      
        // getDataFromAPI(numPage);
    
        // props.getProductListBySearch(numPage)
        //fetch a data
        //or update a query to get data
      };
    return (
        <Container>
            <div className="filter-section">
                <FilterByInterested></FilterByInterested>
                <FilterByDates></FilterByDates>

                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                                Language
              </Button>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>Cake</MenuItem>
                                <MenuItem onClick={popupState.close}>Death</MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
                <FilterByPrice></FilterByPrice>
            </div>

            <Pagination
                currentPage={1}
                totalPages={20}
                changeCurrentPage={changePage}
                theme="square-fill"
            />


        </Container>


    );
}

export default FilterTag;