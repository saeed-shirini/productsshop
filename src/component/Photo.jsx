function Photo({photo}) {
    return(
        <div className="card">
            <div className="card-img">
                <img src={photo.thumbnailUrl} alt="" />
            </div>
            <div className="card-title">
                <h3>{photo.title}</h3>
            </div>
        </div>
    )
}

export default Photo;