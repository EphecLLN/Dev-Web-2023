import React, {useEffect, useState} from 'react';
import parse from 'html-react-parser'
import '../css/AddHorse.css'


const AddHorse = () => {
    const [breedLoaded, setBreedLoaded] = useState(false)
    const [breederLoaded, setBreederLoaded] = useState(false)
    const [coatLoaded, setCoatLoaded] = useState(false)
    const [breeddata, setbreed] = useState([])
    const [breederdata, setbreeder] = useState([])
    const [coatdata, setcoat] = useState([])
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
                if(response.ok){
                    return response.json()
                }throw new Error("There has been a problem with your fetch operation")
            })
            .then(data => {
                setbreed(data)
                setBreedLoaded(true)
            }).catch((error) => {
            console.log('error: ' + error);
            });
    }

    const fetchBreeders = () => {
        fetch("http://localhost:3000/api/horse/breeder")
            .then(response => {
                if(response.ok){
                    return response.json()
                }throw new Error("There has been a problem with your fetch operation")
            })
            .then(data => {
                setbreeder(data)
                setBreederLoaded(true)
            }).catch((error) => {
            console.log('error: ' + error);
        });
    }

    const fetchCoats = () => {
        fetch("http://localhost:3000/api/horse/coat")
            .then(response => {
                if(response.ok){
                    return response.json()
                }throw new Error("There has been a problem with your fetch operation")
            })
            .then(data => {
                setcoat(data)
                setCoatLoaded(true)
            }).catch((error) => {
            console.log('error: ' + error);
        });
    }

    useEffect(() => {
        fetchBreeds()
        fetchBreeders()
        fetchCoats()
    }, [])

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        if(verifs(formData)){
            console.log("Send")
        }
    }

    if (breedLoaded && breederLoaded && coatLoaded) {
        console.log("rendering")
        return (
            <form onSubmit={handleSubmit}>
                <div className={"left"}>
                    <div className={"field"}>
                        <label htmlFor="photo">Photo:<br></br></label>
                        <input id="photo" name="photo" type="file"></input>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="hname">Nom: *<br></br></label>
                        <input id="hname" name="hname" type="text" value={formData.hname} onChange={handleInputChange} required/>
                    </div>
                    <div className={"field"}>
                        <label>Sexe*:<br></br>
                            <label htmlFor="male">M</label>
                            <input id="male" name="gender" type="radio" value="Male" checked={formData.gender === "Male"} onChange={handleInputChange} required/>
                            <label htmlFor="female">F</label>
                            <input id="female" name="gender" type="radio" value="Female" checked={formData.gender === "Female"} onChange={handleInputChange}/>
                        </label>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="birth">Date de naissance: *<br></br></label>
                        <input id="birth" name="birthdate" type="date" value={formData.birthdate} onChange={handleInputChange} required/>
                    </div>
                    <div className={"field"}>
                        <label htmlFor="comment">Besoins médicaux / Commentaire<br></br></label>
                        <textarea id="comment" name="comment" rows="4" cols="50" value={formData.comment} onChange={handleInputChange}></textarea>
                    </div>
                </div>
                <div className={"right"}>
                <div className={"field"}>
                    <label htmlFor="breed">Race: *<br></br></label>
                    <select id="breed" name="breed" value={formData.breed} onChange={handleInputChange} required>
                        <option value={false}>Non selectionnée</option>
                        <BreedDisplay breeddata={breeddata}/>
                    </select>
                </div>
                <div className={"field"}>
                    <label htmlFor="breeder">Eleveur:<br></br></label>
                    <select id="breeder" name="breeder" value={formData.breeder} onChange={handleInputChange}>
                        <option value={false}>Non sélectionné</option>
                        <BreederDisplay breederdata={breederdata}/>
                    </select>
                </div>
                <div className={"field"}>
                    <label htmlFor="coat">Robe: *<br></br></label>
                    <select id="coat" name="coat" value={formData.coat} onChange={handleInputChange} required>
                        <option value={false}>Non selectionnée</option>
                        <CoatsDisplay coatdata={coatdata}/>
                    </select>
                </div>
                    <div>
                        <div className={"field"}>
                            <label htmlFor="height">Hauteur(cm): *<br></br></label>
                            <input id="height" name="height" type="number" value={formData.height} onChange={handleInputChange} required></input>
                        </div>
                        <div className={"field"}>
                            <label htmlFor="statut">Statut: *<br></br></label>
                            <select id="statut" name="statut" required value={formData.statut} onChange={handleInputChange}>
                                <option value="elev">Élevage</option>
                                <option value="compet">Competition</option>
                                <option value="manege">Manege</option>
                                <option value="other">Autre</option>
                            </select>
                        </div>
                    </div>
                <button className={"btn"} type="submit">submit</button>
                </div>
            </form>
        );
    } else {
        console.log("wow")
        return (
            <form onSubmit={handleSubmit}>
                <FormTop/>
                <div className={"right"}>
                <div className={"field"}>
                    <label htmlFor="breed">Race: *<br></br></label>
                    <select id="breed" required><option>Chargement...</option></select>
                </div>
                <div className={"field"}>
                    <label htmlFor="breeder">Eleveur:<br></br></label>
                    <select id="breeder" name="breeder"><option>Chargement...</option></select>
                </div>
                <div className={"field"}>
                    <label htmlFor="coat">Robe: *<br></br></label>
                    <select id="coat" name="coat" required><option>Chargement...</option></select>
                </div>
                <FormBot/>
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

const CoatsDisplay = (props) => {
    let coatOptions = props.coatdata.map(coat => coat.coat)
    return coatOptions.map(string => parse(string))
}

const BreedDisplay = (props) => {
    let breedOptions = props.breeddata.map(breed => breed.breed)
    return breedOptions.map(string => parse(string))
}

const BreederDisplay = (props) => {
    let breederOptions = props.breederdata.map(breeder => breeder.breeder)
    return breederOptions.map(string => parse(string))
}

function submit(params) {
    if (verifs(params)) {
        let xhr = new XMLHttpRequest();
        xhr.open('post', "", true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        }
        xhr.send(params);
    } else {
        //Afficher à l'utilisateur que le formulaire n'est pas bon
        return false;
    }
    return false;
}

function verifs(params) {
    //Verif Photo
    if (params.photo !== "") {
        let parts = params.photo.split('.');
        let fileSize = params.photo.files[0].size / 1024 / 1024; // in MiB
        if (fileSize > 8 || !["png", "jpg"].includes(parts[parts.length - 1])) {
            document.getElementById("photo").style.backgroundColor = "red";
            console.log("Photo is too big or not a png or jpg");
            return false;
        }
    }else{
        document.getElementById("photo").style.backgroundColor = "white";
    }
    //Verif name
    if (params.hname.length > 100 || params.hname.length < 1) {
        document.getElementById("hname").style.backgroundColor = "red";
        console.log("Name is too long or too short");
        return false;
    }else{
        document.getElementById("hname").style.backgroundColor = "white";
    }
    //Verif height
    if (params.height > 500 || params.height < 20) {
        document.getElementById("height").style.backgroundColor = "red";
        console.log("Height is too big or too small");
        return false;
    }else{
        document.getElementById("height").style.backgroundColor = "white";
    }
    //Verif comment
    if (params.comment.length > 500000) {
        document.getElementById("comment").style.backgroundColor = "red";
        console.log("Comment is too long");
        return false;
    }else{
        document.getElementById("comment").style.backgroundColor = "white";
    }
    //Verif Date
    if (params.date > new Date()) {
        document.getElementById("birth").style.backgroundColor = "red";
        console.log("Date is in the future");
        return false;
    }else{
        document.getElementById("birth").style.backgroundColor = "white";
    }
    console.log("Vérifications ok")
    return true;
}


export default AddHorse;
