import { createError, type DirectusErrorConstructor, ErrorCode } from '../index.js';

export interface InvalidPayloadErrorExtensions {
	reason: string;
	field?: string;
}

export const messageConstructor = ({ reason, field }: InvalidPayloadErrorExtensions) => {
	const fieldMessage = field ? ` in field "${field}"` : '';
	return `Invalid payload${fieldMessage}. ${reason}.`;
};

export const InvalidPayloadError: DirectusErrorConstructor<InvalidPayloadErrorExtensions> =
	createError<InvalidPayloadErrorExtensions>(ErrorCode.InvalidPayload, messageConstructor, 400);
