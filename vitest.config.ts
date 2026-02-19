/// <reference types="vitest/config" />

import { playwright } from "@vitest/browser-playwright";
import { getViteConfig } from "astro/config";

export default getViteConfig({
	test: {
		environment: "edge-runtime",
		browser: {
			provider: playwright(),
			enabled: true,
			instances: [{ browser: "chromium" }],
		},
		teardownTimeout: 500,
	},
});
