import React, { useState } from "react"

function NewStoreForm({ onAddStore }) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        season: "",
        episode: "",
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    function handleSubmit() {
        
        const newStore = {
            name: formData.name,
            image: formData.image,
            season: formData.season,
            episode: formData.episode
        }
        fetch("http://localhost:8085/stores", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newStore)
        })
        .then((resp) => resp.json())
        .then(onAddStore)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                id="name" 
                placeholder="Store Name"
                value={formData.name}
                onChange={handleChange}
            />
            <input 
                type="text" 
                id="image" 
                placeholder="Image URL" 
                value={formData.image}
                onChange={handleChange}
            />
            <input 
                type="number" 
                id="season" 
                placeholder="Season" 
                step="1"
                value={formData.season}
                onChange={handleChange}
            />
            <input 
                type="number" 
                id="episode" 
                placeholder="Episode" 
                step="1"
                value={formData.episode}
                onChange={handleChange}
            />
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;