import {APPLICATION_URL} from "../model";
import {Challenge} from "../model/challenge";
import {Details} from "../model/details";

const details = new Details();
const challenge = new Challenge();

fixture("Detail").page(APPLICATION_URL + "/detail");
test("the user should shuffle the challenge", async (t) => {

    await details.Add_word("cat", "chat")
    await details.Add_word("dog", "chien")
    await details.Add_word("duck", "canard")
    await details.navigate_to(APPLICATION_URL + "/challenge")

    const oldValue = await challenge.Shuffle()
    await challenge.Should_change_word(oldValue)

    await challenge.Display_Result()
    await challenge.Should_display_translation(["chat","chien","canard","cat","dog","duck"])

});



