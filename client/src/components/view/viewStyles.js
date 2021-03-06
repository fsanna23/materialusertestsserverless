import { makeStyles } from "@material-ui/core/styles";

export const questionStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "50px",
    marginBotton: 0,
    height: "100%",
    overflow: "hidden",
  },

  wrapper: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    paddingBottom: "10px",
    width: 600,
    height: "auto",
    background: "#fbffff",
    borderRadius: "2%",
  },

  titleContainer: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: 40,
  },

  descriptionContainer: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(2),
    fontStyle: "italic",
  },

  elementContainer: {
    paddingTop: theme.spacing(2),
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginBottom: 10,
  },

  choicesContainer: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },

  grid: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },

  imagePaperContainer: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 90,
    width: 200,
    height: 200,
    display: "inline-block",
  },

  singleImageContainer: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    width: 500,
  },

  textField: {
    marginLeft: theme.spacing(-4),
    marginTop: 10,
    marginBottom: 30,
    width: 500,
  },

  linearScaleSliderContainer: {
    padding: "0px 14px",
  },

  linearScaleSliderRoot: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },

  linearScaleSliderLabel: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },

  linearScaleRadioField: {
    marginLeft: theme.spacing(0.35),
    marginRight: theme.spacing(0.35),
  },

  rankingContainer: {
    /*impostando la width del div si possono spostare gli elementi*/
    marginLeft: 25,
    marginRight: 30,
    paddingTop: 20,
  },

  rankingValues: {
    paddingTop: "20px",
  },

  dragndropItem: {
    width: 250,
    margin: 10,
  },

  dragHandleIcon: {
    left: "100%",
  },

  rankingCardContent: {
    margin: "auto",
  },

  pagesSwitchButtonContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    paddingBottom: "10px",
    width: 600,
  },

  pagesSwitchButton: {
    marginRight: "10px",
  },

  questionnaireTitleContainer: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    marginTop: theme.spacing(4),
    fontSize: 26,
  },

  labelContainer: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
    paddingTop: "30px",
  },

  imageFormat: {
    width: "100%",
    height: "100%",
  },
}));
