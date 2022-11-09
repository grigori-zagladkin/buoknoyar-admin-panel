import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig(({
//     plugins: [react()],
//     base: "http://localhost:5000",
// }) => {
//     return {

//         define: {

//         }
//     }
// });

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [react()],
        define: {
            // BASE_URL: "http://localhost:5000",
        },
    };
});
