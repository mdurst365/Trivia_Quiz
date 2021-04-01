import "./assets/css_reset.css"
import "./assets/styles.css";
import React from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function SelectQuiz() {
    return (
        <div className="WelcomeBox space">
            <h1 className="smallHeader"><br />SELECT A QUIZ<br />&nbsp;</h1>
            <h3>
                <p className="space">
                    <Button type="submit" variant="outlined" color="primary">
                        <Link to="/randomquiz">
                            Random Quiz
                        </Link>
                    </Button>
                </p>

                <p className="space">
                    <Button type="submit" variant="outlined" color="primary">
                        <Link to="/PremadeQuiz">
                            Pre-Made Quiz
                        </Link>
                    </Button>
                </p>
            </h3>
        </div>
    )
}

export default SelectQuiz;





// import "./assets/css_reset.css"
// import "./assets/styles.css";
// import React from "react";
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// // import NativeSelect from '@material-ui/core/NativeSelect';
// import InputBase from '@material-ui/core/InputBase';

// // from materialUI
// const BootstrapInput = withStyles((theme) => ({
//     root: {
//       'label + &': {
//         marginTop: theme.spacing(3),
//       },
//     },
//     input: {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.background.paper,
//       border: '1px solid #ced4da',
//       fontSize: 16,
//       padding: '10px 26px 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//       },
//     },
//   }))(InputBase);

//   const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//       minWidth: 600,
//     },
//   }));


// function SelectQuiz () {
//     // from materialUI
//     const classes = useStyles();
//     const [category, setCategory] = React.useState('');
//     const [difficulty, setDifficulty] = React.useState('');
//     const handleChange = (event) => {
//       setCategory(event.target.value);
//     };
//     const handleChange2 = (event) => {
//         setDifficulty(event.target.value);
//       };
//     return (
//         <div className="WelcomeBox space">
//         <h1 className="smallHeader"><br />SELECT QUIZ<br />&nbsp;</h1>  
//         <br/>
//         <h3>
//        <FormControl className={classes.margin}> 
//        <p className="bold">Category:</p>
//         <InputLabel id="demo-customized-select-label"></InputLabel>
//         <Select
//           labelId="demo-customized-select-label"
//           id="demo-customized-select"
//           value={category}
//           onChange={handleChange}
//           input={<BootstrapInput />}
//         >
//           <MenuItem value="">
//             <em>Category</em>
//           </MenuItem>
//           <MenuItem value={9}>General Knowledge</MenuItem>
//           <MenuItem value={10}>Books</MenuItem>
//           <MenuItem value={11}>Film</MenuItem>
//           <MenuItem value={12}>Music</MenuItem>
//           <MenuItem value={13}>Musicals and Theater</MenuItem>
//           <MenuItem value={14}>Television</MenuItem>
//           <MenuItem value={15}>Video Games</MenuItem>
//           <MenuItem value={16}>Board Games</MenuItem>
//           <MenuItem value={17}>Science and Nature</MenuItem>
//           <MenuItem value={18}>Computer Science</MenuItem>
//           <MenuItem value={19}>Mathematics</MenuItem>
//           <MenuItem value={20}>Mythology</MenuItem>
//           <MenuItem value={21}>Sports</MenuItem>
//           <MenuItem value={22}>Geography</MenuItem>
//           <MenuItem value={23}>History</MenuItem>
//           <MenuItem value={24}>Politics</MenuItem>
//           <MenuItem value={25}>Art</MenuItem>
//           <MenuItem value={26}>Celebrities</MenuItem>
//           <MenuItem value={27}>Animals</MenuItem>
//           <MenuItem value={28}>Vehicles</MenuItem>
//           <MenuItem value={29}>Comics</MenuItem>
//           <MenuItem value={30}>Gadgets</MenuItem>
//           <MenuItem value={31}>Anime and Manga</MenuItem>
//           <MenuItem value={32}>Cartoons</MenuItem>
//         </Select>
//       </FormControl>
//         <div className="space"></div>
//          <FormControl className={classes.margin}>
//            <p className="bold">Difficulty:</p>
//         <InputLabel id="demo-customized-select-label"></InputLabel>
//         <Select
//           labelId="demo-customized-select-label"
//           id="demo-customized-select"
//           value={difficulty}
//           onChange={handleChange2}
//           input={<BootstrapInput />}
//         >
//           <MenuItem value="">
//             <em>Difficulty</em>
//           </MenuItem>
//           <MenuItem value={'easy'}>Easy</MenuItem>
//           <MenuItem value={'medium'}>Medium</MenuItem>
//           <MenuItem value={'hard'}>Hard</MenuItem>
//           </Select>
//           </FormControl>
//         <div className="space"></div>

//         <p className="space">
//             <Button type="submit" variant="outlined" color="primary">
//             <Link to="/randomquiz"> Random Quiz</Link>
//                 </Button>
//         </p>


//         <p className="space"><Button type="submit" variant="outlined" color="primary">Pre-Made Quiz</Button></p>
//         <div className="space"></div>
//         Quiz ID: <input type="text" placeholder="Quiz ID"></input>
//         </h3>
//         <div className="space"></div>
//         </div>
//     )
// }

// export default SelectQuiz;