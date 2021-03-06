import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropLeftIcon from '@material-ui/icons/ArrowLeft';
import Grid from '@material-ui/core/Grid';

// Functional component
function ToyRobot () {
 
  const [directionValue, setDirectionValue] = useState(""); 
  const [movedDirectionValue, setMovedDirectionValue] = useState("");
  const [msg,setMsg] = useState("");
  const errMsg = "Invalid Move";
  const [isMove,setIsMove] = useState(true);
  const [displayMsg,setDisplayMsg] = useState(false);
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  // Robot Movement 
  const move = (direction: string) => {
    setIsMove(false);
    switch(direction){
      case "North":{
        if(Y < 4) {
          setY(Y + 1);
          setMovedDirectionValue("North");
          setDisplayMsg(false);
        }
        else {
          setDisplayMsg(true);
        }
        break;
      }
      case "South":{
        if(Y > 0) {
          setY(Y - 1);
          setMovedDirectionValue("South");
          setDisplayMsg(false);
        }
        else {
          setDisplayMsg(true);
        }
        break;
      }
      case "East":{
        if(X < 4) {
          setX(X + 1);
          setMovedDirectionValue("East");
          setDisplayMsg(false);
        }
        else {
          setDisplayMsg(true);
        }
        break;
      }
      case "West": {
        if(X > 0) {
          setX(X - 1);
          setMovedDirectionValue("West");
          setDisplayMsg(false);
        }
        else {
          setDisplayMsg(true);
        }
        break;
      }
      default:
        setMsg(`Set robot direction first.`);
    }
    
  }

  useEffect(() => {
    if(isMove) {
      move(directionValue);
    }
    setMsg(`Moved to ${X} ${Y} ${movedDirectionValue}`);
    setDirectionValue("");
    
  },[directionValue,X,Y]);

  //Button Click handler
  const directionClick = (type: string) => {
    setDirectionValue(type);
    setIsMove(true);
  };
  
// View
  return(
    <Grid item xs={12}>
      <Grid item xs={12} style={{display:'flex'}}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Fab color="secondary" aria-label="North"  onClick={() => directionClick("North")}>
            <ArrowDropUpIcon fontSize='large' />
          </Fab>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Grid item xs={12} style={{display:'flex'}}>
        <Grid item xs={4}>
          <Fab color="secondary" aria-label="West"  onClick={() => directionClick("West")}>
            <ArrowDropLeftIcon fontSize='large' />
          </Fab>
        </Grid>
        <Grid item xs={4}>
          <Fab color="secondary" aria-label="South"  onClick={() => directionClick("South")}>
            <ArrowDropDownIcon fontSize='large' />
          </Fab>
        </Grid>
        <Grid item xs={4}>
          <Fab color="secondary" aria-label="East"  onClick={() => directionClick("East")}>
            <ArrowDropRightIcon fontSize='large' />
          </Fab>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {displayMsg && (errMsg)}
      </Grid>
      <Grid item xs={12}>
        {msg}
      </Grid>
    </Grid>
  );
}

export default ToyRobot;