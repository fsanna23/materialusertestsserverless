import React, { useState, useEffect, useContext, useRef } from "react";
import { questionStyle } from "./viewStyles.js";
// Importing Material
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import RandomNamesContext from "./RandomNamesContext";

const useStyles = questionStyle;

const imagePath = "http://localhost:9000/images/";

function Image(props) {
  const classes = useStyles();
  const [image, setImage] = useState("");
  const randomNames = useContext(RandomNamesContext);

  /*  Old useEffect with http request for random image. */
  /*useEffect(() => {
    let tempGeneratedNumber = undefined;
    if (props.data.randomStatus) {
      randomNames.forEach((r) => {
        if (r.randomName === props.data.randomName) {
          tempGeneratedNumber = r.generatedNumber;
        }
      });
      if (tempGeneratedNumber === undefined) return;
      let imgPath = new URL("http://localhost:9000/getRandomImage");
      imgPath.search = new URLSearchParams({
        imageName: tempGeneratedNumber,
        folder: "question",
      });
      fetch(imgPath)
        .then((response) => response.blob())
        .then((data) => {
          setImage(URL.createObjectURL(data));
        });
    } else {
      setImage(URL.createObjectURL(props.data.img));
    }
  }, [randomNames]);*/

  /*  New useEffect with static images. */
  useEffect(() => {
    let tempGeneratedNumber = undefined;
    if (props.data.randomStatus) {
      randomNames.forEach((r) => {
        if (r.randomName === props.data.randomName) {
          tempGeneratedNumber = r.generatedNumber;
        }
      });
      if (tempGeneratedNumber === undefined) return;
      let imgPath = new URL("http://localhost:9000/newGetRandomImage");
      imgPath.search = new URLSearchParams({
        imageName: tempGeneratedNumber,
      });
      fetch(imgPath)
        .then((response) => response.json())
        .then((data) => {
          setImage(imagePath + data.image);
        });
    } else {
      setImage(URL.createObjectURL(props.data.img));
    }
    //}
  }, [randomNames]);

  return (
    <div>
      <Typography component={"span"} color="textPrimary" align="center">
        <Grid>
          <Paper
            variant="outlined"
            width={400}
            component="div"
            className={classes.wrapper}
          >
            {props.data.title && (
              <Box align="left" className={classes.titleContainer}>
                {props.data.title}
              </Box>
            )}
            <div className={classes.singleImageContainer}>
              <img
                src={image}
                width="200px"
                height="200px"
                alt="Random image"
              />
            </div>
          </Paper>
        </Grid>
      </Typography>
    </div>
  );
}

export default Image;
