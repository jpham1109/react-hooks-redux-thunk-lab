
const CatList = ({catPics=[]}) => {
    const catImages = catPics.map(cat => 
        <img key={cat.id} src={cat.source_url} alt="cat"/>
        )
    return (
        <div>
            {catImages}
        </div>
    )
}

export default CatList