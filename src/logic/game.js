const topRow = boxes => {
  if (
    (boxes[0].props.children === 'X' || boxes[0].props.children === '0') &&
    (boxes[1].props.children === 'X' || boxes[1].props.children === '0') &&
    (boxes[2].props.children === 'X' || boxes[2].props.children === '0')
  ) {
    return true;
  }
};

const midRow = boxes => {
  if (
    (boxes[3].props.children === 'X' || boxes[3].props.children === '0') &&
    (boxes[4].props.children === 'X' || boxes[4].props.children === '0') &&
    (boxes[5].props.children === 'X' || boxes[5].props.children === '0')
  ) {
    return true;
  }
};

const bottomRow = boxes => {
  if (
    (boxes[6].props.children === 'X' || boxes[6].props.children === '0') &&
    (boxes[7].props.children === 'X' || boxes[7].props.children === '0') &&
    (boxes[8].props.children === 'X' || boxes[8].props.children === '0')
  ) {
    return true;
  }
};

const firstColumn = boxes => {
  if (
    (boxes[0].props.children === 'X' || boxes[0].props.children === '0') &&
    (boxes[3].props.children === 'X' || boxes[3].props.children === '0') &&
    (boxes[6].props.children === 'X' || boxes[6].props.children === '0')
  ) {
    return true;
  }
};

export const winCheck = boxes => {
  if (topRow(boxes)) return true;
  if (midRow(boxes)) return true;
  if (bottomRow(boxes)) return true;
  if (firstColumn(boxes)) return true;
};
