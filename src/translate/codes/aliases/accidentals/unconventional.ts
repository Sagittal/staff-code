import {RecordKey} from "@sagittal/general"
import {SMuFL_MAP} from "../../smufl"
import {Codeword, Symbol} from "../../types"

// See: https://w3c.github.io/smufl/gitbook/tables/stein-zimmermann-accidentals-24-edo.html
// And: https://w3c.github.io/smufl/gitbook/tables/other-accidentals.html

const UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Codeword>, Symbol> = {
    ">": SMuFL_MAP["acqrtnshst"],
    "<": SMuFL_MAP["acnrrvfl"],
    ">#": SMuFL_MAP["acthqrtnshst"],
    "<b": SMuFL_MAP["acnrrvflanfl"],
    "+": SMuFL_MAP["acwlpl"],
    "-": SMuFL_MAP["acwlmn"],
} as Record<Codeword, Symbol>

export {
    UNCONVENTIONAL_ACCIDENTAL_ALIASES_MAP,
}
