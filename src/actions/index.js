/**
 * This contains the action creators for this application.
 * Action Creators are functions that take parameters and return an action object
 */

/**
 * ClickBanana is called whenever a banana is clicked
 * @param clicks the current click count
 * @returns a BANANA_CLICKED action with 'currentNumberOfClicks' as field.
 */
export function clickBanana(clicks) {
    return {
      type: 'BANANA_CLICKED',
      currentNumberOfClicks: clicks
    };
}