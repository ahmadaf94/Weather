import {expect} from 'detox';
import jestExpect from 'expect';

describe('Search city', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should search and show city temperature forecast', async () => {
    await element(by.id('searchCity')).typeText('London');

    // Tap twice to make sure the button is pressed and disabled after first tap
    await element(by.id('submitButton')).multiTap(2);

    await expect(element(by.id('searchCity'))).toHaveText('');
    await expect(element(by.id('weatherContainer'))).toBeVisible();
    const temperatures = (await element(
      by.id('temperature'),
    ).getAttributes()) as {elements: Array<any>};
    jestExpect(temperatures.elements.length).toBe(5);
  });
});
