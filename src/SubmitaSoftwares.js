import React from 'react'

function preview(imgId) {
    if (window.matchMedia("(min-width: 767px)").matches) {
        return (<><button className="btn btn-secondary" style={{position:'fixed', left:'05px',bottom:'05px', zIndex:'1000', padding:'4px', borderRadius:'0', fontSize:'5px'}}>Add a Softwares</button></>)
    } else {
    }
}

function SubmitaSofwares(){
    return (<>{preview()}</>)
}

export default SubmitaSofwares