const topRow = boxes => {
  if (
    boxes[0].props.children === 'X' &&
    boxes[1].props.children === 'X' &&
    boxes[2].props.children === 'X'
  ) {
    return true;
  }
};

const midRow = boxes => {
  if (
    boxes[3].props.children === 'X' &&
    boxes[4].props.children === 'X' &&
    boxes[5].props.children === 'X'
  ) {
    return true;
  }
};

const bottomRow = boxes => {
  if (
    boxes[6].props.children === 'X' &&
    boxes[7].props.children === 'X' &&
    boxes[8].props.children === 'X'
  ) {
    return true;
  }
};

export const crossCheck = boxes => {
  if (topRow(boxes)) return true;
  if (midRow(boxes)) return true;
  if (bottomRow(boxes)) return true;
};
