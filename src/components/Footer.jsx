import React from 'react'

function Footer() {
    return (
        <div id="foot" class="main">
        <div className="footer">
            <ul>
                <li><p>Follow Me</p></li>
                <li><a href="https://www.linkedin.com/in/rehanansari123profile" id="flist"><i class="fa fa-linkedin-square" aria-hidden="true"></i>Linkedin</a></li>
                <li><a id="flist"><i class="fa fa-github" aria-hidden="true"></i>Github</a></li>
                <li><a id="flist"><i class="fa fa-facebook-official" aria-hidden="true"></i>Facebook</a></li>
                <li><a id="flist"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a></li>
                <li><a id="flist"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a></li>
            </ul>
            <div class="cont">
            <h3>Get in touch</h3>
            <div className="side">
            <ul className="glist">
            <li><a id="flist"><i class="fa fa-envelope" aria-hidden="true"></i>My EmailId :- ra780064@gmail.com</a></li>
            <li><a id="flist"><i class="fa fa-whatsapp" aria-hidden="true"></i>WhatsApp :- 9702720965</a></li>
            <li><a id="flist"><i class="fa fa-mobile" aria-hidden="true"></i>Contact No :- 8369176698</a></li>
            </ul>
            </div>
            </div>
        </div>
        <div className="copyright">
            <h6>&copy; 2021 Copyright Rehan Ansari</h6>
        </div>
    </div>
    )
}

export default Footer
