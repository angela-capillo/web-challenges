import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    render(<Player name="Angela" score="130" onDecreasePlayerScore="" onIncreasePlayerScore="" />)

    const playerName = screen.getByText("Angela");
    const playerScore = screen.getByText("130");

    


    
});

test("calls callbacks when increasing or decreasing score", async () => {});
