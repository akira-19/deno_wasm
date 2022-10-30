// import { instantiate } from "./lib/rs_lib.generated.js";

// const { add } = await instantiate();

// console.log(add(1, 2));

import { serve } from "https://deno.land/std@0.145.0/http/server.ts";
import { instantiate } from "https://raw.githubusercontent.com/denoland/wasmbuild_example/324635e55fd38d852ef0b0df93354a447aa07c3b/lib/rs_lib.generated.js";

const { add } = await instantiate();

serve((req) => new Response(add(1, 2)));