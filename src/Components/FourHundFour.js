import React from 'react';

function FourHundFour() {
    return (
        <div style={{fontFamily: '"DDG_ProximaNova", "DDG_ProximaNova_UI_0", "DDG_ProximaNova_UI_1", "DDG_ProximaNova_UI_2", "DDG_ProximaNova_UI_3", "DDG_ProximaNova_UI_4", "DDG_ProximaNova_UI_5", "DDG_ProximaNova_UI_6", "Proxima Nova", "Helvetica Neue", "Helvetica", "Segoe UI", "Nimbus Sans L", "Liberation Sans", "Open Sans", FreeSans, Arial, sans-serif'}}>
            <img src="/media/images/something-lost.jpg"
                style={{position: 'relative', left: '50%', transform: 'translate(-50%)', width: '700px', boxSizing: 'border-box', maxWidth: '100%'}}
                alt="404" />
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                <h1 className="text-center" style={{fontWeight: 400, textAlign: 'center'}}>Oops, looks like the page is lost.</h1>
                <p style={{fontSize: '22px', textAlign: 'center', padding: '10px 0'}}>This is not a fault, just an
            accident that was not intentional.</p>
            </div>
        </div>
    )
}

export default FourHundFour;