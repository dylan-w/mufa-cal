import { describe, test, expect } from '@jest/globals';
import { fetchTeamPage } from './fetchTeamPage';

describe.skip('fetchTeamPage', () => {
    test('to return a string that is an html MUFA page', async () => {
        const result = await fetchTeamPage()
        expect(result).toContain("<!DOCTYPE html>")
        expect(result).toContain("MUFA")
    });
});