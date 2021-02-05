import React, { useRef } from "react";
// Material
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Input,
  Divider,
  Tooltip,
} from "@material-ui/core";
// Draggable
import { Draggable } from "react-beautiful-dnd";
// Icons
import DragHandleIcon from "@material-ui/icons/DragHandle";
import DeleteIcon from "@material-ui/icons/Delete";
// Style
import { newTextFieldStyle } from "../styles";
const useStyles = newTextFieldStyle;

function NewTextField(props) {
  const classes = useStyles();

  const onRemoveContent = () => {
    props.removeTextField(props.index);
  };

  return (
    <Draggable draggableId={props.id.toString()} index={props.index}>
      {(provided) => (
        <Box
          width={800}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={classes.boxCardRoot}
        >
          <Card className={classes.cardRoot} variant="outlined">
            <CardContent className={classes.cardContent}>
              <Box
                id="handleBox"
                display="flex"
                justifyContent="center"
                className={classes.dragHandle}
                {...provided.dragHandleProps}
              >
                <DragHandleIcon className={classes.dragHandleIcon} />
              </Box>
              <Input
                placeholder={props.url ? "Video title" : "Image title"}
                inputProps={{ "aria-label": "description" }}
                className={classes.imageTitle}
              />
              <img
                ref={imgRef}
                src={checkImageType()}
                alt={"img" + props.id}
                className={classes.imgContent}
              />
            </CardContent>
            <Divider variant="middle" />
            <CardActions className={classes.cardActions}>
              <Tooltip title="Delete question" placement="right">
                <IconButton
                  onClick={() => {
                    onRemoveContent();
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </CardActions>
          </Card>
        </Box>
      )}
    </Draggable>
  );
}

export default NewTextField;
