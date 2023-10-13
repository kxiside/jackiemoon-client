import React from "react"
import { useState } from "react"
import axios from "axios"

const UploadFile = () => {
    const [image, setImage] = useState()
    const [progressBar, setProgressBar] = useState(0)

    const handleFile = (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        setImage(URL.createObjectURL(file))
        formData.append('file', file)
        axios.post('url', formData, {
            header: {
                "Content-Type" : "multipart/form-data"
            },
            onUploadProgress: e => {
                setProgressBar(Math.round(100 * e.loaded) / e.total)
            }
        }).then(res => setImage(URL.createObjectURL(file)))
        .catch(err => console.log(err))
    }
    return(
        <main>
            <section>
                <input type="file" onChange={handleFile}/>
            </section>
            <br/> <br/>
            <section className="progress">
                <div 
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="porgressbar"
                aria-label="Loading..."
                aria-aria-valuenow={progressBar}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{width: `${progressBar}%`}}
                >
                </div>
                <br />
                <img src={image} className="w-75 h-75"/>
            </section>
        </main>
    )
}

export default UploadFile