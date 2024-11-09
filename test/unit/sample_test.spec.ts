// @vitest-environment nuxt
import { beforeEach, describe, expect, test } from "vitest";
import { consola } from "consola";
import { mountSuspended } from "@nuxt/test-utils/runtime";
// import { MyTestComponent } from "#components";

const testComponentTemplate = "<div>TestComponent</div>";
const TestComponent = defineComponent({
	template: testComponentTemplate,
});

describe("unit sample test", async () => {
	beforeEach(() => {
		consola.restoreConsole();
	});

	test("mount component", async () => {
		const component = await mountSuspended(TestComponent);
		expect(component.html()).toMatchInlineSnapshot(
			`"${testComponentTemplate}"`,
		);
	});
});
