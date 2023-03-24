import { DrawContext } from "./Contexts";

const drawInitials = {
    mock: null
}

function DrawContextLayer(props) {

    return (
        <>
            <DrawContext.Provider value={drawInitials}>
                {props.children}
            </DrawContext.Provider>
        </>
    )
}

export default DrawContextLayer;