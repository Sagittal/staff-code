export {computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmarts} from "./introClause"
export {isManualAdvanceUnicode, isManualStaffUnicode} from "./isUnicode"
export {computeUnicodeWidth} from "./width"
export {computeAdvanceUnicode} from "./unicode"
export {SmartStave} from "./types"
export {collapseAdvances} from "./collapse"
export {computeSmartStaveOffUnicodeClauseAndUpdateSmarts} from "./stave"
export {computePlaceAgainstEndOfStaffAdvanceUnicodeClauseAndUpdateSmarts} from "./placeAgainstEndOfStaff"
export {computeAdvanceToEndOfInkUnicodeClauseAndUpdateSmarts, computeAdvanceToEndOfInkWidth} from "./endOfInk"
export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak,
} from "./advanceOrBreak"
export {computeSpacing} from "./spacing"
export {isSpacingCommandCode} from "./isCode"

import bravuraWidthsJson from "./bravuraWidths.json"

export {bravuraWidthsJson}