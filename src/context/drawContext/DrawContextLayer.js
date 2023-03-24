import { DrawContext } from "./Contexts";

function DrawContextLayer(props) {

    return (
        <>
            <DrawContext.Provider value={}>
                {props.children}
            </DrawContext.Provider>
        </>
    )
}

export default DrawContextLayer;