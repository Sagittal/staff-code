import {FontName} from "@sagittal/general"
import {Section} from "../../../../../bin"
import {components} from "../globals"
import {loadGoogleFont} from "./fonts"
import {handleReferenceClick} from "./handlers"
import referenceJson from "./reference.json"
import {appendSection} from "./section"

// TODO: We need a border around the scrolling area,
//  And the scroll bar should only be as high as that area
//  (although the latter is not important, if this is difficult).

const buildReference = (): HTMLDivElement => {
    loadGoogleFont("Roboto Mono" as FontName)

    // TODO: Alright, I'll try Lucida Sans then.
    loadGoogleFont("Roboto" as FontName)

    const reference = document.createElement("div")
    reference.classList.add("sc-reference")
    components.reference = reference

    const tocTitleWrapper = document.createElement("div")
    reference.appendChild(tocTitleWrapper)

    const tocTitle = document.createElement("h3")
    tocTitle.innerHTML = "SMuFL sections"
    tocTitleWrapper.appendChild(tocTitle)

    const instructions = document.createElement("span")
    instructions.textContent = "(Click to insert code)"
    tocTitleWrapper.appendChild(instructions)

    const toc = document.createElement("ul")
    reference.appendChild(toc)
    components.toc = toc

    const sections = referenceJson as Section[]
    sections.forEach(appendSection)

    reference.addEventListener("click", handleReferenceClick)

    return reference
}

export {
    buildReference,
}
