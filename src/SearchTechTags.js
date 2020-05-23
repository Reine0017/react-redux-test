import React, {useState, useEffect} from 'react';
import * as contentful from 'contentful';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles, withTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const client = contentful.createClient({
    space: 'tovxzq6ixjkn',
    accessToken: '6wKfiCyPhTKLdAoDO9wg7Kk1E5tOlE7FOjG37wLicaA'
})

const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, rgb(255,185,83,0.5) 30%, rgb(46,142,199,0.3) 70%)',
        borderRadius: 8,
        width: 400,
        margin: 'auto',
        marginTop: '50px',
        "& > * + *": {
            marginTop: theme.spacing(3)
        }
    }
  }));

const getTechTagProjs = (setValues) => {
    client.getEntries({
        content_type: "techTags"
    })
    .then((response) => {
        setValues(response.items[0].fields.techTagProjs)

    })
    .catch((error) => {
        console.log("Error occured while fetching entries")
        console.log(error)
    })
}

export default function SearchTechTags() {
    const classes = useStyles();
    const [values, setValues] = useState([]);

    useEffect(() => {
        getTechTagProjs(setValues);
    },[]);

    return (
        <div className={classes.root}>
            <Autocomplete
            multiple
            id="tags-outlined"
            options={values.map(option => option.title)}
            filterSelectedOptions
            //freeSolo
            renderInput={params => (
                <TextField
                {...params}
                variant="outlined"
                label="Search Projects"
                placeholder="E.g. React"
                />
            )}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                />
                ))
            }
            />
        </div>
    );
  }