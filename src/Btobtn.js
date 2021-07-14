import "./my.css"

function backToTop() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', scrollFunction)
window.addEventListener('load', scrollFunction)

function scrollFunction() {
    if (window.pageYOffset > 200) {
        document.getElementById("back-to-top-btn").classList.remove("btnExit");
        document.getElementById("back-to-top-btn").classList.add("btnEntrance");
    }
    else {
        document.getElementById("back-to-top-btn").classList.remove("btnEntrance");
        document.getElementById("back-to-top-btn").classList.add("btnExit");
    }
}

function Btobtn() {
    // return <div><img onClick={backToTop} src='/back-to-top-button.png' id="back-to-top-btn" alt="back-to-top-btn" /></div>
    return <><div onClick={backToTop} id="back-to-top-btn" className="Button__Component-guqkl6-3 fidlgn BackToTop__StyledButton-qxzqb9-0 cprJtp"><div className="Button__Inner-guqkl6-1 huEnMD"><div className="Button__SecondInner-guqkl6-2 iyWYpS"><svg viewBox="0 0 24 24" className="Icon__IconComponent-xohm6-0 eMJbst"><path d="M7.997 10l3.515-3.79a.672.672 0 0 1 .89-.076l.086.075L16 10 13 10.001V18h-2v-7.999L7.997 10z"></path></svg></div></div></div></>
}

export default Btobtn