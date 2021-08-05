import React, { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const Card = styled(Paper)`
  margin: 2rem;
  padding: 1rem;
  align-items: center;
  text-align: center;

  &.MuiPaper-rounded {
    border-radius: 8px;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  .header {
    background-color: #020821;
    color: white;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    align-items: center;
    text-align: left;
    margin-bottom: 2rem;
  }
  .studentid {
    float: right;
  }
`;
const Details = styled(Paper)`
  margin: 2rem;
  padding: 1rem;

  &.MuiPaper-rounded {
    align-items: center;
    justify-content: center;
    // background-color: #d1ff75;
    border-radius: 12px;
    border: 1px solid white;
    text-align: left;
  }
`;
const StudentGrid = styled(Grid)`
  align-items: center;
  justify-content: center;
  text-align: left;
  .qlf {
    border: 1px solid #020821;
    color: #020821;
    border-radius: 12px;
    padding: 0.5rem;
    display: flex;
    margin: 0.5rem 0;
  }
`;

// Create Document Component
const StudentDetails = (props) => {
  const [isloading, setLoading] = useState("true");
  useEffect(() => {
    setLoading("false");
  }, [setLoading]);
  return isloading ? (
    <>
      {props.location.state?.map((data) => {
        return (
          <Card>
            <div className="header">
              <Grid item md={6}>
                <Typography variant="h3">{data.name}</Typography>
              </Grid>
              <Grid md={6}>
                <Typography variant="h5" className="studentid">
                  Student Id: {data.studentId}
                </Typography>
              </Grid>
            </div>
            <Details>
              <StudentGrid container>
                <Grid item md={2}>
                  <Typography variant="h6">University</Typography>
                </Grid>
                <Grid md={4}>
                  <Typography variant="h5">
                    <b>{data.university}</b>
                  </Typography>
                </Grid>
              </StudentGrid>
              <StudentGrid container>
                <Grid item md={2}>
                  <Typography variant="h6">Qualifying Year</Typography>
                </Grid>
                <Grid md={4}>
                  <Typography variant="h5">
                    <b>{data.qualify_year}</b>
                  </Typography>
                </Grid>
              </StudentGrid>
              <StudentGrid container>
                <Grid item md={2}>
                  <Typography variant="h6">Gender</Typography>
                </Grid>
                <Grid md={4}>
                  <Typography variant="h5">
                    <b>{data.gender}</b>
                  </Typography>
                </Grid>
              </StudentGrid>
              <StudentGrid container>
                <Grid item md={2}>
                  <Typography variant="h6">Qualifications</Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant="h6">
                    {data.qualifications.map((item) => (
                      <Grid md={8} className="qlf">
                        <div>
                          <b>{item}</b>
                        </div>
                      </Grid>
                    ))}
                  </Typography>
                </Grid>
              </StudentGrid>
            </Details>
          </Card>
        );
      })}
    </>
  ) : null;
};

export default StudentDetails;
