import { useRef } from "react";

function AddFilm(){
    const inputRef = useRef(null);

    const handleClick= () => {
        console.log(inputRef)
        inputRef.current.focus();
    }

    return (
        <form onSubmit={(e) => e.preventDefault()} action="" style={{width:400}} className="p-5" method="POST">
            <label htmlFor="name" className="form-label">Nom du film</label>
            <input ref={inputRef} type="text" name="name" id="name" placeholder="Nom du film" className="form-control" />
            <button onClick={handleClick} type="button" className="btn btn-secondary w-100 mt-3">Focus input</button>
            <button type="submit" className="btn btn-primary form-control mt-3">Ajouter</button>
        </form>
    )
}

export default AddFilm;