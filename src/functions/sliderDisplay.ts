export function sliderDisplay(sliderValue: number) {
  return sliderValue === 0 ? 'Frozen' : sliderValue.toFixed(1)
}