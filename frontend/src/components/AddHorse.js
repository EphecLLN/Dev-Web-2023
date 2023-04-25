import React, {Component, useEffect, useState} from 'react';
import '../css/Abonnement.css';


const AddHorse = () => {
    const [breedLoaded, setBreedLoaded] = useState(false)
    const [breederLoaded, setBreederLoaded] = useState(false)
    const [coatLoaded, setCoatLoaded] = useState(false)
    const [breeddata, setbreed] = useState([])
    const [breederdata, setbreeder] = useState([])
    const [coatdata, setcoat] = useState([])

    const fetchBreeds = () => {
        console.log("fetching breeds")
        fetch("http://localhost:3000/api/horse/breed")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBreedLoaded(true)
                setbreed(data)
            })
    }

    const fetchBreeders = () => {
        fetch("http://localhost:3000/api/horse/breeder")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBreederLoaded(true)
                setbreeder(data)
            })
    }

    const fetchCoats = () => {
        fetch("http://localhost:3000/api/horse/coat")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCoatLoaded(true)
                setcoat(data)
            })
    }

    useEffect(() => {
        fetchBreeds()
        fetchBreeders()
        fetchCoats()
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("submitting");
        console.log(event)
    }



    if (breedLoaded && breederLoaded && coatLoaded) {
        console.log("rendering")
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="photo">Photo:<br></br></label>
                    <input id="photo" name="photo" type="file"></input>

                </div>
                <div>
                    <label htmlFor="name">Nom: *<br></br></label>
                    <input id="name" name="name" type="text" required></input>

                </div>
                <div>
                    <label>Sexe*:<br></br>
                        <label htmlFor="male">M</label>
                        <input id="male" name="gender" type="radio" value="Male" required></input>
                        <label htmlFor="female">F</label>
                        <input id="female" name="gender" type="radio" value="Female"></input>
                    </label>
                </div>
                <div>
                    <label htmlFor="birth">Date de naissance: *<br></br></label>
                    <input id="birth" name="birthdate" type="date" required></input>
                </div>
                <div>
                    <label htmlFor="breed">Race: *<br></br></label>
                    <select id="breed" required></select>
                </div>
                <div>
                    <label htmlFor="breeder">Eleveur:<br></br></label>
                    <select id="breeder" name="breeder"></select>
                </div>
                <div>
                    <label htmlFor="coat">Robe: *<br></br></label>
                    <CoatsDisplay coatdata={coatdata}/>
                </div>
                <div>
                    <label htmlFor="height">Hauteur(cm): *<br></br></label>
                    <input id="height" name="height" type="number" required></input>
                </div>
                <div>
                    <label htmlFor="statut">Statut: *<br></br></label>
                    <select id="statut" name="statut" required>
                        <option value="elev">Élevage</option>
                        <option value="compet">Competition</option>
                        <option value="manege">Manege</option>
                        <option value="other">Autre</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comment">Besoins médicaux / Commentaire<br></br></label>
                    <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
                </div>
                <button type="submit">submit</button>
            </form>
        );
    } else {
        console.log("wow")
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="photo">Photo:<br></br></label>
                    <input id="photo" name="photo" type="file"></input>

                </div>
                <div>
                    <label htmlFor="name">Nom: *<br></br></label>
                    <input id="name" name="name" type="text" required></input>

                </div>
                <div>
                    <label>Sexe*:<br></br>
                        <label htmlFor="male">M</label>
                        <input id="male" name="gender" type="radio" value="Male" required></input>
                        <label htmlFor="female">F</label>
                        <input id="female" name="gender" type="radio" value="Female"></input>
                    </label>
                </div>
                <div>
                    <label htmlFor="birth">Date de naissance: *<br></br></label>
                    <input id="birth" name="birthdate" type="date" required></input>
                </div>
                <div>
                    <label htmlFor="breed">Race: *<br></br></label>
                    <select id="breed" required></select>
                </div>
                <div>
                    <label htmlFor="breeder">Eleveur:<br></br></label>
                    <select id="breeder" name="breeder"></select>
                </div>
                <div>
                    <label htmlFor="coat">Robe: *<br></br></label>
                    <select id="coat" name="coat" required></select>
                </div>
                <div>
                    <label htmlFor="height">Hauteur(cm): *<br></br></label>
                    <input id="height" name="height" type="number" required></input>
                </div>
                <div>
                    <label htmlFor="statut">Statut: *<br></br></label>
                    <select id="statut" name="statut" required>
                        <option value="elev">Élevage</option>
                        <option value="compet">Competition</option>
                        <option value="manege">Manege</option>
                        <option value="other">Autre</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="comment">Besoins médicaux / Commentaire<br></br></label>
                    <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
                </div>
                <button type="submit">submit</button>
            </form>
        );
    }
}


