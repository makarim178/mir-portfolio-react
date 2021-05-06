import './contactDetails.scss';
import PhoneForwardedSharpIcon from '@material-ui/icons/PhoneForwardedSharp';
import EmailIcon from '@material-ui/icons/Email';

const ContactDetails = () => {
    return (
        <div className="contactDetails">
            <a href="mailto:makarim178@gmail.com" >
                <div className="icon">
                    <EmailIcon className="contactIcon"/> 
                </div>
                <div className="txt">
                    <span>makarim178@gmail.com</span>
                </div>
            </a>
            <a href="tel:+19055985580" >
                <div className="icon">
                    <PhoneForwardedSharpIcon className="contactIcon"/>
                </div>
                <div className="txt">
                    <span className="contactTxt">+1 (905) 598 - 5580</span>
                </div>
            </a>
        </div>
    )
}

export default ContactDetails
