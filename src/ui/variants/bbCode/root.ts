import {DeepPartial, Em, FontName, Io, Maybe, Multiplier, Sentence} from "@sagittal/general"
import {DEFAULT_INITIAL_LINE, DEFAULT_INITIAL_SIZE} from "../../constants"
import {buildDisplay} from "../../display"
import {DEFAULT_FONT} from "../../fonts"
import {transferInputToDisplay} from "../../transfer"
import {StaffCodeCallback, StaffCodeOptions} from "../../types"

const setupBBCodeRoot = (root: HTMLSpanElement, options: DeepPartial<StaffCodeOptions> = {}): void => {
    const {
        ui: {
            inline = false,
        } = {},
        initial: {
            codes: initialCodes,
            size: initialSize = DEFAULT_INITIAL_SIZE,
            line: initialLine = DEFAULT_INITIAL_LINE,
        } = {},
        font = DEFAULT_FONT,
        callback,
    } = options

    if (root.classList.contains("processed")) return
    root.classList.add("processed")

    const input: HTMLTextAreaElement = root.querySelector(".input") as HTMLTextAreaElement
    if (initialCodes) input.value = initialCodes as Io & Sentence

    const display = buildDisplay({
        font: font as FontName,
        // TODO: CLEAN, READY TO GO: FIX DEEP PARTIAL TYPE
        //  This DeepPartial didn't really work well, forcing me to redeclare all these types.
        //  It needs to somehow understand how to stop at leaf nodes.
        initialLine: initialLine as Multiplier<Em>,
        initialSize: initialSize as Multiplier<Em>,
        inline,
    })
    root.appendChild(display)

    transferInputToDisplay(root, callback as Maybe<StaffCodeCallback>)
}

export {
    setupBBCodeRoot,
}
