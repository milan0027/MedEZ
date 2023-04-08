import React, {useEffect, useState} from 'react'
import { useDispatch } from "react-redux";
import { setOption } from "../../features/navitem/navitemSlice";
import { Button } from '@mui/material';
import { uploadFile } from '../../features/result/resultSlice';
import FolderIcon from '@mui/icons-material/Folder';

const Upload = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setOption("Upload"));
      //eslint-disable-next-line
    }, []);
    const [selectedFile, setSelectedFile] = useState();

    const handleSelectedFile = (e) => {
          setSelectedFile(e.target.files[0]);
    }
    const handleSubmit = (e) => {
        const data = new FormData()
        //console.log(selectedFile.name)
        data.append('file', selectedFile, selectedFile.name)
        dispatch(uploadFile(data))
    }
  return (
    <>
     <h2 style={{fontFamily:'consolas'}}>Upload Your Prescription</h2>
         

        <Button variant="outlined" component="label" sx={{marginRight:'15px',color:'teal'}}>
           <FolderIcon sx={{marginRight:'5px'}}/> Choose File
          <input name="image" hidden type="file" onChange={handleSelectedFile} />
        </Button>
        <Button type="submit" variant = "contained" sx={{backgroundColor:'teal'}} onClick={handleSubmit}>Submit</Button>
        <p style={{fontFamily:'consolas',fontWeight:'bold'}}>Chosen File : {selectedFile?selectedFile.name:"None"}</p>
    </>
   
  )
}

export default Upload