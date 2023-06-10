import ReactPlayer from "react-player/youtube";

export default function Video(props) {
    return (<ReactPlayer url={props.url} />)
}