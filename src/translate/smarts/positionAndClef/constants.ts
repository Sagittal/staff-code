import {Count, RecordKey, Word} from "@sagittal/general"
import {
    BASS_CONDITIONAL_POSITION_ALIASES_MAP,
    BELOW_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
    CASE_DESENSITIZED_CODE_MAP,
    CaseDesensitized,
    Code,
    computeUnicodeForCode,
    GENERIC_POSITION_ALIASES_MAP,
    mergeAllCodeMapsIntoCaseDesensitizedCodeMap,
    MIDDLE_POSITION_AND_ABOVE_CONDITIONAL_NOTE_ALIASES_MAP,
    TREBLE_CONDITIONAL_POSITION_ALIASES_MAP,
    Unicode,
} from "../../codes"
import {Clef, Position, StemZone} from "./types"

const TREBLE_UNICODE = computeUnicodeForCode("Gcl" as Code & Word)
const BASS_UNICODE = computeUnicodeForCode("Fcl" as Code & Word)

const CONDITIONAL_ALIAS_ENHANCED_CASE_DESENSITIZED_CODE_MAP:
    Record<Clef, Record<StemZone, Record<RecordKey<Code & CaseDesensitized & Word>, Unicode & Word>>> = {
    [Clef.TREBLE]: {
        [StemZone.MIDDLE_POSITION_AND_ABOVE]: mergeAllCodeMapsIntoCaseDesensitizedCodeMap(
            CASE_DESENSITIZED_CODE_MAP,
            TREBLE_CONDITIONAL_POSITION_ALIASES_MAP,
            MIDDLE_POSITION_AND_ABOVE_CONDITIONAL_NOTE_ALIASES_MAP,
        ),
        [StemZone.BELOW_MIDDLE_POSITION]: mergeAllCodeMapsIntoCaseDesensitizedCodeMap(
            CASE_DESENSITIZED_CODE_MAP,
            TREBLE_CONDITIONAL_POSITION_ALIASES_MAP,
            BELOW_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
        ),
    },
    [Clef.BASS]: {
        [StemZone.MIDDLE_POSITION_AND_ABOVE]: mergeAllCodeMapsIntoCaseDesensitizedCodeMap(
            CASE_DESENSITIZED_CODE_MAP,
            BASS_CONDITIONAL_POSITION_ALIASES_MAP,
            MIDDLE_POSITION_AND_ABOVE_CONDITIONAL_NOTE_ALIASES_MAP,
        ),
        [StemZone.BELOW_MIDDLE_POSITION]: mergeAllCodeMapsIntoCaseDesensitizedCodeMap(
            CASE_DESENSITIZED_CODE_MAP,
            BASS_CONDITIONAL_POSITION_ALIASES_MAP,
            BELOW_MIDDLE_POSITION_CONDITIONAL_NOTE_ALIASES_MAP,
        ),
    },
}

const POSITION_UNICODES = Object.values(GENERIC_POSITION_ALIASES_MAP)

const MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE = 15 as Count<Position>

export {
    TREBLE_UNICODE,
    BASS_UNICODE,
    CONDITIONAL_ALIAS_ENHANCED_CASE_DESENSITIZED_CODE_MAP,
    POSITION_UNICODES,
    MAX_POSITIONS_AWAY_FROM_MIDDLE_STAVE_LINE,
}
