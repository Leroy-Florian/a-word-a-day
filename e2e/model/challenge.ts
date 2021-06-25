import {t} from "testcafe";
import {e2eSelector} from "../util/selector";
import {
    CHALLENGE_CONTENT,
    CHALLENGE_DISPLAY_BUTTON,
    CHALLENGE_SHUFFLE_BUTTON, CHALLENGE_TRANSLATION,
}
    from "./selectors";

export class Challenge {
    public async Shuffle(): Promise<string> {
        const oldValue = await e2eSelector(CHALLENGE_CONTENT).innerText
        await t.click(e2eSelector(CHALLENGE_SHUFFLE_BUTTON))
        return oldValue
    }

    public async Display_Result(): Promise<void> {
        await t.click(e2eSelector(CHALLENGE_DISPLAY_BUTTON))
    }

    public async Should_change_word(oldValue): Promise<void> {
        const newValue =  t.expect(e2eSelector(CHALLENGE_CONTENT).innerText)
        await t.expect(oldValue).notEql(newValue)
    }

    public async Should_display_translation(TranslationPossibility): Promise<void> {
        t.wait(100000)
        await t.expect(TranslationPossibility).contains(e2eSelector(CHALLENGE_TRANSLATION).innerText)
    }
}