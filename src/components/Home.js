import React, { useState } from "react";
import styled from "styled-components";
import MuiButton from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MuiAppBar from "@material-ui/core/AppBar";
import { student_info } from "../data";
import Close from "@material-ui/icons/Close";
import AddBox from "@material-ui/icons/AddBox";
import IconButton from "@material-ui/core/IconButton";

const AppBar = styled(MuiAppBar)`
  &.MuiAppBar-colorPrimary {
    background-color: #020821;
    color: white;
  }
  padding: 1rem 2rem;

  img.logo {
    height: 32px;
    padding: 8px;
  }
`;

const Card = styled(Paper)`
  margin: 2rem;
  padding: 1rem;

  &.MuiPaper-rounded {
    border-radius: 8px;
  }
  .displaybtn {
    margin: 10rem;
    border: 1px solid #020821;
    background-color: transparent;
    color: #020821;
  }
  .displaybtn:hover {
    background-color: #020821;
    color: white;
  }
  .delete {
    margin-left: auto;
    color: #f50057;
    width: 2rem;
    height: 2rem;
  }
  .add {
    color: #020821;
    width: 2rem;
    height: 2rem;
  }
  .MuiButton-startIcon > img {
    height: 1em;
    object-fit: contain;
  }
  .MuiButton-root {
    margin: 12px;
    border-radius: 8px;
  }
`;

const InputField = styled(TextField)`

.MuiInput-root{
	margin-bottom:.5rem;	
}
.MuiInput-input{
    background-color:white;	
    border-radius:5px;
}
.MuiInput-formControl{
    padding:0.4rem 0.5rem 0 0.5rem;
    background-color:white;	
	font-size:14px;
}

	@media (max-width: 960px) {
	flex-direction: column;
	.MuiAutocomplete-root {
		width: 100%;
		margin: 12px 0;
	}
	.MuiTextField-root {
		width: 100%;
	}	
`;
const StudentGrid = styled(Grid)`
  margin: 0 auto;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  .student {
    background-color: #020821;
    color: white;
  }
  .student:hover {
    background-color: #f2433a;
  }
`;

const Home = (props) => {
  let [inputValue, setInputValue] = useState("");
  const [selecteddata, setSelectedData] = useState([]);
  const [detailsdata, setDetailsData] = useState([]);

  function addItem() {
    if (inputValue) {
      setSelectedData(selecteddata, selecteddata.push(inputValue));
      setInputValue("");
    } else alert("Kindly enter the project ID");
  }
  const deleteItem = (e) => {
    const name = e;
    setSelectedData(
      selecteddata.filter(function (item) {
        return item !== name;
      })
    );
    alert(`Student ID: ${e} has been removed from the selection!`);
  };

  const generateDetails = (e) => {
    e.preventDefault();
    student_info.map((data) => {
      return selecteddata.some(function (selecteddata) {
        return selecteddata === data.studentId
          ? setDetailsData(detailsdata, detailsdata.push(data))
          : setDetailsData(detailsdata);
      });
    });

    props.history.push({ pathname: "/details", state: detailsdata });
  };

  return (
    <>
      <AppBar position="sticky">
        <Grid container alignItems="center">
          <Typography variant="h6" className="app-title">
            Welcome to the Student Portal
          </Typography>
        </Grid>
      </AppBar>
      <form onSubmit={generateDetails}>
        <Card>
          <StudentGrid container spacing={2}>
            <StudentGrid item md={6} xs={10}>
              <InputField
                label="Student ID"
                fullWidth
                variant="standard"
                name="inputValue"
                placeholder="Enter Student IDs"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </StudentGrid>

            <StudentGrid
              alignItems="center"
              container
              item
              spacing={2}
              md={2}
              xs={2}
            >
              <IconButton aria-label="Add" onClick={addItem} className="add">
                <AddBox />
              </IconButton>
            </StudentGrid>
          </StudentGrid>

          {selecteddata.map((val) => {
            {
              return student_info.map((data) => {
                return val === data.studentId ? (
                  <>
                    <StudentGrid container md={4}>
                      <MuiButton
                        variant="filled"
                        className="student"
                        fullWidth
                        onClick={(e) => {
                          deleteItem(val);
                        }}
                      >
                        <StudentGrid item md={4}>
                          {data.studentId}
                        </StudentGrid>
                        <StudentGrid item md={7}>
                          {data.name}
                        </StudentGrid>
                        <StudentGrid item md={1} textAlign="right">
                          <Close />
                        </StudentGrid>
                      </MuiButton>
                    </StudentGrid>
                  </>
                ) : null;
              });
            }
          })}
        </Card>
        {selecteddata.length >= 1 ? (
          <StudentGrid container spacing={4}>
            <MuiButton type="submit" variant="contained" className="displaybtn">
              Display Details
            </MuiButton>
          </StudentGrid>
        ) : null}
      </form>
    </>
  );
};
export default Home;
