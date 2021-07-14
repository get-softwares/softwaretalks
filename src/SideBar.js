import React from 'react'
import './Sidebar.css'

function lowopactity() {
    document.getElementById("MSG-sent").style.opacity = "0.9"
}

function hideMSG() {
    document.getElementById("MSG-sent").style.opacity = "0"
}
function hideFail() {
    document.getElementById("MSG-Fail").style.opacity = "0"
}

function sideno() {
    let my_collapse = document.getElementById("collapse");
    if (document.getElementById('fa1') != null && document.getElementById('fa2') != null && document.getElementById('fa3') != null) {
        if (document.getElementById('fa1').style.visibility === "hidden" && document.getElementById('fa2').style.visibility === "hidden" && document.getElementById('fa3').style.visibility === "hidden") {
            document.getElementById('fa1').style.visibility = 'visible';
            document.getElementById('fa2').style.visibility = 'visible';
            document.getElementById('fa3').style.visibility = 'visible';
            my_collapse.style.left = "0px";
        }
        else {
            document.getElementById('fa1').style.visibility = 'hidden';
            document.getElementById('fa2').style.visibility = 'hidden';
            document.getElementById('fa3').style.visibility = 'hidden';
            my_collapse.style.left = "-49px"
        }
    }
}

let hello = ""
let myaction = "javas" + hello + "cript:myCopy()"

let myCopyLink = document.location.href

function Sidebar() {
    let hello2 = ""
    let SendEmail2 = "javas" + hello2 + "cript:sharesend()"
    return (
        <>
            <div className="fa" id="fa" style={{ userSelect: 'none' }}>
                <div title="Share To Facebook" id="fa1" onClick={() => window.open('https://facebook.com', '_blank', 'width=800,height=650')}>
                    <div className="fa-facebook">
                        <img className="svg" style={{ position: 'relative', top: '50%' }} height="40px" width="40px" src="/media/images/facebook.svg" alt="." />
                    </div>
                </div>
                <div title="Share To Twitter" id="fa2" onClick={() => window.open('https://twitter.com/', '_blank', 'width=800,height=650')}>
                    <div className="fa-twitter">
                        <img className="svg" style={{ position: 'relative', top: '50%' }} height="40px" width="40px" src="/media/images/twitter.svg" alt="." />
                    </div>
                </div>
                <div title="Share" id="fa3" data-toggle="modal" data-target="#myModal2">
                    <div className="fa-share">
                        <img className="svg" style={{ position: 'relative', top: '50%' }} height="35px" width="25px" src="/media/images/share.svg" alt="." />
                    </div>
                </div>
                <div id="collapse" title="Do not Show" style={{ position: 'relative' }} onClick={() => sideno()}>
                    <div className="fa-toggle">
                        <img className="svg" id="img" style={{ position: 'relative', top: '50%' }} height="30px" width="14px" src="/media/images/arrow.svg" alt="." />
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal2">
                <div className="modal-dialog">
                    {/* Modal content */}
                    <div className="modal-content">
                        <div className="modal-header bg-primary" style={{ padding: '35px 50px' }}>
                            <h4 className="text-light">Website<span className="glyphicon glyphicon-lock"></span></h4>
                            <button onClick={() => lowopactity()} type="button" style={{ outline: 'none', fontSize: '30px', color: 'rgb(255, 255, 255)' }} className="close" data-dismiss="modal">
                                &times;
                            </button>
                        </div>
                        <div className="modal-body" style={{ padding: '40px 50px' }}>
                            <form action={SendEmail2} id="emailForm" className="form-inline ml-5" style={{ display: 'inline' }}>
                                <input autoComplete="off" placeholder="Enter Email" title="Enter Email Where You Would Like to Send" required id="EmailInp" type="text" className="myInput2 mr-sm-2 form-control" />
                                <button className="myInp btn btn-secondary align-items-center">Send</button>
                            </form>
                            <h3 className="myOr text-center mt-3 mb-3">Or</h3>
                            <form action={myaction} id="emailForm" className="form-inline ml-5" style={{ display: 'inline', userSelect:'none'}}>
                                <input readOnly value={myCopyLink} id="myCopy" autoComplete="off" type="text" className="myInput2 mr-sm-2 form-control" />
                                <button className="myInp btn btn-secondary align-items-center">Copy Link</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => lowopactity()} type="submit" className="btn btn-danger btn-default pull-left" data-dismiss="modal">
                                <span className="glyphicon glyphicon-remove"></span> Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => hideMSG()} id='MSG-sent' className="fixed-Email">
                <div className="bg-success MSG-Email">
                    <h5 className="text-light text-center py-3">Mail Has been sent<span onClick={() => hideMSG()} type="button" style={{ outline: 'none', fontSize: '30px', color: 'rgb(255, 255, 255)', marginRight: '20px' }} className="close close2" data-dismiss="modal">
                        &times;
                    </span></h5>
                </div>
            </div>
            <div onClick={() => hideFail()} id='MSG-Fail' className="fixed-Email">
                <div className="bg-danger MSG-Email">
                    <h5 className="text-light text-center py-3">There was a problem with us. Try again<span onClick={() => hideFail()} type="button" style={{ outline: 'none', fontSize: '30px', color: 'rgb(255, 255, 255)', marginRight: '20px' }} className="close close2" data-dismiss="modal">
                        &times;
                    </span></h5>
                </div>
            </div>
        </>)
}

export default Sidebar