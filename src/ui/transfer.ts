import {Io, Sentence} from "@sagittal/general"
import {computeInputSentenceUnicode} from "../translate"
import {StaffCodeOptions} from "./types"

const transferInputToDisplay = (root: HTMLSpanElement, {callback}: StaffCodeOptions): void => {
    const input = root.querySelector(".input") as HTMLTextAreaElement
    const display = root.querySelector(".display") as HTMLElement

    const inputSentence = input.value as Io & Sentence

    const unicodeSentence = computeInputSentenceUnicode(inputSentence)

    display.textContent = unicodeSentence

    if (callback) callback(inputSentence, unicodeSentence)
}

export {
    transferInputToDisplay,
}
