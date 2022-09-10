import { rest } from "msw";
import { ARTIFICIAL_DELAY_MS } from "./constants";


export const demoHandler = [
    rest.get('/', (req, res, ctx) => {
        return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json({
            "message": "success"
        }))
    })
]