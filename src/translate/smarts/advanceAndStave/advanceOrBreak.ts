import {Clause, subtract, sumTexts, Word} from "@sagittal/general"
import {Code, computeUnicodeForCode, Octals, Unicode} from "../../codes"
import {smarts} from "../globals"
import {
    MEDIUM_STAVE_WIDTH,
    MEDIUM_STAVE_WIDTH_ADVANCE,
    NARROW_STAVE_WIDTH,
    NARROW_STAVE_WIDTH_ADVANCE,
    WIDE_STAVE_WIDTH,
    WIDE_STAVE_WIDTH_ADVANCE,
} from "./constants"
import {AutoStave} from "./types"
import {computeAdvanceUnicode} from "./unicode"

const NARROW_STAVE_UNICODES: Record<AutoStave, Unicode & Word> = {
    [AutoStave.LINES_1]: computeUnicodeForCode("st1lnnr" as Code & Word),
    [AutoStave.LINES_2]: computeUnicodeForCode("st2lnnr" as Code & Word),
    [AutoStave.LINES_3]: computeUnicodeForCode("st3lnnr" as Code & Word),
    [AutoStave.LINES_4]: computeUnicodeForCode("st4lnnr" as Code & Word),
    [AutoStave.LINES_5]: computeUnicodeForCode("st5lnnr" as Code & Word),
    [AutoStave.LINES_6]: computeUnicodeForCode("st6lnnr" as Code & Word),
    [AutoStave.LUTE]: computeUnicodeForCode("ltst6lnnr" as Code & Word),
    [AutoStave.PLAINCHANT]: computeUnicodeForCode("chstnr" as Code & Word),
}

const MEDIUM_STAVE_UNICODES: Record<AutoStave, Unicode & Word> = {
    [AutoStave.LINES_1]: computeUnicodeForCode("st1ln" as Code & Word),
    [AutoStave.LINES_2]: computeUnicodeForCode("st2ln" as Code & Word),
    [AutoStave.LINES_3]: computeUnicodeForCode("st3ln" as Code & Word),
    [AutoStave.LINES_4]: computeUnicodeForCode("st4ln" as Code & Word),
    [AutoStave.LINES_5]: computeUnicodeForCode("st5ln" as Code & Word),
    [AutoStave.LINES_6]: computeUnicodeForCode("st6ln" as Code & Word),
    [AutoStave.LUTE]: computeUnicodeForCode("ltst6ln" as Code & Word),
    [AutoStave.PLAINCHANT]: computeUnicodeForCode("chst" as Code & Word),
}

const WIDE_STAVE_UNICODES: Record<AutoStave, Unicode & Word> = {
    [AutoStave.LINES_1]: computeUnicodeForCode("st1lnwd" as Code & Word),
    [AutoStave.LINES_2]: computeUnicodeForCode("st2lnwd" as Code & Word),
    [AutoStave.LINES_3]: computeUnicodeForCode("st3lnwd" as Code & Word),
    [AutoStave.LINES_4]: computeUnicodeForCode("st4lnwd" as Code & Word),
    [AutoStave.LINES_5]: computeUnicodeForCode("st5lnwd" as Code & Word),
    [AutoStave.LINES_6]: computeUnicodeForCode("st6lnwd" as Code & Word),
    [AutoStave.LUTE]: computeUnicodeForCode("ltst6lnwd" as Code & Word),
    [AutoStave.PLAINCHANT]: computeUnicodeForCode("chstwd" as Code & Word),
}

const computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak = (
    width: Octals,
): Unicode & Clause => {
    let advanceUnicodeIntroClause: Unicode & Clause
    if (smarts.staveWidth >= width) {
        smarts.staveWidth = subtract(smarts.staveWidth, width)

        advanceUnicodeIntroClause = computeAdvanceUnicode(width)
    } else if (!smarts.staveOn) {
        advanceUnicodeIntroClause = computeAdvanceUnicode(width)
    } else {
        const useUpExistingStaveAdvanceUnicode: Unicode = computeAdvanceUnicode(smarts.staveWidth)
        let remainingAdvanceWidthWeStillNeedToApply: Octals = subtract(width, smarts.staveWidth)

        let staveAndAdvanceUnicode = "" as Unicode

        while (remainingAdvanceWidthWeStillNeedToApply > WIDE_STAVE_WIDTH) {
            staveAndAdvanceUnicode = sumTexts(
                staveAndAdvanceUnicode,
                WIDE_STAVE_UNICODES[smarts.stave],
                WIDE_STAVE_WIDTH_ADVANCE,
            )
            remainingAdvanceWidthWeStillNeedToApply = subtract(
                remainingAdvanceWidthWeStillNeedToApply,
                WIDE_STAVE_WIDTH,
            )
        }

        while (remainingAdvanceWidthWeStillNeedToApply > MEDIUM_STAVE_WIDTH) {
            staveAndAdvanceUnicode = sumTexts(
                staveAndAdvanceUnicode,
                MEDIUM_STAVE_UNICODES[smarts.stave],
                MEDIUM_STAVE_WIDTH_ADVANCE,
            )
            remainingAdvanceWidthWeStillNeedToApply = subtract(
                remainingAdvanceWidthWeStillNeedToApply,
                MEDIUM_STAVE_WIDTH,
            )
        }

        while (remainingAdvanceWidthWeStillNeedToApply > NARROW_STAVE_WIDTH) {
            staveAndAdvanceUnicode = sumTexts(
                staveAndAdvanceUnicode,
                NARROW_STAVE_UNICODES[smarts.stave],
                NARROW_STAVE_WIDTH_ADVANCE,
            )
            remainingAdvanceWidthWeStillNeedToApply = subtract(
                remainingAdvanceWidthWeStillNeedToApply,
                NARROW_STAVE_WIDTH,
            )
        }

        const remainingStaveAdvanceUnicode = computeAdvanceUnicode(remainingAdvanceWidthWeStillNeedToApply)

        smarts.staveWidth = subtract(NARROW_STAVE_WIDTH, remainingAdvanceWidthWeStillNeedToApply)

        advanceUnicodeIntroClause = sumTexts(
            useUpExistingStaveAdvanceUnicode,
            staveAndAdvanceUnicode,
            NARROW_STAVE_UNICODES[smarts.stave],
            remainingStaveAdvanceUnicode,
        ) as Unicode & Clause
    }

    smarts.advanceWidth = 0 as Octals

    return advanceUnicodeIntroClause
}

export {
    computeSmartAdvanceAndSmartStaveUnicodeIntroClauseAndUpdateSmartAdvanceAndSmartStaveForAdvanceOrBreak,
}
