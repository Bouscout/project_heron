
import {type FC, useState } from "react"


// function to store email address
import { RegisterEmail, checkMailValidity, emailInputBorderColor, MailLogMessage } from "./mail_functions"

const mailMessage = {
    "en" : "Drop your mail address to not miss any new articles",
    "fr" : "Laisse ton adresse email pour ne rien rater"
}


interface Log {
    color: string;
    text: string;
}

interface Props {
    lang : "en" | "fr"
}

const MailForm :FC<Props> = ({ lang }) => {
    const [email, setEmail] = useState<string>("")
    const [log, setLog] = useState<Log>({color : "white", text : ""})

    // intro message
    const inputMessage = mailMessage[lang]


    const changeValue = (evt : React.ChangeEvent<HTMLInputElement> ) => {
        const newValue =  evt.target.value
        setEmail(newValue)
    }

    
    // email
    const isValid = checkMailValidity(email)
    const inputBorderColor = emailInputBorderColor(isValid, email)
    
    const SaveUserEmail = () => {
        if(!isValid){
            setLog({color : 'red', text : "The email is not valid"})
            return
        }

        // if email is valid
        setLog({color : "var(--ink)", text : 'loading'})

        RegisterEmail(email).then(result => {
            if (result === true){
                // if saved successfully, display the log then go to home page
                setLog({color : "lime", text : "Thank you !"})
                setTimeout(() => {
                    window.location.href = "/"
                }, 1000);
            }
            else {
                // error in the process
                setLog({text : "It seems there is an error, please try again or contact the support team", color : "var(--ink)"})
            }
        })
    }

    const EnterFunc = (evt : React.KeyboardEvent) => {
        if (evt.key === "Enter"){
            SaveUserEmail()
        }
    }

    return (
        
        <div className="input-box" style={inputBorderColor}>
            <input type="email" placeholder={inputMessage} name="email" value={email} onKeyDown={(event)=>{EnterFunc(event)}} onChange={(evt)=>changeValue(evt)}/>
            <button onClick={()=>SaveUserEmail()}>Confirm</button>

            <MailLogMessage log={log} />
        </div>            
    )
}

export default MailForm