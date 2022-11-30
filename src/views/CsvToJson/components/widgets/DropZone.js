import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';
import { useDispatch } from 'react-redux';

import './DropZone.css';
import { setJsonData } from '../../../../store/convert-action';

function DropZone() {

  const dispatch = useDispatch();

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length) {
      parseFile(acceptedFiles[0]);
    }
  }, []);

  const parseFile = (file) => {
    Papa.parse(file, {
      header: true,
      complete: results => {
        dispatch(setJsonData(results.data))
      },
    });
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'text/csv',
  });

  return (
    <div className="dropzone-box">
      <div
        {...getRootProps({
          className: `dropzone 
          ${isDragAccept && 'dropzoneAccept'} 
          ${isDragReject && 'dropzoneReject'}`,
        })}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag CSV file here, or click to select files</p>
        )}
      </div>
    </div>
  );
}

export default DropZone;