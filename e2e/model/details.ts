import {t} from "testcafe";
import {e2eSelector} from "../util/selector";
import {DETAIL_ADD_BUTTON, DETAIL_ENGLISH_INPUT, DETAIL_FRENCH_INPUT} from "./selectors";

export class Details {
    public async Add_word(english, french): Promise<void> {
        await t.typeText(e2eSelector(DETAIL_ENGLISH_INPUT), english, {replace: true})
        await t.typeText(e2eSelector(DETAIL_FRENCH_INPUT), french, {replace: true})
        await t.click(e2eSelector(DETAIL_ADD_BUTTON));
    }

    public async navigate_to(url): Promise<void> {
        await t.navigateTo(url)
    }
}