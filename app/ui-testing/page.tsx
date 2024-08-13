import ImageContainer from "@/components/atoms/ImageContainer/ImageContainer";

const UiTesting = () => {
    return(
        <div 
            style={{
                width: '100%',
                display: 'flex',
                margin: '200px'
            }}
        >
            <div
                style={{
                    padding: '60px'
                }}
            >
                <ImageContainer 
                    imageUrl="https://i.postimg.cc/vBHvcBkH/Screenshot-2024-08-13-at-9-44-00-PM.png"
                    altText="project-image"
                />
            </div>
        </div>
    )
}
export default UiTesting;
