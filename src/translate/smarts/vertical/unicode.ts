import {CaseDesensitized, isNegative, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../bin"
import {smarts} from "../globals"
import {CONDITIONAL_ALIAS_ENHANCED_CASE_DESENSITIZED_CODE_MAP} from "./constants"
import {StemZone} from "./types"

const getUnicodeGivenClefAndPosition = (caseDesensitizedCode: Code & CaseDesensitized & Word): Unicode & Word => {
    const stemZone = isNegative(smarts.position) ?
        StemZone.BELOW_MIDDLE_POSITION :
        StemZone.MIDDLE_POSITION_AND_ABOVE

    return CONDITIONAL_ALIAS_ENHANCED_CASE_DESENSITIZED_CODE_MAP[stemZone][caseDesensitizedCode]
}

export {
    getUnicodeGivenClefAndPosition,
}
