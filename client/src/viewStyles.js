import { BottomNavigation } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
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

	    marginLeft: 'auto',
     	marginRight: 'auto',
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
	marginBottom: 10,
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
	display: "inline-block"
},

rankingElement: {

	marginBottom: 30,
},

singleImageContainer: {

	display: 'flex',
	marginLeft: theme.spacing(4),
	marginRight: theme.spacing(4),
	alignItems: 'center',
	justifyContent: 'center',
	width: 500,
	height: 400,
},

textField: {

	marginLeft: theme.spacing(-4),
	marginBottom: 30,
	width: 500,
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

	marginLeft: 'auto',
 	marginRight: 'auto',
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
	paddingTop: '30px',
	marginBottom: 30,
},

imageFormat: {

	width: "100%",
	height: "100%",
},

spacer: {

	marginBottom: 30,
}


}));