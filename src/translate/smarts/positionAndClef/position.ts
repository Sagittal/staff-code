import {Word} from "@sagittal/general"
import {Unicode} from "../../codes"
import {smarts} from "../globals"
import {isPositionUnicode} from "./isUnicode"

const updateSmartPosition = (unicode: Unicode & Word): void => {
    if (isPositionUnicode(unicode)) smarts.positionUnicode = unicode
}

export {
    updateSmartPosition,
}
