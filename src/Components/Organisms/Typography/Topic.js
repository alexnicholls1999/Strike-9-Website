import Title from "./../../Atoms/Typography/Title";
import Paragraph from "./../../Atoms/Typography/Paragraph";

function Topic({topic, src, alt, float}) {
    return (
        <div>
            <Title title="ABOUT US" float={float}/>
            <Paragraph text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ducimus nesciunt quasi numquam facere dolorum, libero aliquid vero possimus illo." />
            <img src={src} alt={alt}/>
        </div>
    )
}

export default Topic
