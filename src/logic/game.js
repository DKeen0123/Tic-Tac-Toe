const topRow = boxes => {
  if (
    boxes[0].props.children === 'X' &&
    boxes[1].props.children === 'X' &&
    boxes[2].props.children === 'X'
  ) {
    return true;
  }

  if (
    boxes[0].props.children === '0' &&
    boxes[1].props.children === '0' &&
    boxes[2].props.children === '0'
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

  if (
    boxes[3].props.children === '0' &&
    boxes[4].props.children === '0' &&
    boxes[5].props.children === '0'
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

  if (
    boxes[6].props.children === '0' &&
    boxes[7].props.children === '0' &&
    boxes[8].props.children === '0'
  ) {
    return true;
  }
};

const checkRows = boxes => {
  if (topRow(boxes)) return true;
  if (midRow(boxes)) return true;
  if (bottomRow(boxes)) return true;
};

const firstColumn = boxes => {
  if (
    boxes[0].props.children === 'X' &&
    boxes[3].props.children === 'X' &&
    boxes[6].props.children === 'X'
  ) {
    return true;
  }

  if (
    boxes[0].props.children === '0' &&
    boxes[3].props.children === '0' &&
    boxes[6].props.children === '0'
  ) {
    return true;
  }
};

const middleColumn = boxes => {
  if (
    boxes[1].props.children === 'X' &&
    boxes[4].props.children === 'X' &&
    boxes[7].props.children === 'X'
  ) {
    return true;
  }

  if (
    boxes[1].props.children === '0' &&
    boxes[4].props.children === '0' &&
    boxes[7].props.children === '0'
  ) {
    return true;
  }
};

const endColumn = boxes => {
  if (
    boxes[2].props.children === 'X' &&
    boxes[5].props.children === 'X' &&
    boxes[8].props.children === 'X'
  ) {
    return true;
  }

  if (
    boxes[2].props.children === '0' &&
    boxes[5].props.children === '0' &&
    boxes[8].props.children === '0'
  ) {
    return true;
  }
};

const checkColumns = boxes => {
  if (firstColumn(boxes)) return true;
  if (middleColumn(boxes)) return true;
  if (endColumn(boxes)) return true;
};

const leftDiagnonal = boxes => {
  if (
    boxes[0].props.children === 'X' &&
    boxes[4].props.children === 'X' &&
    boxes[8].props.children === 'X'
  ) {
    return true;
  }

  if (
    boxes[0].props.children === '0' &&
    boxes[4].props.children === '0' &&
    boxes[8].props.children === '0'
  ) {
    return true;
  }
};

const rightDiagnonal = boxes => {
  if (
    boxes[2].props.children === 'X' &&
    boxes[4].props.children === 'X' &&
    boxes[6].props.children === 'X'
  ) {
    return true;
  }

  if (
    boxes[2].props.children === '0' &&
    boxes[4].props.children === '0' &&
    boxes[6].props.children === '0'
  ) {
    return true;
  }
};

const checkDiagonals = boxes => {
  if (leftDiagnonal(boxes)) return true;
  if (rightDiagnonal(boxes)) return true;
};

export const winCheck = boxes => {
  if (checkRows(boxes)) return true;
  if (checkColumns(boxes)) return true;
  if (checkDiagonals(boxes)) return true;
};
