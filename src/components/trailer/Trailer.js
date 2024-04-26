import { userParams } from "react-router-dom";
import { ReactPlayer } from "react-player";
import "./Trailer.css"

const Trailer = () => {

    let params = userParams();
    let key = params.ytTrailerId;

    return (
        <div className="react-player-container">
            {(key != null) ? <ReactPlayer controls="true" />}
        </div>
    )
}

export default Trailer;