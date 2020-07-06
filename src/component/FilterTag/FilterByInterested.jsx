import React from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Axios from "axios";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function FilterByInterested(props) {
  const [state, setState] = React.useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: !event.target.checked });
  };

  let [tagList, setTagList] = React.useState(null);
  async function getTag() {
    let res = await Axios.get("https://airthb-group6.herokuapp.com/tags");
    setTagList(res.data.data);
    let test = { ...res.data.data };
    for (const smallObj in test) {
      test[smallObj].checked = false;
    }
    setState(test);
  }
  React.useEffect(() => {
    getTag();
  }, []);

  function getExpByTag(id) {
    console.log(id);
  }
  if(state)
  {
    // console.log(state["0"]["checked"]);
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
            {tagList && state
              ? tagList.map((elm, index) => {
                  return (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={index}
                          onChange={handleChange}
                          name={elm.tag}
                          color="primary"
                        />
                      }
                      label={elm.tag}
                    />
                    // <MenuItem onClick={() => {
                    //   popupState.close();
                    //   getExpByTag(elm._id)
                    // }}>{elm.tag}</MenuItem>
                  );
                })
              : ""}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default FilterByInterested;
