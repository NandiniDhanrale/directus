import { beforeEach, expect, test } from 'vitest';
import type { InvalidPayloadErrorExtensions } from './invalid-payload.js';
import { messageConstructor } from './invalid-payload.js';

let sample: InvalidPayloadErrorExtensions;

beforeEach(() => {
	sample = {
		reason: 'Test payload validation failed',
	};
});

test('Constructs message without field', () => {
	expect(messageConstructor(sample)).toBe(`Invalid payload. ${sample.reason}.`);
});

test('Constructs message with field', () => {
	expect(messageConstructor({ reason: 'Value is invalid', field: 'email' })).toBe(
		`Invalid payload in field "email". Value is invalid.`,
	);
});
