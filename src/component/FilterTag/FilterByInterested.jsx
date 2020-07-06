import React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";

function FilterByInterested(props) {
  let [tag, setTag] = React.useState(null)
  async function getTag() {
    let res = await Axios.get("https://airthb-group6.herokuapp.com/tags")
    setTag(res.data.data)



  }
  React.useEffect(() => {
    getTag()

  }, [])

  function getExpByTag(id) {
    console.log(id)

  }
  
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            color="primary"
            {...bindTrigger(popupState)}
          >
            Tags
          </Button>
          <Menu {...bindMenu(popupState)}>
            {
              tag ? tag.map(elm => {
                return (
                  <MenuItem onClick={() => {
                    popupState.close();
                    getExpByTag(elm._id)
                  }}>{elm.tag}</MenuItem>
                )
              }) : ""
            }


          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default FilterByInterested;
