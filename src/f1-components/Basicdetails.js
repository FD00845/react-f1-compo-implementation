import React from 'react'
import DynamicForm from "f1-dynamic-form-react";  


export const Basicdetails = () => {
    let dyFormRef = React.createRef();
    
      const onChangeHandler = (event, key) =>{
        console.log("On change triggered!!!!!!!", event, key);
      }
    
    const onAutocompleteSelect = (key, value, item) =>{
        console.log("Autocompleted Selected", key, value, item);
      }
     
      const removeFile = (e, file, index) =>{
        dyFormRef.removeFile(e, file, index);
        }
      const renderUploadedFilesItem = (file, index, key) =>{
        return (
          <li style={{borderColor:'#ccc'}} key={index}>
            <span className="file-name">{file.name}</span>
            <span className="action" onClick={(e)=>removeFile(e, file, index, key)}>
              <i className="fa fa-trash"></i>
              <button className="btn btn-primary">Upload</button>
            </span>
          </li>
        );
     }

      const autoCompleteItems = {
      country:[
              { id: 'IN', label: 'India' },
              { id: 'PAK', label: 'Pakistan' },
              { id: 'EN', label: 'England' },
              { id: 'US', label: 'United States' }
            ]
      }

      const NormalFormJson= require('../json/basicdetails.json');

      function onSubmit(model)
      {
          if(model.isValidForm){
              console.log(model);
              alert("submitted!");
          //   if(model.ConfirmPassword===model.Password){           
          //     }else{
          //      alert("Password and confirm password must be same!");
          //     }
           }
        }

  return (
    <div> 
    <DynamicForm
        buttonSubmit="Submit"
        key={1}
        className="form"
        title="Basic Details"
        model={NormalFormJson}
        onSubmit={(model) => {
        onSubmit(model);
        }}
        onChange={onChangeHandler}
        onAutocompleteSelect={onAutocompleteSelect}
        renderUploadedFilesItem={renderUploadedFilesItem}
        onRef={ref => dyFormRef=ref}
        autoCompleteItems={autoCompleteItems}
    />
    </div>
  )
}
