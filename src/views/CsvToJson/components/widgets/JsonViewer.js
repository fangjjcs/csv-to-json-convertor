import React, { useState } from 'react'
import ReactJson from 'react-json-view'
import { useDispatch, useSelector } from 'react-redux';
import { RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';


import './JsonViewer.css';
import FormInput from '../form/FormInput';
import useWindowSize from '../../../../shared/hook/useWindowSize';
import { setColumnName } from '../../../../store/convert-action';

const JsonViewer = () => {

    const dispatch = useDispatch();
    const windowSize = useWindowSize(0,150);
    const jsonData = useSelector( state => state.convert.jsonData);

    const  [displayDataTypes, setDisplayDataTypes] = useState(false);
    const  [collapsed, setCollapsed] = useState(false);
    const  [camelCaseCols, setCamelCaseCols] = useState(false);


    const handleDisplayTypeChange = (event) => {
        setDisplayDataTypes(event.target.value === 'true')
    }

    const handleCollapsedChange = (event) => {
        setCollapsed(event.target.value === 'true')
    }

    const handleCamelCaseChange = (event) => {
        setCamelCaseCols(event.target.value === 'true')
        if(event.target.value === 'true') {
            dispatch(setColumnName('camelCase'))
        } else {
            dispatch(setColumnName('origin'))
        }
    }

    const downloadJson = () => {
        const element = document.createElement("a");
        const textFile = new Blob([JSON.stringify(jsonData)], {type: 'text/plain'}); 
        element.href = URL.createObjectURL(textFile);
        element.download = "data.json";
        document.body.appendChild(element); 
        element.click();
    }

    return (
        <div className='jsonviewer-box'>
            <div className='viewer' style={{height: windowSize.height}}>
                <ReactJson src={jsonData} displayDataTypes={displayDataTypes} collapsed={collapsed} name={false}/>
            </div>
            <div className='viewer-control-panel' style={{height: windowSize.height}}>
                <FormInput formClass="form" label="Display Type">
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={displayDataTypes}
                        onChange={handleDisplayTypeChange}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="true" />
                        <FormControlLabel value={false} control={<Radio />} label="false" />
                    </RadioGroup>
                </FormInput>
                <FormInput formClass="form" label="Collapse">
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={collapsed}
                        onChange={handleCollapsedChange}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="true" />
                        <FormControlLabel value={false} control={<Radio />} label="false" />
                    </RadioGroup>
                </FormInput>
                <FormInput formClass="form" label="Use camelCase Cols">
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={camelCaseCols}
                        onChange={handleCamelCaseChange}
                    >
                        <FormControlLabel value={true} control={<Radio />} label="true" />
                        <FormControlLabel value={false} control={<Radio />} label="false" />
                    </RadioGroup>
                </FormInput>
                <Button onClick={downloadJson} size="small" variant='contained'>Download Json</Button>
            </div>
        </div>
    )
}

export default JsonViewer