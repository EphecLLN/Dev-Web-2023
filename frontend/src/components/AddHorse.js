import React, {useEffect, useState} from 'react';
import parse from 'html-react-parser'
import '../css/AddHorse.css'


const AddHorse = () => {
    const [isLoaded, setIsLoaded] = useState({
        breed: false,
        breeder: false,
        coat: false,
    })
    const [fetchData, setFetchData] = useState({
        breed: [],
        breeder: [],
        coat: [],
    })
    const [formData, setFormData] = useState({
        photo: "",
        hname: "",
        gender: "Male",
        birthdate: "",
        breed: false,
        breeder: false,
        coat: false,
        height: "",
        statut: "elev",
        comment: "",
    });

    const fetchBreeds = () => {
        fetch("http://localhost:3000/api/horse/breed")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("There has been a problem with your fetch operation")
            })
            .then(data => {
                setFetchData(prevState => ({
                    ...prevState,
                    breed: data,
                }));
                setIsLoaded(prevState => ({
                    ...prevState,
                    breed: true,
                }));
            }).catch((error) => {
            console.log('error: ' + error);
        });
    }

    const fetchBreeders = () => {
        fetch("http://localhost:3000/api/horse/breeder")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("There has been a problem with your fetch operation")
            })
            .then(data => {
                setFetchData(prevState => ({
                    ...prevState,
                    breeder: data,
                }));
                setIsLoaded(prevState => ({
                    ...prevState,
                    breeder: true,
                }));
            }).catch((error) => {
            console.log('error: ' + error);
        });
    }

    const fetchCoats = () => {
        fetch("http://localhost:3000/api/horse/coat")
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("There has been a problem with your fetch operation")
            })
            .then(data => {
                setFetchData(prevState => ({
                    ...prevState,
                    coat: data,
                }));
                setIsLoaded(prevState => ({
                    ...prevState,
                    coat: true,
                }));
            }).catch((error) => {
            console.log('error: ' + error);
        });
    }

    useEffect(() => {
        fetchBreeds()
        fetchBreeders()
        fetchCoats()
    }, [])

    const handleSubmit = (event) => {
        const formFields = event.target.elements;
        formData.photo = formFields.photo.files[0]
        formData.hname = formFields.hname.value
        formData.gender = formFields.gender.value
        formData.birthdate = new Date(formFields.birthdate.value).toISOString().slice(0, 19).replace('T', ' ')
        formData.breed = formFields.breed.value
        formData.breeder = Number(formFields.breeder.value)
        formData.coat = formFields.coat.value
        formData.height = Number(formFields.height.value)
        formData.statut = formFields.statut.value
        formData.comment = formFields.comment.value

        console.log(formData)
        let isok = false
        event.preventDefault()
        console.log(formData)
        if (verifications(formData) && isok === true) {
            //newHorse( name varchar(100),  picture varchar(100), gender varchar(100),  birthdate DATE, breed varchar(100),  height INT, status varchar(100),  comment mediumtext, breederId INT,  coat varchar(100))
            fetch(`CALL ${formData.hname},  ${formData.photo}, ${formData.gender},  ${formData.birthdate}, ${formData.breed},  ${formData.height}, ${formData.statut},  ${formData.comment}, ${formData.breeder},  ${formData.coat})`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    }
                    throw new Error("There has been a problem with the post operation")
                })
                .then(data => {

                }).catch((error) => {
                console.log('error: ' + error);
            });
        } else {
            console.log("Error")
        }
    }


    if (isLoaded.breed && isLoaded.breeder && isLoaded.coat) {
        console.log("rendering")
        return (
            <form onSubmit={handleSubmit}>
                <div className={"left"}>
                    <div className={"field"}>
                        <label htmlFor="photo">Photo: (png ou jpg)<br/></label>
                        <input id="photo" name="photo" type="file"/>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="hname">Nom: *<br></br></label>
                        <input id="hname" name="hname" type="text" required/>
                    </div>
                    <div className={"field"}>
                        <label>Sexe*:<br></br>
                            <label htmlFor="male">M</label>
                            <input id="male" name="gender" type="radio" value="Male" required/>
                            <label htmlFor="female">F</label>
                            <input id="female" name="gender" type="radio" value="Female"/>
                        </label>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="birth">Date de naissance: *<br/></label>
                        <input id="birth" name="birthdate" type="date" required/>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="comment">Besoins médicaux / Commentaire<br/></label>
                        <textarea id="comment" name="comment" rows="4" cols="50" />
                    </div>
                </div>
                <div className={"right"}>
                    <div className={"field"}>
                        <label htmlFor="breed">Race: *<br/></label>
                        <select id="breed" name="breed" required>
                            <OptionsDisplay data={fetchData} opt={"breed"}/>
                        </select>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="breeder">Eleveur:<br/></label>
                        <select id="breeder" name="breeder" >
                            <option value={"none"}>Aucun</option>
                            <OptionsDisplay data={fetchData} opt={"breeder"}/>
                        </select>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="coat">Robe: *<br/></label>
                        <select id="coat" name="coat" required>
                            <OptionsDisplay data={fetchData} opt={"coat"}/>
                        </select>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="height">Hauteur(cm): *<br/></label>
                        <input id="height" name="height" type="number" required/>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="statut">Statut: *<br/></label>
                        <select id="statut" name="statut" required value={formData.statut}>
                            <option value="elev">Élevage</option>
                            <option value="compet">Competition</option>
                            <option value="manege">Manege</option>
                            <option value="other">Autre</option>
                        </select>
                    </div>
                    <button className={"btn"} type="submit">submit</button>
                </div>
            </form>
        );
    } else {
        console.log("wow")
        return (
            <form onSubmit={handleSubmit}>
                <div className={"left"}>
                    <div className={"field"}>
                        <label htmlFor="photo">Photo: (png ou jpg)<br/></label>
                        <input id="photo" name="photo" type="file"/>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="hname">Nom: *<br></br></label>
                        <input id="hname" name="hname" type="text" required/>
                    </div>
                    <div className={"field"}>
                        <label>Sexe*:<br></br>
                            <label htmlFor="male">M</label>
                            <input id="male" name="gender" type="radio" value="Male" required/>
                            <label htmlFor="female">F</label>
                            <input id="female" name="gender" type="radio" value="Female"/>
                        </label>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="birth">Date de naissance: *<br/></label>
                        <input id="birth" name="birthdate" type="date" required/>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="comment">Besoins médicaux / Commentaire<br/></label>
                        <textarea id="comment" name="comment" rows="4" cols="50" />
                    </div>
                </div>
                <div className={"right"}>
                    <div className={"field"}>
                        <label htmlFor="breed">Race: *<br/></label>
                        <select id="breed" name="breed" required>
                            <option value={"none"}>Chargement...</option>
                        </select>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="breeder">Eleveur:<br/></label>
                        <select id="breeder" name="breeder" >
                            <option value={"none"}>Chargement...</option>
                        </select>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="coat">Robe: *<br/></label>
                        <select id="coat" name="coat" required>
                            <option value={"none"}>Chargement...</option>
                        </select>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="height">Hauteur(cm): *<br/></label>
                        <input id="height" name="height" type="number" required/>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="statut">Statut: *<br/></label>
                        <select id="statut" name="statut" required value={formData.statut}>
                            <option value="elev">Élevage</option>
                            <option value="compet">Competition</option>
                            <option value="manege">Manege</option>
                            <option value="other">Autre</option>
                        </select>
                    </div>
                    <button className={"btn"} type="submit">submit</button>
                </div>
            </form>
        );
    }
}


