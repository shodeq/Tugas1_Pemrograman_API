import { NextRequest } from "next/server";

import * as controllers from "../../../server/controllers/userControllers"

export const GET = async (req: NextRequest) => controllers.GET(req)