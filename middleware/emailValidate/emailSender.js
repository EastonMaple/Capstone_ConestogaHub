
const nodemailer = require('nodemailer');
const ValidationCode = require('./../../models/ValidationCode');

function html_Template(userName, validateCode) {
    return `<html>

    <head>
        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
        <style type="text/css">
            ol {
                margin: 0;
                padding: 0
            }
    
            table td,
            table th {
                padding: 0
            }
    
            .c21 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #ffffff;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #ffffff;
                vertical-align: middle;
                border-right-color: #ffffff;
                border-left-width: 1pt;
                border-top-style: solid;
                background-color: #dbdbdb;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 242.2pt;
                border-top-color: #ffffff;
                border-bottom-style: solid
            }
    
            .c17 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: middle;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                background-color: #212429;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 456.8pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c20 {
                border-right-style: solid;
                padding: 5pt 5pt 5pt 5pt;
                border-bottom-color: #000000;
                border-top-width: 1pt;
                border-right-width: 1pt;
                border-left-color: #000000;
                vertical-align: top;
                border-right-color: #000000;
                border-left-width: 1pt;
                border-top-style: solid;
                background-color: #000000;
                border-left-style: solid;
                border-bottom-width: 1pt;
                width: 462.8pt;
                border-top-color: #000000;
                border-bottom-style: solid
            }
    
            .c18 {
                border-right-style: solid;
    
                border-bottom-color: #dbdbdb;
                border-top-width: 0pt;
                border-right-width: 0pt;
                border-left-color: #dbdbdb;
                vertical-align: top;
                border-right-color: #dbdbdb;
                border-left-width: 0pt;
                border-top-style: solid;
                background-color: #ffffff;
                border-left-style: solid;
                border-bottom-width: 0pt;
                width: 466.8pt;
                border-top-color: #dbdbdb;
                border-bottom-style: solid
            }
    
            .c5 {
                background-color: #ffffff;
                color: #222222;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Verdana";
                font-style: normal
            }
    
            .c11 {
                background-color: #ffffff;
                color: #222222;
                font-weight: 700;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Verdana";
                font-style: normal
            }
    
            .c22 {
                background-color: #ffffff;
                color: #ffffff;
                font-weight: 700;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Verdana";
                font-style: normal
            }
    
            .c1 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 13.5pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c2 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 11pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c14 {
                color: #dbdbdb;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 13.5pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c7 {
                color: #ffffff;
                font-weight: 700;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 21pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c12 {
                color: #000000;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 26pt;
                font-family: "Arial";
                font-style: normal;
            }
    
            .c3 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.3888888888888888;
                orphans: 2;
                widows: 2;
                text-align: left;
                height: 11pt
            }
    
            .c29 {
                color: #000000;
                font-weight: 700;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 21pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c0 {
                color: #222222;
                font-weight: 400;
                text-decoration: none;
                vertical-align: baseline;
                font-size: 1pt;
                font-family: "Arial";
                font-style: normal
            }
    
            .c25 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.3888888888888888;
                orphans: 2;
                widows: 2;
                text-align: center
            }
    
            .c8 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.2857142857142858;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            .c6 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.3888888888888888;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            .c10 {
                padding-top: 0pt;
                padding-bottom: 0pt;
                line-height: 1.15;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            .c19 {
                padding-top: 0pt;
                padding-bottom: 3pt;
                line-height: 1.0;
                page-break-after: avoid;
                text-align: center
            }
    
            .c15 {
                margin-left: auto;
                border-spacing: 0;
                border-collapse: collapse;
                margin-right: auto;
                height: 76.13px;
                margin-top: 40px;
                margin-bottom: 40px;
            }
    
            .c4 {
                border-spacing: 0;
                border-collapse: collapse;
                margin-right: auto
            }
    
            .c27 {
                background-color: #ffffff;
                max-width: 468pt;
                padding: 0pt 72pt;
            }
    
            .c28 {
                font-size: 13.5pt;
                font-style: italic;
                font-weight: 700
            }
    
            .c26 {
                color: #ffffff;
                font-size: 13.5pt
            }
    
            .c24 {
                height: 57.5pt
            }
    
            .c13 {
                height: 57.1pt
            }
    
            .c16 {
                height: 52.5pt
            }
    
            .c23 {
                height: 0pt
            }
    
            .c9 {
                height: 11pt
            }
    
            .title {
                padding-top: 0pt;
                color: #000000;
                font-size: 26pt;
                padding-bottom: 3pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
            }
    
            .subtitle {
                padding-top: 0pt;
                color: #666666;
                font-size: 15pt;
                padding-bottom: 16pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            li {
                color: #000000;
                font-size: 11pt;
                font-family: "Arial"
            }
    
            p {
                margin: 0;
                color: #000000;
                font-size: 11pt;
                font-family: "Arial"
            }
    
            h1 {
                padding-top: 20pt;
                color: #000000;
                font-size: 20pt;
                padding-bottom: 6pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h2 {
                padding-top: 18pt;
                color: #000000;
                font-size: 16pt;
                padding-bottom: 6pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h3 {
                padding-top: 16pt;
                color: #434343;
                font-size: 14pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h4 {
                padding-top: 14pt;
                color: #666666;
                font-size: 12pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h5 {
                padding-top: 12pt;
                color: #666666;
                font-size: 11pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                orphans: 2;
                widows: 2;
                text-align: left
            }
    
            h6 {
                padding-top: 12pt;
                color: #666666;
                font-size: 11pt;
                padding-bottom: 4pt;
                font-family: "Arial";
                line-height: 1.15;
                page-break-after: avoid;
                font-style: italic;
                orphans: 2;
                widows: 2;
                text-align: left
            }
        </style>
    </head>
    
    <body class="c27 doc-content">
        <!-- this ensures Gmail doesn't trim the email -->
        <span style="opacity: 0"> {{ randomness }} </span>
        <a id="t.3c9232b2d5d9ea2a259f8403ad80b64e9db35916"></a><a id="t.0"></a>
        <table class="c4">
            <tr class="c13">
                <td class="c20" colspan="1" rowspan="1">
                    <p class="c8"><span
                            style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 260.50px; height: 53.66px;">
                            <img
                            alt="" 
                            src="cid:email-logo.png"
                            style="width: 260.50px; height: 53.66px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);"
                            title="">
                                </span></p>
                </td>
            </tr>
        </table>
        <p class="c8 c9"><span class="c7"></span></p>
        <p class="c8 c9"><span class="c7"></span></p><a id="t.9c079290cefb6d0679bb13c388513f75872dcdc4"></a><a id="t.1"></a>
        <table class="c4">
            <tr class="c24">
                <td class="c18" colspan="1" rowspan="1">
                    <p class="c8"><span class="c29">Hello ${userName}</span></p>
                    <p class="c6"><span class="c1">You requested ConestogaHub send you an email to confirm your account. You
                            can use the code below to complete the process.</span></p>
                    <p class="c3"><span class="c1"></span></p>
                    <p class="c6"><span class="c28">Here is your verification code:</span></p>
                    <p class="c3"><span class="c14"></span></p><a id="t.e1daf21d8f7360bcfa7cd2beef7d2f9421fef882"></a><a
                        id="t.2"></a>
                    <table class="c15">
                        <tr class="c16">
                            <td class="c21" colspan="1" rowspan="1">
                                <p class="c19 title" id="h.mftsqlx0lxiz"><span class="c12">${validateCode}</span></p>
                            </td>
                        </tr>
                    </table>
                    <p class="c3"><span class="c14"></span></p>
                    <p class="c6"><span class="c5">If you didn&rsquo;t request an account confirmation please email us and
                            let us know.</span></p>
                    <p class="c3"><span class="c11"></span></p>
                    <p class="c3"><span class="c11"></span></p>
                    <p class="c3"><span class="c11"></span></p>
                    <p class="c6"><span class="c11">Yours in Conestoga Hub,</span></p>
                    <p class="c6"><span class="c5">The SKHY Team</span></p>
                    <a id="t.7ed1f8e171340994dcedee4d446077c505883bd9"></a><a id="t.3"></a>
                    <table class="c15">
                        <tr class="c23">
                            <td class="c17" colspan="1" rowspan="1">
                                <p class="c25"><span class="c26">Conestoga Hub is a place where you can share
                                        anything</span></p>
                            </td>
                        </tr>
                    </table>
                    <p class="c3"><span class="c11"></span></p>
                    <p class="c8 c9"><span class="c7"></span></p>
                    <p class="c8 c9"><span class="c7"></span></p>
                    <p class="c3"><span class="c0"></span></p>
                    <p class="c3"><span class="c14"></span></p>
                </td>
            </tr>
        </table>
        <p class="c9 c10"><span class="c0"></span></p>
        <p class="c10 c9"><span class="c0"></span></p>
        <p class="c10 c9"><span class="c2"></span></p>
        <!-- this ensures Gmail doesn't trim the email -->
        <span style="opacity: 0"> {{ randomness }} </span>
    </body>
    
    </html>`;
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "conestogahub@gmail.com",
        pass: "twakgqybvikawxal",
    },
});


const SENDMAIL = async (mailDetails, callback) => {
    try {
        const info = await transporter.sendMail(mailDetails)
        callback(info);
    } catch (error) {
        console.log(error);
    }
};

const randomFns=()=> { // 生成6位随机数
    let code = ""
    for(let i= 0;i<6;i++){
        code += parseInt(Math.random()*10)
    }
    return code 
}


var emailSend = (userName, destination) => {    
    let validateCode = randomFns();
    const options = {
        from: "conestogahub@gmail.com", // sender address
        to: destination, // receiver email
        subject: "[ConestogaHub] Please verify your email address", // Subject line
        html: html_Template(userName, validateCode),
        attachments: [{
            filename: 'email-logo.png',
            path: __dirname + '/../../public_files/images/email-logo.png',
            cid: 'email-logo.png' //same cid value as in the html img src
        }]
    }

    // send mail with defined transport object and mail options
    SENDMAIL(options, (info) => {
        console.log("Email sent successfully");
        console.log("MESSAGE ID: ", info.messageId);
         validate = new ValidationCode({
         createdAt:new Date(),
         userName:userName,
         email:destination,
         code:validateCode
       });
       validate.save();
    });

}
module.exports = emailSend;