const FormTop = (props) => {
    return (
        <div className={"left"}>
            <div className={"field"}>
                <label htmlFor="photo">Photo:<br></br></label>
                <input id="photo" name="photo" type="file"></input>
            </div>
            <div className={"field"}>
                <label htmlFor="name">Nom: *<br></br></label>
                <input id="name" name="name" type="text" required></input>
            </div>
            <div className={"field"}>
                <label>Sexe*:<br></br>
                    <label htmlFor="male">M</label>
                    <input id="male" name="gender" type="radio" value="Male" required></input>
                    <label htmlFor="female">F</label>
                    <input id="female" name="gender" type="radio" value="Female"></input>
                </label>
            </div>
            <div className={"field"}>
                <label htmlFor="birth">Date de naissance: *<br></br></label>
                <input id="birth" name="birthdate" type="date" required></input>
            </div>
            <div className={"field"}>
                <label htmlFor="comment">Besoins médicaux / Commentaire<br></br></label>
                <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
            </div>
        </div>
    );
}

const FormBot = () => {
    return (
        <div>
            <div className={"field"}>
                <label htmlFor="height">Hauteur(cm): *<br></br></label>
                <input id="height" name="height" type="number" required></input>
            </div>
            <div className={"field"}>
                <label htmlFor="statut">Statut: *<br></br></label>
                <select id="statut" name="statut" required>
                    <option value="elev">Élevage</option>
                    <option value="compet">Competition</option>
                    <option value="manege">Manege</option>
                    <option value="other">Autre</option>
                </select>
            </div>
        </div>
    );
}

const OptionsDisplay = (props) => {
    let options = props.data[props.opt].map(coat => coat[props.opt])
    return options.map(string => parse(string))
}

function verifications(params) {
    if (params.photo !== "") { //Verif Photo
        let parts = params.photo.name.split('.');
        let fileSize = params.photo.size / 1024 / 1024; // in MiB
        if (fileSize > 8 || !["png", "jpg"].includes(parts[parts.length - 1])) {
            document.getElementById("photo").className = "wrong";
            console.log("Photo is not a png or jpg");
            return false;
        }
    } else {
        document.getElementById("photo").className = "good";
    }
    if (params.hname.length > 100 || params.hname.length < 1) { //Verif name
        document.getElementById("hname").className = "wrong";
        console.log("Name is too long or too short");
        return false;
    } else {
        document.getElementById("hname").className = "good";
    }
    if (new Date(params.birthdate) > new Date()) { //Verif Date
        document.getElementById("birth").className = "wrong";
        console.log("Date is in the future");
        return false;
    } else {
        document.getElementById("birth").className = "good";
    }
    if (params.height > 500 || params.height < 20) { //Verif height
        document.getElementById("height").className = "wrong";
        console.log("Height is too big or too small");
        return false;
    } else {
        document.getElementById("height").className = "good";
    }
    if (params.comment.length > 500000) { //Verif comment
        document.getElementById("comment").className = "wrong";
        console.log("Comment is too long");
        return false;
    } else {
        document.getElementById("comment").className = "good";
    }
    console.log("Vérifications ok")
    return true;
}


export default AddHorse;
