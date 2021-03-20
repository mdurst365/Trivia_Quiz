import React from "react"


function Footer() {
    return (
        <div className="Footer">
            <div className="footer-copyright text-center py-3">

                &copy; {new Date().getFullYear()} Copyright: <a href="#"> TRIVIA QUIZ </a>

            </div>

        </div>
    )
}

export default Footer