const CoatsDisplay = (props) => {
    //console.log(props.breeddata)
    //console.log(props.breederdata)
    console.log(props.coatdata)

    let coatOptions = props.coatdata.map(coat => coat.coat)
    console.log(coatOptions)
    return <select id="coat" name="coat" required>{coatOptions}</select>

    //const coatOptions = data.coat.map(item => item.coat).join("");
    //console.log(coatOptions)
    /*
    for (let i in data.breeds) {
        return i.breed
    }

     */
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
    if (params.photo.value !== undefined) {
        let parts = params.photo.value.split('.');
        let fileSize = params.photo.files[0].size / 1024 / 1024; // in MiB
        if (fileSize > 8 || !["png", "jpg"].includes(parts[parts.length - 1])) {
            document.getElementById("photo").style.backgroundColor = "red";
            console.log("Photo is too big or not a png or jpg");
            return false;
        }
    }
    //Verif name
    if (params.name.value.length > 50 || params.name.value.length < 3) {
        document.getElementById("name").style.backgroundColor = "red";
        console.log("Name is too long or too short");
        return false;
    } else {
        console.log("Name is ok");
    }
    //Verif height
    if (params.height.value > 350 || params.height.value < 50) {
        document.getElementById("height").style.backgroundColor = "red";
        console.log("Height is too long");
        return false;
    } else {
        console.log("Height is ok");
    }
    //Verif comment
    document.getElementById("comment").style.backgroundColor = "red";
    if (params.comment.value.length > 500) {
        console.log("Comment is too long");
        return false;
    } else {
        console.log("Comment is ok");
    }
    //Verif Date
    if (params.date.value > new Date()) {
        document.getElementById("date").style.backgroundColor = "red";
        console.log("Date is in the future");
        return false;
    } else {
        console.log("Date is ok");
    }
    return true;
}

const page = (props) => {
    return (
        <form onSubmit='return submit(this);'>
            <p>
                <label htmlFor="photo">Photo:<br></br></label>
                <input id="photo" name="photo" type="file"></input>

            </p>
            <p>
                <label htmlFor="name">Nom: *<br></br></label>
                <input id="name" name="name" type="text" required></input>

            </p>
            <p>
                <label>Sexe*:<br></br>
                    <label htmlFor="male">M</label>
                    <input id="male" name="gender" type="radio" value="Male" required></input>
                    <label htmlFor="female">F</label>
                    <input id="female" name="gender" type="radio" value="Female"></input>
                </label>
            </p>
            <p>
                <label htmlFor="birth">Date de naissance: *<br></br></label>
                <input id="birth" name="birthdate" type="date" required></input>
            </p>
            <p>
                <label htmlFor="breed">Race: *<br></br></label>
                <select id="breed" required></select>
            </p>
            <p>
                <label htmlFor="breeder">Eleveur:<br></br></label>
                <select id="breeder" name="breeder"></select>
            </p>
            <p>
                <label htmlFor="coat">Robe: *<br></br></label>
                <select id="coat" name="coat" required>
                    <coats/>
                </select>
            </p>
            <p>
                <label htmlFor="height">Hauteur(cm): *<br></br></label>
                <input id="height" name="height" type="number" required></input>
            </p>
            <p>
                <label htmlFor="statut">Statut: *<br></br></label>
                <select id="statut" name="statut" required>
                    <option value="elev">Élevage</option>
                    <option value="compet">Competition</option>
                    <option value="manege">Manege</option>
                    <option value="other">Autre</option>
                </select>
            </p>
            <p>
                <label htmlFor="comment">Besoins médicaux / Commentaire<br></br></label>
                <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
            </p>
            <button type="submit">submit</button>
        </form>
    )
}


export default AddHorse;
