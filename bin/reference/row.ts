import {Name} from "@sagittal/general"
// tslint:disable-next-line no-reaching-imports
import {Unicode} from "../../src/translate"
import {computeSmuflCode} from "../codes"
import {computeGlyphUnicode} from "../glyphUnicode"
import {computeMnemonic} from "./mnemonic"
import {ReferenceRow} from "./types"

const computeSectionDatum = (glyphName: Name<Unicode>): ReferenceRow => {
    const unicode = computeGlyphUnicode(glyphName)
    const code = computeSmuflCode(glyphName)
    const mnemonic = computeMnemonic(glyphName)

    return [unicode, code, mnemonic]
}

export {
    computeSectionDatum,
}
