export function sliderDisplay(sliderValue: number, freezeValue: number) {
  return sliderValue === freezeValue ? 'Frozen' : sliderValue.toFixed(1)
}

